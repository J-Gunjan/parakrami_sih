import 'dotenv/config';
import { createApp } from './app.js';

const PORT = process.env.PORT || 5000;
const app = createApp();

const server = app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`⚖️  NyayaLabel AI Backend REST API listening on 0.0.0.0:${PORT}`);
  console.log(`📡 Health check available at: http://localhost:${PORT}/api/health`);
  console.log(`🔑 GEMINI_API_KEY configured: ${!!process.env.GEMINI_API_KEY}`);
});

// Graceful shutdown handling
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server gracefully...');
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server...');
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });
});
