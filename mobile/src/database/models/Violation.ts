import { Model } from '@nozbe/watermelondb';
import { field, text, relation } from '@nozbe/watermelondb/decorators';
import Inspection from './Inspection';

export default class Violation extends Model {
  static table = 'violations';

  static associations = {
    inspections: { type: 'belongs_to' as const, key: 'inspection_id' as const },
  };

  @text('inspection_id') inspectionId!: string;
  @relation('inspections', 'inspection_id') inspection!: Inspection;
  @text('rule_id') ruleId!: string;
  @text('rule_version') ruleVersion!: string;
  @text('observed_value') observedValue!: string;
  @text('expected_value') expectedValue!: string;
  @field('confidence') confidence!: number;
  @text('evidence_region') evidenceRegion?: string;
  @field('inspector_verified') inspectorVerified!: boolean;

  // Calibration telemetry
  @field('reference_width_mm') referenceWidthMm?: number;
  @field('reference_width_pixels') referenceWidthPixels?: number;
  @field('detected_text_height_pixels') detectedTextHeightPixels?: number;
  @field('computed_scale') computedScale?: number;
  @field('computed_physical_height') computedPhysicalHeight?: number;
  @field('calibration_confidence') calibrationConfidence?: number;
}
