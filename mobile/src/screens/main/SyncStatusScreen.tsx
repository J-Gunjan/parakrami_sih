import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import { database } from '../../database';
import SyncQueueItem from '../../database/models/SyncQueueItem';
import { syncManager } from '../../services/SyncManager';

export default function SyncStatusScreen({ navigation }: any) {
  const [queueItems, setQueueItems] = useState<SyncQueueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);

  const fetchQueue = async () => {
    try {
      const items = await database.get<SyncQueueItem>('sync_queue_items').query().fetch();
      setQueueItems(items);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchQueue();
    }, [])
  );

  const handleForceSync = async () => {
    setSyncing(true);
    try {
      await syncManager.syncPendingInspections();
      await fetchQueue();
    } catch (e) {
      console.error(e);
    } finally {
      setSyncing(false);
    }
  };

  const renderItem = ({ item }: { item: SyncQueueItem }) => {
    return (
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.actionText}>{item.action}</Text>
          <Text style={styles.attemptsText}>Attempts: {item.attempts}</Text>
        </View>
        <Text style={styles.entityText}>Entity ID: {item.entityId}</Text>
        <Text style={styles.entityText}>Entity Type: {item.entityType}</Text>
        {item.lastError ? (
          <Text style={styles.errorText}>Error: {item.lastError}</Text>
        ) : null}
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
        <Text style={styles.headerTitle}>Sync Status</Text>
        <View style={{ width: 60 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>Pending Items: {queueItems.length}</Text>
          <TouchableOpacity 
            style={[styles.syncBtn, syncing && styles.syncBtnDisabled]}
            onPress={handleForceSync}
            disabled={syncing}
          >
            {syncing ? (
               <ActivityIndicator color="#fff" size="small" />
            ) : (
               <Text style={styles.syncBtnText}>Force Sync</Text>
            )}
          </TouchableOpacity>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#38bdf8" style={{ marginTop: 40 }} />
        ) : queueItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>All caught up!</Text>
            <Text style={styles.emptySubtext}>No pending items in the sync queue.</Text>
          </View>
        ) : (
          <FlatList
            data={queueItems}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
          />
        )}
      </View>
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
  content: { padding: 16, flex: 1 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  statsText: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' },
  syncBtn: { backgroundColor: '#38bdf8', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  syncBtnDisabled: { opacity: 0.5 },
  syncBtnText: { color: '#0f172a', fontWeight: 'bold' },
  emptyState: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40 },
  emptyText: { color: '#10b981', fontSize: 18, fontWeight: 'bold' },
  emptySubtext: { color: '#64748b', fontSize: 14, marginTop: 4 },
  card: { backgroundColor: '#0f172a', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#1e293b' },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  actionText: { color: '#38bdf8', fontSize: 16, fontWeight: 'bold' },
  attemptsText: { color: '#f59e0b', fontSize: 12, fontWeight: 'bold' },
  entityText: { color: '#cbd5e1', fontSize: 14, marginBottom: 2 },
  errorText: { color: '#ef4444', fontSize: 12, marginTop: 8 }
});
