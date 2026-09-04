import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFocusEffect } from '@react-navigation/native';
import type { SyncStatus } from '@nyayalabel/shared';
import { useAuth } from '../../providers/AuthProvider';
import { InspectionRepository } from '../../repositories/InspectionRepository';
import Inspection from '../../database/models/Inspection';

export default function HomeScreen({ navigation }: any) {
  const [syncStatus] = useState<SyncStatus>('synced');
  const { officer, logout } = useAuth();
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      const fetchInspections = async () => {
        try {
          const allInspections = await InspectionRepository.listAll();
          // Filter for the current officer
          const officerInspections = allInspections.filter(
            (i) => i.officerId === officer?.id
          );
          // Sort by newest first
          officerInspections.sort((a, b) => b.createdAt - a.createdAt);
          if (isActive) {
            setInspections(officerInspections);
            setLoading(false);
          }
        } catch (e) {
          console.error('Failed to load inspections', e);
          if (isActive) setLoading(false);
        }
      };
      
      if (officer?.id) {
        fetchInspections();
      } else {
        setLoading(false);
      }
      
      return () => {
        isActive = false;
      };
    }, [officer?.id])
  );

  const renderInspection = ({ item }: { item: Inspection }) => {
    let badgeColor = '#94a3b8'; // default grey
    let badgeText = item.apiSyncStatus;
    if (item.apiSyncStatus === 'synced') {
      badgeColor = '#34d399';
      badgeText = '✅ Synced';
    } else if (item.apiSyncStatus === 'pending') {
      badgeColor = '#facc15';
      badgeText = '⏳ Pending';
    } else if (item.apiSyncStatus === 'failed') {
      badgeColor = '#f87171';
      badgeText = '❌ Failed';
    }

    return (
      <View style={styles.inspectionCard}>
        <View style={styles.inspectionHeader}>
          <Text style={styles.shopName}>{item.shopName}</Text>
          <View style={[styles.inlineBadge, { borderColor: badgeColor }]}>
            <Text style={[styles.inlineBadgeText, { color: badgeColor }]}>{badgeText}</Text>
          </View>
        </View>
        <Text style={styles.inspectionDate}>
          {new Date(item.createdAt).toLocaleDateString()} {new Date(item.createdAt).toLocaleTimeString()}
        </Text>
        <Text style={styles.inspectionAddress}>
          {item.address || 'No address provided'}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {/* Header bar */}
      <View style={styles.header}>
        <View>
          <Text style={styles.appTitle}>NyayaLabel AI</Text>
          <Text style={styles.appSubtitle}>Legal Metrology Officer App (SIH26034)</Text>
        </View>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{syncStatus.toUpperCase()}</Text>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Officer Card */}
        {officer && (
          <View style={styles.card}>
            <View style={styles.cardHeaderRow}>
              <Text style={styles.cardHeader}>OFFICER PROFILE</Text>
              <TouchableOpacity onPress={logout} style={styles.logoutBtn}>
                <Text style={styles.logoutText}>Log Out</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.officerName}>{officer.name}</Text>
            <Text style={styles.officerMeta}>Badge: {officer.badgeNumber}</Text>
            <Text style={styles.officerMeta}>Zone: {officer.jurisdiction}</Text>
          </View>
        )}

        {/* Offline-First Ready Notice */}
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>⚡ Phase 0 Scaffolding Ready</Text>
          <Text style={styles.infoDesc}>
            Offline-first architecture initialized. Local WatermelonDB (SQLite) data layer, camera
            quality assessment, and OCR extraction will be hooked in upcoming phases.
          </Text>
        </View>

        {/* Action placeholder */}
        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('NewInspection')}
        >
          <Text style={styles.buttonText}>+ New Inspection</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>MY INSPECTIONS</Text>
        {loading ? (
          <ActivityIndicator size="small" color="#38bdf8" />
        ) : inspections.length === 0 ? (
          <Text style={styles.emptyText}>No inspections found. Tap "+ New Inspection" to start.</Text>
        ) : (
          <FlatList
            data={inspections}
            keyExtractor={(item) => item.id}
            renderItem={renderInspection}
            contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Department of Consumer Affairs • Legal Metrology (Packaged Commodities) Rules 2011
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020617',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38bdf8',
  },
  appSubtitle: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  statusBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#34d399',
    fontSize: 11,
    fontWeight: '700',
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 16,
  },
  card: {
    backgroundColor: '#0f172a',
    borderColor: '#1e293b',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  cardHeader: {
    color: '#38bdf8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  logoutBtn: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  logoutText: {
    color: '#f87171',
    fontSize: 11,
    fontWeight: '600',
  },
  officerName: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
  },
  officerMeta: {
    color: '#94a3b8',
    fontSize: 13,
    marginTop: 4,
  },
  infoBox: {
    backgroundColor: 'rgba(56, 189, 248, 0.08)',
    borderColor: 'rgba(56, 189, 248, 0.2)',
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
  },
  infoTitle: {
    color: '#7dd3fc',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  infoDesc: {
    color: '#cbd5e1',
    fontSize: 13,
    lineHeight: 19,
  },
  button: {
    backgroundColor: '#0284c7',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 'auto',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  footerText: {
    color: '#64748b',
    fontSize: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#38bdf8',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 8,
  },
  emptyText: {
    color: '#94a3b8',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  inspectionCard: {
    backgroundColor: '#0f172a',
    borderColor: '#1e293b',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
  },
  inspectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  shopName: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  inlineBadge: {
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  inlineBadgeText: {
    fontSize: 10,
    fontWeight: '700',
  },
  inspectionDate: {
    color: '#94a3b8',
    fontSize: 12,
    marginBottom: 4,
  },
  inspectionAddress: {
    color: '#64748b',
    fontSize: 12,
  }
});
