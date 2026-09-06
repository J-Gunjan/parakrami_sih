export interface OCRBlock {
  text: string;
  boundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  confidence: number;
}

export interface ICloudOCRService {
  extractText(imageBuffer: Buffer): Promise<OCRBlock[]>;
}

export class MockCloudOCRService implements ICloudOCRService {
  async extractText(imageBuffer: Buffer): Promise<OCRBlock[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return mock OCR blocks that look like a typical Indian label
    return [
      { text: "MRP", boundingBox: { x: 10, y: 10, width: 30, height: 15 }, confidence: 0.99 },
      { text: "₹ 150.00", boundingBox: { x: 45, y: 10, width: 60, height: 15 }, confidence: 0.98 },
      { text: "(Incl. of all taxes)", boundingBox: { x: 10, y: 30, width: 100, height: 15 }, confidence: 0.95 },
      { text: "Net Qty:", boundingBox: { x: 10, y: 50, width: 50, height: 15 }, confidence: 0.97 },
      { text: "500g", boundingBox: { x: 65, y: 50, width: 30, height: 15 }, confidence: 0.99 },
      { text: "Mfg. Date:", boundingBox: { x: 10, y: 70, width: 60, height: 15 }, confidence: 0.96 },
      { text: "12/08/25", boundingBox: { x: 75, y: 70, width: 60, height: 15 }, confidence: 0.94 },
      { text: "Made in India", boundingBox: { x: 10, y: 90, width: 90, height: 15 }, confidence: 0.99 },
      { text: "Manufactured by:", boundingBox: { x: 10, y: 110, width: 100, height: 15 }, confidence: 0.95 },
      { text: "ABC Foods Pvt. Ltd.", boundingBox: { x: 10, y: 130, width: 120, height: 15 }, confidence: 0.92 },
      { text: "123, Industrial Area, New Delhi - 110020", boundingBox: { x: 10, y: 150, width: 200, height: 15 }, confidence: 0.88 },
    ];
  }
}
