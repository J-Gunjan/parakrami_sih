import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { getBackendUrl, checkBackendHealth } from '../utils/api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { syncManager } from '../services/SyncManager';
import { database } from '../database';
import Inspection from '../database/models/Inspection';

export default function DebugScreen({ navigation }: any) {
  const [health, setHealth] = useState<any>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [stats, setStats] = useState({ pending: 0, synced: 0, failed: 0 });
  
  const addLog = (msg: string) => setLogs(prev => [msg, ...prev].slice(0, 50));

  const testHealth = async () => {
    addLog('Testing Backend Health...');
    const result = await checkBackendHealth();
    setHealth(result);
    addLog(`Health Result: ${JSON.stringify(result)}`);
  };

  const loadStats = async () => {
    const inspections = await database.get<Inspection>('inspections').query().fetch();
    const pending = inspections.filter(i => i.syncStatus !== 'synced').length;
    const synced = inspections.filter(i => i.syncStatus === 'synced').length;
    setStats({ pending, synced, failed: 0 });
  };

  const handleSync = async () => {
    addLog('Starting Sync...');
    const result = await syncManager.syncPendingInspections();
    addLog(`Sync Complete: ${result.success} success, ${result.failed} failed`);
    loadStats();
  };

  useEffect(() => {
    testHealth();
    loadStats();
  }, []);



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}><Text style={styles.back}>Back</Text></TouchableOpacity>
        <Text style={styles.title}>System Debug</Text>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.label}>Backend URL:</Text>
        <Text style={styles.value}>{getBackendUrl()}</Text>

        <Text style={styles.label}>Backend Health:</Text>
        <Text style={styles.value}>{health ? JSON.stringify(health) : 'Checking...'}</Text>

        <Text style={styles.label}>Sync Stats:</Text>
        <Text style={styles.value}>Pending: {stats.pending} | Synced: {stats.synced} | Failed: {stats.failed}</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.btn} onPress={testHealth}><Text style={styles.btnText}>Test Backend</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleSync}><Text style={styles.btnText}>Sync Pending Inspections</Text></TouchableOpacity>
        </View>

        <Text style={styles.label}>Note:</Text>
        <Text style={styles.logText}>To test OCR and Marker Detection on real images, please start a 'New Inspection' from the Home Screen and use the camera.</Text>

        <Text style={styles.label}>Logs:</Text>
        {logs.map((l, i) => (
          <Text key={i} style={styles.logText}>{l}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { flexDirection: 'row', padding: 16, borderBottomWidth: 1, borderColor: '#333', alignItems: 'center' },
  back: { color: '#38bdf8', marginRight: 16 },
  title: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  content: { padding: 16 },
  label: { color: '#888', marginTop: 12, marginBottom: 4 },
  value: { color: '#fff', fontSize: 14, backgroundColor: '#111', padding: 8, borderRadius: 4 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 16 },
  btn: { backgroundColor: '#333', padding: 12, borderRadius: 8 },
  btnText: { color: '#fff' },
  logText: { color: '#aaa', fontSize: 12, borderBottomWidth: 1, borderColor: '#222', paddingVertical: 4 }
});
