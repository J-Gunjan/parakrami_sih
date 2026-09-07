import { database } from '../database';
import Inspection from '../database/models/Inspection';
import Product from '../database/models/Product';
import CapturedImage from '../database/models/CapturedImage';
import Violation from '../database/models/Violation';

const API_URL = process.env.EXPO_PUBLIC_API_URL || 'http://127.0.0.1:5000/api';

export class SyncManager {
  /**
   * Reads pending inspections from WatermelonDB, sends them to backend, and stores results.
   */
  async syncPendingInspections(): Promise<{ success: number; failed: number }> {
    let successCount = 0;
    let failedCount = 0;

    const pendingInspections = await database.get<Inspection>('inspections')
      .query()
      .fetch(); // For demo, we just try to sync all or those with sync_status='PENDING_SYNC'
    
    // Filter to only those pending
    const toSync = pendingInspections.filter(i => i.syncStatus !== 'synced');

    for (const inspection of toSync) {
      try {
        const products = await inspection.products.fetch();
        const images = await inspection.capturedImages.fetch();
        
        // Base64 encode images (In a real app, read from local filePath using expo-file-system)
        // For this demo, we'll assume we have a mock string or we use a library to convert.
        // We'll just pass placeholder strings to represent base64.
        const imagePayload = images.map(img => ({
          imageType: img.imageType,
          base64Data: 'mock_base64_data_for_' + img.localFilePath
        }));

        const payload = {
          inspectionId: inspection.id,
          shopName: inspection.shopName,
          commodityCategory: 'PACKAGED_FOOD', // Defaulting for demo
          packageType: 'BOX',
          inspectionDate: inspection.createdAt,
          images: imagePayload
        };

        const response = await fetch(`${API_URL}/inspections/sync`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
           throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();
        
        // Write results to local DB
        await database.write(async () => {
          const violationCollection = database.get<Violation>('violations');
          const batch: any[] = [];
          
          for (const res of data.evaluationResults) {
            batch.push(violationCollection.prepareCreate(v => {
              v.inspectionId = inspection.id;
              v.ruleId = res.ruleId;
              v.ruleCode = res.ruleCode;
              v.ruleVersion = res.ruleVersion;
              v.status = res.status;
              v.observedValue = res.observedValue;
              v.expectedValue = res.expectedValue;
              v.reason = res.reason;
              v.severity = res.severity;
              v.confidence = res.confidence;
              v.sourceAct = res.legalSource.act;
              v.sourceRule = res.legalSource.rule;
              v.sourceNotification = res.legalSource.notification || '';
              v.sourceReference = res.legalSource.reference || '';
              v.verificationStatus = res.verificationStatus;
              v.inspectorVerified = false;
            }));
          }
          
          const iRecord = await database.get<Inspection>('inspections').find(inspection.id);
          batch.push(iRecord.prepareUpdate(i => {
            i.syncStatus = 'synced';
          }));

          await database.batch(...batch);
        });

        successCount++;
      } catch (err) {
        console.error('Failed to sync inspection', inspection.id, err);
        failedCount++;
      }
    }

    return { success: successCount, failed: failedCount };
  }
}

export const syncManager = new SyncManager();
