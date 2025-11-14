# Architecture and Connections Documentation

This document explains how the various TypeScript (TS) and TypeScript React (TSX) files and folders connect and work together in the Property Manager application.

## Overview

The application is built using Next.js 13+ with the App Router, TypeScript, and Tailwind CSS. It follows a modular architecture with clear separation of concerns between UI components, business logic, data management, and API endpoints.

## Technology Stack

- **Framework:** Next.js 16.0.2 with App Router
- **Language:** TypeScript 5.9.3
- **UI Library:** React 19.2.0
- **Styling:** Tailwind CSS 4.1.17
- **UI Components:** Radix UI primitives (Dialog, Dropdown, Label, Select, Tabs)
- **Authentication:** Auth0 (@auth0/nextjs-auth0)
- **Database ORM:** Prisma 6.19.0
- **Payment Processing:** Stripe
- **File Storage:** AWS SDK
- **Caching:** Redis
- **Utilities:** clsx, tailwind-merge, lucide-react (icons)

## Folder Structure and Connections

### 1. `app/` Directory (TSX Files - Frontend Pages)
The `app/` directory contains Next.js pages and layouts using the App Router.

#### Authentication Routes (`app/auth/`)
- **`auth/layout.tsx`**: Centered layout wrapper for authentication pages
- **`auth/login/login.tsx`**: User login with email/password and social auth
- **`auth/signup/signup.tsx`**: User registration form
- **`auth/forgot-password/page.tsx`**: Password reset flow with email submission
- **`auth/two-factor/page.tsx`**: 6-digit 2FA verification page

**Connections:**
```
auth/login/login.tsx
├── Imports: Button, Input, Label from components/ui/
├── Uses: useRouter from next/navigation
└── Navigates to: /Dashboard/dashboard after login

auth/forgot-password/page.tsx
├── Imports: Button, Input, Label from components/ui/
├── Shows: Confirmation UI after email sent
└── Links to: auth/login
```

#### Dashboard Routes (`app/Dashboard/`)
- **`dashboard/dashboard.tsx`**: Main dashboard overview
- **`property/properties.tsx`**: Property listing page
- **`property/new/newproperty.tsx`**: Create new property
- **`property/[id]/id.tsx`**: Individual property details
- **`transactions/transactions.tsx`**: All transactions
- **`transactions/income/income.tsx`**: Income transactions
- **`transactions/expenses/expenses.tsx`**: Expense transactions
- **`documents/documents.tsx`**: Document management
- **`reports/reports.tsx`**: Financial reports
- **`Bank/bank.tsx`**: Bank account management
- **`Subscriptions/subcription.tsx`**: Subscription management
- **`Ticket/support-ticket.tsx`**: Support ticket system
- **`Advisor/trusted-advisor.tsx`**: Trusted advisor recommendations
- **`Audit-checks/page.tsx`**: Compliance and audit checks
- **`Depreciation/page.tsx`**: Asset depreciation tracking
- **`OCR/page.tsx`**: OCR document processing and data extraction

**Connections:**
```
Dashboard/dashboard/dashboard.tsx
├── Imports: DashboardStats, RecentTransactions, UpcomingPayments, PropertyOverview
├── From: components/dashboard/
└── Displays: Grid layout with dashboard widgets

Dashboard/property/properties.tsx
├── Imports: PropertyList from components/properties/
└── Displays: Property cards in grid

Dashboard/Audit-checks/page.tsx
├── Imports: Card, Button from components/ui/
├── State: useState for audit check data
└── Features: Compliance status, audit scheduling

Dashboard/Depreciation/page.tsx
├── Imports: Card, Button from components/ui/
├── Calculates: Total depreciation, current values
└── Displays: Depreciation schedule table

Dashboard/OCR/page.tsx
├── Imports: Card, Button from components/ui/
├── Features: File upload, OCR processing
└── Displays: Extracted document data with confidence scores
```

#### Profile Routes (`app/Profile/`)
- **`profile.tsx`**: Main profile page
- **`Credentials/email-pass.tsx`**: Email/password management
- **`Credentials/two-factor.tsx`**: 2FA settings
- **`Activity/page.tsx`**: User activity log with timestamps and IP tracking
- **`profile-home/logout.tsx`**: Logout confirmation page
- **`profile-home/Bank/page.tsx`**: Connected bank accounts management
- **`profile-home/mortege-broker/page.tsx`**: Mortgage broker contacts
- **`profile-home/Setting/page.tsx`**: User preferences and settings
- **`profile-home/tax-accountant/page.tsx`**: Tax accountant contacts

**Connections:**
```
Profile/profile-home/logout.tsx
├── Imports: useRouter, Button, Card from components/ui/
├── Action: Clears localStorage, redirects to login
└── UI: Confirmation dialog

Profile/Activity/page.tsx
├── Imports: Card from components/ui/
├── Displays: Activity logs with icons by type
├── Shows: Login history, property changes, transactions
└── Features: Relative timestamps, IP addresses, device info

Profile/profile-home/Bank/page.tsx
├── Imports: Card, Button, Input, Label from components/ui/
├── Features: Add/remove bank accounts
└── Displays: Account balances, account types

Profile/profile-home/Setting/page.tsx
├── Imports: Card, Button, Label from components/ui/
├── Manages: Notifications, theme, language, currency
└── Features: Export data, delete account
```

**Key Connections:**
- **Imports Components:** Pages import reusable components from `components/`
- **Uses Hooks:** For data fetching and state management from `hooks/`
- **Navigation:** Uses Next.js routing between pages
- **Layouts:** Provide structure and wrap pages with common UI elements

### 2. `components/` Directory (TSX Files - UI Components)
Contains reusable React components organized by feature.

**Key Connections:**
- **Imports UI Components:** Uses base UI components from `components/ui/`
- **Uses Hooks:** Calls custom hooks from `hooks/` for data
- **Imports Types:** Uses TypeScript types from `types/` for props
- **Renders Sub-components:** Composes smaller components together

**Example Flow:**
```
components/properties/PropertyList.tsx
├── Imports: PropertyCard from components/properties/
├── Uses: Property types from types/database.ts
├── Renders: Grid of PropertyCard components
└── Passes: Property data as props to child components
```

### 3. `hooks/` Directory (TS Files - Data Management)
Custom React hooks for data fetching, state management, and business logic.

**Key Connections:**
- **Imports Types:** Uses interfaces from `types/` for data structures
- **Makes API Calls:** Fetches data from API routes in `Functions/`
- **Manages State:** Uses React hooks for local state
- **Returns Data:** Provides data and loading states to components

**Example Flow:**
```
hooks/useProperties.ts
├── Imports: Property type from types/database.ts
├── Fetches: Data from '/api/properties' (Functions/properties/route.ts)
├── Manages: Loading and error states
└── Returns: { properties, isLoading, error } to components
```

### 4. `Functions/` Directory (TS Files - API Routes)
Next.js API routes handling backend logic and database operations.

**Key Connections:**
- **Imports Types:** Uses database types from `types/`
- **Uses Config:** Authentication config from `config/`
- **Database Operations:** Interacts with database using Prisma
- **Returns Data:** JSON responses consumed by hooks

**Example Flow:**
```
Functions/properties/route.ts
├── Imports: Property types from types/database.ts
├── Handles: GET/POST requests for property data
├── Queries: Database using Prisma ORM
└── Returns: JSON data to frontend hooks
```

### 5. `types/` Directory (TS Files - Type Definitions)
TypeScript interfaces and types for type safety.

**Key Connections:**
- **Used Throughout:** Imported by components, hooks, API routes
- **Database Schema:** Defines data structures matching database
- **API Contracts:** Ensures consistent data shapes across layers

**Example Flow:**
```
types/database.ts
├── Defines: Property, Tenant, Transaction interfaces
├── Used by: hooks/useProperties.ts, components/properties/
├── Ensures: Type safety in API responses and component props
└── Maintains: Consistency across frontend and backend
```

### 6. `lib/` Directory (TS Files - Utilities)
Utility functions, helpers, and shared logic.

**Key Connections:**
- **Imports Config:** Uses configuration from `config/`
- **Used by Components/Hooks:** Provides helper functions
- **Authentication Logic:** Handles auth utilities

**Example Flow:**
```
lib/utils.ts
├── Contains: formatCurrency, validateEmail functions
├── Used by: components/finances/, hooks/useTransactions.ts
└── Provides: Reusable utility functions
```

### 7. `config/` Directory (TS Files - Configuration)
Configuration files for external services.

**Key Connections:**
- **Used by Lib:** Imported by utility files for setup
- **Authentication:** Auth0 configuration for user management

**Example Flow:**
```
config/auth0.ts
├── Defines: Auth0 client configuration
├── Used by: lib/auth0.ts for authentication setup
└── Enables: Secure user login/logout
```

### 8. `components/providers/` Directory (TSX Files - Context Providers)
React Context providers for global state management.

**Key Connections:**
- **Wraps App:** Used in layouts to provide context
- **Used by Components:** Components consume context via hooks
- **Manages Global State:** Authentication, query client state

**Example Flow:**
```
components/providers/AuthProvider.tsx
├── Creates: AuthContext with user state
├── Provides: login, logout functions
├── Used by: Components via useAuth() hook
└── Manages: User authentication state globally
```

## Data Flow Architecture

### Frontend to Backend Flow:
1. **User Interaction** → TSX Page Component
2. **Data Request** → Custom Hook (TS)
3. **API Call** → API Route (TS)
4. **Database Query** → Prisma ORM
5. **Response** → Hook → Component → UI Update

### Authentication Flow:
1. **Login Form** → AuthProvider Context
2. **Auth0 Integration** → Config/Auth0
3. **Token Management** → Local Storage/Session
4. **Protected Routes** → Middleware/Layout Guards

### Component Composition Flow:
1. **Page Layout** → Imports Feature Components
2. **Feature Component** → Uses UI Components + Hooks
3. **UI Components** → Receives Props + Types
4. **Hooks** → Fetch Data + Manage State

## Type Safety Throughout
- All data structures defined in `types/`
- Components receive typed props
- Hooks return typed data
- API routes use typed request/response
- Database operations use typed schemas

## Key Integration Points
- **Components ↔ Hooks:** Data fetching and state management
- **Hooks ↔ API Routes:** HTTP communication
- **API Routes ↔ Database:** Data persistence
- **Components ↔ Types:** Type-safe props and state
- **Providers ↔ Components:** Global state access
- **Config ↔ Lib:** External service integration

This architecture ensures maintainable, scalable, and type-safe code with clear separation of concerns between UI, business logic, and data management.