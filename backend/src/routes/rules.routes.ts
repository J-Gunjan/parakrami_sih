import { Router, Request, Response } from 'express';
import { RuleModel } from '../models/Rule.js';

export const rulesRouter = Router();

rulesRouter.get('/', async (req: Request, res: Response) => {
  try {
    const rules = await RuleModel.find({ isActive: true });
    res.status(200).json({ success: true, data: rules });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

rulesRouter.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const ruleData = req.body;
    
    // Admin CRUD: Create a new version of an existing rule
    if (ruleData.ruleId) {
      const existingRule = await RuleModel.findOne({ ruleId: ruleData.ruleId, isActive: true });
      if (existingRule) {
        // Supersede old rule
        existingRule.effectiveUntil = new Date();
        existingRule.isActive = false;
        await existingRule.save();
      }
    }

    const newRule = new RuleModel({
      ...ruleData,
      effectiveFrom: new Date(),
      effectiveUntil: null,
      isActive: true
    });

    await newRule.save();

    res.status(201).json({ success: true, data: newRule });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
});
