import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';

export function createApp(): Express {
  const app = express();

  // Security and utility middleware
  app.use(helmet());
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*',
      credentials: true,
    })
  );
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ extended: true, limit: '50mb' }));
  app.use(morgan('dev'));

  // Root welcome route
  app.get('/', (_req, res) => {
    res.json({
      name: 'NyayaLabel AI Backend REST API',
      status: 'online',
      documentation: '/docs',
      health: '/api/health',
    });
  });

  // Mount API router
  app.use('/api', apiRouter);

  // Global error handler
  app.use(errorHandler);

  return app;
}
