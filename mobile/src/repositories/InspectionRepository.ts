import { database } from '../database';
import Inspection from '../database/models/Inspection';

export class InspectionRepository {
  /**
   * Creates a new inspection
   */
  static async create(data: {
    officerId: string;
    shopName: string;
    locationLat?: number;
    locationLng?: number;
    address?: string;
    market?: string;
    district?: string;
  }): Promise<Inspection> {
    return await database.write(async () => {
      return await database.get<Inspection>('inspections').create(inspection => {
        inspection.officerId = data.officerId;
        inspection.shopName = data.shopName;
        inspection.locationLat = data.locationLat;
        inspection.locationLng = data.locationLng;
        inspection.address = data.address;
        inspection.market = data.market;
        inspection.district = data.district;
        inspection.createdAt = Date.now();
        inspection.status = 'draft';
        inspection.apiSyncStatus = 'pending';
      });
    });
  }

  /**
   * Retrieves an inspection by ID
   */
  static async getById(id: string): Promise<Inspection> {
    return await database.get<Inspection>('inspections').find(id);
  }

  /**
   * Lists all inspections
   */
  static async listAll(): Promise<Inspection[]> {
    return await database.get<Inspection>('inspections').query().fetch();
  }

  /**
   * Updates an inspection status
   */
  static async updateStatus(id: string, status: string): Promise<Inspection> {
    return await database.write(async () => {
      const inspection = await this.getById(id);
      await inspection.update(i => {
        i.status = status;
        i.apiSyncStatus = 'pending';
      });
      return inspection;
    });
  }
}
