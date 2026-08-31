export type SyncStatus = 'synced' | 'pending' | 'failed';

export type SyncAction = 'CREATE' | 'UPDATE' | 'DELETE';

export type EntityType = 'INSPECTION' | 'PRODUCT' | 'CAPTURED_IMAGE' | 'VIOLATION' | 'REPORT';

export interface SyncQueueItem {
  id: string;
  entityType: EntityType;
  entityId: string;
  action: SyncAction;
  payload?: Record<string, unknown>;
  attempts: number;
  lastError?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SyncResponse {
  success: boolean;
  syncedCount: number;
  failedCount: number;
  errors?: Array<{ entityId: string; error: string }>;
  timestamp: string;
}
