import helmet from 'helmet';
import { Express } from 'express';

export const setupSecurity = (app: Express): void => {
  // Basic security headers
  app.use(helmet());

  // Disable X-Powered-By header
  app.disable('x-powered-by');

  // CORS configuration
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
}; 