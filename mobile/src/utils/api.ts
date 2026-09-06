import Constants from 'expo-constants';
import { Platform } from 'react-native';

export function getBackendUrl() {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  const debuggerHost = Constants.expoConfig?.hostUri;
  if (debuggerHost) {
    const localhost = debuggerHost.split(':')[0];
    // If running on Android emulator and debuggerHost is localhost, map it to host IP
    if (localhost === 'localhost' || localhost === '127.0.0.1') {
      if (Platform.OS === 'android') {
        return 'http://10.0.2.2:5000';
      }
    }
    return `http://${localhost}:5000`;
  }

  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:5000';
  }
  
  return 'http://localhost:5000';
}
