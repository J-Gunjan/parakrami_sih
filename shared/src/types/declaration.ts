export interface QuantityDeclaration {
  value: number;
  unit: string;
  rawText: string;
  isStandardUnit?: boolean;
}

export interface PriceDeclaration {
  amount: number;
  currency: string;
  rawText: string;
  inclusiveOfAllTaxes?: boolean;
}

export interface UnitSalePriceDeclaration {
  amount: number;
  unit: string;
  rawText: string;
  calculatedCorrectly?: boolean;
}

export interface ConsumerCareDeclaration {
  phone?: string;
  email?: string;
  address?: string;
  personNameOrDesignation?: string;
  rawText: string;
}

export interface DeclarationFields {
  productName: string;
  manufacturer: string;
  packer?: string;
  importer?: string;
  countryOfOrigin: string;
  netQuantity: string | QuantityDeclaration;
  mrp: string | PriceDeclaration;
  unitSalePrice?: string | UnitSalePriceDeclaration;
  manufacturingDate: string;
  expiryOrBestBefore?: string;
  consumerCare: string | ConsumerCareDeclaration;
}

export interface ExtractedFieldConfidence {
  value: string;
  confidence: number;
  extractedFromRegionId?: string;
  isVerifiedByInspector: boolean;
}

export type ExtractedDeclarationFields = {
  [K in keyof DeclarationFields]?: ExtractedFieldConfidence;
};
