import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: 'officers',
      columns: [
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'token_cache', type: 'string', isOptional: true },
      ],
    }),
    tableSchema({
      name: 'inspections',
      columns: [
        { name: 'officer_id', type: 'string', isIndexed: true },
        { name: 'shop_name', type: 'string' },
        { name: 'location_lat', type: 'number', isOptional: true },
        { name: 'location_lng', type: 'number', isOptional: true },
        { name: 'address', type: 'string', isOptional: true },
        { name: 'market', type: 'string', isOptional: true },
        { name: 'district', type: 'string', isOptional: true },
        { name: 'created_at', type: 'number' },
        { name: 'status', type: 'string' },
        { name: 'sync_status', type: 'string' },
      ],
    }),
    tableSchema({
      name: 'products',
      columns: [
        { name: 'inspection_id', type: 'string', isIndexed: true },
        { name: 'declaration_fields', type: 'string' }, // Storing JSON string for flexibility
      ],
    }),
    tableSchema({
      name: 'captured_images',
      columns: [
        { name: 'inspection_id', type: 'string', isIndexed: true },
        { name: 'local_file_path', type: 'string' },
        { name: 'image_type', type: 'string' }, // "front" | "back" | "label" | "other"
        { name: 'captured_at', type: 'number' },
        { name: 'quality_score', type: 'number', isOptional: true },
        { name: 'uploaded', type: 'boolean' },
      ],
    }),
    tableSchema({
      name: 'violations',
      columns: [
        { name: 'inspection_id', type: 'string', isIndexed: true },
        { name: 'rule_id', type: 'string' },
        { name: 'rule_version', type: 'string' },
        { name: 'observed_value', type: 'string' },
        { name: 'expected_value', type: 'string' },
        { name: 'confidence', type: 'number' },
        { name: 'evidence_region', type: 'string', isOptional: true },
        { name: 'inspector_verified', type: 'boolean' },
      ],
    }),
    tableSchema({
      name: 'sync_queue_items',
      columns: [
        { name: 'entity_type', type: 'string' },
        { name: 'entity_id', type: 'string' },
        { name: 'action', type: 'string' },
        { name: 'attempts', type: 'number' },
        { name: 'last_error', type: 'string', isOptional: true },
      ],
    }),
  ],
});
