import { Model } from '@nozbe/watermelondb';
import { text, relation } from '@nozbe/watermelondb/decorators';
import Inspection from './Inspection';

export default class Product extends Model {
  static table = 'products';

  @text('inspection_id') inspectionId!: string;
  @relation('inspections', 'inspection_id') inspection!: Inspection;
  @text('declaration_fields') declarationFields!: string;
}
