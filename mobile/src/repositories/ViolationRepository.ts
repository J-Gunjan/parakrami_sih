import { database } from '../database';
import Violation from '../database/models/Violation';

export class ViolationRepository {
  static async create(data: {
    inspectionId: string;
    ruleId: string;
    ruleVersion: string;
    observedValue: string;
    expectedValue: string;
    confidence: number;
    evidenceRegion?: string;
  }): Promise<Violation> {
    return await database.write(async () => {
      return await database.get<Violation>('violations').create(v => {
        v.inspectionId = data.inspectionId;
        v.ruleId = data.ruleId;
        v.ruleVersion = data.ruleVersion;
        v.observedValue = data.observedValue;
        v.expectedValue = data.expectedValue;
        v.confidence = data.confidence;
        v.evidenceRegion = data.evidenceRegion;
        v.inspectorVerified = false;
      });
    });
  }

  static async listForInspection(inspectionId: string): Promise<Violation[]> {
    const inspection = await database.get<any>('inspections').find(inspectionId);
    return await inspection.violations.fetch();
  }
}
