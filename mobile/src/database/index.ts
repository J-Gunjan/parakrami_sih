import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import schema from './schema';

import Officer from './models/Officer';
import Inspection from './models/Inspection';
import Product from './models/Product';
import CapturedImage from './models/CapturedImage';
import Violation from './models/Violation';
import SyncQueueItem from './models/SyncQueueItem';

const adapter = new SQLiteAdapter({
  schema,
  // (You might want to pass migrations here later)
  jsi: true, /* Set to true if you are using JSI (required for modern WatermelonDB on Expo) */
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
    console.error('Database setup failed:', error);
  }
});

export const database = new Database({
  adapter,
  modelClasses: [
    Officer,
    Inspection,
    Product,
    CapturedImage,
    Violation,
    SyncQueueItem,
  ],
});
