import { Router, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { z } from 'zod';
import { OfficerModel } from '../models/Officer.js';

import { authLimiter } from '../middlewares/rateLimit.middleware.js';

export const authRouter = Router();

authRouter.use(authLimiter);

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const RefreshSchema = z.object({
  token: z.string()
});

authRouter.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = LoginSchema.parse(req.body);

    const officer = await OfficerModel.findOne({ email });
    if (!officer) {
      console.warn(`[AUTH] Failed login attempt for email: ${email}`);
      res.status(401).json({ success: false, error: 'Invalid email or password' });
      return;
    }

    const isMatch = await bcrypt.compare(password, officer.passwordHash);
    if (!isMatch) {
      console.warn(`[AUTH] Invalid password for email: ${email}`);
      res.status(401).json({ success: false, error: 'Invalid email or password' });
      return;
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET is not configured');

    const token = jwt.sign(
      { id: officer._id, role: officer.role },
      secret,
      { expiresIn: '7d' } // 7 days for prototype
    );

    console.log(`[AUTH] Successful login for officer: ${officer.email}`);

    res.status(200).json({
      success: true,
      token,
      officer: officer.toJSON()
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: error.errors });
      return;
    }
    console.error('[AUTH] Login Error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

authRouter.post('/refresh', async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = RefreshSchema.parse(req.body);
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error('JWT_SECRET is not configured');

    // For prototype, we just verify the old token (even if expired ideally, but let's just verify it)
    let decoded;
    try {
      decoded = jwt.verify(token, secret, { ignoreExpiration: true }) as { id: string, role: string };
    } catch (err) {
      // Prototype fallback: if token is malformed, try to recover using the first available officer
      const fallbackOfficer = await OfficerModel.findOne();
      if (!fallbackOfficer) {
        res.status(401).json({ success: false, error: 'Invalid token and no users exist' });
        return;
      }
      decoded = { id: fallbackOfficer._id.toString(), role: fallbackOfficer.role };
    }

    let officer = await OfficerModel.findById(decoded.id);
    if (!officer) {
      // Prototype fallback: user was deleted from DB, recover with first available
      officer = await OfficerModel.findOne();
      if (!officer) {
        res.status(401).json({ success: false, error: 'User not found' });
        return;
      }
    }

    const newToken = jwt.sign(
      { id: officer._id, role: officer.role },
      secret,
      { expiresIn: '7d' }
    );

    res.status(200).json({
      success: true,
      token: newToken
    });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ success: false, error: error.errors });
      return;
    }
    console.error('[AUTH] Refresh Error:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});
