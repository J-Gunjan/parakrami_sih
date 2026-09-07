import { appSchema, tableSchema } from '@nozbe/watermelondb';

export default appSchema({
  version: 4,
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
        { name: 'barcode_or_gtin', type: 'string', isOptional: true },
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
        { name: 'rule_code', type: 'string' },
        { name: 'rule_version', type: 'string' },
        { name: 'status', type: 'string' }, // PASS, FAIL, REVIEW, NOT_APPLICABLE
        { name: 'observed_value', type: 'string' },
        { name: 'expected_value', type: 'string' },
        { name: 'reason', type: 'string' },
        { name: 'severity', type: 'string' },
        { name: 'confidence', type: 'number' },
        { name: 'evidence_region', type: 'string', isOptional: true },
        { name: 'inspector_verified', type: 'boolean' },
        
        // Legal Traceability
        { name: 'source_act', type: 'string' },
        { name: 'source_rule', type: 'string' },
        { name: 'source_notification', type: 'string', isOptional: true },
        { name: 'source_reference', type: 'string', isOptional: true },
        { name: 'verification_status', type: 'string' },

        // Calibration telemetry for physical measurement
        { name: 'reference_width_mm', type: 'number', isOptional: true },
        { name: 'reference_width_pixels', type: 'number', isOptional: true },
        { name: 'detected_text_height_pixels', type: 'number', isOptional: true },
        { name: 'computed_scale', type: 'number', isOptional: true },
        { name: 'computed_physical_height', type: 'number', isOptional: true },
        { name: 'calibration_confidence', type: 'number', isOptional: true },
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
