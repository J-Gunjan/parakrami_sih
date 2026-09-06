import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ProductRepository } from '../../repositories/ProductRepository';
import { ImageRepository } from '../../repositories/ImageRepository';
import { DeclarationFields } from '@nyayalabel/shared';
import { ocrService } from '../../services/OCRService';
import { SemanticMappingService } from '../../services/SemanticMappingService';
import NetInfo from '@react-native-community/netinfo';
import { database } from '../../database';
import SyncQueueItem from '../../database/models/SyncQueueItem';
import { getBackendUrl } from '../../utils/api';

export default function ProductDetailsScreen({ route, navigation }: any) {
  const { inspectionId, scannedBarcode } = route.params || {};

  const [form, setForm] = useState({
    productName: '',
    manufacturer: '',
    packer: '',
    importer: '',
    countryOfOrigin: 'India',
    netQuantity: '',
    mrp: '',
    unitSalePrice: '',
    manufacturingDate: '',
    expiryOrBestBefore: '',
    lotBatch: '',
    consumerCare: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [isExtracting, setIsExtracting] = useState(false);
  const [aiSuggestedFields, setAiSuggestedFields] = useState<Set<string>>(new Set());
  const [residualBlocks, setResidualBlocks] = useState<any[]>([]);

  React.useEffect(() => {
    const runOCR = async () => {
      try {
        setIsExtracting(true);
        // Get the latest label image
        const images = await ImageRepository.listForInspection(inspectionId);
        const labelImage = images.reverse().find(img => img.imageType === 'mrp' || img.imageType === 'back');
        
        if (!labelImage) return;

        const result = await ocrService.extractText(labelImage.localFilePath);
        const mappingService = new SemanticMappingService();
        const { mappedFields, residualBlocks: residuals } = mappingService.mapFields(result.blocks, result.geminiFields);

        setResidualBlocks(residuals);

        const newForm = { ...form };
        const suggested = new Set<string>();

        if (mappedFields.productName?.value) { newForm.productName = mappedFields.productName.value; suggested.add('productName'); }
        if (mappedFields.manufacturerName?.value) { newForm.manufacturer = mappedFields.manufacturerName.value; suggested.add('manufacturer'); }
        if (mappedFields.countryOfOrigin?.value) { newForm.countryOfOrigin = mappedFields.countryOfOrigin.value; suggested.add('countryOfOrigin'); }
        if (mappedFields.netQuantity?.value) { newForm.netQuantity = mappedFields.netQuantity.value; suggested.add('netQuantity'); }
        if (mappedFields.mrp?.value) { newForm.mrp = mappedFields.mrp.value; suggested.add('mrp'); }
        if (mappedFields.mfgDate?.value) { newForm.manufacturingDate = mappedFields.mfgDate.value; suggested.add('manufacturingDate'); }
        if (mappedFields.expDate?.value) { newForm.expiryOrBestBefore = mappedFields.expDate.value; suggested.add('expiryOrBestBefore'); }
        if (mappedFields.lotBatch?.value) { newForm.lotBatch = mappedFields.lotBatch.value; suggested.add('lotBatch'); }

        setForm(newForm);
        setAiSuggestedFields(suggested);

        // If online and residuals exist, we could enrich here immediately.
        // For simplicity and resilience, we'll handle enrichment during the Save step.
      } catch (error) {
        console.error("OCR Extraction failed", error);
      } finally {
        setIsExtracting(false);
      }
    };

    if (inspectionId) {
      runOCR();
    }
  }, [inspectionId]);

  const updateField = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
    setErrors({ ...errors, [key]: '' });
    
    // Remove AI suggestion badge if user edits it
    if (aiSuggestedFields.has(key)) {
      const newSuggested = new Set(aiSuggestedFields);
      newSuggested.delete(key);
      setAiSuggestedFields(newSuggested);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.productName.trim()) newErrors.productName = 'Product Name is required';
    if (!form.manufacturer.trim()) newErrors.manufacturer = 'Manufacturer is required';
    if (!form.mrp.trim()) {
      newErrors.mrp = 'MRP is required';
    } else if (isNaN(Number(form.mrp))) {
      newErrors.mrp = 'MRP must be a valid number';
    }

    // Basic date validation YYYY-MM-DD or MM/YYYY (we'll just check if it's not empty for now, and add specific formatting)
    if (!form.manufacturingDate.trim()) {
      newErrors.manufacturingDate = 'Manufacturing Date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    setSaving(true);
    try {
      // Cast the string fields into DeclarationFields format.
      // In Phase 5, these will be populated as complex objects from OCR.
      // For now, simple text input strings are saved directly or mapped.
      const declarationFields = {
        productName: form.productName,
        manufacturer: form.manufacturer,
        packer: form.packer,
        importer: form.importer,
        countryOfOrigin: form.countryOfOrigin,
        netQuantity: form.netQuantity,
        mrp: form.mrp,
        unitSalePrice: form.unitSalePrice,
        manufacturingDate: form.manufacturingDate,
        expiryOrBestBefore: form.expiryOrBestBefore,
        lotBatch: form.lotBatch,
        consumerCare: form.consumerCare,
      };

      // Enrich if online, else queue
      let finalFields: any = { ...declarationFields };
      if (residualBlocks.length > 0) {
        const netInfo = await NetInfo.fetch();
        if (netInfo.isConnected && netInfo.isInternetReachable !== false) {
          try {
            const enrichUrl = `${getBackendUrl()}/api/ocr/enrich`;

            const response = await fetch(enrichUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ residualBlocks })
            });
            if (response.ok) {
              const data = await response.json();
              if (data.enrichedFields) {
                // Merge enriched fields (simplified for mock)
                if (data.enrichedFields.manufacturerName && !finalFields.manufacturer) {
                  finalFields.manufacturer = data.enrichedFields.manufacturerName;
                }
              }
            }
          } catch (e) {
            console.error("Immediate LLM enrichment failed, falling back to queue", e);
            finalFields._pendingEnrichment = residualBlocks;
          }
        } else {
          // Offline queue
          finalFields._pendingEnrichment = residualBlocks;
        }
      }

      const product = await ProductRepository.create(inspectionId, finalFields, scannedBarcode);
      
      // Queue background job if needed
      if (finalFields._pendingEnrichment) {
        await database.write(async () => {
          await database.get<SyncQueueItem>('sync_queue_items').create((item: any) => {
            item.entityType = 'product';
            item.entityId = product.id;
            item.action = 'ENRICH_PRODUCT';
            item.attempts = 0;
          });
        });
      }

      Alert.alert('Success', 'Product saved locally.', [
        { text: 'OK', onPress: () => navigation.navigate('Home') }
      ]);
    } catch (e) {
      console.error('Failed to create product', e);
      Alert.alert('Error', 'Failed to save product locally.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Product Details</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Enter the details as seen on the packaged commodity.
          </Text>
        </View>

        {isExtracting && (
          <View style={styles.extractingBanner}>
            <ActivityIndicator color="#38bdf8" size="small" style={{ marginRight: 8 }} />
            <Text style={styles.extractingText}>AI is scanning label text...</Text>
          </View>
        )}

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Product Name *</Text>
            {aiSuggestedFields.has('productName') && <Text style={styles.aiBadge}>✨ AI Suggested</Text>}
          </View>
          <TextInput
            style={[styles.input, errors.productName ? styles.inputError : null]}
            placeholder="e.g. Bisleri Water 1L"
            placeholderTextColor="#64748b"
            value={form.productName}
            onChangeText={(t) => updateField('productName', t)}
          />
          {errors.productName && <Text style={styles.errorText}>{errors.productName}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Manufacturer *</Text>
            {aiSuggestedFields.has('manufacturer') && <Text style={styles.aiBadge}>✨ AI Suggested</Text>}
          </View>
          <TextInput
            style={[styles.input, errors.manufacturer ? styles.inputError : null]}
            placeholder="Manufacturer Name & Address"
            placeholderTextColor="#64748b"
            value={form.manufacturer}
            onChangeText={(t) => updateField('manufacturer', t)}
          />
          {errors.manufacturer && <Text style={styles.errorText}>{errors.manufacturer}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Packer</Text>
          <TextInput
            style={styles.input}
            placeholder="Packer Name & Address"
            placeholderTextColor="#64748b"
            value={form.packer}
            onChangeText={(t) => updateField('packer', t)}
          />
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Country of Origin</Text>
            {aiSuggestedFields.has('countryOfOrigin') && <Text style={styles.aiBadge}>✨ AI</Text>}
          </View>
          <TextInput
            style={styles.input}
            placeholder="e.g. India"
            placeholderTextColor="#64748b"
            value={form.countryOfOrigin}
            onChangeText={(t) => updateField('countryOfOrigin', t)}
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>MRP (₹) *</Text>
              {aiSuggestedFields.has('mrp') && <Text style={styles.aiBadge}>✨ AI</Text>}
            </View>
            <TextInput
              style={[styles.input, errors.mrp ? styles.inputError : null]}
              placeholder="e.g. 150.00"
              placeholderTextColor="#64748b"
              keyboardType="numeric"
              value={form.mrp}
              onChangeText={(t) => updateField('mrp', t)}
            />
            {errors.mrp && <Text style={styles.errorText}>{errors.mrp}</Text>}
          </View>
          <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Net Quantity</Text>
              {aiSuggestedFields.has('netQuantity') && <Text style={styles.aiBadge}>✨ AI</Text>}
            </View>
            <TextInput
              style={styles.input}
              placeholder="e.g. 500g, 1L"
              placeholderTextColor="#64748b"
              value={form.netQuantity}
              onChangeText={(t) => updateField('netQuantity', t)}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Mfg. Date *</Text>
              {aiSuggestedFields.has('manufacturingDate') && <Text style={styles.aiBadge}>✨ AI</Text>}
            </View>
            <TextInput
              style={[styles.input, errors.manufacturingDate ? styles.inputError : null]}
              placeholder="MM/YYYY or DD/MM/YYYY"
              placeholderTextColor="#64748b"
              value={form.manufacturingDate}
              onChangeText={(t) => updateField('manufacturingDate', t)}
            />
            {errors.manufacturingDate && <Text style={styles.errorText}>{errors.manufacturingDate}</Text>}
          </View>
          <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Expiry / Best Before</Text>
              {aiSuggestedFields.has('expiryOrBestBefore') && <Text style={styles.aiBadge}>✨ AI</Text>}
            </View>
            <TextInput
              style={styles.input}
              placeholder="MM/YYYY or months"
              placeholderTextColor="#64748b"
              value={form.expiryOrBestBefore}
              onChangeText={(t) => updateField('expiryOrBestBefore', t)}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.labelRow}>
            <Text style={styles.label}>Lot / Batch Number</Text>
            {aiSuggestedFields.has('lotBatch') && <Text style={styles.aiBadge}>✨ AI</Text>}
          </View>
          <TextInput
            style={styles.input}
            placeholder="e.g. A0626C4"
            placeholderTextColor="#64748b"
            value={form.lotBatch}
            onChangeText={(t) => updateField('lotBatch', t)}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Consumer Care Details</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Phone, email, or address"
            placeholderTextColor="#64748b"
            multiline
            textAlignVertical="top"
            value={form.consumerCare}
            onChangeText={(t) => updateField('consumerCare', t)}
          />
        </View>

        <TouchableOpacity 
          style={styles.saveBtn} 
          activeOpacity={0.8}
          onPress={handleSave}
          disabled={saving}
        >
          {saving ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.saveBtnText}>Save Product & Finish</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  backBtn: { padding: 8, width: 60 },
  backText: { color: '#94a3b8', fontSize: 14 },
  headerTitle: { color: '#f8fafc', fontSize: 18, fontWeight: '600' },
  content: { padding: 16, gap: 16 },
  infoBox: {
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(56, 189, 248, 0.2)',
  },
  infoText: { color: '#7dd3fc', fontSize: 13 },
  extractingBanner: { flexDirection: 'row', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: 12, borderRadius: 8, alignItems: 'center' },
  extractingText: { color: '#38bdf8', fontSize: 13, fontWeight: '600' },
  inputGroup: { gap: 6 },
  row: { flexDirection: 'row' },
  labelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { color: '#cbd5e1', fontSize: 13, fontWeight: '500' },
  aiBadge: { color: '#34d399', fontSize: 11, fontWeight: '600', backgroundColor: 'rgba(52, 211, 153, 0.15)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  input: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 8,
    padding: 12,
    color: '#f8fafc',
    fontSize: 15,
  },
  inputError: { borderColor: '#ef4444' },
  errorText: { color: '#ef4444', fontSize: 12 },
  saveBtn: { backgroundColor: '#10b981', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginTop: 12, marginBottom: 24 },
  saveBtnText: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
});
