import { Router } from 'express';
import { RiskScoringService } from '../services/RiskScoringService.js';

export const analyticsRouter = Router();

// GET /api/analytics/overview
analyticsRouter.get('/overview', async (req, res) => {
  try {
    const stats = await RiskScoringService.getOverviewStats();
    res.json(stats);
  } catch (error) {
    console.error('Error fetching analytics overview:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/analytics/priorities
analyticsRouter.get('/priorities', async (req, res) => {
  try {
    const priorities = await RiskScoringService.getPriorityScores();
    res.json(priorities);
  } catch (error) {
    console.error('Error fetching analytics priorities:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/analytics/map
analyticsRouter.get('/map', async (req, res) => {
  try {
    const mapData = await RiskScoringService.getGeoMapData();
    res.json(mapData);
  } catch (error) {
    console.error('Error fetching analytics map data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/analytics/trends?brandName=...&sku=...
analyticsRouter.get('/trends', async (req, res) => {
  try {
    const { brandName, sku } = req.query;
    if (!brandName || !sku) {
      return res.status(400).json({ error: 'brandName and sku are required query parameters' });
    }
    const trends = await RiskScoringService.getTrends(brandName as string, sku as string);
    res.json(trends);
  } catch (error) {
    console.error('Error fetching analytics trends:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
