import mongoose, { Schema, Document } from 'mongoose';
import { Violation as SharedViolation } from '@nyayalabel/shared';

export interface ViolationDocument extends Document, Omit<SharedViolation, 'id'> {}

const EvidenceRegionSchema = new Schema({
  x: { type: Number },
  y: { type: Number },
  width: { type: Number },
  height: { type: Number }
}, { _id: false });

const ViolationSchema = new Schema<ViolationDocument>({
  inspectionId: { type: String, required: true, index: true },
  productId: { type: String, index: true },
  ruleId: { type: String, required: true },
  ruleVersion: { type: String, required: true },
  fieldName: { type: String },
  observedValue: { type: String, required: true },
  expectedValue: { type: String, required: true },
  confidence: { type: Number, required: true },
  severity: { 
    type: String, 
    enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
    required: true
  },
  evidenceRegion: { type: EvidenceRegionSchema },
  inspectorVerified: { type: Boolean, default: false },
  inspectorRemarks: { type: String },
  aiExplanation: { type: String }
}, {
  timestamps: true
});

ViolationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret: any) {
    ret.id = ret._id.toString();
    delete ret._id;
  }
});

export const ViolationModel = mongoose.model<ViolationDocument>('Violation', ViolationSchema);
