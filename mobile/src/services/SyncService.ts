import { database } from '../database';
import SyncQueueItem from '../database/models/SyncQueueItem';
import Product from '../database/models/Product';
import { Q } from '@nozbe/watermelondb';
import { Platform } from 'react-native';
import { getBackendUrl } from '../utils/api';

export class SyncService {
  /**
   * Processes all pending items in the sync queue.
   */
  static async processQueue() {
    const queueItems = await database.get<SyncQueueItem>('sync_queue_items').query().fetch();

    for (const item of queueItems) {
      if (item.action === 'ENRICH_PRODUCT' && item.entityType === 'product') {
        await this.processEnrichProduct(item);
      }
      // other actions would go here in later phases
    }
  }

  private static async processEnrichProduct(item: SyncQueueItem) {
    try {
      const product = await database.get<Product>('products').find(item.entityId);
      
      const declarationFields = JSON.parse(product.declarationFields);
      
      if (!declarationFields._pendingEnrichment) {
        // Nothing to enrich
        await database.write(async () => {
          await item.destroyPermanently();
        });
        return;
      }

      const residualBlocks = declarationFields._pendingEnrichment;

      const enrichUrl = `${getBackendUrl()}/api/ocr/enrich`;

      const response = await fetch(enrichUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ residualBlocks })
      });

      if (!response.ok) {
        throw new Error(`Enrichment API failed with status ${response.status}`);
      }

      const data = await response.json();
      
      await database.write(async () => {
        await product.update(p => {
          const fields = JSON.parse(p.declarationFields);
          
          if (data.enrichedFields) {
            // Mock merging
            if (data.enrichedFields.manufacturerName && !fields.manufacturer) {
              fields.manufacturer = data.enrichedFields.manufacturerName;
            }
          }
          
          // Remove pending enrichment
          delete fields._pendingEnrichment;
          p.declarationFields = JSON.stringify(fields);
        });

        // Remove item from queue
        await item.destroyPermanently();
      });

      console.log(`Successfully enriched product ${product.id}`);
    } catch (error: any) {
      console.error(`Failed to process ENRICH_PRODUCT for ${item.entityId}`, error);
      await database.write(async () => {
        await item.update(i => {
          i.attempts += 1;
          i.lastError = error.message;
        });
      });
    }
  }
}
