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
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import { database } from '../../database';
import Inspection from '../../database/models/Inspection';
import Product from '../../database/models/Product';
import { ProductRepository } from '../../repositories/ProductRepository';

export default function InspectionSummaryScreen({ route, navigation }: any) {
  const { inspectionId } = route.params;

  const [inspection, setInspection] = useState<Inspection | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const fetchDetails = async () => {
        try {
          const ins = await database.get<Inspection>('inspections').find(inspectionId);
          const prods = await ProductRepository.listForInspection(inspectionId);
          if (isActive) {
            setInspection(ins);
            setProducts(prods);
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
          </View>
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

      </ScrollView>
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
});
