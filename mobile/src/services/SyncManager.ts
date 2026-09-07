import { database } from '../database';
import Inspection from '../database/models/Inspection';
import Product from '../database/models/Product';
import CapturedImage from '../database/models/CapturedImage';
import Violation from '../database/models/Violation';
import { getBackendUrl } from '../utils/api';
import NetInfo from '@react-native-community/netinfo';

export class SyncManager {
  /**
   * Reads pending inspections from WatermelonDB, sends them to backend, and stores results.
   */
  async syncPendingInspections(): Promise<{ success: number; failed: number }> {
    let successCount = 0;
    let failedCount = 0;

    const netInfo = await NetInfo.fetch();
    console.log(`[SYNC] Network status: ${netInfo.isConnected ? 'ONLINE' : 'OFFLINE'}`);
    
    if (!netInfo.isConnected) {
      console.log(`[SYNC] Cannot sync, device is offline.`);
      return { success: 0, failed: 0 };
    }

    const pendingInspections = await database.get<Inspection>('inspections')
      .query()
      .fetch();
    
    const toSync = pendingInspections.filter(i => i.apiSyncStatus !== 'synced');
    console.log(`[SYNC] Pending inspections found: ${toSync.length}`);

    for (const inspection of toSync) {
      try {
        console.log(`[SYNC] Attempting sync: inspectionId=${inspection.id}`);
        
        const products = await inspection.products.fetch();
        const images = await inspection.capturedImages.fetch();
        
        const imagePayload = images.map(img => ({
          imageType: img.imageType,
          base64Data: 'mock_base64_data_for_' + img.localFilePath
        }));

        const payload = {
          inspectionId: inspection.id,
          shopName: inspection.shopName,
          commodityCategory: 'PACKAGED_FOOD', 
          packageType: 'BOX',
          inspectionDate: inspection.createdAt,
          images: imagePayload
        };

        const backendUrl = getBackendUrl();
        const syncEndpoint = `${backendUrl}/api/inspections/sync`;
        console.log(`[SYNC] Backend URL: ${syncEndpoint}`);
        console.log(`[SYNC] Sending inspection to backend...`);

        const response = await fetch(syncEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        console.log(`[SYNC] Response status: ${response.status}`);

        if (!response.ok) {
           const errBody = await response.text();
           console.error(`[SYNC ERROR] HTTP status: ${response.status}`);
           console.error(`[SYNC ERROR] response body: ${errBody}`);
           throw new Error(`Server returned ${response.status}`);
        }

        const data = await response.json();
        console.log(`[SYNC DEBUG] COMPLETE BACKEND RESPONSE: \n${JSON.stringify(data, null, 2)}`);
        console.log(`[SYNC] Backend compliance result received! Success flag: ${data.success}`);
        
        console.log(`[SYNC] Updating local inspection...`);
        await database.write(async () => {
          const violationCollection = database.get<Violation>('violations');
          const batch: any[] = [];
          
          if (data.evaluationResults && Array.isArray(data.evaluationResults)) {
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
                 v.sourceAct = res.legalSource?.act || '';
                 v.sourceRule = res.legalSource?.rule || '';
                 v.sourceNotification = res.legalSource?.notification || '';
                 v.sourceReference = res.legalSource?.reference || '';
                 v.verificationStatus = res.verificationStatus || 'UNVERIFIED';
                 v.aiExplanation = res.aiExplanation || '';
                 v.evidenceRegion = res.evidenceRegion || '';
                 v.evidenceImagePath = res.evidenceImagePath || '';
                 v.inspectorVerified = false;
               }));
             }
          }
          
          const iRecord = await database.get<Inspection>('inspections').find(inspection.id);
          batch.push(iRecord.prepareUpdate(i => {
            i.apiSyncStatus = 'synced';
            if (data.overallStatus) {
              i.complianceStatus = data.overallStatus;
            }
          }));

          await database.batch(...batch);
        });

        const updatedIRecord = await database.get<Inspection>('inspections').find(inspection.id);
        console.log(`[SYNC DEBUG] Local inspection after update:\n`, JSON.stringify({
          id: updatedIRecord.id,
          apiSyncStatus: updatedIRecord.apiSyncStatus,
          status: updatedIRecord.status,
          complianceStatus: updatedIRecord.complianceStatus
        }, null, 2));

        console.log(`[SYNC] Sync SUCCESS for inspectionId=${inspection.id}`);
        successCount++;
      } catch (err: any) {
        console.error(`[SYNC ERROR] Failed to sync inspection ${inspection.id}:`, err.message || err);
        failedCount++;
      }
    }

    return { success: successCount, failed: failedCount };
  }
}

export const syncManager = new SyncManager();
