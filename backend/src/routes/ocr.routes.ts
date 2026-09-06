import { Router, Request, Response } from 'express';
import multer from 'multer';
import { GeminiOCRService } from '../services/GeminiOCRService';
import { GeminiLLMEnrichmentService } from '../services/LLMEnrichmentService';
import { OCRBlock } from '../services/CloudOCRService';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

const cloudOCR = new GeminiOCRService();
const llmEnrichment = new GeminiLLMEnrichmentService();

router.post('/extract', upload.single('image'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }
    
    // Pass req.file.buffer to Gemini
    const result = await cloudOCR.extractText(req.file.buffer);
    
    res.json(result); // Returns { blocks, geminiFields, rawText }
  } catch (error: any) {
    console.error("Cloud OCR Endpoint Error:", error.message || error);
    res.status(500).json({ 
      error: error.message || 'Failed to extract text from image' 
    });
  }
});

router.post('/enrich', async (req: Request, res: Response) => {
  try {
    const { residualBlocks } = req.body;
    
    if (!residualBlocks || !Array.isArray(residualBlocks)) {
      return res.status(400).json({ error: 'Invalid residual blocks provided' });
    }

    const enrichedFields = await llmEnrichment.enrichFields(residualBlocks as OCRBlock[]);
    
    res.json({ enrichedFields });
  } catch (error: any) {
    console.error("LLM Enrichment Endpoint Error:", error.message || error);
    res.status(500).json({ 
      error: error.message || 'Failed to enrich text blocks' 
    });
  }
});

export default router;
