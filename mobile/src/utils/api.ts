import Constants from 'expo-constants';
import { Platform } from 'react-native';

export function getBackendUrl() {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  // If we are developing via Expo Go, we can infer the host IP
  const debuggerHost = Constants.expoConfig?.hostUri;
  if (debuggerHost) {
    const localhost = debuggerHost.split(':')[0];
    // If it resolves to localhost/127.0.0.1, we must warn that physical devices can't reach it unless using ADB reverse,
    // but we'll try to use the inferred IP (which is usually the LAN IP).
    if (localhost === 'localhost' || localhost === '127.0.0.1') {
      if (Platform.OS === 'android') {
        // Fallback for emulator ONLY. A physical device MUST set EXPO_PUBLIC_API_URL
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

/**
 * Perform a fast health check on the backend to verify connectivity
 */
export async function checkBackendHealth(): Promise<{ connected: boolean; reason?: string }> {
  const url = `${getBackendUrl()}/api/health`;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data.status === 'ok') {
        return { connected: true };
      }
    }
    return { connected: false, reason: `Status Code: ${response.status}` };
  } catch (error: any) {
    console.warn('[API Health Check Failed]', url, error.message);
    let reason = error.message;
    if (error.name === 'AbortError') reason = 'Timeout (Backend Unreachable)';
    else if (error.message.includes('Network request failed')) reason = 'Network Request Failed (Check CORS or IP config)';
    
    return { connected: false, reason };
  }
}
