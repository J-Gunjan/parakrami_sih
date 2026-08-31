import { SeverityLevel } from './rule.js';
import { EvidenceRegion } from './evidence.js';
export { SeverityLevel };

export interface Violation {
  id: string;
  inspectionId: string;
  productId?: string;
  ruleId: string;
  ruleVersion: string;
  fieldName?: string;
  observedValue: string;
  expectedValue: string;
  confidence: number;
  severity: SeverityLevel;
  evidenceRegion?: EvidenceRegion;
  inspectorVerified: boolean;
  inspectorRemarks?: string;
  aiExplanation?: string;
  createdAt: string;
  updatedAt: string;
}

export type ComplianceDecision = 'PASS' | 'REVIEW' | 'FAIL';

export interface ProductComplianceResult {
  productId: string;
  decision: ComplianceDecision;
  violations: Violation[];
  complianceScore: number; // 0 to 100
  evaluatedRulesCount: number;
}
