import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../../.env') });

export const config = {
  server: {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
  },
  telegram: {
    botToken: process.env.BOT_TOKEN || 'dummy_token',
  },
  rateLimit: {
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 900000, // 15 minutes
    max: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
  },
} as const;

// Type-safe environment configuration
export type Config = typeof config; 