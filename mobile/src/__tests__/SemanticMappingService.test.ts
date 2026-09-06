import { SemanticMappingService } from '../services/SemanticMappingService';
import { OCRBlock } from '../services/OCRService';

describe('SemanticMappingService', () => {
  let service: SemanticMappingService;

  beforeEach(() => {
    service = new SemanticMappingService();
  });

  const getDummyBlock = (text: string): OCRBlock => ({
    text,
    boundingBox: { x: 0, y: 0, width: 10, height: 10 },
    confidence: 0.95
  });

  it('should extract MRP from a single block', () => {
    const blocks = [
      getDummyBlock('Some random text'),
      getDummyBlock('MRP Rs. 150.00 (Incl. of all taxes)'),
      getDummyBlock('More text')
    ];

    const result = service.mapFields(blocks);
    
    expect(result.mappedFields.mrp?.value).toBe('150.00');
    expect(result.mappedFields.mrp?.confidence).toBe(0.95);
    expect(result.residualBlocks.length).toBe(2);
  });

  it('should extract Net Quantity', () => {
    const blocks = [
      getDummyBlock('Net Qty: 500g'),
    ];

    const result = service.mapFields(blocks);
    
    expect(result.mappedFields.netQuantity?.value).toBe('500g');
  });

  it('should extract Country of Origin', () => {
    const blocks = [
      getDummyBlock('Made in India'),
    ];

    const result = service.mapFields(blocks);
    
    expect(result.mappedFields.countryOfOrigin?.value).toBe('India');
  });

  it('should extract Mfg and Exp Dates', () => {
    const blocks = [
      getDummyBlock('Mfg Date: 12/05/2023'),
      getDummyBlock('Best Before: 11/05/2024'),
    ];

    const result = service.mapFields(blocks);
    
    expect(result.mappedFields.mfgDate?.value).toBe('12/05/2023');
    expect(result.mappedFields.expDate?.value).toBe('11/05/2024');
  });

  it('should leave unused text as residual blocks', () => {
    const blocks = [
      getDummyBlock('MRP 100'),
      getDummyBlock('Manufactured by ABC Corp'),
      getDummyBlock('New Delhi')
    ];

    const result = service.mapFields(blocks);
    
    expect(result.mappedFields.mrp?.value).toBe('100');
    // Manufacturer is not handled by local regex currently, so it should be residual
    expect(result.residualBlocks.map(b => b.text)).toContain('Manufactured by ABC Corp');
    expect(result.residualBlocks.map(b => b.text)).toContain('New Delhi');
  });
});
