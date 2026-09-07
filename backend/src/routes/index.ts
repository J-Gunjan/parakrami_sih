import { Router } from 'express';
import { healthRouter } from './health.routes.js';
import ocrRouter from './ocr.routes.js';
import { rulesRouter } from './rules.routes.js';
import { syncRouter } from './sync.routes.js';

export const apiRouter = Router();

// Health check endpoint
apiRouter.use('/', healthRouter);

// OCR extraction & enrichment endpoints
apiRouter.use('/ocr', ocrRouter);

// Rule Engine endpoints
apiRouter.use('/rules', rulesRouter);

// Sync endpoints
apiRouter.use('/inspections/sync', syncRouter);

// Stubs for future phases
apiRouter.get('/v1/inspections/stub', (_req, res) => {
  res.json({ message: 'Inspection API stub ready for Phase 4/5' });
});

apiRouter.get('/v1/rules/stub', (_req, res) => {
  res.json({ message: 'Legal Metrology Rules API stub ready for Phase 3' });
});
