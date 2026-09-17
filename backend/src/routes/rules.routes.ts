import { Router, Request, Response } from 'express';
import { RuleModel } from '../models/Rule.js';

import { z } from 'zod';

import { authenticateToken, AuthenticatedRequest, requireRole } from '../middlewares/auth.middleware.js';
import { AuditLogModel } from '../models/AuditLog.js';

export const rulesRouter = Router();

const RuleSchema = z.object({
  ruleId: z.string().optional(),
  ruleCode: z.string(),
  title: z.string(),
  description: z.string(),
  version: z.string(),
  applicableCommodity: z.union([z.string(), z.array(z.string())]),
  requirement: z.string(),
  severity: z.enum(['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']),
  sourceAct: z.string(),
  sourceRule: z.string(),
  verificationStatus: z.enum(['VERIFIED', 'UNVERIFIED'])
}).passthrough();

rulesRouter.get('/', async (req: Request, res: Response) => {
  try {
    const rules = await RuleModel.find({ isActive: true });
    res.status(200).json({ success: true, data: rules });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

rulesRouter.post('/', authenticateToken, requireRole(['ADMIN', 'REVIEWER']), async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const ruleData = RuleSchema.parse(req.body);
    
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

    // Audit Log
    await AuditLogModel.create({
      officerId: req.officer!.id,
      action: 'CREATE_RULE_VERSION',
      entityType: 'RULE',
      entityId: (newRule as any).ruleId,
      details: { newVersion: (newRule as any).version, ruleCode: (newRule as any).ruleCode }
    });

    res.status(201).json({ success: true, data: newRule });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: error.errors });
      return;
    }
    res.status(400).json({ success: false, error: error.message });
  }
});
