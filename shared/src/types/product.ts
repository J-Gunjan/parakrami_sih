import { DeclarationFields, ExtractedDeclarationFields } from './declaration.js';
import { ComplianceDecision, Violation } from './violation.js';

export interface ProductDimensions {
  principalDisplayAreaCm2?: number;
  packageHeightMm?: number;
  packageWidthMm?: number;
  packageDepthMm?: number;
}

export interface Product {
  id: string;
  inspectionId: string;
  category: string;
  barcodeOrGtin?: string;
  brandName?: string;
  declarationFields: DeclarationFields;
  extractedDeclarations?: ExtractedDeclarationFields;
  dimensions?: ProductDimensions;
  imageIds: string[];
  status: 'PENDING_ANALYSIS' | 'ANALYZED' | 'VERIFIED' | 'FLAGGED';
  complianceResult?: {
    decision: ComplianceDecision;
    score: number;
    violations: Violation[];
  };
  verifiedByOfficer: boolean;
  createdAt: string;
  updatedAt: string;
}
