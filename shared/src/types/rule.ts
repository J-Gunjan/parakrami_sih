export type SeverityLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface RuleThreshold {
  minFontHeightMm?: number;
  maxDiscrepancyPercent?: number;
  requiredFields?: string[];
  mandatoryKeywords?: string[];
  customCriteria?: Record<string, unknown>;
}

export interface ComplianceRule {
  ruleId: string; // Internal system ID
  ruleCode: string; // e.g. "NET_QTY_MIN_HEIGHT"
  title: string;
  description: string;
  version: string;
  effectiveFrom: string | Date;
  effectiveUntil?: string | Date | null;
  applicableCommodity: string | string[]; // "ALL", "PACKAGED_FOOD", etc.
  condition?: string; // e.g. "Net Quantity <= 200g"
  requirement: string;
  threshold?: string | number | RuleThreshold;
  severity: SeverityLevel;
  
  // Legal Traceability
  sourceAct: string;
  sourceRule: string;
  sourceNotification?: string;
  sourceReference?: string;
  verificationStatus: 'VERIFIED' | 'UNVERIFIED';

  category?:
    | 'MANDATORY_DECLARATIONS'
    | 'FONT_SIZE'
    | 'UNIT_SALE_PRICE'
    | 'NET_QUANTITY'
    | 'MRP_DECLARATION'
    | 'DATE_FORMAT';
  isActive?: boolean;
}

export type EvaluationResultStatus = 'PASS' | 'FAIL' | 'REVIEW' | 'NOT_APPLICABLE';

export interface RuleEvaluationResult {
  ruleId: string;
  ruleCode: string;
  ruleVersion: string;
  status: EvaluationResultStatus;
  observedValue: string;
  expectedValue: string;
  reason: string;
  severity: SeverityLevel;
  
  // Traced Legal Source
  legalSource: {
    act: string;
    rule: string;
    notification?: string;
    reference?: string;
  };
  verificationStatus: 'VERIFIED' | 'UNVERIFIED';
  
  confidence: number;
  inspectionDate: string | Date;
}
