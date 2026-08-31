export type OfficerRole = 'INSPECTOR' | 'SENIOR_INSPECTOR' | 'ADMIN' | 'REVIEWER';

export interface Officer {
  id: string;
  name: string;
  email: string;
  badgeNumber: string;
  jurisdiction: string;
  role: OfficerRole;
  tokenCache?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface OfficerAuthProfile {
  officer: Officer;
  token: string;
  expiresAt: number;
}
