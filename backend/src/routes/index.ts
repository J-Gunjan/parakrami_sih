import { Router } from 'express';
import { healthRouter } from './health.routes.js';
import ocrRouter from './ocr.routes.js';

export const apiRouter = Router();

// Health check endpoint
apiRouter.use('/', healthRouter);

// OCR extraction & enrichment endpoints
apiRouter.use('/ocr', ocrRouter);

// Stubs for future phases
apiRouter.get('/v1/inspections/stub', (_req, res) => {
  res.json({ message: 'Inspection API stub ready for Phase 4/5' });
});

apiRouter.get('/v1/rules/stub', (_req, res) => {
  res.json({ message: 'Legal Metrology Rules API stub ready for Phase 3' });
});
