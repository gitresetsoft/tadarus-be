![Tadarus Image](https://gitlab.com/ameersorne/ideas/packages-and-libs/library/-/raw/main/data/tadarus/29cc73d3-7385-48f5-9f5c-597ce302c45d.jpg)

# Tadarus-BE

A robust backend system for tracking and managing Quran recital sessions for groups of people. Built with Node.js, TypeScript, and Express.js.

## Features

~~🔐 Secure authentication via Google OAuth~~
- 👥 Group management and member roles
- 📖 Recital session tracking
- 📊 Progress monitoring
- 🔒 Role-based access control
- 🛡️ API rate limiting and security measures
- 🤖 Telegram bot for user interaction

## Tech Stack

- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js  
~~- **Database:** Supabase~~  
  ~~- User Authentication (Google OAuth)~~
  - Data Storage
- **Development Tools:**
  - Prettier for code formatting
  - ESLint for code linting  
  ~~- CORS handling~~
  - Express middleware
  - Telegram Bot API

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Google OAuth credentials
- Telegram account to create a bot

### Installation

1. Clone the repository:
```bash
git clone https://gitlab.com/ameersorne/ideas/tadarus-be.git
cd tadarus-be
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```
> [!Note]  
> ```npm run dev``` for supabase test  
> ```npm run devlocal``` for dummy data

### Running the Telegram Bot

1. Create a new bot via [BotFather](https://t.me/botfather) on Telegram.
2. Obtain the bot token and add it to your `.env` file:
   ```
   BOT_TOKEN=your_telegram_bot_token
   ```

3. Add the bot to your group chat to enable interaction.

## API Documentation

#### Telegram Bot Commands
- `/ping` - Check if the bot is alive
- `/start` - Start the bot and get a timestamp
- `/stop` - Stop the bot with an optional number parameter
- `/khatam` - Mark completion with a timestamp
- `/set` - Set a name and numbers interactively

## Development

### Code Style

This project uses:
- Prettier for code formatting
- ESLint for code linting
- TypeScript for type safety

### Running Tests

```bash
npm run test
# or
yarn test
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](https://opensource.org/license/mit)
