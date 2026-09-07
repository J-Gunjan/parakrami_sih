import { Router, Request, Response } from 'express';
import multer from 'multer';
import { GeminiOCRService } from '../services/GeminiOCRService.js';
import { OcrSpaceService } from '../services/OcrSpaceService.js';
import { GeminiLLMEnrichmentService } from '../services/LLMEnrichmentService.js';
import { OCRBlock } from '../services/CloudOCRService.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

const geminiOCR = new GeminiOCRService();
const ocrSpace = new OcrSpaceService();
const llmEnrichment = new GeminiLLMEnrichmentService();

router.post('/extract', upload.single('image'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }
    
    // Run both OCR.space (for spatial blocks) and Gemini (for semantic fields) in parallel
    const [ocrSpaceResult, geminiResult] = await Promise.all([
      ocrSpace.extractText(req.file.buffer).catch(err => {
        console.error("OCR.space failed, falling back:", err);
        return { blocks: [], rawText: "" };
      }),
      geminiOCR.extractText(req.file.buffer)
    ]);
    
    const result = {
      blocks: ocrSpaceResult.blocks.length > 0 ? ocrSpaceResult.blocks : geminiResult.blocks,
      rawText: ocrSpaceResult.rawText || geminiResult.rawText,
      geminiFields: geminiResult.geminiFields
    };

    res.json(result);
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
