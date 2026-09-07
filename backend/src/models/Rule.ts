import mongoose, { Schema, Document } from 'mongoose';
import { ComplianceRule } from '@nyayalabel/shared';

export interface IRule extends Omit<ComplianceRule, 'effectiveFrom' | 'effectiveUntil'>, Document {
  effectiveFrom: Date;
  effectiveUntil: Date | null;
}

const RuleThresholdSchema = new Schema({
  minFontHeightMm: { type: Number, required: false },
  maxDiscrepancyPercent: { type: Number, required: false },
  requiredFields: { type: [String], required: false },
  mandatoryKeywords: { type: [String], required: false },
  customCriteria: { type: Schema.Types.Mixed, required: false },
}, { _id: false });

const RuleSchema: Schema = new Schema({
  ruleId: { type: String, required: true },
  ruleCode: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  version: { type: String, required: true },
  effectiveFrom: { type: Date, required: true },
  effectiveUntil: { type: Date, default: null },
  applicableCommodity: { type: Schema.Types.Mixed, required: true }, // String or Array of Strings
  condition: { type: String, required: false },
  requirement: { type: String, required: true },
  threshold: { type: Schema.Types.Mixed, required: false }, // String, Number, or RuleThreshold
  severity: { type: String, enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'], required: true },
  
  // Legal Traceability
  sourceAct: { type: String, required: true },
  sourceRule: { type: String, required: true },
  sourceNotification: { type: String, required: false },
  sourceReference: { type: String, required: false },
  verificationStatus: { type: String, enum: ['VERIFIED', 'UNVERIFIED'], required: true },

  category: { 
    type: String, 
    enum: [
      'MANDATORY_DECLARATIONS',
      'FONT_SIZE',
      'UNIT_SALE_PRICE',
      'NET_QUANTITY',
      'MRP_DECLARATION',
      'DATE_FORMAT'
    ],
    required: false
  },
  isActive: { type: Boolean, default: true }
}, {
  timestamps: true
});

// Compound index for ruleId and version, ensuring unique versions per rule
RuleSchema.index({ ruleId: 1, version: 1 }, { unique: true });
RuleSchema.index({ ruleCode: 1 });
RuleSchema.index({ applicableCommodity: 1 });

export const RuleModel = mongoose.model<IRule>('Rule', RuleSchema);
