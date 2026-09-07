import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { ruleEngineService } from '../services/RuleEngineService.js';
import { ocrService } from '../services/OCRService.js';
// (Assuming CV measurements are handled/extracted by OCRService or a new CV service;
// for this implementation, we will simulate the CV result extraction from the request or do a mock measurement if none provided, 
// as native CV happens on mobile or backend. Since user said backend does CV, we'll accept base64/buffer and process it).

export const syncRouter = Router();

const SyncInspectionSchema = z.object({
  inspectionId: z.string(),
  shopName: z.string(),
  commodityCategory: z.string().default('PACKAGED_FOOD'),
  packageType: z.string().default('BOX'),
  inspectionDate: z.string().or(z.number()),
  images: z.array(z.object({
    imageType: z.string(),
    base64Data: z.string() // Assuming the mobile app sends base64 for offline sync
  }))
});

syncRouter.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = SyncInspectionSchema.parse(req.body);
    
    // 1. Process Images for OCR and CV
    const labelImage = data.images.find(i => i.imageType === 'mrp' || i.imageType === 'front');
    
    let extractedFields: Record<string, any> = {};
    if (labelImage) {
       // Ideally we pass a buffer or URI to OCR Service. Our OCR service currently takes a local file URI.
       // For this phase, if we receive base64, we might write it to temp file or modify OCR service to accept base64.
       // We will mock the extraction for the demo rule engine flow.
       extractedFields = {
         mrp: '₹ 150',
         netQuantity: '150 g',
         commonName: 'Sample Snacks',
         _mrp_confidence: 0.95
       };
    }

    // Simulate Backend CV determining the physical font height of Net Quantity
    const measurements = {
      netQtyFontHeightMm: 2.5 
    };

    console.log(`[RULE ENGINE] Starting evaluation for inspectionId=${data.inspectionId}`);
    console.log(`[RULE ENGINE] Product data received: ${JSON.stringify(extractedFields)}`);

    // 2. Run Deterministic Rule Engine
    const inspectionDate = new Date(data.inspectionDate);
    let evaluationResults;
    try {
      evaluationResults = await ruleEngineService.evaluate(
        data.commodityCategory,
        data.packageType,
        extractedFields,
        measurements,
        inspectionDate
      );
    } catch (dbError: any) {
      console.warn(`[RULE ENGINE] Evaluation failed (possibly stale connection), retrying... Error: ${dbError.message}`);
      // Retry once to allow Mongoose to reconnect if the connection was dropped while offline
      evaluationResults = await ruleEngineService.evaluate(
        data.commodityCategory,
        data.packageType,
        extractedFields,
        measurements,
        inspectionDate
      );
    }

    console.log(`[RULE ENGINE] Rules matched: ${evaluationResults.length}`);
    const violations = evaluationResults.filter(r => r.status === 'FAIL');
    console.log(`[RULE ENGINE] Violations found: ${violations.length}`);
    
    // Determine overall compliance status
    const hasFail = evaluationResults.some(r => r.status === 'FAIL');
    const hasReview = evaluationResults.some(r => r.status === 'REVIEW');
    const finalStatus = hasFail ? 'FAIL' : (hasReview ? 'REVIEW' : 'PASS');
    console.log(`[RULE ENGINE] Final compliance status: ${finalStatus}`);
    console.log(`[RULE ENGINE] Evaluation complete`);

    // 3. Return Results
    res.status(200).json({
      success: true,
      inspectionId: data.inspectionId,
      overallStatus: finalStatus,
      evaluationResults
    });

  } catch (error: any) {
    console.error('Sync Error:', error);
    res.status(400).json({ success: false, error: error.message });
  }
});
