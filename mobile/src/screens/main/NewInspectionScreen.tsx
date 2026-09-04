import React, { useState, useEffect } from 'react';
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
import * as Location from 'expo-location';
import { useAuth } from '../../providers/AuthProvider';
import { InspectionRepository } from '../../repositories/InspectionRepository';

export default function NewInspectionScreen({ navigation }: any) {
  const { officer } = useAuth();
  
  const [shopName, setShopName] = useState('');
  const [address, setAddress] = useState('');
  const [market, setMarket] = useState('');
  const [district, setDistrict] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  const [loadingGps, setLoadingGps] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const currentDateTime = new Date().toLocaleString();

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    setLoadingGps(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Allow location access to auto-fill GPS coordinates.');
        setLoadingGps(false);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLatitude(location.coords.latitude.toString());
      setLongitude(location.coords.longitude.toString());
    } catch (e) {
      console.log('Error fetching location', e);
    } finally {
      setLoadingGps(false);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!shopName.trim()) newErrors.shopName = 'Shop/Location Name is required';
    if (!address.trim()) newErrors.address = 'Address is required';
    if (!market.trim()) newErrors.market = 'Market is required';
    if (!district.trim()) newErrors.district = 'District is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    if (!officer?.id) {
      Alert.alert('Error', 'No officer logged in');
      return;
    }

    setSaving(true);
    try {
      const inspection = await InspectionRepository.create({
        officerId: officer.id,
        shopName,
        address,
        market,
        district,
        locationLat: latitude ? parseFloat(latitude) : undefined,
        locationLng: longitude ? parseFloat(longitude) : undefined,
      });
      
      // Navigate to Camera Capture
      navigation.navigate('CameraCapture', { inspectionId: inspection.id });
    } catch (e) {
      console.error('Failed to create inspection', e);
      Alert.alert('Error', 'Failed to create inspection locally.');
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
        <Text style={styles.headerTitle}>New Inspection</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>METADATA</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Date & Time:</Text>
            <Text style={styles.infoValue}>{currentDateTime}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Officer:</Text>
            <Text style={styles.infoValue}>{officer?.name}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>LOCATION DETAILS</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Shop/Location Name *</Text>
            <TextInput
              style={[styles.input, errors.shopName ? styles.inputError : null]}
              placeholder="e.g. Reliance Smart"
              placeholderTextColor="#64748b"
              value={shopName}
              onChangeText={(t) => { setShopName(t); setErrors({ ...errors, shopName: '' }); }}
            />
            {errors.shopName && <Text style={styles.errorText}>{errors.shopName}</Text>}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Address *</Text>
            <TextInput
              style={[styles.input, errors.address ? styles.inputError : null]}
              placeholder="Enter full address"
              placeholderTextColor="#64748b"
              value={address}
              onChangeText={(t) => { setAddress(t); setErrors({ ...errors, address: '' }); }}
            />
            {errors.address && <Text style={styles.errorText}>{errors.address}</Text>}
          </View>

          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Market *</Text>
              <TextInput
                style={[styles.input, errors.market ? styles.inputError : null]}
                placeholder="Market"
                placeholderTextColor="#64748b"
                value={market}
                onChangeText={(t) => { setMarket(t); setErrors({ ...errors, market: '' }); }}
              />
              {errors.market && <Text style={styles.errorText}>{errors.market}</Text>}
            </View>

            <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
              <Text style={styles.label}>District *</Text>
              <TextInput
                style={[styles.input, errors.district ? styles.inputError : null]}
                placeholder="District"
                placeholderTextColor="#64748b"
                value={district}
                onChangeText={(t) => { setDistrict(t); setErrors({ ...errors, district: '' }); }}
              />
              {errors.district && <Text style={styles.errorText}>{errors.district}</Text>}
            </View>
          </View>

          <View style={styles.gpsContainer}>
            <View style={styles.row}>
              <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
                <Text style={styles.label}>Latitude</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0.0000"
                  placeholderTextColor="#64748b"
                  keyboardType="numeric"
                  value={latitude}
                  onChangeText={setLatitude}
                />
              </View>
              <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
                <Text style={styles.label}>Longitude</Text>
                <TextInput
                  style={styles.input}
                  placeholder="0.0000"
                  placeholderTextColor="#64748b"
                  keyboardType="numeric"
                  value={longitude}
                  onChangeText={setLongitude}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.gpsBtn} onPress={fetchLocation} disabled={loadingGps}>
              {loadingGps ? (
                <ActivityIndicator size="small" color="#38bdf8" />
              ) : (
                <Text style={styles.gpsBtnText}>📍 Fetch GPS</Text>
              )}
            </TouchableOpacity>
          </View>
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
            <Text style={styles.saveBtnText}>Save & Continue</Text>
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
  content: { padding: 16, gap: 24 },
  section: { gap: 16 },
  sectionTitle: { color: '#38bdf8', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between' },
  infoLabel: { color: '#94a3b8', fontSize: 14 },
  infoValue: { color: '#f8fafc', fontSize: 14, fontWeight: '500' },
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
  gpsContainer: { backgroundColor: 'rgba(56, 189, 248, 0.05)', padding: 12, borderRadius: 12, gap: 12, borderWidth: 1, borderColor: '#1e293b' },
  gpsBtn: { backgroundColor: 'rgba(56, 189, 248, 0.1)', paddingVertical: 10, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: 'rgba(56, 189, 248, 0.3)' },
  gpsBtnText: { color: '#38bdf8', fontSize: 14, fontWeight: '600' },
  saveBtn: { backgroundColor: '#0284c7', borderRadius: 12, paddingVertical: 16, alignItems: 'center', marginTop: 12 },
  saveBtnText: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
});
