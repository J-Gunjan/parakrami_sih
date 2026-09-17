import mongoose, { Schema, Document } from 'mongoose';
import { Officer as SharedOfficer } from '@nyayalabel/shared';

export interface OfficerDocument extends Document, Omit<SharedOfficer, 'id'> {
  passwordHash: string;
}

const OfficerSchema = new Schema<OfficerDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  badgeNumber: { type: String, required: true, unique: true },
  jurisdiction: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['INSPECTOR', 'SENIOR_INSPECTOR', 'ADMIN', 'REVIEWER'],
    default: 'INSPECTOR'
  },
  tokenCache: { type: String, default: null }
}, {
  timestamps: true
});

// Configure JSON serialization to map _id to id
OfficerSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret: any) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.passwordHash; // Never expose password hash
  }
});

export const OfficerModel = mongoose.model<OfficerDocument>('Officer', OfficerSchema);
