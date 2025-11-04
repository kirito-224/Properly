# PropertyHub - Setup Guide

## Quick Start

This guide will help you get PropertyHub running on your local machine in minutes.

## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14 with Turbopack
- React 19
- Tailwind CSS v4
- TypeScript and other dependencies

### 2. Run the Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000)

### 3. Create Your First Account

1. Navigate to [http://localhost:3000](http://localhost:3000)
2. Click "Get Started" or "Sign Up"
3. Fill in your details:
   - Name
   - Email
   - Password (minimum 6 characters)
4. Click "Create Account"
5. You'll be redirected to the dashboard

## What's Included

### Landing Page
- Professional marketing page
- Feature highlights
- Call-to-action buttons
- Responsive design

### Authentication
- Sign up and sign in pages (authentication backend to be configured)
- Secure session management (to be configured)
- Protected routes (to be configured)

### Dashboard
- Portfolio overview
- Key metrics and statistics
- Recent transactions
- Upcoming payments
- Quick actions

### Properties
- Add new properties
- View property list
- Search and filter
- Property details
- Photo support

### Tenants
- Tenant list with search
- Contact information
- Lease tracking
- Status management

### Finances
- Income tracking
- Expense tracking
- Transaction history
- Financial summaries
- Category breakdown

### Documents
- Document upload placeholder
- Search and filter
- Category organization

### Reports
- Profit & Loss reports
- Income summaries
- Expense reports
- Quick financial overview

### Settings
- Profile management
- Notification preferences
- Security settings
- Subscription management

## Default Test Data

The application includes mock data for demonstration:

- **Properties**: 4 sample properties in New York
- **Tenants**: 4 sample tenants with different statuses
- **Transactions**: Recent income and expense entries
- **Financial Stats**: Year-to-date summaries

To use real data, you'll need to:
1. Configure authentication backend
2. Set up database
3. Sign up for an account
4. Add your properties through the UI
5. Add tenants and record transactions

## Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Try building again
npm run build
```

### Connection Issues

If you encounter connection issues:

1. Check your environment variables if configured
2. Verify backend services are running
3. Check browser console for error messages
4. Restart the development server

### Missing Data

If you don't see properties/tenants:

1. The mock data is hardcoded in the page components
2. Real data requires authentication and database entries
3. Sign up and add properties through the UI

## Production Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables if needed
5. Deploy

### Environment Variables for Production

Make sure to:
- Configure authentication backend
- Set up database (if needed)
- Enable email confirmations (if applicable)
- Set up custom domain (optional)
- Configure proper CORS (if applicable)

## Next Steps

After getting the app running:

1. **Customize the Design**: Modify Tailwind classes and colors
2. **Add Real Features**: Replace mock data with actual database queries
3. **Set Up Authentication**: Configure authentication backend
4. **Set Up Database**: Configure database schema and connections
5. **Add Stripe**: Integrate payment processing for rent collection
6. **Enhance Security**: Add rate limiting and additional validation
7. **Add Analytics**: Integrate PostHog or similar for usage tracking

## Support

For issues or questions:
- Check the main README.md
- Review Next.js documentation
- Open an issue in the repository

## License

ISC License - See LICENSE file for details
