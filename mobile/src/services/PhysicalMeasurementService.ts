import { 
  MarkerDetectionError, 
  IMarkerDetectionService, 
  markerDetectionService 
} from './MarkerDetectionService';

export interface CalibrationData {
  referenceWidthMM: number;
  referenceWidthPixels: number;
  detectedTextHeightPixels: number;
  computedScale: number;
  computedPhysicalHeightMM: number;
  calibrationConfidence: number;
}

export type MeasurementResultType = 'PASS' | 'FAIL' | 'REVIEW';

export interface MeasurementEvaluation {
  resultType: MeasurementResultType;
  calibrationData?: CalibrationData;
  error?: MarkerDetectionError;
  errorMessage?: string;
}

export class PhysicalMeasurementService {
  private markerDetector: IMarkerDetectionService;

  constructor(detector: IMarkerDetectionService = markerDetectionService) {
    this.markerDetector = detector;
  }

  /**
   * Evaluates the physical height of text based on an image containing a reference marker.
   * @param imageUri URI of the captured image
   * @param detectedTextHeightPixels The height of the text bounding box in pixels
   * @param thresholdMM The legal threshold in mm (e.g., 2.00)
   * @param knownWidthMM The known width of the reference marker in mm (default 50)
   * @param margin The margin for PASS/FAIL certainty (default 0.05 for 5%)
   */
  async evaluateTextHeight(
    imageUri: string,
    detectedTextHeightPixels: number,
    thresholdMM: number,
    knownWidthMM: number = 50,
    margin: number = 0.05
  ): Promise<MeasurementEvaluation> {
    
    // 1. Detect Reference Marker
    const markerResult = await this.markerDetector.detectMarker(imageUri);
    
    if (!markerResult.success || !markerResult.pixelWidth) {
      return {
        resultType: 'REVIEW',
        error: markerResult.error,
        errorMessage: markerResult.errorMessage || 'Marker detection failed. Manual verification required.',
      };
    }

    // 2. Compute Scale (pixels per mm)
    const scale = markerResult.pixelWidth / knownWidthMM;

    // 3. Compute Physical Height (mm)
    const physicalHeightMM = detectedTextHeightPixels / scale;

    // 4. Evaluate against threshold with margins
    const confidence = markerResult.confidence || 1.0;
    
    // If confidence is too low from the detector, force REVIEW regardless of math
    if (confidence < 0.7) {
        return {
            resultType: 'REVIEW',
            error: MarkerDetectionError.INSUFFICIENT_CONFIDENCE,
            errorMessage: 'Measurement confidence too low. Manual verification required.',
            calibrationData: {
                referenceWidthMM: knownWidthMM,
                referenceWidthPixels: markerResult.pixelWidth,
                detectedTextHeightPixels,
                computedScale: scale,
                computedPhysicalHeightMM: physicalHeightMM,
                calibrationConfidence: confidence,
            }
        };
    }

    let resultType: MeasurementResultType = 'REVIEW';

    // e.g. 2.00 threshold with 5% margin -> PASS if >= 2.10, FAIL if <= 1.90, REVIEW if 1.90 - 2.10
    const marginAmount = thresholdMM * margin;
    
    if (physicalHeightMM >= thresholdMM + marginAmount) {
      resultType = 'PASS';
    } else if (physicalHeightMM <= thresholdMM - marginAmount) {
      resultType = 'FAIL';
    }

    return {
      resultType,
      calibrationData: {
        referenceWidthMM: knownWidthMM,
        referenceWidthPixels: markerResult.pixelWidth,
        detectedTextHeightPixels,
        computedScale: scale,
        computedPhysicalHeightMM: physicalHeightMM,
        calibrationConfidence: confidence,
      }
    };
  }
}

export const physicalMeasurementService = new PhysicalMeasurementService();
