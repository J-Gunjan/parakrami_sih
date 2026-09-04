import { Model } from '@nozbe/watermelondb';
import { field, text, date, relation, children } from '@nozbe/watermelondb/decorators';
import Officer from './Officer';

export default class Inspection extends Model {
  static table = 'inspections';

  @text('officer_id') officerId!: string;
  @relation('officers', 'officer_id') officer!: Officer;
  @text('shop_name') shopName!: string;
  @field('location_lat') locationLat?: number;
  @field('location_lng') locationLng?: number;
  @text('address') address?: string;
  @text('market') market?: string;
  @text('district') district?: string;
  @date('created_at') createdAt!: number;
  @text('status') status!: string;
  @text('sync_status') apiSyncStatus!: string;

  @children('products') products!: any;
  @children('captured_images') capturedImages!: any;
  @children('violations') violations!: any;
}
