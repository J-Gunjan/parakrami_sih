import { database } from '../database';
import Product from '../database/models/Product';

export class ProductRepository {
  static async create(inspectionId: string, declarationFields: any, barcodeOrGtin?: string | null): Promise<Product> {
    return await database.write(async () => {
      return await database.get<Product>('products').create(product => {
        product.inspectionId = inspectionId;
        product.barcodeOrGtin = barcodeOrGtin || undefined;
        product.declarationFields = JSON.stringify(declarationFields);
      });
    });
  }

  static async listForInspection(inspectionId: string): Promise<Product[]> {
    const inspection = await database.get<any>('inspections').find(inspectionId);
    return await inspection.products.fetch();
  }
}
