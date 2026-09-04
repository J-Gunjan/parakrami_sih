import { Model } from '@nozbe/watermelondb';
import { field, text, relation } from '@nozbe/watermelondb/decorators';
import Inspection from './Inspection';

export default class Violation extends Model {
  static table = 'violations';

  @text('inspection_id') inspectionId!: string;
  @relation('inspections', 'inspection_id') inspection!: Inspection;
  @text('rule_id') ruleId!: string;
  @text('rule_version') ruleVersion!: string;
  @text('observed_value') observedValue!: string;
  @text('expected_value') expectedValue!: string;
  @field('confidence') confidence!: number;
  @text('evidence_region') evidenceRegion?: string;
  @field('inspector_verified') inspectorVerified!: boolean;
}
