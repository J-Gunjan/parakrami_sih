import React, { createContext, useContext, useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

interface NetworkStatusContextData {
  isOnline: boolean;
  isOffline: boolean;
}

const NetworkStatusContext = createContext<NetworkStatusContextData>({
  isOnline: true,
  isOffline: false,
});

export const NetworkStatusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check initial state
    NetInfo.fetch().then(state => {
      setIsOnline(state.isConnected ?? true);
    });

    // Subscribe to future updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected ?? true);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NetworkStatusContext.Provider value={{ isOnline, isOffline: !isOnline }}>
      {children}
    </NetworkStatusContext.Provider>
  );
};

export const useNetworkStatus = () => useContext(NetworkStatusContext);
