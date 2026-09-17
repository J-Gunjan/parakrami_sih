import { Officer } from '@nyayalabel/shared';

// Define the response type
export interface LoginResponse {
  token: string;
  officer: Officer;
}

export class AuthService {
  static async login(email: string, password: string): Promise<LoginResponse> {
    if (!email || !password) {
      throw new Error('Email and password are required.');
    }

    const { getBackendUrl } = require('../utils/api');
    
    try {
      const response = await fetch(`${getBackendUrl()}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Invalid email or password.');
      }

      return {
        token: data.token,
        officer: data.officer
      };
    } catch (error: any) {
      console.error('[AUTH] Login failed:', error.message);
      throw new Error(error.message || 'Failed to connect to authentication server');
    }
  }

  /**
   * Actual token refresh calling the backend
   */
  static async refreshToken(oldToken: string): Promise<string> {
    const { getBackendUrl } = require('../utils/api');
    try {
      const response = await fetch(`${getBackendUrl()}/api/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: oldToken }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error('Failed to refresh token');
      }
      return data.token;
    } catch (error) {
      throw error;
    }
  }
}
