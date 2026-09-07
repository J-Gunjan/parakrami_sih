import 'dotenv/config';
import mongoose from 'mongoose';
import { RuleModel } from '../models/Rule.js';
import { ComplianceRule } from '@nyayalabel/shared';

const MONGODB_URI = process.env.MONGO_URI;
if (!MONGODB_URI) {
  console.error('❌ MONGO_URI environment variable is not defined.');
  process.exit(1);
}
const seedRules: ComplianceRule[] = [
  {
    ruleId: 'r-mrp-001',
    ruleCode: 'MRP_PRESENCE',
    title: 'Retail Sale Price (MRP) Declaration',
    description: 'Every package shall bear thereon or on label the retail sale price of the package.',
    version: '1.0',
    effectiveFrom: new Date('2011-04-01T00:00:00Z'), // Rules 2011 effective date
    applicableCommodity: 'ALL',
    requirement: 'Maximum Retail Price (MRP) must be declared inclusive of all taxes.',
    threshold: 'PRESENT', // Custom threshold logic in engine
    severity: 'CRITICAL',
    sourceAct: 'Legal Metrology Act, 2009',
    sourceRule: 'Legal Metrology (Packaged Commodities) Rules, 2011 - Rule 6(1)(e)',
    sourceReference: 'G.S.R. 202(E)',
    verificationStatus: 'VERIFIED',
    category: 'MRP_DECLARATION'
  },
  {
    ruleId: 'r-netqty-font-001',
    ruleCode: 'NET_QTY_MIN_HEIGHT_1',
    title: 'Minimum Height of Numerals for Net Quantity (<= 200g/ml)',
    description: 'Height of numeral in the declaration of net quantity for packages up to 200g/ml.',
    version: '1.0',
    effectiveFrom: new Date('2011-04-01T00:00:00Z'),
    applicableCommodity: 'ALL',
    condition: 'Net Quantity <= 200g or 200ml',
    requirement: 'The height of any numeral in the declaration of net quantity shall not be less than 2.0 mm.',
    threshold: { minFontHeightMm: 2.0 },
    severity: 'HIGH',
    sourceAct: 'Legal Metrology Act, 2009',
    sourceRule: 'Legal Metrology (Packaged Commodities) Rules, 2011 - Rule 7, Table I',
    verificationStatus: 'VERIFIED',
    category: 'FONT_SIZE'
  },
  {
    ruleId: 'r-netqty-font-002',
    ruleCode: 'NET_QTY_MIN_HEIGHT_2',
    title: 'Minimum Height of Numerals for Net Quantity (200g-500g)',
    description: 'Height of numeral in the declaration of net quantity for packages between 200g/ml and 500g/ml.',
    version: '1.0',
    effectiveFrom: new Date('2011-04-01T00:00:00Z'),
    applicableCommodity: 'ALL',
    condition: 'Net Quantity > 200g/ml and <= 500g/ml',
    requirement: 'The height of any numeral in the declaration of net quantity shall not be less than 4.0 mm.',
    threshold: { minFontHeightMm: 4.0 },
    severity: 'HIGH',
    sourceAct: 'Legal Metrology Act, 2009',
    sourceRule: 'Legal Metrology (Packaged Commodities) Rules, 2011 - Rule 7, Table I',
    verificationStatus: 'VERIFIED',
    category: 'FONT_SIZE'
  },
  {
    ruleId: 'r-generic-name-001',
    ruleCode: 'GENERIC_NAME_PRESENCE',
    title: 'Common or Generic Name of Commodity',
    description: 'The common or generic name of the commodity shall be declared on the package.',
    version: '1.0',
    effectiveFrom: new Date('2011-04-01T00:00:00Z'),
    applicableCommodity: 'ALL',
    requirement: 'The package must clearly declare its common or generic name.',
    threshold: 'PRESENT',
    severity: 'MEDIUM',
    sourceAct: 'Legal Metrology Act, 2009',
    sourceRule: 'Legal Metrology (Packaged Commodities) Rules, 2011 - Rule 6(1)(b)',
    verificationStatus: 'VERIFIED',
    category: 'MANDATORY_DECLARATIONS'
  },
  {
    ruleId: 'r-dev-demo-001',
    ruleCode: 'DEV_UNVERIFIED_DEMO_RULE',
    title: 'Development Rule (Example of Unverified Source)',
    description: 'This is a demo rule to test the UNVERIFIED banner logic.',
    version: '1.0',
    effectiveFrom: new Date('2024-01-01T00:00:00Z'),
    applicableCommodity: 'PACKAGED_FOOD',
    requirement: 'Must have a nutrition table.',
    threshold: 'PRESENT',
    severity: 'LOW',
    sourceAct: 'Unknown Act',
    sourceRule: 'Draft Rule',
    verificationStatus: 'UNVERIFIED', // Will trigger the required UI banner
    category: 'MANDATORY_DECLARATIONS'
  }
];

async function seedDatabase() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('Connected.');

  console.log('Clearing existing rules...');
  await RuleModel.deleteMany({});
  
  console.log('Seeding rules...');
  for (const rule of seedRules) {
    const doc = new RuleModel(rule);
    await doc.save();
    console.log(`✅ Seeded Rule: ${rule.ruleCode} (${rule.version})`);
  }

  console.log('Database seeding complete.');
  await mongoose.disconnect();
}

seedDatabase().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
