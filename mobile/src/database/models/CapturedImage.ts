import { Model } from '@nozbe/watermelondb';
import { field, text, date, relation } from '@nozbe/watermelondb/decorators';
import Inspection from './Inspection';

export default class CapturedImage extends Model {
  static table = 'captured_images';

  @text('inspection_id') inspectionId!: string;
  @relation('inspections', 'inspection_id') inspection!: Inspection;
  @text('local_file_path') localFilePath!: string;
  @text('image_type') imageType!: string; // "front" | "back" | "label" | "other"
  @date('captured_at') capturedAt!: number;
  @field('quality_score') qualityScore?: number;
  @field('uploaded') uploaded!: boolean;
}
