import { ProductRepository } from '../repositories/ProductRepository';
import { database } from '../database';
import Violation from '../database/models/Violation';
import { physicalMeasurementService, MeasurementEvaluation } from './PhysicalMeasurementService';
import { MappedField } from './SemanticMappingService';
import { ImageRepository } from '../repositories/ImageRepository';
import { MarkerDetectionError } from './MarkerDetectionService';

export class RuleEvaluationService {
  /**
   * Evaluates the extracted fields against legal rules and generates violations.
   */
  async evaluateProduct(productId: string, inspectionId: string, extractedFields: Record<string, any>) {
    const violationsData: any[] = [];
    
    // Example Rule: Net Quantity Declaration Size
    // For packages 50g-200g, min height is usually 2mm. Let's assume a static 2mm threshold for this phase.
    const netQtyField: MappedField | undefined = extractedFields._rawNetQuantity; // Assuming we pass the raw mapped field with boundingBox

    if (netQtyField && netQtyField.boundingBox) {
      const textHeight = netQtyField.boundingBox.height;
      
      // We need the reference image. Try to find if a reference marker image was captured.
      const images = await ImageRepository.listForInspection(inspectionId);
      const referenceImage = images.find(img => img.imageType === 'reference');

      let evaluation: MeasurementEvaluation;

      if (referenceImage) {
        evaluation = await physicalMeasurementService.evaluateTextHeight(
          referenceImage.localFilePath,
          textHeight,
          2.00 // 2mm threshold
        );
      } else {
        // No reference image, meaning we can't measure physical height
        evaluation = {
          resultType: 'REVIEW',
          error: MarkerDetectionError.NOT_FOUND,
          errorMessage: 'No reference marker image captured. Physical measurement unavailable.'
        };
      }

      // If it's FAIL or REVIEW, we create a violation record for the inspector to verify
      if (evaluation.resultType === 'FAIL' || evaluation.resultType === 'REVIEW') {
        violationsData.push({
          inspection_id: inspectionId,
          rule_id: 'NET_QTY_SIZE',
          rule_version: '1.0',
          observed_value: evaluation.calibrationData?.computedPhysicalHeightMM 
            ? `${evaluation.calibrationData.computedPhysicalHeightMM.toFixed(2)}mm` 
            : 'Unknown',
          expected_value: '>= 2.00mm',
          confidence: evaluation.calibrationData?.calibrationConfidence ?? 0,
          evidence_region: JSON.stringify(netQtyField.boundingBox),
          inspector_verified: false,
          
          // Calibration telemetry
          reference_width_mm: evaluation.calibrationData?.referenceWidthMM,
          reference_width_pixels: evaluation.calibrationData?.referenceWidthPixels,
          detected_text_height_pixels: evaluation.calibrationData?.detectedTextHeightPixels,
          computed_scale: evaluation.calibrationData?.computedScale,
          computed_physical_height: evaluation.calibrationData?.computedPhysicalHeightMM,
          calibration_confidence: evaluation.calibrationData?.calibrationConfidence,
        });
      }
    }

    // Example Rule: Missing MRP
    if (!extractedFields.mrp) {
      violationsData.push({
        inspection_id: inspectionId,
        rule_id: 'MISSING_MRP',
        rule_version: '1.0',
        observed_value: 'Missing',
        expected_value: 'Present',
        confidence: 0.9,
        inspector_verified: false,
      });
    }

    // Save all generated violations
    if (violationsData.length > 0) {
      await database.write(async () => {
        const violationsCollection = database.get<Violation>('violations');
        const batch = violationsData.map(v => violationsCollection.prepareCreate((record: any) => {
          record.inspectionId = v.inspection_id;
          record.ruleId = v.rule_id;
          record.ruleVersion = v.rule_version;
          record.observedValue = v.observed_value;
          record.expectedValue = v.expected_value;
          record.confidence = v.confidence;
          record.evidenceRegion = v.evidence_region;
          record.inspectorVerified = v.inspector_verified;
          
          record.referenceWidthMm = v.reference_width_mm;
          record.referenceWidthPixels = v.reference_width_pixels;
          record.detectedTextHeightPixels = v.detected_text_height_pixels;
          record.computedScale = v.computed_scale;
          record.computedPhysicalHeight = v.computed_physical_height;
          record.calibrationConfidence = v.calibration_confidence;
        }));
        await database.batch(...batch);
      });
    }
  }
}

export const ruleEvaluationService = new RuleEvaluationService();
