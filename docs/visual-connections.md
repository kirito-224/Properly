# Visual Connection Diagram

## Application Architecture Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                           │
│                      (Browser - Client Side)                     │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│                      APP DIRECTORY (TSX)                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Auth Pages │  │   Dashboard  │  │ Profile Pages│          │
│  │              │  │    Pages     │  │              │          │
│  │ • login      │  │ • dashboard  │  │ • profile    │          │
│  │ • signup     │  │ • properties │  │ • activity   │          │
│  │ • forgot-pwd │  │ • transactions│  │ • logout     │          │
│  │ • two-factor │  │ • documents  │  │ • settings   │          │
│  │              │  │ • reports    │  │ • bank       │          │
│  │              │  │ • OCR        │  │ • advisors   │          │
│  │              │  │ • depreciation│  │              │          │
│  │              │  │ • audit      │  │              │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
         │                    │                    │
         │                    │                    │
         ↓                    ↓                    ↓
┌─────────────────────────────────────────────────────────────────┐
│                     COMPONENTS (TSX)                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Dashboard   │  │  Properties  │  │   Finances   │          │
│  │  Components  │  │  Components  │  │  Components  │          │
│  │              │  │              │  │              │          │
│  │ • Stats      │  │ • PropertyCard│ • ExpenseForm │          │
│  │ • Overview   │  │ • PropertyList│ • IncomeForm  │          │
│  │ • Recent     │  │ • Details    │ • Receipt     │          │
│  │ • Payments   │  │ • Form       │ • TxnList     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │    Charts    │  │   Tenants    │  │   Layout     │          │
│  │  Components  │  │  Components  │  │  Components  │          │
│  │              │  │              │  │              │          │
│  │ • CashFlow   │  │ • TenantCard │  │ • Navbar     │          │
│  │ • Expense    │  │ • TenantList │  │ • Sidebar    │          │
│  │ • Income     │  │ • Form       │  │ • Footer     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                  │
│  ┌─────────────────────────────────────────────────┐            │
│  │         UI Components (Radix UI Based)          │            │
│  │  button, card, dialog, dropdown, input, label,  │            │
│  │  select, table, tabs                            │            │
│  └─────────────────────────────────────────────────┘            │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ Uses
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│                    CUSTOM HOOKS (TS)                             │
│                                                                  │
│  useProperties() ──→ Fetches property data                      │
│  useTenants()    ──→ Fetches tenant data                        │
│  useTransactions()──→ Fetches transaction data                  │
│  useExpenses()   ──→ Fetches expense data                       │
│  useUser()       ──→ Fetches current user                       │
│                                                                  │
│  Returns: { data, isLoading, error }                            │
└─────────────────────────────────────────────────────────────────┘
                                 │
                                 │ Calls
                                 ↓
┌─────────────────────────────────────────────────────────────────┐
│                    API ROUTES (TS)                               │
│              components/Functions/**/route.ts                    │
│                                                                  │
│  /api/properties        GET, POST                               │
│  /api/properties/:id    GET, PUT, DELETE                        │
│  /api/transactions      GET, POST                               │
│  /api/transactions/:id  GET, PUT, DELETE                        │
│  /api/expenses          GET, POST                               │
│  /api/expenses/:id      GET, PUT, DELETE                        │
│  /api/tenants           GET, POST                               │
│  /api/tenants/:id       GET, PUT, DELETE                        │
│  /api/documents/upload  POST                                    │
│  /api/reports/export    GET                                     │
│  /api/payments/intent   POST (Stripe)                           │
│  /api/payments/webhook  POST (Stripe)                           │
└─────────────────────────────────────────────────────────────────┘
                                 │
                    ┌────────────┴────────────┐
                    │                         │
                    ↓                         ↓
┌──────────────────────────┐    ┌─────────────────────────┐
│   PRISMA ORM (TS)        │    │  EXTERNAL SERVICES      │
│                          │    │                         │
│  • Database Queries      │    │  • Auth0                │
│  • Type-safe Operations  │    │  • Stripe               │
│  • Migrations            │    │  • AWS S3               │
└──────────────────────────┘    │  • Redis                │
                                │  • OCR Service          │
                                └─────────────────────────┘
         │
         ↓
┌─────────────────────────────────────────────────────────────────┐
│                       DATABASE                                   │
│                    (PostgreSQL)                                  │
│                                                                  │
│  Tables: Properties, Tenants, Transactions, Expenses,           │
│          Documents, Users, Categories                           │
└─────────────────────────────────────────────────────────────────┘
```

## Type System Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    TYPES DIRECTORY (TS)                          │
│                                                                  │
│  database.ts  ──→  Property, Tenant, Transaction, Expense,      │
│                    Document, User, Category interfaces          │
│                                                                  │
│  index.ts     ──→  Exports all types                            │
│                                                                  │
│  api.ts       ──→  API request/response types                   │
└─────────────────────────────────────────────────────────────────┘
         │         │         │         │         │
         ↓         ↓         ↓         ↓         ↓
     ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
     │ TSX  │  │ Hooks│  │ API  │  │Prisma│  │ Lib  │
     │Pages │  │      │  │Routes│  │      │  │Utils │
     └──────┘  └──────┘  └──────┘  └──────┘  └──────┘

    All parts of the application use these shared types
    for type safety and consistency
```

## Authentication Flow

```
┌─────────────┐
│   Browser   │
└─────────────┘
       │
       ↓
┌─────────────────────────┐
│  /auth/login (TSX)      │
│  • Email/Password Form  │
│  • Social Login Buttons │
└─────────────────────────┘
       │
       ↓
┌─────────────────────────┐
│   Auth0 Service         │
│  • Validates Credentials│
│  • Returns JWT Token    │
└─────────────────────────┘
       │
       ↓
┌─────────────────────────┐
│  AuthProvider (TSX)     │
│  • Stores User Session  │
│  • Provides useAuth()   │
└─────────────────────────┘
       │
       ↓
┌─────────────────────────┐
│  Protected Routes       │
│  • /Dashboard/*         │
│  • /Profile/*           │
└─────────────────────────┘
```

## Data Fetching Pattern

```
┌────────────────────┐
│  Page Component    │
│  (properties.tsx)  │
└────────────────────┘
         │
         │ imports
         ↓
┌────────────────────┐
│  useProperties()   │  ←──── Custom Hook
│  hook              │
└────────────────────┘
         │
         │ useState, useEffect
         ↓
┌────────────────────┐
│  fetch() call      │  ←──── HTTP Request
└────────────────────┘
         │
         │ GET /api/properties
         ↓
┌────────────────────┐
│  API Route         │  ←──── Server-side
│  route.ts          │
└────────────────────┘
         │
         │ Prisma query
         ↓
┌────────────────────┐
│  Database          │  ←──── PostgreSQL
└────────────────────┘
         │
         │ Property[]
         ↓
┌────────────────────┐
│  Returns to Hook   │
└────────────────────┘
         │
         │ { properties, isLoading, error }
         ↓
┌────────────────────┐
│  Component Renders │
│  PropertyList      │
└────────────────────┘
```

## Component Composition Pattern

```
Page Component (properties.tsx)
    │
    ├── PropertyList (component)
    │       │
    │       ├── PropertyCard (component)
    │       │       │
    │       │       ├── Card (ui component)
    │       │       ├── Button (ui component)
    │       │       └── Badge (ui component)
    │       │
    │       ├── PropertyCard (component)
    │       └── PropertyCard (component)
    │
    └── Button (ui component - "Add Property")


Dashboard Page (dashboard.tsx)
    │
    ├── DashboardStats (component)
    │       │
    │       ├── Card (ui component)
    │       ├── Card (ui component)
    │       └── Card (ui component)
    │
    ├── PropertyOverview (component)
    │       │
    │       └── Card (ui component)
    │
    ├── UpcomingPayments (component)
    │       │
    │       └── Card (ui component)
    │
    └── RecentTransactions (component)
            │
            ├── Card (ui component)
            └── Table (ui component)
```

## State Management Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    Global State                              │
│                                                              │
│  AuthProvider (components/providers/AuthProvider.tsx)       │
│  └── useAuth() hook                                         │
│      • user: User | null                                    │
│      • login(email, password)                               │
│      • logout()                                             │
│      • isLoading: boolean                                   │
│                                                              │
│  QueryProvider (components/providers/QueryProvider.tsx)     │
│  └── React Query client for caching                         │
└─────────────────────────────────────────────────────────────┘
                         │
                         │ Wraps
                         ↓
┌─────────────────────────────────────────────────────────────┐
│                   App Layout (app/layout.tsx)                │
│                   Provides context to all pages              │
└─────────────────────────────────────────────────────────────┘
                         │
                         ↓
┌─────────────────────────────────────────────────────────────┐
│                   Local State (per page)                     │
│                                                              │
│  useState() - Form inputs, UI state                         │
│  useProperties() - Property data from API                   │
│  useTenants() - Tenant data from API                        │
│  useTransactions() - Transaction data from API              │
└─────────────────────────────────────────────────────────────┘
```

## File Import Patterns

### Pattern 1: Page imports Components
```typescript
// File: app/Dashboard/property/properties.tsx
import { PropertyList } from '@/components/properties/PropertyList';

export default function PropertiesPage() {
  return <PropertyList />;
}
```

### Pattern 2: Component imports UI Components
```typescript
// File: components/properties/PropertyCard.tsx
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function PropertyCard({ property }) {
  return (
    <Card>
      <h3>{property.name}</h3>
      <Button>View Details</Button>
    </Card>
  );
}
```

### Pattern 3: Component uses Hooks
```typescript
// File: components/properties/PropertyList.tsx
import { useProperties } from '@/hooks/useProperties';
import { PropertyCard } from '@/components/properties/PropertyCard';

export function PropertyList() {
  const { properties, isLoading } = useProperties();
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {properties.map(p => <PropertyCard key={p.id} property={p} />)}
    </div>
  );
}
```

### Pattern 4: Hook calls API
```typescript
// File: hooks/useProperties.ts
import { Property } from '@/types/database';

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  
  useEffect(() => {
    fetch('/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data));
  }, []);
  
  return { properties, isLoading, error };
}
```

### Pattern 5: API Route uses Types
```typescript
// File: components/Functions/properties/route.ts
import { Property } from '@/types/database';
import { NextResponse } from 'next/server';

export async function GET() {
  const properties: Property[] = await prisma.property.findMany();
  return NextResponse.json(properties);
}
```

## Summary of Connections

1. **Pages (TSX)** → Import **Components (TSX)**
2. **Components (TSX)** → Import **UI Components (TSX)**
3. **Components (TSX)** → Use **Hooks (TS)**
4. **Hooks (TS)** → Call **API Routes (TS)**
5. **API Routes (TS)** → Use **Prisma ORM** → Query **Database**
6. **All Layers** → Import **Types (TS)** for type safety
7. **All Code** → Use **Lib Utilities (TS)** for helpers
8. **Authentication** → **Auth0** → **AuthProvider** → **Protected Pages**
9. **Payments** → **Stripe** → **Payment Routes**
10. **File Storage** → **AWS S3** → **Document Routes**

Every file in the application follows these patterns consistently, ensuring:
- ✅ Type safety throughout
- ✅ Reusable components
- ✅ Centralized data fetching
- ✅ Clear separation of concerns
- ✅ Maintainable codebase
