import mongoose, { Schema, Document } from 'mongoose';
import { Product as SharedProduct } from '@nyayalabel/shared';

export interface ProductDocument extends Document, Omit<SharedProduct, 'id'> {}

const ProductDimensionsSchema = new Schema({
  principalDisplayAreaCm2: { type: Number },
  packageHeightMm: { type: Number },
  packageWidthMm: { type: Number },
  packageDepthMm: { type: Number }
}, { _id: false });

const ProductSchema = new Schema<ProductDocument>({
  inspectionId: { type: String, required: true, index: true },
  category: { type: String, required: true },
  barcodeOrGtin: { type: String },
  brandName: { type: String },
  declarationFields: { type: Schema.Types.Mixed, required: true },
  extractedDeclarations: { type: Schema.Types.Mixed },
  dimensions: { type: ProductDimensionsSchema },
  imageIds: { type: [String], default: [] },
  status: {
    type: String,
    enum: ['PENDING_ANALYSIS', 'ANALYZED', 'VERIFIED', 'FLAGGED'],
    default: 'PENDING_ANALYSIS'
  },
  complianceResult: {
    decision: { type: String, enum: ['PASS', 'REVIEW', 'FAIL'] },
    score: { type: Number },
    // Storing violation references loosely or directly inside
    violations: [{ type: Schema.Types.Mixed }]
  },
  verifiedByOfficer: { type: Boolean, default: false }
}, {
  timestamps: true
});

ProductSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret: any) {
    ret.id = ret._id.toString();
    delete ret._id;
  }
});

export const ProductModel = mongoose.model<ProductDocument>('Product', ProductSchema);
