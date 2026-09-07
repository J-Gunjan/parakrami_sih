import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  TextInput
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import { database } from '../../database';
import Inspection from '../../database/models/Inspection';
import Product from '../../database/models/Product';
import Violation from '../../database/models/Violation';
import CapturedImage from '../../database/models/CapturedImage';
import { ProductRepository } from '../../repositories/ProductRepository';

export default function InspectionSummaryScreen({ route, navigation }: any) {
  const { inspectionId } = route.params;

  const [inspection, setInspection] = useState<Inspection | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [violations, setViolations] = useState<Violation[]>([]);
  const [images, setImages] = useState<CapturedImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedViolation, setSelectedViolation] = useState<Violation | null>(null);
  const [inspectorNote, setInspectorNote] = useState('');

  const getOverallOutcomeText = (status: string) => {
    if (status === 'PASS') return 'COMPLIANT';
    if (status === 'REVIEW') return 'REQUIRES MANUAL REVIEW';
    if (status === 'FAIL') return 'POTENTIAL NON-COMPLIANCE';
    return status;
  };

  const handleOverride = async (newStatus: string) => {
    if (!selectedViolation) return;
    try {
      await database.write(async () => {
        await selectedViolation.update(v => {
          v.status = newStatus;
          v.inspectorVerified = true;
          v.inspectorNote = inspectorNote;
        });
      });
      const viols = await database.get<Violation>('violations').query().fetch();
      const insViols = viols.filter(v => v.inspectionId === inspectionId);
      setViolations(insViols);
      setSelectedViolation(null);
    } catch (e) {
      console.error('Failed to override', e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const fetchDetails = async () => {
        try {
          // Trigger a sync if online
          const { syncManager } = require('../../services/SyncManager');
          const syncResult = await syncManager.syncPendingInspections();
          
          if (syncResult.success > 0) {
            console.log(`[SYNC] Refreshing UI after successful sync`);
          }

          const ins = await database.get<Inspection>('inspections').find(inspectionId);
          const prods = await ProductRepository.listForInspection(inspectionId);
          const viols = await database.get<Violation>('violations').query().fetch();
          const insViols = viols.filter(v => v.inspectionId === inspectionId);
          const imgs = await ins.capturedImages.fetch();

          if (isActive) {
            setInspection(ins);
            setProducts(prods);
            setViolations(insViols);
            setImages(imgs);
            setLoading(false);
          }
        } catch (e) {
          console.error(e);
          if (isActive) setLoading(false);
        }
      };

      fetchDetails();

      return () => { isActive = false; };
    }, [inspectionId])
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#38bdf8" />
      </View>
    );
  }

  if (!inspection) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <Text style={styles.errorText}>Inspection not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const renderProduct = ({ item }: { item: Product }) => {
    let fields: any = {};
    try {
      fields = JSON.parse(item.declarationFields || '{}');
    } catch(e) {}
    
    return (
      <View style={styles.productCard}>
        <Text style={styles.productName}>{fields.productName || 'Unknown Product'}</Text>
        <Text style={styles.productDetails}>MRP: {fields.mrp ? `₹${fields.mrp}` : 'N/A'}</Text>
        <Text style={styles.productDetails}>Brand/Mfg: {fields.manufacturer || 'N/A'}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Inspection Summary</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SHOP DETAILS</Text>
          <View style={styles.card}>
            <Text style={styles.shopName}>{inspection.shopName}</Text>
            <Text style={styles.address}>{inspection.address}</Text>
            <Text style={styles.address}>{inspection.market}, {inspection.district}</Text>
            <Text style={styles.address}>Checked on: {new Date(inspection.createdAt).toLocaleString()}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PICTURES CAPTURED</Text>
          {images.length === 0 ? (
            <Text style={styles.emptyText}>No pictures captured.</Text>
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
              {images.map(img => (
                <View key={img.id} style={styles.imageWrapper}>
                  <Image source={{ uri: img.localFilePath }} style={styles.capturedImage} />
                  <Text style={styles.imageTypeText}>{img.imageType.toUpperCase()}</Text>
                </View>
              ))}
            </ScrollView>
          )}
        </View>

        <View style={styles.section}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>PRODUCTS EXAMINED</Text>
            <TouchableOpacity 
              style={styles.addBtn}
              onPress={() => navigation.navigate('CameraCapture', { inspectionId: inspection.id })}
            >
              <Text style={styles.addBtnText}>+ Add Product</Text>
            </TouchableOpacity>
          </View>

          {products.length === 0 ? (
            <Text style={styles.emptyText}>No products recorded yet.</Text>
          ) : (
            <FlatList
              data={products}
              keyExtractor={(item) => item.id}
              renderItem={renderProduct}
              scrollEnabled={false}
              contentContainerStyle={{ gap: 12 }}
            />
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>COMPLIANCE RESULTS</Text>
          
          {inspection.apiSyncStatus !== 'synced' ? (
             <View style={styles.card}>
               <Text style={styles.warningText}>Offline Mode: Rules are evaluated on the backend. Please sync this inspection to view compliance results.</Text>
             </View>
          ) : !inspection.complianceStatus ? (
             <Text style={styles.emptyText}>Evaluation failed or no rules matched.</Text>
          ) : (
             <>
               <View style={[styles.card, { marginBottom: 16 }]}>
                 <Text style={[styles.statusBadge, 
                   inspection.complianceStatus === 'FAIL' ? styles.bgFail : 
                   inspection.complianceStatus === 'PASS' ? styles.bgPass : styles.bgReview,
                   { fontSize: 16, textAlign: 'center' }
                 ]}>
                   OVERALL STATUS: {getOverallOutcomeText(inspection.complianceStatus)}
                 </Text>
               </View>
               <FlatList
               data={violations}
               keyExtractor={(item) => item.id}
               scrollEnabled={false}
               contentContainerStyle={{ gap: 12 }}
               renderItem={({ item }) => (
                 <TouchableOpacity 
                   activeOpacity={0.8}
                   onPress={() => {
                     setSelectedViolation(item);
                     setInspectorNote(item.inspectorNote || '');
                   }}
                   style={[styles.violationCard, item.status === 'FAIL' ? styles.borderFail : item.status === 'PASS' ? styles.borderPass : styles.borderReview]}
                 >
                   
                   {inspection.apiSyncStatus !== 'synced' && (
                     <View style={styles.offlineBanner}>
                        <Text style={styles.offlineText}>⚠️ Will re-check on sync</Text>
                     </View>
                   )}

                   {item.verificationStatus === 'UNVERIFIED' && (
                     <View style={styles.unverifiedBanner}>
                       <Text style={styles.unverifiedText}>⚠️ LEGAL RULE — SOURCE VERIFICATION REQUIRED</Text>
                     </View>
                   )}
                   
                   <View style={styles.rowBetween}>
                     <Text style={styles.ruleCode}>{item.ruleCode}</Text>
                     <Text style={[styles.statusBadge, item.status === 'FAIL' ? styles.bgFail : item.status === 'PASS' ? styles.bgPass : styles.bgReview]}>
                       {item.status}
                     </Text>
                   </View>

                   <Text style={styles.reason}>{item.reason}</Text>

                   <View style={styles.traceabilityBox}>
                     <Text style={styles.traceabilityLabel}>Legal Source Traceability:</Text>
                     <Text style={styles.traceabilityText}>Act: {item.sourceAct}</Text>
                     <Text style={styles.traceabilityText}>Rule: {item.sourceRule}</Text>
                     {item.sourceNotification ? <Text style={styles.traceabilityText}>Notification: {item.sourceNotification}</Text> : null}
                     <Text style={styles.traceabilityText}>Version: {item.ruleVersion}</Text>
                   </View>

                   <Text style={styles.detailText}>Observed: {item.observedValue}</Text>
                   <Text style={styles.detailText}>Required: {item.expectedValue}</Text>
                   <Text style={styles.detailText}>Severity: {item.severity}</Text>
                 </TouchableOpacity>
               )}
               />
             </>
          )}
        </View>

      </ScrollView>

      <Modal visible={!!selectedViolation} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.rowBetween}>
              <Text style={styles.modalTitle}>Review Finding</Text>
              <TouchableOpacity onPress={() => setSelectedViolation(null)}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
            
            {selectedViolation && (
              <ScrollView style={{ marginTop: 16 }}>
                <Text style={styles.ruleCode}>{selectedViolation.ruleCode}</Text>
                
                {selectedViolation.aiExplanation ? (
                  <View style={styles.explanationBox}>
                    <Text style={styles.explanationTitle}>AI Explanation</Text>
                    <Text style={styles.explanationText}>{selectedViolation.aiExplanation}</Text>
                  </View>
                ) : null}

                {selectedViolation.evidenceImagePath ? (
                  <View style={styles.evidenceContainer}>
                     <Image source={{ uri: selectedViolation.evidenceImagePath }} style={styles.evidenceImage} />
                     {selectedViolation.evidenceRegion ? (
                       <View style={styles.evidenceRegionBox} />
                     ) : null}
                  </View>
                ) : null}

                <Text style={styles.label}>Inspector Note:</Text>
                <TextInput 
                  style={styles.input}
                  value={inspectorNote}
                  onChangeText={setInspectorNote}
                  placeholder="Add your note here..."
                  placeholderTextColor="#64748b"
                  multiline
                />

                <View style={styles.actionButtons}>
                  <TouchableOpacity style={[styles.btn, styles.bgPass]} onPress={() => handleOverride('PASS')}>
                    <Text style={[styles.btnText, { color: '#10b981' }]}>Confirm PASS</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.btn, styles.bgFail]} onPress={() => handleOverride('FAIL')}>
                    <Text style={[styles.btnText, { color: '#ef4444' }]}>Override to FAIL</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#020617' },
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
  errorText: { color: '#ef4444', fontSize: 16 },
  content: { padding: 16, gap: 24 },
  section: { gap: 12 },
  sectionTitle: { color: '#38bdf8', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  addBtn: { backgroundColor: 'rgba(56, 189, 248, 0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, borderWidth: 1, borderColor: 'rgba(56, 189, 248, 0.3)' },
  addBtnText: { color: '#38bdf8', fontSize: 13, fontWeight: '600' },
  card: { backgroundColor: '#0f172a', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#1e293b' },
  shopName: { color: '#f8fafc', fontSize: 18, fontWeight: '700', marginBottom: 4 },
  address: { color: '#94a3b8', fontSize: 14, marginBottom: 2 },
  productCard: { backgroundColor: '#1e293b', borderRadius: 8, padding: 12 },
  productName: { color: '#f8fafc', fontSize: 15, fontWeight: '600', marginBottom: 4 },
  productDetails: { color: '#94a3b8', fontSize: 13 },
  emptyText: { color: '#64748b', fontStyle: 'italic' },
  warningText: { color: '#f59e0b', fontSize: 14, textAlign: 'center' },
  violationCard: { backgroundColor: '#0f172a', borderRadius: 8, padding: 12, borderWidth: 1 },
  borderPass: { borderColor: '#10b981' },
  borderFail: { borderColor: '#ef4444' },
  borderReview: { borderColor: '#f59e0b' },
  bgPass: { backgroundColor: 'rgba(16, 185, 129, 0.2)', color: '#10b981' },
  bgFail: { backgroundColor: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' },
  bgReview: { backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, fontSize: 12, fontWeight: 'bold', overflow: 'hidden' },
  ruleCode: { color: '#f8fafc', fontSize: 15, fontWeight: '700' },
  reason: { color: '#cbd5e1', fontSize: 14, marginVertical: 8 },
  traceabilityBox: { backgroundColor: '#1e293b', padding: 8, borderRadius: 6, marginBottom: 8 },
  traceabilityLabel: { color: '#94a3b8', fontSize: 11, fontWeight: 'bold', marginBottom: 4, textTransform: 'uppercase' },
  traceabilityText: { color: '#cbd5e1', fontSize: 12, fontFamily: 'monospace' },
  detailText: { color: '#94a3b8', fontSize: 13 },
  unverifiedBanner: { backgroundColor: '#7f1d1d', padding: 6, borderRadius: 4, marginBottom: 8 },
  unverifiedText: { color: '#fca5a5', fontSize: 11, fontWeight: 'bold', textAlign: 'center' },
  imageWrapper: { position: 'relative', borderRadius: 8, overflow: 'hidden', borderWidth: 1, borderColor: '#1e293b' },
  capturedImage: { width: 120, height: 160, resizeMode: 'cover' },
  imageTypeText: { position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.6)', color: '#fff', fontSize: 10, textAlign: 'center', paddingVertical: 4, fontWeight: 'bold' },
  offlineBanner: { backgroundColor: '#b45309', padding: 4, borderRadius: 4, marginBottom: 8 },
  offlineText: { color: '#fef3c7', fontSize: 11, fontWeight: 'bold', textAlign: 'center' },
  modalContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#0f172a', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 20, maxHeight: '80%' },
  modalTitle: { color: '#f8fafc', fontSize: 18, fontWeight: 'bold' },
  closeText: { color: '#94a3b8', fontSize: 14 },
  explanationBox: { backgroundColor: '#1e293b', padding: 12, borderRadius: 8, marginVertical: 12 },
  explanationTitle: { color: '#38bdf8', fontSize: 12, fontWeight: 'bold', marginBottom: 4, textTransform: 'uppercase' },
  explanationText: { color: '#e2e8f0', fontSize: 14, lineHeight: 20 },
  evidenceContainer: { marginTop: 8, marginBottom: 16, alignItems: 'center', backgroundColor: '#000', borderRadius: 8, overflow: 'hidden' },
  evidenceImage: { width: '100%', height: 200, resizeMode: 'contain' },
  evidenceRegionBox: { position: 'absolute', top: '10%', left: '10%', width: '80%', height: '25%', borderWidth: 2, borderColor: '#ef4444' },
  label: { color: '#94a3b8', fontSize: 12, fontWeight: 'bold', marginBottom: 8 },
  input: { backgroundColor: '#1e293b', color: '#f8fafc', padding: 12, borderRadius: 8, minHeight: 80, textAlignVertical: 'top', marginBottom: 16 },
  actionButtons: { flexDirection: 'row', gap: 12 },
  btn: { flex: 1, padding: 12, borderRadius: 8, alignItems: 'center' },
  btnText: { fontWeight: 'bold', fontSize: 14 }
});
