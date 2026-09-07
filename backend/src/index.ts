import 'dotenv/config';
import mongoose from 'mongoose';
import { createApp } from './app.js';

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGO_URI;
if (!MONGODB_URI) {
  console.error('❌ MONGO_URI environment variable is not defined.');
  process.exit(1);
}
const app = createApp();

let server: any;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log(`🍃 Connected to MongoDB at ${MONGODB_URI.split('@').pop()}`);
    server = app.listen(Number(PORT), '0.0.0.0', () => {
      console.log(`⚖️  NyayaLabel AI Backend REST API listening on 0.0.0.0:${PORT}`);
      console.log(`📡 Health check available at: http://localhost:${PORT}/api/health`);
      console.log(`🔑 GEMINI_API_KEY configured: ${!!process.env.GEMINI_API_KEY}`);
    });
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err);
    process.exit(1);
  });

// Graceful shutdown handling
process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received: closing HTTP server gracefully...');
  if (server) server.close();
  await mongoose.disconnect();
  console.log('HTTP server & MongoDB closed.');
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('SIGINT signal received: closing HTTP server...');
  if (server) server.close();
  await mongoose.disconnect();
  console.log('HTTP server & MongoDB closed.');
  process.exit(0);
});
