import { RuleEngineService } from '../RuleEngineService';
import { RuleModel } from '../../models/Rule';

// Mock RuleModel
jest.mock('../../models/Rule', () => ({
  RuleModel: {
    find: jest.fn()
  }
}));

describe('RuleEngineService', () => {
  let ruleEngine: RuleEngineService;

  beforeEach(() => {
    ruleEngine = new RuleEngineService();
    jest.clearAllMocks();
  });

  const mockRules = [
    {
      ruleId: 'r-mrp-001',
      ruleCode: 'MRP_PRESENCE',
      version: '1.0',
      applicableCommodity: 'ALL',
      severity: 'CRITICAL',
      sourceAct: 'Act 2009',
      sourceRule: 'Rule 2011'
    },
    {
      ruleId: 'r-netqty-font-001',
      ruleCode: 'NET_QTY_MIN_HEIGHT_1',
      version: '1.0',
      applicableCommodity: 'ALL',
      threshold: { minFontHeightMm: 2.0 },
      severity: 'HIGH',
      sourceAct: 'Act 2009',
      sourceRule: 'Rule 2011'
    }
  ];

  it('evaluates clear PASS condition for MRP', async () => {
    (RuleModel.find as jest.Mock).mockReturnValue({
      lean: jest.fn().mockResolvedValue([mockRules[0]])
    });

    const results = await ruleEngine.evaluate(
      'PACKAGED_FOOD', 
      'BOX', 
      { mrp: '₹ 150' }, 
      {}, 
      new Date('2026-09-06')
    );

    expect(results).toHaveLength(1);
    expect(results[0].status).toBe('PASS');
    expect(results[0].ruleCode).toBe('MRP_PRESENCE');
  });

  it('evaluates clear FAIL condition for MRP', async () => {
    (RuleModel.find as jest.Mock).mockReturnValue({
      lean: jest.fn().mockResolvedValue([mockRules[0]])
    });

    const results = await ruleEngine.evaluate(
      'PACKAGED_FOOD', 
      'BOX', 
      { _mrp_confidence: 0.95 }, 
      {}, 
      new Date('2026-09-06')
    );

    expect(results).toHaveLength(1);
    expect(results[0].status).toBe('FAIL'); // MRP is missing, but confidence in the OCR reading is high
  });

  it('evaluates REVIEW condition for Borderline Physical Measurements', async () => {
    (RuleModel.find as jest.Mock).mockReturnValue({
      lean: jest.fn().mockResolvedValue([mockRules[1]])
    });

    const results = await ruleEngine.evaluate(
      'PACKAGED_FOOD', 
      'BOX', 
      { netQuantity: '150 g' }, 
      { netQtyFontHeightMm: 1.95 }, // Required is 2.0, within 0.1mm tolerance -> border/fail or review depending on logic
      new Date('2026-09-06')
    );

    expect(results).toHaveLength(1);
    expect(results[0].status).toBe('REVIEW'); // 1.95 is > 1.9 (2.0 - 0.1) so it hits the borderline REVIEW logic
  });
  
  it('evaluates NOT_APPLICABLE condition based on condition/commodity', async () => {
    (RuleModel.find as jest.Mock).mockReturnValue({
      lean: jest.fn().mockResolvedValue([mockRules[1]])
    });

    // Send 500g, but rule NET_QTY_MIN_HEIGHT_1 only applies to <= 200g
    const results = await ruleEngine.evaluate(
      'PACKAGED_FOOD', 
      'BOX', 
      { netQuantity: '500 g' }, 
      { netQtyFontHeightMm: 3.5 }, 
      new Date('2026-09-06')
    );

    expect(results).toHaveLength(1);
    expect(results[0].status).toBe('NOT_APPLICABLE');
  });
});
