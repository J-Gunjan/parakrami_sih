import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { OfficerModel } from '../models/Officer.js';

export interface AuthenticatedRequest extends Request {
  officer?: {
    id: string;
    role: string;
  };
}

export const authenticateToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    res.status(401).json({ success: false, error: 'Access token required' });
    return;
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET is not configured');

    const decoded = jwt.verify(token, secret) as { id: string, role: string };
    
    // Check if user still exists
    const officer = await OfficerModel.findById(decoded.id).select('_id role');
    if (!officer) {
      res.status(401).json({ success: false, error: 'User no longer exists' });
      return;
    }

    req.officer = { id: decoded.id, role: decoded.role };
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {
      res.status(403).json({ success: false, error: 'Invalid or expired token' });
    } else {
      console.error('[AUTH MIDDLEWARE] Internal Error:', error);
      res.status(500).json({ success: false, error: 'Internal server error during authentication' });
    }
    return;
  }
};

export const requireRole = (roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    if (!req.officer || !roles.includes(req.officer.role)) {
      res.status(403).json({ success: false, error: 'Insufficient permissions' });
      return;
    }
    next();
  };
};
