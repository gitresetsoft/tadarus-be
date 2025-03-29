import express, { Request, Response } from 'express';
import { config } from './config/env';
import { errorHandler } from './middleware/errorHandler';
import { rateLimiter } from './middleware/rateLimit';
import { setupSecurity } from './middleware/security';
import botService from './services/botService';

const app = express();

// Security setup
setupSecurity(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

// Initialize bot service
const bot = botService.getBot();

// Start server
app.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`);
  console.log(`Environment: ${config.server.nodeEnv}`);
  console.log('Bot service initialized');
}); 