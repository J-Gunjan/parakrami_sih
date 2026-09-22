import fs from 'fs';
import path from 'path';

// Deterministic RNG
let seed = 123456789;
function random() {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function getRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + random() * (end.getTime() - start.getTime()));
}

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(random() * arr.length)];
}

function generateId(prefix: string) {
  return `${prefix}_${Math.floor(random() * 1000000).toString().padStart(6, '0')}`;
}

const DEMO_OFFICER_ID = 'demo_analytics_officer_001';
const DEMO_OFFICER_NAME = 'Analytics Demo Officer';

const DISTRICTS = [
  { name: 'Salt Lake', lat: 22.5866, lng: 88.4150 },
  { name: 'Park Street', lat: 22.5516, lng: 88.3524 },
  { name: 'Burrabazar', lat: 22.5833, lng: 88.3556 },
  { name: 'Gariahat', lat: 22.5186, lng: 88.3639 },
  { name: 'New Town', lat: 22.5768, lng: 88.4688 }
];

const MARKETS = ['Sadar Bazaar', 'Connaught Place', 'Local Kirana', 'Supermart', 'Wholesale Market'];

const MANUFACTURERS = [
  { brandName: 'Pillsbury', riskProfile: 'LOW', defaultCat: 'Food & Beverages' },
  { brandName: 'Kurkure', riskProfile: 'HIGH', defaultCat: 'Food & Beverages' },
  { brandName: 'First Crop', riskProfile: 'MEDIUM', defaultCat: 'Food & Beverages' }
];

const now = new Date('2024-03-24T12:00:00Z'); // Fixed end date for deterministic generation
const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

const inspections: any[] = [];

for (let i = 0; i < 120; i++) {
  const inspectionId = generateId('insp');
  const district = getRandomItem(DISTRICTS);
  const market = getRandomItem(MARKETS);
  
  const latOffset = (random() - 0.5) * 0.05;
  const lngOffset = (random() - 0.5) * 0.05;

  const date = getRandomDate(threeMonthsAgo, now);
  const isComplete = random() > 0.1;
  
  const manufacturer = getRandomItem(MANUFACTURERS);
  const category = manufacturer.defaultCat;
  const skuId = `SKU-${manufacturer.brandName.substring(0,3).toUpperCase()}-101`;

  let isFail = false;
  if (manufacturer.riskProfile === 'HIGH') isFail = random() > 0.3;
  else if (manufacturer.riskProfile === 'MEDIUM') isFail = random() > 0.7;
  else isFail = random() > 0.9;

  const overallResult = isFail ? 'FAIL' : 'PASS';

  const productId = generateId('prod');
  const violations: any[] = [];

  if (isFail) {
    const numViolations = Math.floor(random() * 3) + 1;
    for (let v = 0; v < numViolations; v++) {
      violations.push({
        id: generateId('viol'),
        inspectionId: inspectionId,
        productId: productId,
        ruleId: `RULE_DEMO_00${v+1}`,
        ruleVersion: '1.0',
        fieldName: getRandomItem(['mrp', 'netQuantity', 'manufacturerAddress', 'customerCare', 'bestBefore']),
        observedValue: 'Missing or illegible',
        expectedValue: 'Clear declaration',
        confidence: 0.95,
        severity: getRandomItem(['HIGH', 'MEDIUM', 'LOW']),
        inspectorVerified: true,
        createdAt: date.toISOString(),
        updatedAt: date.toISOString()
      });
    }
  }

  // Use reliable generic placeholders for demo to avoid hotlinking broken unsplash urls in production
  let imageUrl = 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80';
  if (manufacturer.brandName === 'Pillsbury') imageUrl = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80';
  else if (manufacturer.brandName === 'First Crop') imageUrl = 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80';

  const product = {
    id: productId,
    inspectionId: inspectionId,
    category: category,
    barcodeOrGtin: skuId,
    brandName: manufacturer.brandName,
    declarationFields: {
      productName: manufacturer.brandName + ' Item',
      manufacturer: manufacturer.brandName,
      countryOfOrigin: 'India',
      manufacturingDate: '2023-01-01',
      consumerCare: '1800-123-4567',
      mrp: "100.00",
      netQuantity: "500g"
    },
    status: 'VERIFIED',
    imageIds: [`img_${productId}_1`],
    complianceResult: {
      decision: overallResult,
      score: isFail ? 40 : 100,
      violations: violations
    },
    verifiedByOfficer: true,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString()
  };

  inspections.push({
    id: inspectionId,
    officerId: DEMO_OFFICER_ID,
    shopName: `[DEMO] ${market} Store ${i}`,
    shopOwnerName: 'Demo Owner',
    shopCategory: 'Retail',
    location: {
      latitude: district.lat + latOffset,
      longitude: district.lng + lngOffset,
      address: `${market}, ${district.name}, Kolkata`,
      city: 'Kolkata',
      state: 'West Bengal',
      district: district.name,
      accuracyMeters: 10
    },
    status: isComplete ? 'COMPLETED' : 'IN_PROGRESS',
    syncStatus: 'synced',
    overallResult: overallResult,
    startedAt: date.toISOString(),
    completedAt: isComplete ? new Date(date.getTime() + 30*60*1000).toISOString() : undefined,
    syncedAt: isComplete ? new Date(date.getTime() + 35*60*1000).toISOString() : undefined,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
    products: [product],
    violations: violations,
    images: [
      {
        id: `img_${productId}_1`,
        inspectionId: inspectionId,
        productId: productId,
        localFilePath: imageUrl,
        remoteUrl: imageUrl,
        imageType: 'front',
        capturedAt: date.toISOString(),
        qualityScore: 0.9,
        uploaded: true
      }
    ]
  });
}

// Add Kurkure demo
const customInspectionId = generateId('insp');
const customProductId = generateId('prod');
const customDate = new Date('2024-03-24T10:00:00Z');
const customImageUrl = 'https://m.media-amazon.com/images/I/71YtQn49rLL.jpg';

inspections.push({
  id: customInspectionId,
  officerId: DEMO_OFFICER_ID,
  shopName: '[DEMO] Ration store',
  shopOwnerName: 'Demo Owner',
  shopCategory: 'Retail',
  location: {
    latitude: 22.5726,
    longitude: 88.3639,
    address: 'Ration store, Kolkata',
    city: 'Kolkata',
    state: 'West Bengal',
    district: 'Kolkata',
    accuracyMeters: 10
  },
  status: 'COMPLETED',
  syncStatus: 'synced',
  overallResult: 'PASS',
  startedAt: new Date(customDate.getTime() - 10*60*1000).toISOString(),
  completedAt: customDate.toISOString(),
  syncedAt: customDate.toISOString(),
  createdAt: customDate.toISOString(),
  updatedAt: customDate.toISOString(),
  products: [{
    id: customProductId,
    inspectionId: customInspectionId,
    category: 'Food & Beverages',
    barcodeOrGtin: 'SKU-KUR-MASALA-135G',
    brandName: 'Kurkure Masala Munch',
    declarationFields: {
      productName: 'Kurkure Masala Munch',
      manufacturer: 'PEPSICO INDIA HOLDINGS PVT. LTD.',
      countryOfOrigin: 'India',
      manufacturingDate: '2023-01-01',
      consumerCare: '1800 22 4020, consumer.feedback@pepsico.com',
      mrp: "30.00",
      netQuantity: "135 g"
    },
    status: 'VERIFIED',
    imageIds: [`img_${customProductId}_1`],
    complianceResult: {
      decision: 'PASS',
      score: 100,
      violations: []
    },
    verifiedByOfficer: true,
    createdAt: customDate.toISOString(),
    updatedAt: customDate.toISOString()
  }],
  violations: [],
  images: [
    {
      id: `img_${customProductId}_1`,
      inspectionId: customInspectionId,
      productId: customProductId,
      localFilePath: customImageUrl,
      remoteUrl: customImageUrl,
      imageType: 'back',
      capturedAt: customDate.toISOString(),
      qualityScore: 1.0,
      uploaded: true
    }
  ]
});

const fileContent = `import { Inspection } from '@nyayalabel/shared';

// AUTO-GENERATED STATIC DEMO DATASET
// Generated from backend seedAnalyticsDemoData.ts logic.
// Do not modify directly.

export const demoInspections: Inspection[] = ${JSON.stringify(inspections, null, 2)};
`;

const outPath = path.join(__dirname, 'web', 'src', 'data', 'demoInspections.ts');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, fileContent, 'utf-8');
console.log('Successfully generated ' + outPath);
