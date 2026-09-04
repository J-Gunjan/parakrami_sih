import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import type { SyncStatus } from '@nyayalabel/shared';
import { useAuth } from '../../providers/AuthProvider';

export default function HomeScreen() {
  const [syncStatus] = useState<SyncStatus>('synced');
  const { officer, logout } = useAuth();

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
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>+ New Inspection (Draft)</Text>
        </TouchableOpacity>
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
});
