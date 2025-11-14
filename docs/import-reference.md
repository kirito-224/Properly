# Import Connections Reference

## Quick Reference: What Imports What

### Pages Import Components

| Page File | Imports From | Purpose |
|-----------|-------------|---------|
| `app/Dashboard/dashboard/dashboard.tsx` | `@/components/dashboard/DashboardStats` | Statistics cards |
| | `@/components/dashboard/RecentTransactions` | Transaction list |
| | `@/components/dashboard/UpcomingPayments` | Payment reminders |
| | `@/components/dashboard/PropertyOverview` | Property summary |
| `app/Dashboard/property/properties.tsx` | `@/components/properties/PropertyList` | Display properties |
| `app/Dashboard/transactions/income/income.tsx` | `@/components/finances/IncomeForm` | Add income |
| | `@/components/finances/TransactionList` | Show transactions |
| `app/Dashboard/transactions/expenses/expenses.tsx` | `@/components/finances/ExpenseForm` | Add expense |
| | `@/components/finances/TransactionList` | Show transactions |
| `app/Dashboard/reports/reports.tsx` | `@/components/charts/CashFlowChart` | Cash flow viz |
| | `@/components/charts/ExpenseChart` | Expense viz |
| | `@/components/charts/IncomeChart` | Income viz |

### Components Import UI Components

| Component File | Imports UI From | Purpose |
|----------------|-----------------|---------|
| `components/dashboard/PropertyOverview.tsx` | `@/components/ui/card` | Container |
| | `@/components/ui/button` | Actions |
| `components/properties/PropertyCard.tsx` | `@/components/ui/card` | Container |
| | `@/components/ui/button` | Actions |
| `components/properties/PropertyList.tsx` | `@/components/properties/PropertyCard` | Individual cards |
| `components/finances/ExpenseForm.tsx` | `@/components/ui/input` | Form fields |
| | `@/components/ui/label` | Field labels |
| | `@/components/ui/button` | Submit |
| | `@/components/ui/select` | Dropdowns |
| `components/tenants/TenantCard.tsx` | `@/components/ui/card` | Container |
| | `@/components/ui/button` | Actions |

### Components Use Hooks

| Component File | Uses Hook | Returns |
|----------------|-----------|---------|
| `components/properties/PropertyList.tsx` | `useProperties()` | `{ properties, isLoading, error }` |
| `components/tenants/TenantList.tsx` | `useTenants()` | `{ tenants, isLoading, error }` |
| `components/finances/TransactionList.tsx` | `useTransactions()` | `{ transactions, isLoading, error }` |
| `components/finances/ExpenseForm.tsx` | `useExpenses()` | `{ expenses, isLoading, error }` |
| `components/dashboard/DashboardStats.tsx` | `useProperties()` | Property count |
| | `useTransactions()` | Transaction totals |

### Hooks Call API Routes

| Hook File | API Endpoint | Method | Returns |
|-----------|--------------|--------|---------|
| `hooks/useProperties.ts` | `/api/properties` | GET | `Property[]` |
| `hooks/useTenants.ts` | `/api/tenants` | GET | `Tenant[]` |
| `hooks/useTransactions.ts` | `/api/transactions` | GET | `Transaction[]` |
| `hooks/useExpenses.ts` | `/api/expenses` | GET | `Expense[]` |
| `hooks/useUser.ts` | `/api/auth/user` | GET | `User` |

### API Routes Import Types

| API Route File | Imports Types | Purpose |
|----------------|---------------|---------|
| `components/Functions/properties/route.ts` | `Property` from `@/types/database` | Type safety |
| `components/Functions/tenants/route.ts` | `Tenant` from `@/types/database` | Type safety |
| `components/Functions/transactions/route.ts` | `Transaction` from `@/types/database` | Type safety |
| `components/Functions/expenses/route.ts` | `Expense` from `@/types/database` | Type safety |
| `components/Functions/documents/route.ts` | `Document` from `@/types/database` | Type safety |

### All Files Import Utilities

| File Type | Imports From `lib/` | Purpose |
|-----------|---------------------|---------|
| Components | `utils.ts` → `cn()` | Conditional classNames |
| Forms | `validations.ts` | Form validation schemas |
| API Routes | `auth0.ts` | Authentication helpers |
| Components | `utils.ts` → `formatCurrency()` | Display money |
| Components | `utils.ts` → `formatDate()` | Display dates |

## Import Path Aliases

All imports use the `@/` alias configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Before (Relative Paths):
```typescript
import { Button } from '../../../components/ui/button';
import { useProperties } from '../../hooks/useProperties';
import { Property } from '../../../types/database';
```

### After (Alias Paths):
```typescript
import { Button } from '@/components/ui/button';
import { useProperties } from '@/hooks/useProperties';
import { Property } from '@/types/database';
```

## Common Import Patterns by File Type

### Pattern 1: TSX Pages
```typescript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SomeComponent } from '@/components/feature/SomeComponent';

export default function PageName() {
  // Component code
}
```

### Pattern 2: Feature Components
```typescript
'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useDataHook } from '@/hooks/useDataHook';
import { DataType } from '@/types/database';

export function FeatureComponent() {
  const { data, isLoading } = useDataHook();
  // Component code
}
```

### Pattern 3: Custom Hooks
```typescript
'use client';

import { useState, useEffect } from 'react';
import { DataType } from '@/types/database';

export function useDataHook() {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Fetch data
  }, []);
  
  return { data, isLoading, error };
}
```

### Pattern 4: API Routes
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { DataType } from '@/types/database';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const data = await prisma.dataTable.findMany();
  return NextResponse.json(data);
}
```

### Pattern 5: UI Components
```typescript
import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button className={cn('base-classes', className)}>
      {children}
    </button>
  );
}
```

## Dependency Tree Example

Complete dependency tree for viewing properties:

```
app/Dashboard/property/properties.tsx
│
├─ Imports
│  ├─ @/components/properties/PropertyList
│  │  │
│  │  ├─ Imports
│  │  │  ├─ @/components/properties/PropertyCard
│  │  │  │  │
│  │  │  │  ├─ Imports
│  │  │  │  │  ├─ @/components/ui/card
│  │  │  │  │  ├─ @/components/ui/button
│  │  │  │  │  └─ @/types/database (Property)
│  │  │  │  │
│  │  │  │  └─ Uses
│  │  │  │     └─ Property type
│  │  │  │
│  │  │  ├─ @/hooks/useProperties
│  │  │  │  │
│  │  │  │  ├─ Imports
│  │  │  │  │  └─ @/types/database (Property)
│  │  │  │  │
│  │  │  │  └─ Calls
│  │  │  │     └─ /api/properties
│  │  │  │        │
│  │  │  │        ├─ File: components/Functions/properties/route.ts
│  │  │  │        │
│  │  │  │        ├─ Imports
│  │  │  │        │  ├─ @/types/database (Property)
│  │  │  │        │  └─ Prisma client
│  │  │  │        │
│  │  │  │        └─ Queries
│  │  │  │           └─ Database (PostgreSQL)
│  │  │  │
│  │  │  └─ @/types/database (Property)
│  │  │
│  │  └─ Returns
│  │     └─ { properties, isLoading, error }
│  │
│  └─ @/components/ui/button
│
└─ Renders
   └─ PropertyList component
```

## File Extension Guide

| Extension | Type | Use Case | Example |
|-----------|------|----------|---------|
| `.tsx` | TypeScript + JSX | React components, pages | `properties.tsx` |
| `.ts` | TypeScript | Hooks, utilities, API routes | `useProperties.ts` |
| `.css` | CSS | Global styles | `globals.css` |
| `.json` | JSON | Configuration | `package.json` |
| `.js` | JavaScript | Config files | `postcss.config.js` |
| `.cjs` | CommonJS | Legacy configs | `postcss.config.cjs` |

## Import Statement Types

### Named Imports
```typescript
import { Button, Card } from '@/components/ui';
import { useProperties } from '@/hooks/useProperties';
import { Property, Tenant } from '@/types/database';
```

### Default Imports
```typescript
import PropertyList from '@/components/properties/PropertyList';
import DashboardPage from '@/app/Dashboard/dashboard';
```

### Namespace Imports
```typescript
import * as React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
```

### Side Effect Imports
```typescript
import './globals.css';
import '@/styles/custom.css';
```

## Quick Import Lookup

Need to import something? Use this quick reference:

| Need | Import Statement |
|------|-----------------|
| Button | `import { Button } from '@/components/ui/button'` |
| Card | `import { Card } from '@/components/ui/card'` |
| Input | `import { Input } from '@/components/ui/input'` |
| Label | `import { Label } from '@/components/ui/label'` |
| useState | `import { useState } from 'react'` |
| useEffect | `import { useEffect } from 'react'` |
| useRouter | `import { useRouter } from 'next/navigation'` |
| useProperties | `import { useProperties } from '@/hooks/useProperties'` |
| Property type | `import { Property } from '@/types/database'` |
| cn utility | `import { cn } from '@/lib/utils'` |

## Circular Import Prevention

The project structure prevents circular imports:

```
Types (no dependencies)
   ↓
Lib/Utils (imports types only)
   ↓
Hooks (imports types, lib)
   ↓
UI Components (imports types, lib)
   ↓
Feature Components (imports UI, hooks, types, lib)
   ↓
Pages (imports components, hooks, types, lib)
```

This one-way dependency flow ensures no circular import issues.
