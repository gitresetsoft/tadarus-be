# Setup Guide

## 1. Create Telegram Bot
1. Open Telegram and search for @BotFather
2. Start a chat and send `/newbot`
3. Follow the prompts:
   - Enter bot name
   - Enter bot username (must end in 'bot')
4. Save the HTTP API token provided
5. Set bot commands using `/setcommands`:
   ```
   ping - Check if bot is alive
   set - Set name and numbers
   stop - Stop with number or timestamp
   start - Start with timestamp
   khatam - Khatam with timestamp
   ```

## 2. Project Setup
1. Create new directory and initialize:
   ```bash
   mkdir tadarus-bot
   cd tadarus-bot
   npm init -y
   ```

2. Install dependencies:
   ```bash
   npm install express dotenv typescript ts-node @types/node @types/express node-telegram-bot-api @types/node-telegram-bot-api
   npm install --save-dev nodemon @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier
   ```

3. Initialize TypeScript:
   ```bash
   npx tsc --init
   ```

4. Create project structure:
   ```
   src/
   ├── config/
   │   └── env.ts
   ├── controllers/
   │   └── botController.ts
   ├── middleware/
   │   └── errorHandler.ts
   ├── services/
   │   └── botService.ts
   ├── types/
   │   └── index.ts
   └── app.ts
   ```

5. Create `.env` file:
   ```
   BOT_TOKEN=your_telegram_bot_token
   PORT=3000
   NODE_ENV=development
   ```

## 3. Render.com Setup
1. Create account on Render.com
2. Create new Web Service
3. Connect to your Git repository
4. Configure build settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
5. Add environment variables:
   - BOT_TOKEN
   - NODE_ENV=production
   - PORT=3000
6. Deploy service

## 4. Development Scripts
Add to package.json:
```json
{
  "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts",
    "build": "tsc",
    "lint": "eslint . --ext .ts",
    "format": "prettier --write \"src/**/*.ts\""
  }
}
```

## 5. Configuration Files
1. Create `.gitignore`:
   ```
   node_modules/
   dist/
   .env
   ```

2. Create `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "target": "es2020",
       "module": "commonjs",
       "outDir": "./dist",
       "rootDir": "./src",
       "strict": true,
       "esModuleInterop": true,
       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true
     },
     "include": ["src/**/*"],
     "exclude": ["node_modules"]
   }
   ```

## 6. Testing
1. Run development server:
   ```bash
   npm run dev
   ```
2. Add bot to a Telegram group
3. Test basic commands:
   - /ping
   - /start
   - /stop
   - /khatam

## 7. Monitoring
1. Set up basic logging in app
2. Monitor application through Render.com dashboard
3. Set up alerts for service downtime 