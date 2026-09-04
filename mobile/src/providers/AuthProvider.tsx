import React, { createContext, useContext, useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import NetInfo from '@react-native-community/netinfo';
import { Officer } from '@nyayalabel/shared';
import { Alert } from 'react-native';
import { database } from '../database';
import { Q } from '@nozbe/watermelondb';
import { AuthService } from '../services/AuthService';

interface AuthContextType {
  isAuthenticated: boolean;
  officer: Officer | null;
  isLoading: boolean;
  offlineError: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [officer, setOfficer] = useState<Officer | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [offlineError, setOfflineError] = useState<string | null>(null);

  useEffect(() => {
    bootstrapAsync();
  }, []);

  const bootstrapAsync = async () => {
    try {
      const token = await SecureStore.getItemAsync('userToken');
      const officerStr = await SecureStore.getItemAsync('officerProfile');

      if (token && officerStr) {
        setOfficer(JSON.parse(officerStr));
        setIsAuthenticated(true);

        // Silent token refresh if online
        const netInfo = await NetInfo.fetch();
        if (netInfo.isConnected) {
          try {
            const newToken = await AuthService.refreshToken(token);
            await SecureStore.setItemAsync('userToken', newToken);
          } catch (e) {
            // Keep user logged in even if refresh fails
            console.warn('Silent token refresh failed', e);
          }
        }
      } else {
        // No token. Check network.
        const netInfo = await NetInfo.fetch();
        if (!netInfo.isConnected) {
          setOfflineError('You need an internet connection the first time you log in.');
        }
      }
    } catch (e) {
      console.error('Failed to bootstrap auth', e);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setOfflineError(null);
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) {
      throw new Error('No internet connection. Please connect to login.');
    }

    const { token, officer: profile } = await AuthService.login(email, password);
    
    await SecureStore.setItemAsync('userToken', token);
    await SecureStore.setItemAsync('officerProfile', JSON.stringify(profile));
    
    setOfficer(profile);
    setIsAuthenticated(true);
  };

  const performLogout = async () => {
    await SecureStore.deleteItemAsync('userToken');
    await SecureStore.deleteItemAsync('officerProfile');
    setOfficer(null);
    setIsAuthenticated(false);
  };

  const logout = async () => {
    try {
      // Check for unsynced inspections
      const unsyncedCount = await database
        .get('inspections')
        .query(Q.where('sync_status', 'pending'))
        .fetchCount();

      if (unsyncedCount > 0) {
        Alert.alert(
          'Unsynced Data',
          `You have ${unsyncedCount} unsynced inspection(s). Log out anyway? Data might be lost.`,
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Log Out', style: 'destructive', onPress: performLogout }
          ]
        );
      } else {
        await performLogout();
      }
    } catch (e) {
      // Fallback if db query fails
      await performLogout();
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, officer, isLoading, offlineError, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
