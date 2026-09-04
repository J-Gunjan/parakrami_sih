import { Model } from '@nozbe/watermelondb';
import { field, text, children } from '@nozbe/watermelondb/decorators';

export default class Officer extends Model {
  static table = 'officers';

  static associations = {
    inspections: { type: 'has_many', foreignKey: 'officer_id' as const },
  };

  @text('name') name!: string;
  @text('email') email!: string;
  @text('token_cache') tokenCache?: string;

  @children('inspections') inspections!: any;
}
