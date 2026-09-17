import supertest from 'supertest';
import { createApp } from '../src/app';
import { OfficerModel } from '../src/models/Officer';
import bcrypt from 'bcrypt';

const app = createApp();
const request = supertest(app);

describe('Auth Routes', () => {
  beforeEach(async () => {
    process.env.JWT_SECRET = 'test_secret';
    const passwordHash = await bcrypt.hash('password123', 10);
    await OfficerModel.create({
      name: 'Test Officer',
      email: 'test@example.com',
      passwordHash,
      badgeNumber: 'B123',
      jurisdiction: 'Delhi',
      role: 'INSPECTOR'
    });
  });

  it('should login successfully with valid credentials', async () => {
    const res = await request.post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'password123'
    });
    
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.token).toBeDefined();
    expect(res.body.officer.email).toBe('test@example.com');
    expect(res.body.officer.passwordHash).toBeUndefined(); // Should not expose password hash
  });

  it('should fail to login with invalid password', async () => {
    const res = await request.post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'wrongpassword'
    });
    
    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });

  it('should validate inputs using zod', async () => {
    const res = await request.post('/api/auth/login').send({
      email: 'not-an-email',
      password: '123'
    });
    
    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toBeDefined();
  });
});
