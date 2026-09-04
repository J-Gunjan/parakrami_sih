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
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ProductRepository } from '../../repositories/ProductRepository';
import { DeclarationFields } from '@nyayalabel/shared';

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
    consumerCare: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const updateField = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
    setErrors({ ...errors, [key]: '' });
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
        consumerCare: form.consumerCare,
      };

      await ProductRepository.create(inspectionId, declarationFields, scannedBarcode);
      
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

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Product Name *</Text>
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
          <Text style={styles.label}>Manufacturer *</Text>
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

        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
            <Text style={styles.label}>MRP (₹) *</Text>
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
            <Text style={styles.label}>Net Quantity</Text>
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
            <Text style={styles.label}>Mfg. Date *</Text>
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
            <Text style={styles.label}>Expiry / Best Before</Text>
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
  inputGroup: { gap: 6 },
  row: { flexDirection: 'row' },
  label: { color: '#cbd5e1', fontSize: 13, fontWeight: '500' },
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
