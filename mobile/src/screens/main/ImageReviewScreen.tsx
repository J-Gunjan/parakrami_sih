import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import { ImageRepository } from '../../repositories/ImageRepository';
import CapturedImage from '../../database/models/CapturedImage';

export default function ImageReviewScreen({ route, navigation }: any) {
  const { inspectionId, scannedBarcode } = route.params;
  
  const [images, setImages] = useState<CapturedImage[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const fetchImages = async () => {
        try {
          const list = await ImageRepository.listForInspection(inspectionId);
          if (isActive) {
            setImages(list);
            setLoading(false);
          }
        } catch (e) {
          console.error(e);
          if (isActive) setLoading(false);
        }
      };
      
      fetchImages();
      
      return () => { isActive = false; };
    }, [inspectionId])
  );

  const handleRetake = async (imageType: string, imageId: string) => {
    // Delete the old one
    try {
      await ImageRepository.delete(imageId);
    } catch (e) {
      console.error('Failed to delete old image before retake', e);
    }
    // Navigate back to camera specifically for this type
    navigation.navigate('CameraCapture', { inspectionId, retakeType: imageType, scannedBarcode });
  };

  const handleProceed = () => {
    navigation.navigate('ProductDetails', { inspectionId, scannedBarcode });
  };

  const renderImageSlot = (type: string, label: string) => {
    // Find the latest image of this type (since we might have retaken)
    const imgs = images.filter(i => i.imageType === type);
    const img = imgs.length > 0 ? imgs[imgs.length - 1] : null;

    return (
      <View style={styles.gridItem} key={type}>
        <Text style={styles.itemLabel}>{label}</Text>
        {img ? (
          <>
            <Image source={{ uri: img.localFilePath }} style={styles.image} />
            <TouchableOpacity style={styles.retakeBtn} onPress={() => handleRetake(type, img.id)}>
              <Text style={styles.retakeText}>Retake</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>Missing</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Review Captures</Text>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#38bdf8" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.grid}>
            {renderImageSlot('front', 'Front Label')}
            {renderImageSlot('back', 'Back Label')}
            {renderImageSlot('side', 'Side (Optional)')}
            {renderImageSlot('mrp', 'MRP / Declaration')}
          </View>

          <TouchableOpacity style={styles.proceedBtn} onPress={handleProceed}>
            <Text style={styles.proceedText}>Proceed to Product Details</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#020617' },
  header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#1e293b', alignItems: 'center' },
  headerTitle: { color: '#f8fafc', fontSize: 18, fontWeight: '700' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  content: { padding: 16, paddingBottom: 40 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16 },
  gridItem: { width: '47%', backgroundColor: '#0f172a', borderRadius: 12, padding: 8, borderWidth: 1, borderColor: '#1e293b' },
  itemLabel: { color: '#94a3b8', fontSize: 13, fontWeight: '600', marginBottom: 8, textAlign: 'center' },
  image: { width: '100%', aspectRatio: 3/4, borderRadius: 8, backgroundColor: '#000' },
  placeholder: { width: '100%', aspectRatio: 3/4, borderRadius: 8, backgroundColor: '#1e293b', justifyContent: 'center', alignItems: 'center' },
  placeholderText: { color: '#64748b' },
  retakeBtn: { marginTop: 8, backgroundColor: 'rgba(56, 189, 248, 0.1)', paddingVertical: 8, borderRadius: 6, borderWidth: 1, borderColor: 'rgba(56, 189, 248, 0.3)', alignItems: 'center' },
  retakeText: { color: '#38bdf8', fontSize: 13, fontWeight: '600' },
  proceedBtn: { marginTop: 32, backgroundColor: '#0284c7', paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  proceedText: { color: '#fff', fontSize: 16, fontWeight: '700' },
});
