import { Officer } from '@nyayalabel/shared';

// Define the response type
export interface LoginResponse {
  token: string;
  officer: Officer;
}

export class AuthService {
  /**
   * Mock login to simulate POST /api/auth/login.
   * Will be replaced with actual API call when backend is integrated.
   */
  static async login(email: string, password: string): Promise<LoginResponse> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Basic validation
    if (!email || !password) {
      throw new Error('Email and password are required.');
    }

    // Mock successful response
    if (email === 'test@gov.in' && password === 'password') {
      return {
        token: 'mock-jwt-token-xyz-789',
        officer: {
          id: 'officer-1',
          name: 'Inspector R. Sharma',
          badgeNumber: 'LM-DEL-2024-41',
          jurisdiction: 'New Delhi North-West',
          email: 'test@gov.in'
        } as Officer
      };
    }

    // Mock failed response
    throw new Error('Invalid email or password.');
  }

  /**
   * Mock token refresh
   */
  static async refreshToken(oldToken: string): Promise<string> {
    await new Promise(resolve => setTimeout(resolve, 800));
    return `refreshed-jwt-token-${Date.now()}`;
  }
}
