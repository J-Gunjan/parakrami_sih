export interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface EvidenceRegion {
  boundingBox: BoundingBox;
  imageId: string;
  label?: string;
  confidence?: number;
  textSnippet?: string;
  measuredFontHeightMm?: number;
  areaCoverageRatio?: number;
}

export type ImageType = 'front' | 'back' | 'label' | 'measurement' | 'other';

export interface ImageQualityMetrics {
  blurScore: number;
  glareScore: number;
  lightingScore: number;
  skewAngleDegree: number;
  isAcceptable: boolean;
  issues: string[];
}

export interface CapturedImage {
  id: string;
  inspectionId: string;
  productId?: string;
  localFilePath: string;
  remoteUrl?: string;
  imageType: ImageType;
  capturedAt: string;
  qualityScore: number;
  qualityMetrics?: ImageQualityMetrics;
  uploaded: boolean;
  syncedAt?: string;
}
