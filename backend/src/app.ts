import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { apiRouter } from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import path from 'path';
import fs from 'fs';
import swaggerUi from 'swagger-ui-express';

export function createApp(): Express {
  const app = express();

  // Security and utility middleware
  app.use(helmet());
  
  // Configure CORS securely but broadly enough for local mobile dev (fetch from Android LAN IPs)
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
      // If origin is '*', credentials cannot be true. For demo purposes, we disable credentials since we don't use cookies from the mobile app.
      credentials: false,
    })
  );
  
  // Increase payload limits significantly to handle high-res 12MP camera image buffers
  app.use(express.json({ limit: '100mb' }));
  app.use(express.urlencoded({ extended: true, limit: '100mb' }));
  app.use(morgan('dev'));

  // Swagger UI
  const swaggerDocument = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src/openapi.json'), 'utf8'));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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

  // Serve uploads directory statically
  app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

  // Global error handler
  app.use(errorHandler);

  return app;
}
