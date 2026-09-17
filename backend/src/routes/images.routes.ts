import { Router } from 'express';
import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import fs from 'fs';

const router = Router();

import { uploadLimiter } from '../middlewares/rateLimit.middleware.js';
router.use('/upload', uploadLimiter);

// Configure local storage (in production, use AWS S3 / GCS)
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname) || '.jpg';
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

import { authenticateToken } from '../middlewares/auth.middleware.js';

router.post('/upload', authenticateToken, upload.single('image'), (req, res): any => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: 'No image uploaded' });
  }

  try {
    const fileBuffer = fs.readFileSync(req.file.path);
    const hash = crypto.createHash('sha256').update(fileBuffer).digest('hex');

    // Return the relative URL so the client can construct the full URI or the backend can serve it
    const imageUrl = `/uploads/${req.file.filename}`;

    return res.status(200).json({
      success: true,
      imageUrl,
      hash,
    });
  } catch (error: any) {
    console.error('[IMAGE UPLOAD] Failed to process image:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

export const imageRoutes = router;
