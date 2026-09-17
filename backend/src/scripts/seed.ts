import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import path from 'path';
import { OfficerModel } from '../models/Officer.js';
import { RuleModel } from '../models/Rule.js';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const MONGODB_URI = process.env.MONGO_URI || process.env.MONGODB_URI || 'mongodb://localhost:27017/nyayalabel';

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('[SEED] Connected to MongoDB');

    // 1. Seed Default Officer
    const defaultEmail = 'test@gov.in';
    const defaultPassword = 'password';

    const existingOfficer = await OfficerModel.findOne({ email: defaultEmail });

    if (existingOfficer) {
      console.log(`[SEED] Officer with email ${defaultEmail} already exists. Skipping.`);
    } else {
      const passwordHash = await bcrypt.hash(defaultPassword, 10);
      await OfficerModel.create({
        name: 'Inspector R. Sharma',
        email: defaultEmail,
        passwordHash,
        badgeNumber: 'LM-DEL-2024-41',
        jurisdiction: 'New Delhi North-West',
        role: 'INSPECTOR'
      });
      console.log(`[SEED] Created default officer: ${defaultEmail} / ${defaultPassword}`);
    }

    // 2. Seed Default Demo Rule (if it doesn't exist)
    const existingRule = await RuleModel.findOne({ ruleCode: 'DEV_UNVERIFIED_DEMO_RULE' });
    if (!existingRule) {
      await RuleModel.create({
        ruleId: 'r-dev-demo-001',
        ruleCode: 'DEV_UNVERIFIED_DEMO_RULE',
        title: 'Demo Inspection Rule',
        description: 'A mock rule for testing the deterministic rule engine without actual legal criteria.',
        version: '1.0',
        effectiveFrom: new Date('2020-01-01'),
        effectiveUntil: null,
        applicableCommodity: 'ALL',
        requirement: 'N/A',
        severity: 'LOW',
        sourceAct: 'Legal Metrology Act, 2009',
        sourceRule: 'Mock Rule 1(1)',
        verificationStatus: 'UNVERIFIED',
        isActive: true
      });
      console.log('[SEED] Created default demo rule');
    } else {
      console.log('[SEED] Default demo rule already exists. Skipping.');
    }

    console.log('[SEED] Seeding completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('[SEED] Error during seeding:', error);
    process.exit(1);
  }
}

seed();
