import { database } from '../database';
import Inspection from '../database/models/Inspection';
import CapturedImage from '../database/models/CapturedImage';
import Violation from '../database/models/Violation';
import SyncQueueItem from '../database/models/SyncQueueItem';
import { getBackendUrl } from '../utils/api';
import NetInfo from '@react-native-community/netinfo';
import { Q } from '@nozbe/watermelondb';

export class SyncManager {
  /**
   * Reads pending SyncQueueItems, processes them in order (images first, then JSON sync).
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

    // First, scan for any inspections that are not synced and add them to the queue if not already there
    await this.populateQueueForPendingInspections();

    // Get all pending queue items, ordered by creation (images should be uploaded before inspections sync)
    // Actually, watermelonDB doesn't guarantee order easily unless we have created_at. We will query UPLOAD_IMAGE first, then SYNC_INSPECTION.
    const imageUploadQueue = await database.get<SyncQueueItem>('sync_queue_items')
      .query(Q.where('action', 'UPLOAD_IMAGE'))
      .fetch();

    for (const item of imageUploadQueue) {
      try {
        await this.processImageUpload(item);
        successCount++;
      } catch (err: any) {
        console.error(`[SYNC ERROR] UPLOAD_IMAGE failed: ${err.message}`);
        failedCount++;
      }
    }

    const inspectionSyncQueue = await database.get<SyncQueueItem>('sync_queue_items')
      .query(Q.where('action', 'SYNC_INSPECTION'))
      .fetch();

    for (const item of inspectionSyncQueue) {
      try {
        await this.processInspectionSync(item);
        successCount++;
      } catch (err: any) {
        console.error(`[SYNC ERROR] SYNC_INSPECTION failed: ${err.message}`);
        failedCount++;
      }
    }

    return { success: successCount, failed: failedCount };
  }

  private async populateQueueForPendingInspections() {
    const pendingInspections = await database.get<Inspection>('inspections')
      .query(Q.where('sync_status', Q.notEq('synced')))
      .fetch();
      
    await database.write(async () => {
      for (const inspection of pendingInspections) {
        const queueCollection = database.get<SyncQueueItem>('sync_queue_items');
        
        // Check if SYNC_INSPECTION already exists for this
        const existingSync = await queueCollection.query(
          Q.where('action', 'SYNC_INSPECTION'), 
          Q.where('entity_id', inspection.id)
        ).fetch();
        
        if (existingSync.length === 0) {
          await queueCollection.create(item => {
            item.entityType = 'inspection';
            item.entityId = inspection.id;
            item.action = 'SYNC_INSPECTION';
            item.attempts = 0;
          });
        }
        
        const images = await inspection.capturedImages.fetch();
        for (const img of images) {
          if (!img.uploaded) {
            const existingUpload = await queueCollection.query(
              Q.where('action', 'UPLOAD_IMAGE'),
              Q.where('entity_id', img.id)
            ).fetch();
            
            if (existingUpload.length === 0) {
              await queueCollection.create(item => {
                item.entityType = 'captured_image';
                item.entityId = img.id;
                item.action = 'UPLOAD_IMAGE';
                item.attempts = 0;
              });
            }
          }
        }
      }
    });
  }

  private async processImageUpload(item: SyncQueueItem) {
    console.log(`[SYNC] Processing UPLOAD_IMAGE for CapturedImage ${item.entityId}`);
    
    // 1. Get the image record
    const capturedImage = await database.get<CapturedImage>('captured_images').find(item.entityId);
    
    if (capturedImage.uploaded) {
       await database.write(async () => {
         await item.destroyPermanently();
       });
       return;
    }

    const localUri = capturedImage.localFilePath;

    // 2. Prepare FormData
    const formData = new FormData();
    const filename = localUri.split('/').pop() || 'image.jpg';
    
    formData.append('image', {
      uri: localUri,
      name: filename,
      type: 'image/jpeg',
    } as any);

    // 3. Upload to backend
    const backendUrl = getBackendUrl();
    const uploadEndpoint = `${backendUrl}/api/images/upload`;
    
    const response = await fetch(uploadEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
       throw new Error(`Upload failed with status ${response.status}`);
    }

    const data = await response.json();
    if (data.success) {
      // 4. Update image record with remote URL
      await database.write(async () => {
        await capturedImage.update(img => {
           img.uploaded = true;
           // We are reusing localFilePath field to store the remote URL for now, or just use it during sync payload construction.
           // Since we don't have a remoteUrl field in the schema, we'll prefix it.
           img.localFilePath = backendUrl + data.imageUrl; // Safe enough hack since it's uploaded
        });
        await item.destroyPermanently();
      });
      console.log(`[SYNC] Successfully uploaded image. Remote URL: ${data.imageUrl}`);
    } else {
      throw new Error(data.error || 'Upload failed');
    }
  }

  private async processInspectionSync(item: SyncQueueItem) {
    const inspectionId = item.entityId;
    console.log(`[SYNC] Attempting SYNC_INSPECTION: inspectionId=${inspectionId}`);
    
    const inspection = await database.get<Inspection>('inspections').find(inspectionId);
    
    if (inspection.apiSyncStatus === 'synced') {
      await database.write(async () => {
         await item.destroyPermanently();
      });
      return;
    }

    const images = await inspection.capturedImages.fetch();
    
    // Check if any image is still pending upload
    if (images.some(img => !img.uploaded)) {
      throw new Error(`Cannot sync inspection yet, some images are not uploaded.`);
    }

    const imagePayload = images.map(img => ({
      imageType: img.imageType,
      remoteUrl: img.localFilePath // We stored remote URL here in processImageUpload
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

    const response = await fetch(syncEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
       const errBody = await response.text();
       throw new Error(`Server returned ${response.status}: ${errBody}`);
    }

    const data = await response.json();
    
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
      
      batch.push(inspection.prepareUpdate(i => {
        i.apiSyncStatus = 'synced';
        if (data.overallStatus) {
          i.complianceStatus = data.overallStatus;
        }
      }));

      batch.push(item.prepareDestroyPermanently());

      await database.batch(...batch);
    });

    console.log(`[SYNC] Sync SUCCESS for inspectionId=${inspection.id}`);
  }
}

export const syncManager = new SyncManager();
