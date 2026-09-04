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
  ],
});
