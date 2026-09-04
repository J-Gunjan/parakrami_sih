import { Model } from '@nozbe/watermelondb';
import { text, relation } from '@nozbe/watermelondb/decorators';
import Inspection from './Inspection';

export default class Product extends Model {
  static table = 'products';

  static associations = {
    inspections: { type: 'belongs_to', key: 'inspection_id' as const },
  };

  @text('inspection_id') inspectionId!: string;
  @relation('inspections', 'inspection_id') inspection!: Inspection;
  @text('barcode_or_gtin') barcodeOrGtin?: string;
  @text('declaration_fields') declarationFields!: string;
}
