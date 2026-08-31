import { SeverityLevel } from './rule.js';

export interface AuditTrailEntry {
  id: string;
  inspectionId: string;
  officerId: string;
  action: string;
  previousState?: Record<string, unknown>;
  newState?: Record<string, unknown>;
  ipAddress?: string;
  deviceInfo?: string;
  timestamp: string;
}

export interface AIExplanation {
  violationId: string;
  ruleTitle: string;
  plainLanguageSummary: string;
  legalCitation: string;
  suggestedAction: string;
  confidenceScore: number;
  multilingualSummaries?: Record<string, string>; // e.g. { "hi": "...", "en": "..." }
}

export interface RiskScoreMetric {
  shopIdOrName: string;
  latitude: number;
  longitude: number;
  riskScore: number; // 0 to 100
  riskCategory: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  historicalViolationCount: number;
  repeatOffenderFlag: boolean;
  lastInspectedDate?: string;
  frequentViolationTypes: string[];
}

export interface GISHeatmapPoint {
  latitude: number;
  longitude: number;
  weight: number;
  severity: SeverityLevel;
  violationCount: number;
  shopName: string;
}
