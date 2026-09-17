import mongoose, { Schema, Document } from 'mongoose';

export interface AuditLogDocument extends Document {
  officerId: string;
  action: string;
  entityType: 'RULE' | 'INSPECTION' | 'VIOLATION';
  entityId: string;
  details: Schema.Types.Mixed;
  timestamp: Date;
}

const AuditLogSchema = new Schema<AuditLogDocument>({
  officerId: { type: String, required: true, index: true },
  action: { type: String, required: true },
  entityType: { type: String, enum: ['RULE', 'INSPECTION', 'VIOLATION'], required: true },
  entityId: { type: String, required: true, index: true },
  details: { type: Schema.Types.Mixed },
  timestamp: { type: Date, default: Date.now }
});

export const AuditLogModel = mongoose.model<AuditLogDocument>('AuditLog', AuditLogSchema);
