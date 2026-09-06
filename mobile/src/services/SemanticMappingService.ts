import { OCRBlock } from './OCRService';

export interface MappedField {
  value: string;
  confidence: number;
  boundingBox?: OCRBlock['boundingBox'];
}

export interface DeclarationFields {
  mrp?: MappedField;
  netQuantity?: MappedField;
  mfgDate?: MappedField;
  expDate?: MappedField;
  countryOfOrigin?: MappedField;
  manufacturerName?: MappedField;
  manufacturerAddress?: MappedField;
  lotBatch?: MappedField;
  [key: string]: MappedField | undefined;
}

export interface MappedResult {
  mappedFields: DeclarationFields;
  residualBlocks: OCRBlock[];
}

export class SemanticMappingService {
  mapFields(blocks: OCRBlock[], geminiFields?: any): MappedResult {
    const mappedFields: DeclarationFields = {};
    const residualBlocks: OCRBlock[] = [];
    
    const usedBlockIndices = new Set<number>();
    const fullText = blocks.map(b => b.text).join(' ');

    const cooRegex = /(?:made in|product of|country of origin)[\s:]*([a-zA-Z\s]+)/i;
    const mrpRegex = /(?:MRP|Rs\.?|₹|INR)[\s:]*([\d.,]+)/i;
    const qtyRegex = /(?:Net\s*Wt\.?|Net\s*Weight|Net\s*Qty|Quantity)[\s:]*([\d.,]+\s*(?:g|kg|ml|l|pcs))/i;
    const mfgRegex = /(?:Mfg|Manufactured|Pkd)[\s.]*(?:Date)?[\s:]*([\d]{2}[/.-][\d]{2}[/.-][\d]{2,4})/i;
    const expRegex = /(?:Exp|Expiry|Use\s*By|Best\s*Before)[\s.]*(?:Date)?[\s:]*([\d]{2}[/.-][\d]{2}[/.-][\d]{2,4})/i;
    const lotRegex = /(?:Lot|Batch)[\s.]*(?:No\.?)?[\s:]*([A-Z0-9]+)/i;

    // Pass 1: Strict adjacency checks per block (Deterministic Local OCR - Highest Priority)
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      let matched = false;

      if (!mappedFields.countryOfOrigin) {
        const match = block.text.match(cooRegex);
        if (match) { mappedFields.countryOfOrigin = { value: match[1].trim(), confidence: block.confidence, boundingBox: block.boundingBox }; matched = true; }
      }
      if (!mappedFields.mrp) {
        const match = block.text.match(mrpRegex);
        if (match) { mappedFields.mrp = { value: match[1].trim(), confidence: block.confidence, boundingBox: block.boundingBox }; matched = true; }
      }
      if (!mappedFields.netQuantity) {
        const match = block.text.match(qtyRegex);
        if (match) { mappedFields.netQuantity = { value: match[1].trim(), confidence: block.confidence, boundingBox: block.boundingBox }; matched = true; }
      }
      if (!mappedFields.mfgDate) {
        const match = block.text.match(mfgRegex);
        if (match) { mappedFields.mfgDate = { value: match[1].trim(), confidence: block.confidence, boundingBox: block.boundingBox }; matched = true; }
      }
      if (!mappedFields.expDate) {
        const match = block.text.match(expRegex);
        if (match) { mappedFields.expDate = { value: match[1].trim(), confidence: block.confidence, boundingBox: block.boundingBox }; matched = true; }
      }
      if (!mappedFields.lotBatch) {
        const match = block.text.match(lotRegex);
        if (match) { mappedFields.lotBatch = { value: match[1].trim(), confidence: block.confidence, boundingBox: block.boundingBox }; matched = true; }
      }

      if (matched) usedBlockIndices.add(i);
    }

    // Helper to attempt finding a bounding box for a Gemini-extracted value
    const findBoundingBoxForValue = (value: string) => {
      if (!value) return undefined;
      const lowerVal = value.toLowerCase();
      // Try to find a block containing this exact string
      const match = blocks.find(b => b.text.toLowerCase().includes(lowerVal));
      return match ? match.boundingBox : undefined;
    };

    // Pass 2: Gemini AI Semantic Extraction (Fills gaps missed by strict deterministic regex)
    if (geminiFields) {
      if (!mappedFields.countryOfOrigin && geminiFields.countryOfOrigin) {
        mappedFields.countryOfOrigin = { ...geminiFields.countryOfOrigin, boundingBox: findBoundingBoxForValue(geminiFields.countryOfOrigin.value) };
      }
      if (!mappedFields.mrp && geminiFields.mrp) {
        mappedFields.mrp = { ...geminiFields.mrp, boundingBox: findBoundingBoxForValue(geminiFields.mrp.value) };
      }
      if (!mappedFields.netQuantity && geminiFields.netQuantity) {
        mappedFields.netQuantity = { ...geminiFields.netQuantity, boundingBox: findBoundingBoxForValue(geminiFields.netQuantity.value) };
      }
      if (!mappedFields.mfgDate && geminiFields.manufacturingDate) {
        mappedFields.mfgDate = { ...geminiFields.manufacturingDate, boundingBox: findBoundingBoxForValue(geminiFields.manufacturingDate.value) };
      }
      if (!mappedFields.expDate && geminiFields.expiryOrBestBefore) {
        mappedFields.expDate = { ...geminiFields.expiryOrBestBefore, boundingBox: findBoundingBoxForValue(geminiFields.expiryOrBestBefore.value) };
      }
      if (!mappedFields.lotBatch && geminiFields.lotBatch) {
        mappedFields.lotBatch = { ...geminiFields.lotBatch, boundingBox: findBoundingBoxForValue(geminiFields.lotBatch.value) };
      }
      // Populate fields that purely rely on AI (Manufacturer, Packer, Importer, Consumer Care)
      if (!mappedFields.manufacturerName && geminiFields.manufacturer) {
        mappedFields.manufacturerName = { ...geminiFields.manufacturer, boundingBox: findBoundingBoxForValue(geminiFields.manufacturer.value) };
      }
      if (!mappedFields.manufacturerAddress && geminiFields.consumerCare) {
        // Just storing consumer care in address for now as per schema
        mappedFields.manufacturerAddress = { ...geminiFields.consumerCare, boundingBox: findBoundingBoxForValue(geminiFields.consumerCare.value) };
      }
      // Populate productName
      if (!mappedFields.productName && geminiFields.productName) {
         mappedFields.productName = { ...geminiFields.productName, boundingBox: findBoundingBoxForValue(geminiFields.productName.value) };
      }
    }

    // Pass 3: Fallback Global String Match & Heuristics (Lowest Priority, only if Gemini is not available)
    if (!geminiFields) {
      if (!mappedFields.countryOfOrigin) {
        const match = fullText.match(cooRegex);
        if (match) mappedFields.countryOfOrigin = { value: match[1].trim(), confidence: 0.7 };
      }
      if (!mappedFields.mrp) {
        const match = fullText.match(mrpRegex);
        if (match) mappedFields.mrp = { value: match[1].trim(), confidence: 0.7 };
      }
      if (!mappedFields.netQuantity) {
        const match = fullText.match(qtyRegex);
        if (match) mappedFields.netQuantity = { value: match[1].trim(), confidence: 0.7 };
      }
      if (!mappedFields.mfgDate) {
        const match = fullText.match(mfgRegex);
        if (match) mappedFields.mfgDate = { value: match[1].trim(), confidence: 0.7 };
      }
      if (!mappedFields.expDate) {
        const match = fullText.match(expRegex);
        if (match) mappedFields.expDate = { value: match[1].trim(), confidence: 0.7 };
      }
      if (!mappedFields.lotBatch) {
        const match = fullText.match(lotRegex);
        if (match) mappedFields.lotBatch = { value: match[1].trim(), confidence: 0.7 };
      }

      // Standalone Dates (DD/MM/YY)
      if (!mappedFields.mfgDate || !mappedFields.expDate) {
        const dateRegex = /\b(\d{2}[/.-]\d{2}[/.-]\d{2,4})\b/g;
        const allDates = [...fullText.matchAll(dateRegex)].map(m => m[1]);
        if (allDates.length > 0) {
          if (!mappedFields.mfgDate && allDates[0]) {
            mappedFields.mfgDate = { value: allDates[0], confidence: 0.5 };
          }
          if (!mappedFields.expDate && allDates.length > 1) {
            mappedFields.expDate = { value: allDates[1], confidence: 0.5 };
          }
        }
      }

      // Standalone MRP (e.g., ₹0.17/g or 10.00)
      if (!mappedFields.mrp) {
        // Look for standalone ₹ or Rs
        const standaloneMrpRegex = /(?:₹|Rs\.?)\s*([\d.,]+)(?!\/g)/i; // Exclude /g like ₹0.17/g
        const match = fullText.match(standaloneMrpRegex);
        if (match) {
          mappedFields.mrp = { value: match[1].trim(), confidence: 0.6 };
        } else {
          // Fallback: look for generic decimal prices like 10.00
          const decimalRegex = /\b(\d{1,4}\.\d{2})\b/g;
          const allDecimals = [...fullText.matchAll(decimalRegex)].map(m => parseFloat(m[1]));
          if (allDecimals.length > 0) {
            const highest = Math.max(...allDecimals);
            mappedFields.mrp = { value: highest.toFixed(2), confidence: 0.5 };
          }
        }
      }
    }

    blocks.forEach((block, index) => {
      if (!usedBlockIndices.has(index)) {
        residualBlocks.push(block);
      }
    });

    return { mappedFields, residualBlocks };
  }
}
