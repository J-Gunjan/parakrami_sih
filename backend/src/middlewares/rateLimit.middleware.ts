import rateLimit from 'express-rate-limit';

export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limit each IP to 50 requests per windowMs (high enough for testing)
  message: { success: false, error: 'Too many authentication attempts, please try again later' }
});

export const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 200, // limit each IP to 200 image uploads per windowMs
  message: { success: false, error: 'Too many image uploads, please try again later' }
});
