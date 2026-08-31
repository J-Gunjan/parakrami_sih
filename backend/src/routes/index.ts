import { Router } from 'express';
import { healthRouter } from './health.routes.js';

export const apiRouter = Router();

// Health check endpoint
apiRouter.use('/', healthRouter);

// Stubs for future phases
apiRouter.get('/v1/inspections/stub', (_req, res) => {
  res.json({ message: 'Inspection API stub ready for Phase 4/5' });
});

apiRouter.get('/v1/rules/stub', (_req, res) => {
  res.json({ message: 'Legal Metrology Rules API stub ready for Phase 3' });
});
