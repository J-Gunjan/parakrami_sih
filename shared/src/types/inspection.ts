import { SyncStatus } from './sync.js';
import { ComplianceDecision, Violation } from './violation.js';
import { Product } from './product.js';
import { CapturedImage } from './evidence.js';

export interface InspectionLocation {
  latitude: number;
  longitude: number;
  address: string;
  pincode?: string;
  city?: string;
  state?: string;
  district?: string;
  accuracyMeters?: number;
}

export type InspectionStatus = 'DRAFT' | 'IN_PROGRESS' | 'COMPLETED' | 'FLAGGED' | 'ARCHIVED';

export interface Inspection {
  id: string;
  officerId: string;
  shopName: string;
  shopOwnerName?: string;
  shopLicenseNumber?: string;
  shopCategory?: string;
  location: InspectionLocation;
  status: InspectionStatus;
  syncStatus: SyncStatus;
  overallResult: ComplianceDecision;
  products?: Product[];
  images?: CapturedImage[];
  violations?: Violation[];
  officerSignature?: string;
  merchantSignature?: string;
  notes?: string;
  startedAt: string;
  completedAt?: string;
  syncedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface InspectionSummary {
  id: string;
  officerId: string;
  officerName?: string;
  shopName: string;
  locationAddress: string;
  totalProducts: number;
  totalViolations: number;
  overallResult: ComplianceDecision;
  status: InspectionStatus;
  syncStatus: SyncStatus;
  createdAt: string;
}
