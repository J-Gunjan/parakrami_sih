import { schemaMigrations, addColumns } from '@nozbe/watermelondb/Schema/migrations';

export default schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        addColumns({
          table: 'inspections',
          columns: [
            { name: 'market', type: 'string', isOptional: true },
            { name: 'district', type: 'string', isOptional: true },
          ],
        }),
      ],
    },
    {
      toVersion: 3,
      steps: [
        addColumns({
          table: 'products',
          columns: [
            { name: 'barcode_or_gtin', type: 'string', isOptional: true },
          ],
        }),
      ],
    },
    {
      toVersion: 4,
      steps: [
        addColumns({
          table: 'violations',
          columns: [
            { name: 'rule_code', type: 'string' },
            { name: 'status', type: 'string' },
            { name: 'reason', type: 'string' },
            { name: 'severity', type: 'string' },
            { name: 'source_act', type: 'string' },
            { name: 'source_rule', type: 'string' },
            { name: 'source_notification', type: 'string', isOptional: true },
            { name: 'source_reference', type: 'string', isOptional: true },
            { name: 'verification_status', type: 'string' },
            { name: 'reference_width_mm', type: 'number', isOptional: true },
            { name: 'reference_width_pixels', type: 'number', isOptional: true },
            { name: 'detected_text_height_pixels', type: 'number', isOptional: true },
            { name: 'computed_scale', type: 'number', isOptional: true },
            { name: 'computed_physical_height', type: 'number', isOptional: true },
            { name: 'calibration_confidence', type: 'number', isOptional: true },
          ],
        }),
      ],
    },
    {
      toVersion: 5,
      steps: [
        addColumns({
          table: 'inspections',
          columns: [
            { name: 'compliance_status', type: 'string', isOptional: true },
          ],
        }),
      ],
    },
    {
      toVersion: 6,
      steps: [
        addColumns({
          table: 'violations',
          columns: [
            { name: 'ai_explanation', type: 'string', isOptional: true },
            { name: 'evidence_image_path', type: 'string', isOptional: true },
            { name: 'inspector_note', type: 'string', isOptional: true },
          ],
        }),
      ],
    },
  ],
});
