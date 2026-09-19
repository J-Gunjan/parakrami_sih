import { InspectionModel } from '../models/Inspection.js';
import { ProductModel } from '../models/Product.js';
import { ViolationModel } from '../models/Violation.js';

export class RiskScoringService {

  /**
   * Get basic overview statistics
   */
  static async getOverviewStats() {
    const totalInspections = await InspectionModel.countDocuments();
    const totalFailed = await InspectionModel.countDocuments({ overallResult: 'FAIL' });
    const totalProducts = await ProductModel.countDocuments();
    
    // Find hotspots (group by district)
    const hotspots = await InspectionModel.aggregate([
      { $match: { overallResult: 'FAIL' } },
      { $group: { _id: '$location.district', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 3 }
    ]);

    const violationRate = totalInspections > 0 ? (totalFailed / totalInspections) * 100 : 0;

    return {
      totalInspections,
      violationRate: violationRate.toFixed(1),
      totalProducts,
      hotspots: hotspots.map(h => ({ name: h._id || 'Unknown', count: h.count }))
    };
  }

  /**
   * Calculates Inspection Priority Score (0-100)
   * Weights:
   *  - Violation Frequency (30%)
   *  - Repeat Violations (25%)
   *  - Manufacturer History (20%)
   *  - Category Risk (15%)
   *  - Location Risk (10%)
   */
  static async getPriorityScores() {
    // 1. Get Manufacturer History Risk (Fail rate across all their SKUs)
    const mfgStats = await ProductModel.aggregate([
      { 
        $group: { 
          _id: '$brandName', 
          total: { $sum: 1 }, 
          failed: { $sum: { $cond: [{ $eq: ['$complianceResult.decision', 'FAIL'] }, 1, 0] } } 
        } 
      }
    ]);
    const mfgRiskMap = new Map();
    mfgStats.forEach(m => {
      mfgRiskMap.set(m._id, m.total > 0 ? m.failed / m.total : 0);
    });

    // 2. Get Location Risk (Fail rate by district)
    const locStats = await InspectionModel.aggregate([
      {
        $group: {
          _id: '$location.district',
          total: { $sum: 1 },
          failed: { $sum: { $cond: [{ $eq: ['$overallResult', 'FAIL'] }, 1, 0] } }
        }
      }
    ]);
    const locRiskMap = new Map();
    locStats.forEach(l => {
      locRiskMap.set(l._id, l.total > 0 ? l.failed / l.total : 0);
    });

    // Category base risk (hardcoded)
    const categoryRisk: Record<string, number> = {
      'Food & Beverages': 0.9,
      'FMCG': 0.7,
      'Cosmetics': 0.8,
      'Electronics': 0.5
    };

    // 3. Main Aggregation: Group by Manufacturer + SKU
    const productStats = await ProductModel.aggregate([
      {
        $addFields: {
          inspectionObjectId: { $toObjectId: '$inspectionId' }
        }
      },
      {
        $lookup: {
          from: 'inspections',
          localField: 'inspectionObjectId',
          foreignField: '_id',
          as: 'inspection'
        }
      },
      { $unwind: '$inspection' },
      {
        $group: {
          _id: { brandName: '$brandName', sku: '$barcodeOrGtin', category: '$category' },
          inspectionsCount: { $sum: 1 },
          failedCount: { $sum: { $cond: [{ $eq: ['$complianceResult.decision', 'FAIL'] }, 1, 0] } },
          lastInspectionDate: { $max: '$createdAt' },
          districts: { $addToSet: '$inspection.location.district' },
          markets: { $addToSet: '$inspection.shopName' }
        }
      }
    ]);

    // Calculate score for each
    const scoredList = productStats.map(stat => {
      const brand = stat._id.brandName || 'Unknown';
      const sku = stat._id.sku || 'Unknown';
      const cat = stat._id.category || 'Unknown';
      
      const violationFreq = stat.inspectionsCount > 0 ? stat.failedCount / stat.inspectionsCount : 0;
      const repeatViolationsRisk = stat.failedCount > 1 ? Math.min((stat.failedCount - 1) * 0.5, 1) : 0;
      const mfgRisk = mfgRiskMap.get(brand) || 0;
      const catRisk = categoryRisk[cat] || 0.5;
      
      // Average location risk across all districts this SKU was found in
      let avgLocRisk = 0;
      if (stat.districts.length > 0) {
        let totalLocRisk = 0;
        for (const dist of stat.districts) {
          totalLocRisk += (locRiskMap.get(dist) || 0);
        }
        avgLocRisk = totalLocRisk / stat.districts.length;
      }

      // Calculate final score
      let score = 
        (violationFreq * 30) + 
        (repeatViolationsRisk * 25) + 
        (mfgRisk * 20) + 
        (catRisk * 15) + 
        (avgLocRisk * 10);

      // Determine main reason
      let mainReason = 'Routine inspection';
      if (score > 60) {
        if (repeatViolationsRisk > 0.5) mainReason = 'High repeat violation history';
        else if (violationFreq > 0.7) mainReason = 'Frequent violations in recent inspections';
        else if (mfgRisk > 0.7) mainReason = 'Manufacturer has poor overall compliance';
        else if (avgLocRisk > 0.7) mainReason = 'High violation concentration in these locations';
      }

      return {
        brandName: brand,
        sku: sku,
        category: cat,
        inspectionsCount: stat.inspectionsCount,
        failedCount: stat.failedCount,
        lastInspectionDate: stat.lastInspectionDate,
        locations: stat.districts.join(', '),
        score: Math.round(score),
        mainReason
      };
    });

    // Sort descending by score
    return scoredList.sort((a, b) => b.score - a.score);
  }

  /**
   * Get Geo Map Data
   */
  static async getGeoMapData() {
    const inspections = await InspectionModel.find({
      'geo.coordinates': { $exists: true, $not: { $size: 0 } }
    }).select('geo overallResult shopName createdAt').lean();

    return inspections.map(i => ({
      id: i._id,
      shopName: i.shopName,
      latitude: i.geo?.coordinates[1] || 0,
      longitude: i.geo?.coordinates[0] || 0,
      status: i.overallResult,
      date: i.createdAt
    }));
  }

  /**
   * Get chronological trend history for a specific Manufacturer + SKU
   */
  static async getTrends(brandName: string, sku: string) {
    const products = await ProductModel.find({ brandName, barcodeOrGtin: sku })
      .sort({ createdAt: 1 })
      .lean();

    // Collect all inspection IDs
    const inspectionIds = products.map(p => p.inspectionId);

    // Fetch corresponding inspections
    const inspections = await InspectionModel.find({
      _id: { $in: inspectionIds }
    }).select('shopName location overallResult createdAt').lean();

    // Create a map for quick lookup
    const inspectionMap = new Map();
    inspections.forEach(i => {
      inspectionMap.set(i._id.toString(), i);
    });

    return products.map((p: any) => {
      const insp = inspectionMap.get(p.inspectionId);
      return {
        id: p._id,
        inspectionId: p.inspectionId,
        date: p.createdAt,
        shopName: insp?.shopName || 'Unknown Shop',
        location: insp?.location?.district || 'Unknown Location',
        result: p.complianceResult?.decision || 'UNKNOWN'
      };
    });
  }

}
