export type SeverityLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export interface RuleThreshold {
  minFontHeightMm?: number;
  maxDiscrepancyPercent?: number;
  requiredFields?: string[];
  mandatoryKeywords?: string[];
  customCriteria?: Record<string, unknown>;
}

export interface ComplianceRule {
  ruleId: string;
  version: string;
  title: string;
  description: string;
  effectiveFrom: string | Date;
  effectiveUntil?: string | Date | null;
  applicableCommodity: string | string[];
  requirement: string;
  threshold?: string | number | RuleThreshold;
  severity: SeverityLevel;
  sourceDocument: string; // e.g. "Legal Metrology (Packaged Commodities) Rules, 2011 - Rule 6(1)"
  category?:
    | 'MANDATORY_DECLARATIONS'
    | 'FONT_SIZE'
    | 'UNIT_SALE_PRICE'
    | 'NET_QUANTITY'
    | 'MRP_DECLARATION'
    | 'DATE_FORMAT';
  isActive?: boolean;
}
