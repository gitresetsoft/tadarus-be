# Tadarus-BE

A robust backend system for tracking and managing Quran recital sessions for groups of people. Built with Node.js, TypeScript, and Express.js.

## Features

- 🔐 Secure authentication via Google OAuth
- 👥 Group management and member roles
- 📖 Recital session tracking
- 📊 Progress monitoring
- 🔒 Role-based access control
- 🛡️ API rate limiting and security measures

## Tech Stack

- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Database:** Supabase
  - User Authentication (Google OAuth)
  - Data Storage
- **Development Tools:**
  - Prettier for code formatting
  - ESLint for code linting
  - CORS handling
  - Express middleware

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account
- Google OAuth credentials

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


## API Documentation

### Authentication
- `POST /api/auth/login` - Login with Google OAuth
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile

### Groups
- `GET /api/groups` - List all groups
- `POST /api/groups` - Create new group
- `GET /api/groups/:id` - Get group details
- `PUT /api/groups/:id` - Update group
- `DELETE /api/groups/:id` - Delete group
- `POST /api/groups/:id/members` - Add member to group
- `DELETE /api/groups/:id/members/:userId` - Remove member from group

### Recital Sessions
- `GET /api/groups/:groupId/sessions` - List group sessions
- `POST /api/groups/:groupId/sessions` - Create new session
- `GET /api/sessions/:id` - Get session details
- `PUT /api/sessions/:id` - Update session
- `DELETE /api/sessions/:id` - Delete session

### Recital Progress
- `GET /api/sessions/:sessionId/progress` - List session progress
- `POST /api/sessions/:sessionId/progress` - Record progress
- `PUT /api/progress/:id` - Update progress
- `DELETE /api/progress/:id` - Delete progress record

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

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## TODO

- [ ] Implement caching strategy
- [ ] Add database sharding for scalability
- [ ] Implement data retention policies
- [ ] Add global CDN support
- [ ] Integrate with additional third-party services
- [ ] Add comprehensive API documentation
- [ ] Implement automated testing
- [ ] Set up CI/CD pipeline
