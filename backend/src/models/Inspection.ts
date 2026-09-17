import mongoose, { Schema, Document } from 'mongoose';
import { Inspection as SharedInspection } from '@nyayalabel/shared';

export interface InspectionDocument extends Document, Omit<SharedInspection, 'id'> {}

const LocationSchema = new Schema({
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  address: { type: String, required: true },
  pincode: { type: String },
  city: { type: String },
  state: { type: String },
  district: { type: String },
  accuracyMeters: { type: Number }
}, { _id: false });

const InspectionSchema = new Schema<InspectionDocument>({
  officerId: { type: String, required: true, index: true },
  shopName: { type: String, required: true },
  shopOwnerName: { type: String },
  shopLicenseNumber: { type: String },
  shopCategory: { type: String },
  location: { type: LocationSchema, required: true },
  // Optional GeoJSON field for 2dsphere indexing for future GIS support
  geo: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: false } // [longitude, latitude]
  },
  status: { 
    type: String, 
    enum: ['DRAFT', 'IN_PROGRESS', 'COMPLETED', 'FLAGGED', 'ARCHIVED'],
    default: 'IN_PROGRESS'
  },
  syncStatus: {
    type: String,
    enum: ['pending', 'synced', 'failed'],
    default: 'synced'
  },
  overallResult: {
    type: String,
    enum: ['PASS', 'REVIEW', 'FAIL'],
    required: true
  },
  officerSignature: { type: String },
  merchantSignature: { type: String },
  notes: { type: String },
  startedAt: { type: String, required: true },
  completedAt: { type: String },
  syncedAt: { type: String }
}, {
  timestamps: true
});

// Geo-spatial index for Phase 12
InspectionSchema.index({ geo: '2dsphere' });

// Ensure coordinates are updated before saving
InspectionSchema.pre('save', function(next) {
  if (this.location && this.location.longitude && this.location.latitude) {
    this.geo = {
      type: 'Point',
      coordinates: [this.location.longitude, this.location.latitude]
    };
  }
  next();
});

InspectionSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret: any) {
    ret.id = ret._id.toString();
    delete ret._id;
    delete ret.geo;
  }
});

export const InspectionModel = mongoose.model<InspectionDocument>('Inspection', InspectionSchema);
