import { GoogleGenAI, Type } from '@google/genai';
import { OCRBlock } from './CloudOCRService';

// We want to return both the raw extraction and the structured semantic fields.
export interface GeminiExtractionResult {
  blocks: OCRBlock[];
  geminiFields: any; // We'll map this to DeclarationFields on the mobile side
  rawText: string;
}

export class GeminiOCRService {
  private ai: GoogleGenAI | null = null;
  private modelName: string = 'gemini-3.6-flash';

  constructor() {
    // We defer initialization to extractText() to ensure dotenv is fully loaded.
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

  async extractText(imageBuffer: Buffer): Promise<GeminiExtractionResult> {
    const aiClient = this.initAI();

    const imagePart = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/jpeg"
      },
    };

    const prompt = `
You are an OCR and product-label extraction engine.
Read only text that is visibly present in the supplied image of a food package label. 
Identify the relationship between labels and values. Do not infer or hallucinate information.
If a field is not visible or is ambiguous, return null.

We need you to extract two things:
1. "rawText": A complete, accurate transcription of all text on the label.
2. "fields": A structured extraction of the product details. Ensure you extract values like MRP, Net Quantity, Dates (Manufacturing, Expiry, Best Before), Country of Origin, Manufacturer, Packer, Importer, Lot/Batch, Consumer Care Details, etc.

For fields like MRP, if there are multiple monetary amounts, use the surrounding context to determine which one is MRP.
For fields like Net Quantity, separate the value and unit if possible (e.g. "500 g" instead of "500g"), or extract the full string.
`;

    // Define the schema for structured output to ensure we get exactly what we need
    const schema = {
      type: Type.OBJECT,
      properties: {
        rawText: {
          type: Type.STRING,
          description: "A complete transcription of all readable text on the package."
        },
        fields: {
          type: Type.OBJECT,
          description: "Structured extraction of key product details.",
          properties: {
            productName: { type: Type.STRING, nullable: true },
            manufacturer: { type: Type.STRING, nullable: true },
            packer: { type: Type.STRING, nullable: true },
            importer: { type: Type.STRING, nullable: true },
            countryOfOrigin: { type: Type.STRING, nullable: true },
            netQuantity: { type: Type.STRING, nullable: true },
            mrp: { type: Type.STRING, nullable: true },
            manufacturingDate: { type: Type.STRING, nullable: true },
            expiryOrBestBefore: { type: Type.STRING, nullable: true },
            lotBatch: { type: Type.STRING, nullable: true },
            consumerCare: { type: Type.STRING, nullable: true },
          },
        }
      },
      required: ["rawText", "fields"]
    };

    try {
      const response = await aiClient.models.generateContent({
        model: this.modelName,
        contents: [imagePart, { text: prompt }],
        config: {
          responseMimeType: "application/json",
          responseSchema: schema,
          temperature: 0.1, // Keep it low for factual OCR extraction
        }
      });

      const responseText = response.text || "{}";
      const result = JSON.parse(responseText);
      
      const rawText = result.rawText || "";
      const fields = result.fields || {};

      // Convert rawText into dummy blocks since Gemini doesn't reliably provide bounding boxes.
      // As requested, we will omit the boundingBox.
      const blocks: OCRBlock[] = rawText.split('\\n').filter((t: string) => t.trim().length > 0).map((line: string) => ({
        text: line.trim(),
        confidence: 0.9,
      }));

      // Convert flat fields to the expected nested format with confidence
      const geminiFields: any = {};
      for (const [key, value] of Object.entries(fields)) {
        if (value !== null && value !== "") {
          geminiFields[key] = {
            value: value,
            confidence: 0.85, // Gemini is confident enough to output it
          };
        }
      }

      return {
        blocks,
        geminiFields,
        rawText,
      };
    } catch (error: any) {
      console.error("Gemini Extraction Error:", error.message || error);
      throw new Error(`Gemini API Error: ${error.message || 'Unknown error occurred'}`);
    }
  }
}
