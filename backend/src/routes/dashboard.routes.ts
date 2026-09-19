import { Router } from 'express';
import { InspectionModel } from '../models/Inspection.js';
import { ProductModel } from '../models/Product.js';
import { ViolationModel } from '../models/Violation.js';

export const dashboardRouter = Router();

// GET /api/dashboard/inspections
dashboardRouter.get('/inspections', async (req, res) => {
  try {
    const inspections = await InspectionModel.find()
      .sort({ createdAt: -1 })
      .lean();
    
    // We need to return summary info similar to mockInspections in api.ts
    // The frontend expects: id, officerName, shopName, locationAddress, totalProducts, totalViolations, overallResult, status, syncStatus, createdAt
    
    const summaries = await Promise.all(inspections.map(async (insp: any) => {
      const products = await ProductModel.countDocuments({ inspectionId: insp._id.toString() });
      const violations = await ViolationModel.countDocuments({ inspectionId: insp._id.toString() });
      
      return {
        id: insp._id,
        officerId: insp.officerId,
        officerName: 'Demo Officer', // hardcoded for demo
        shopName: insp.shopName,
        locationAddress: insp.location?.address || '',
        totalProducts: products,
        totalViolations: violations,
        overallResult: insp.overallResult,
        status: insp.status,
        syncStatus: insp.syncStatus,
        createdAt: insp.createdAt
      };
    }));

    res.json(summaries);
  } catch (error) {
    console.error('Error fetching dashboard inspections:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/dashboard/inspections/:id
dashboardRouter.get('/inspections/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const inspection: any = await InspectionModel.findById(id).lean();
    if (!inspection) {
      return res.status(404).json({ error: 'Inspection not found' });
    }

    const products = await ProductModel.find({ inspectionId: id }).lean();
    const violations = await ViolationModel.find({ inspectionId: id }).lean();

    // Reconstruct the payload to match what frontend expects
    inspection.id = inspection._id;
    inspection.products = products.map((p: any) => ({
      ...p,
      id: p._id
    }));
    inspection.violations = violations.map((v: any) => ({
      ...v,
      id: v._id
    }));
    // Images are already embedded in our seeded mock or can be returned if they exist
    if (!inspection.images) {
      inspection.images = [];
    }

    res.json(inspection);
  } catch (error) {
    console.error('Error fetching dashboard inspection:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
