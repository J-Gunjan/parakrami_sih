import { OCRBlock } from './CloudOCRService';

export interface ILLMEnrichmentService {
  enrichFields(residualBlocks: OCRBlock[]): Promise<Record<string, any>>;
}

import { GoogleGenAI, Type } from '@google/genai';

export class GeminiLLMEnrichmentService implements ILLMEnrichmentService {
  private ai: GoogleGenAI | null = null;
  private modelName: string = 'gemini-3.6-flash';

  constructor() {
    // We defer initialization to enrichFields() to ensure dotenv is fully loaded.
  }

  private initAI() {
    if (!this.ai) {
      if (!process.env.GEMINI_API_KEY) {
        throw new Error("Configuration Error: GEMINI_API_KEY is not set in backend/.env");
      }
      this.ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      this.modelName = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
    }
    return this.ai;
  }

  async enrichFields(residualBlocks: OCRBlock[]): Promise<Record<string, any>> {
    const aiClient = this.initAI();
    const fullText = residualBlocks.map(b => b.text).join('\\n');
    
    const prompt = `
You are an AI that extracts product details from leftover OCR text blocks from a food package.
Extract any relevant information you can find from the following text blocks:

${fullText}
`;
    
    const schema = {
      type: Type.OBJECT,
      properties: {
        manufacturerName: { type: Type.STRING, nullable: true },
        manufacturerAddress: { type: Type.STRING, nullable: true },
        packer: { type: Type.STRING, nullable: true },
        importer: { type: Type.STRING, nullable: true },
        consumerCare: { type: Type.STRING, nullable: true }
      }
    };

    try {
      const response = await aiClient.models.generateContent({
        model: this.modelName,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: schema,
          temperature: 0.1,
        }
      });
      
      const responseText = response.text || "{}";
      const result = JSON.parse(responseText);
      
      const enriched: Record<string, any> = {};
      for (const [key, value] of Object.entries(result)) {
        if (value !== null && value !== "") {
          enriched[key] = value;
        }
      }
      return enriched;
    } catch (error: any) {
      console.error("Enrichment error:", error.message || error);
      throw new Error(`Gemini API Error: ${error.message || 'Unknown error occurred'}`);
    }
  }
}
