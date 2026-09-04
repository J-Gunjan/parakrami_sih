import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { QualityCheckService } from '../../services/QualityCheckService';
import { ImageRepository } from '../../repositories/ImageRepository';
import { StatusBar } from 'expo-status-bar';

type CaptureType = 'front' | 'back' | 'side' | 'mrp';

const SEQUENCE: CaptureType[] = ['front', 'back', 'side', 'mrp'];

const CAPTURE_LABELS: Record<CaptureType, string> = {
  front: 'Front Label',
  back: 'Back Label',
  side: 'Side (Optional)',
  mrp: 'MRP / Declaration',
};

export default function CameraCaptureScreen({ route, navigation }: any) {
  const { inspectionId, retakeType } = route.params || {};

  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);

  // If retakeType is passed, we only capture that one type. Otherwise follow sequence.
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTargetType: CaptureType = retakeType || SEQUENCE[currentIndex];
  
  const [capturedImages, setCapturedImages] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [failureOverlay, setFailureOverlay] = useState<{ reason: string; uri: string } | null>(null);
  
  const [scannedBarcode, setScannedBarcode] = useState<string | null>(null);

  useEffect(() => {
    if (permission && !permission.granted && permission.canAskAgain) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  if (!permission) {
    return <View style={styles.container}><ActivityIndicator color="#38bdf8" /></View>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>We need your permission to show the camera</Text>
        <TouchableOpacity style={styles.btn} onPress={requestPermission}>
          <Text style={styles.btnText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleBarcodeScanned = (result: any) => {
    if (!scannedBarcode && result.data) {
      setScannedBarcode(result.data);
      Alert.alert('Barcode Scanned', `Detected: ${result.data}`, [{ text: 'OK' }]);
    }
  };

  const handleCapture = async () => {
    if (!cameraRef.current || isProcessing) return;

    setIsProcessing(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.8,
        base64: false,
      });
      
      if (!photo) throw new Error('Failed to capture');

      // Run on-device quality check
      const quality = await QualityCheckService.analyzeImage(photo.uri);

      if (!quality.passed) {
        setFailureOverlay({ reason: quality.reason || 'Poor Quality', uri: photo.uri });
        setIsProcessing(false);
        return;
      }

      // Save to local storage & repository
      await ImageRepository.create({
        inspectionId,
        tempUri: photo.uri,
        imageType: currentTargetType,
        qualityScore: quality.score,
      });

      // Update thumbnails
      setCapturedImages(prev => ({ ...prev, [currentTargetType]: photo.uri }));

      if (retakeType) {
        // Just returning from a retake, go back to Review
        navigation.goBack();
      } else {
        // Move to next in sequence
        if (currentIndex < SEQUENCE.length - 1) {
          setCurrentIndex(prev => prev + 1);
        } else {
          // Finished sequence
          navigation.navigate('ImageReview', { inspectionId, scannedBarcode });
        }
      }
    } catch (e) {
      console.error(e);
      Alert.alert('Error', 'Camera capture failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const skipOptional = () => {
    if (currentTargetType === 'side') {
      if (currentIndex < SEQUENCE.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Capture: {CAPTURE_LABELS[currentTargetType]}</Text>
        {scannedBarcode && <Text style={styles.barcodeText}>Barcode: {scannedBarcode}</Text>}
      </View>

      <View style={styles.cameraContainer}>
        {failureOverlay ? (
          <View style={styles.failureOverlay}>
            <Image source={{ uri: failureOverlay.uri }} style={StyleSheet.absoluteFillObject} blurRadius={10} />
            <View style={styles.failureContent}>
              <Text style={styles.failureTitle}>Quality Check Failed</Text>
              <Text style={styles.failureReason}>{failureOverlay.reason}</Text>
              <TouchableOpacity style={styles.retakeBtn} onPress={() => setFailureOverlay(null)}>
                <Text style={styles.retakeBtnText}>Retake Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <CameraView 
            style={styles.camera} 
            ref={cameraRef} 
            facing="back"
            onBarcodeScanned={scannedBarcode ? undefined : handleBarcodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ["ean13", "ean8", "upc_a", "upc_e", "qr"],
            }}
          />
        )}

        {isProcessing && !failureOverlay && (
          <View style={styles.processingOverlay}>
            <ActivityIndicator size="large" color="#38bdf8" />
            <Text style={styles.processingText}>Analyzing Image...</Text>
          </View>
        )}
      </View>

      {/* Thumbnails */}
      <View style={styles.thumbnailStrip}>
        {SEQUENCE.map((type) => (
          <View key={type} style={[styles.thumbnailWrap, currentTargetType === type && styles.thumbnailActive]}>
            {capturedImages[type] ? (
              <Image source={{ uri: capturedImages[type] }} style={styles.thumbnailImg} />
            ) : (
              <Text style={styles.thumbnailPlaceholder}>{type.substring(0, 1).toUpperCase()}</Text>
            )}
          </View>
        ))}
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity style={styles.skipBtn} onPress={skipOptional} disabled={currentTargetType !== 'side' || !!failureOverlay || isProcessing}>
          <Text style={[styles.skipText, currentTargetType !== 'side' && { opacity: 0 }]}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shutterBtnOuter} onPress={handleCapture} disabled={isProcessing || !!failureOverlay}>
          <View style={styles.shutterBtnInner} />
        </TouchableOpacity>
        
        <View style={styles.skipBtn} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  errorText: { color: '#ef4444', textAlign: 'center', marginTop: 20 },
  btn: { padding: 12, backgroundColor: '#38bdf8', borderRadius: 8, margin: 20, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold' },
  header: { padding: 16, alignItems: 'center', backgroundColor: '#0f172a' },
  headerText: { color: '#f8fafc', fontSize: 18, fontWeight: '700' },
  barcodeText: { color: '#34d399', fontSize: 12, marginTop: 4 },
  cameraContainer: { flex: 1, position: 'relative' },
  camera: { flex: 1 },
  processingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  processingText: { color: '#38bdf8', marginTop: 12, fontWeight: '600' },
  failureOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  failureContent: { backgroundColor: 'rgba(15, 23, 42, 0.9)', padding: 24, borderRadius: 16, alignItems: 'center', width: '80%', borderWidth: 1, borderColor: '#ef4444' },
  failureTitle: { color: '#ef4444', fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  failureReason: { color: '#f8fafc', fontSize: 16, marginBottom: 24 },
  retakeBtn: { backgroundColor: '#ef4444', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  retakeBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  thumbnailStrip: { flexDirection: 'row', justifyContent: 'center', padding: 12, backgroundColor: '#0f172a', gap: 12 },
  thumbnailWrap: { width: 44, height: 44, borderRadius: 8, borderWidth: 2, borderColor: '#334155', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
  thumbnailActive: { borderColor: '#38bdf8' },
  thumbnailImg: { width: '100%', height: '100%' },
  thumbnailPlaceholder: { color: '#64748b', fontSize: 12, fontWeight: 'bold' },
  controls: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, backgroundColor: '#000' },
  shutterBtnOuter: { width: 72, height: 72, borderRadius: 36, borderWidth: 4, borderColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  shutterBtnInner: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#fff' },
  skipBtn: { width: 60, padding: 8 },
  skipText: { color: '#94a3b8', fontSize: 16, fontWeight: '600' },
});
