import { OCRBlock } from './CloudOCRService.js';

export interface OcrSpaceResult {
  blocks: OCRBlock[];
  rawText: string;
}

export class OcrSpaceService {
  private apiKey: string;
  private apiUrl: string = 'https://api.ocr.space/parse/image';

  constructor() {
    this.apiKey = process.env.OCR_SPACE_API_KEY || '';
  }

  async extractText(imageBuffer: Buffer): Promise<OcrSpaceResult> {
    if (!this.apiKey) {
      throw new Error("Configuration Error: OCR_SPACE_API_KEY is not set in backend/.env");
    }

    const base64Image = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;

    const formData = new FormData();
    formData.append('apikey', this.apiKey);
    formData.append('isOverlayRequired', 'true');
    formData.append('base64Image', base64Image);

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`OCR.space API responded with status: ${response.status}`);
      }

      const data = await response.json() as any;

      if (data.IsErroredOnProcessing) {
        throw new Error(`OCR.space Error: ${data.ErrorMessage}`);
      }

      const parsedResults = data.ParsedResults && data.ParsedResults[0] ? data.ParsedResults[0] : null;
      if (!parsedResults) {
        return { blocks: [], rawText: "" };
      }

      const rawText = parsedResults.ParsedText || "";
      const blocks: OCRBlock[] = [];

      // Extract bounding boxes from the overlay
      if (parsedResults.TextOverlay && parsedResults.TextOverlay.Lines) {
        for (const line of parsedResults.TextOverlay.Lines) {
          // You could extract word by word or line by line
          // For semantic layout, block = line is usually better
          
          let minX = Infinity;
          let minY = Infinity;
          let maxX = 0;
          let maxY = 0;
          
          if (line.Words && line.Words.length > 0) {
            for (const word of line.Words) {
              if (word.Left < minX) minX = word.Left;
              if (word.Top < minY) minY = word.Top;
              if (word.Left + word.Width > maxX) maxX = word.Left + word.Width;
              if (word.Top + word.Height > maxY) maxY = word.Top + word.Height;
            }
          }

          if (minX !== Infinity && line.LineText) {
            blocks.push({
              text: line.LineText,
              boundingBox: {
                x: minX,
                y: minY,
                width: maxX - minX,
                height: maxY - minY
              },
              confidence: 0.95 // Default fallback since it doesn't always provide confidence per block
            });
          }
        }
      } else {
        // If overlay wasn't returned for some reason, fallback to basic line splitting without boxes
        const lines = rawText.split('\\n').filter((l: string) => l.trim().length > 0);
        for (const line of lines) {
          blocks.push({
            text: line.trim(),
            confidence: 0.95
          });
        }
      }

      return {
        blocks,
        rawText
      };
    } catch (error: any) {
      console.error("OCR.space Extraction Error:", error.message || error);
      throw new Error(`OCR.space Error: ${error.message || 'Unknown error'}`);
    }
  }
}
