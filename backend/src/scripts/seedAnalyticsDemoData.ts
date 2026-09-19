import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { InspectionModel } from '../models/Inspection.js';
import { ProductModel } from '../models/Product.js';
import { ViolationModel } from '../models/Violation.js';
import { v4 as uuidv4 } from 'uuid';

dotenv.config({ path: '.env' });

const MONGO_URI = process.env.MONGO_URI || 'mongodb://nyaya_admin:nyaya_secret_password@localhost:27017/nyayalabel_db?authSource=admin';

const DEMO_OFFICER_ID = 'demo_analytics_officer_001';

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
  { brandName: 'Kurkure', riskProfile: 'HIGH', defaultCat: 'Food & Beverages' }, // Repeat offender
  { brandName: 'First Crop', riskProfile: 'MEDIUM', defaultCat: 'Food & Beverages' }
];

const CATEGORIES = ['Food & Beverages', 'Electronics', 'Cosmetics', 'FMCG'];

function getRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB');

    // 1. Delete existing DEMO data
    console.log('Clearing old DEMO data...');
    const demoInspections = await InspectionModel.find({ shopName: { $regex: /^\[DEMO\]/ } });
    const inspectionIds = demoInspections.map(i => i._id.toString());
    
    await InspectionModel.deleteMany({ shopName: { $regex: /^\[DEMO\]/ } });
    await ProductModel.deleteMany({ inspectionId: { $in: inspectionIds } });
    await ViolationModel.deleteMany({ inspectionId: { $in: inspectionIds } });
    console.log(`Deleted ${demoInspections.length} old demo inspections and their products/violations.`);

    // 2. Generate Data
    console.log('Generating new demo data...');
    const now = new Date();
    const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

    const inspectionsToInsert = [];
    const productsToInsert = [];
    const violationsToInsert = [];

    // Let's create about 120 inspections
    for (let i = 0; i < 120; i++) {
      const inspectionId = new mongoose.Types.ObjectId().toString();
      const district = getRandomItem(DISTRICTS);
      const market = getRandomItem(MARKETS);
      
      // slightly randomize coordinates around district center (approx up to ~5km)
      const latOffset = (Math.random() - 0.5) * 0.05;
      const lngOffset = (Math.random() - 0.5) * 0.05;

      const date = getRandomDate(threeMonthsAgo, now);
      const isComplete = Math.random() > 0.1; // 90% completed
      
      const manufacturer = getRandomItem(MANUFACTURERS);
      const category = manufacturer.defaultCat;
      const skuId = `SKU-${manufacturer.brandName.substring(0,3).toUpperCase()}-101`; // keep same SKU for trends

      // Determine Pass/Fail based on riskProfile
      let isFail = false;
      if (manufacturer.riskProfile === 'HIGH') isFail = Math.random() > 0.3; // 70% fail
      else if (manufacturer.riskProfile === 'MEDIUM') isFail = Math.random() > 0.7; // 30% fail
      else isFail = Math.random() > 0.9; // 10% fail

      const overallResult = isFail ? 'FAIL' : 'PASS';

      inspectionsToInsert.push({
        _id: inspectionId,
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
        geo: {
          type: 'Point',
          coordinates: [district.lng + lngOffset, district.lat + latOffset]
        },
        status: isComplete ? 'COMPLETED' : 'IN_PROGRESS',
        syncStatus: 'synced',
        overallResult: overallResult,
        startedAt: date.toISOString(),
        completedAt: isComplete ? new Date(date.getTime() + 30*60*1000).toISOString() : undefined,
        syncedAt: isComplete ? new Date(date.getTime() + 35*60*1000).toISOString() : undefined,
        createdAt: date,
        updatedAt: date
      });

      // Insert product
      const productId = new mongoose.Types.ObjectId().toString();
      productsToInsert.push({
        _id: productId,
        inspectionId: inspectionId,
        category: category,
        barcodeOrGtin: skuId,
        brandName: manufacturer.brandName,
        declarationFields: {
          mrp: "100.00",
          netQuantity: "500g",
          manufacturerName: manufacturer.brandName
        },
        status: 'VERIFIED',
        imageIds: [`img_${productId}_1`],
        complianceResult: {
          decision: overallResult,
          score: isFail ? 40 : 100,
          violations: [] // Simplified for now
        },
        createdAt: date,
        updatedAt: date
      });

      if (isFail) {
        // Insert violations
        const numViolations = Math.floor(Math.random() * 3) + 1; // 1 to 3 violations
        for (let v = 0; v < numViolations; v++) {
          violationsToInsert.push({
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
            createdAt: date,
            updatedAt: date
          });
        }
      }

      // Insert generic product image
      let imageUrl = 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80'; // generic chips/snacks
      if (manufacturer.brandName === 'Pillsbury') imageUrl = 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'; // cake mix
      else if (manufacturer.brandName === 'First Crop') imageUrl = 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=800&q=80'; // biscuits

      // We won't insert into a separate ImageModel since we just need the URL in the frontend, but let's assume the frontend expects the URL in the inspection or product directly. 
      // Actually, if we need it in the mock, we can just attach it.
      // Wait, in api.ts, images are on the inspection object. Let's add them to the inspection!
      inspectionsToInsert[inspectionsToInsert.length - 1].images = [
        {
          id: `img_${productId}_1`,
          productId: productId,
          localFilePath: imageUrl,
          remoteUrl: imageUrl,
          imageType: 'front',
          capturedAt: date.toISOString()
        }
      ];

    }

    // --- ADD RATION STORE KURKURE DEMO DATA ---
    const customInspectionId = new mongoose.Types.ObjectId().toString();
    const customProductId = new mongoose.Types.ObjectId().toString();
    const customDate = new Date();
    const customImageUrl = 'https://m.media-amazon.com/images/I/71YtQn49rLL.jpg'; // Using a placeholder as the exact uploaded file cannot be served directly

    inspectionsToInsert.push({
      _id: customInspectionId,
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
      geo: {
        type: 'Point',
        coordinates: [88.3639, 22.5726]
      },
      status: 'COMPLETED',
      syncStatus: 'synced',
      overallResult: 'PASS',
      startedAt: new Date(customDate.getTime() - 10*60*1000).toISOString(),
      completedAt: customDate.toISOString(),
      syncedAt: customDate.toISOString(),
      createdAt: customDate,
      updatedAt: customDate,
      images: [
        {
          id: `img_${customProductId}_1`,
          productId: customProductId,
          localFilePath: customImageUrl,
          remoteUrl: customImageUrl,
          imageType: 'back',
          capturedAt: customDate.toISOString()
        }
      ]
    } as any);

    productsToInsert.push({
      _id: customProductId,
      inspectionId: customInspectionId,
      category: 'Food & Beverages',
      barcodeOrGtin: 'SKU-KUR-MASALA-135G',
      brandName: 'Kurkure Masala Munch',
      declarationFields: {
        mrp: "30.00",
        netQuantity: "135 g",
        manufacturerName: "PEPSICO INDIA HOLDINGS PVT. LTD.",
        manufacturerAddress: "Level 3 to 5, Pioneer Square, Sector 62, Near Golf Course Extension Road, Gurugram - 122101, Haryana, India",
        bestBefore: "FOUR MONTHS FROM MANUFACTURE",
        customerCare: "1800 22 4020, consumer.feedback@pepsico.com",
        fssai: "10014064000435"
      },
      status: 'VERIFIED',
      imageIds: [`img_${customProductId}_1`],
      complianceResult: {
        decision: 'PASS',
        score: 100,
        violations: []
      },
      createdAt: customDate,
      updatedAt: customDate
    } as any);
    // --- END RATION STORE KURKURE DEMO DATA ---

    await InspectionModel.insertMany(inspectionsToInsert);
    await ProductModel.insertMany(productsToInsert);
    await ViolationModel.insertMany(violationsToInsert);

    console.log(`Successfully seeded ${inspectionsToInsert.length} inspections, ${productsToInsert.length} products, and ${violationsToInsert.length} violations.`);

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
    process.exit(0);
  }
}

seed();
