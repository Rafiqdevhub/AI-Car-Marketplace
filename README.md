# CarSahulat AI - Car Marketplace

CarSahulat AI is a modern car marketplace platform built with Next.js, featuring AI-powered search capabilities, test drive scheduling, and comprehensive car management features.

## Features

### For Users

- 🚗 Browse and search cars with advanced filters
- 🤖 AI-powered car search and recommendations
- 📅 Schedule test drives with real-time availability
- ❤️ Save favorite cars to wishlist
- 👤 User authentication and profile management
- 📱 Fully responsive design

### For Dealers/Admins

- 📊 Comprehensive admin dashboard
- 🚙 Car inventory management
- 📅 Test drive booking management
- ⚙️ Dealership settings configuration
- 👥 User management and role assignment

## Tech Stack

- **Frontend:**

  - Next.js 15.3.2
  - React 19
  - Tailwind CSS
  - Radix UI Components
  - Lucide Icons
  - date-fns for date handling

- **Backend:**

  - Next.js App Router
  - Prisma ORM
  - PostgreSQL (via Supabase)
  - Clerk Authentication

- **AI Features:**
  - Google Generative AI integration
  - AI-powered image search

## Prerequisites

- Node.js 18+
- PostgreSQL database
- Clerk account for authentication
- Supabase project (for storage)
- Google AI API key (for AI features)

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database
DATABASE_URL=your_postgresql_connection_string
DIRECT_URL=your_direct_connection_string

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Installation

1. Clone the repository:

```powershell
git clone https://github.com/Rafiqdevhub/AI-Car-Marketplace.git
cd AI-Car-Marketplace
```

2. Install dependencies:

```powershell
npm install --legacy-peer-deps
```

3. Set up the database:

```powershell
npx prisma generate
npx prisma db push
```

4. Run the development server:

```powershell
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

- `/app` - Next.js app router pages and layouts
  - `/(admin)` - Admin dashboard and management
  - `/(auth)` - Authentication pages
  - `/(main)` - Main user-facing pages
- `/components` - Reusable React components
  - `/ui` - UI components built with Radix UI
- `/actions` - Server actions for data operations
- `/lib` - Utility functions and configurations
- `/prisma` - Database schema and migrations
- `/public` - Static assets (images, icons)

## Key Features Implementation

### Car Search and Filters

- Advanced filtering by make, model, body type, price range
- Real-time search results
- Sort options (price, newest)

### Test Drive Booking

- Real-time availability checking
- Working hours management
- Booking confirmation system
- Admin approval workflow

### Admin Dashboard

- Car inventory management
- Test drive request management
- User management
- Dealership settings configuration

## Database Schema

The application uses a PostgreSQL database with the following main models:

- `User` - User profiles and authentication
- `Car` - Car listings and details
- `DealershipInfo` - Dealership configuration
- `WorkingHour` - Dealership working hours
- `TestDriveBooking` - Test drive bookings
- `UserSavedCar` - User's saved/wishlisted cars

## Currency

The application uses PKR (Pakistani Rupees) as the default currency for all transactions and displays.

## License

This project is licensed under the MIT License.

## Support

For support or inquiries, please create an issue in the repository.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.
