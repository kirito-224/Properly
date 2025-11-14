import { NextResponse } from 'next/server';

// Mock data for transactions
const transactions = [
  {
    id: 1,
    date: '2023-06-01',
    property: '123 Main St',
    tenant: 'John Smith',
    description: 'Monthly Rent',
    amount: 1200,
    type: 'income',
    status: 'paid',
  },
  {
    id: 2,
    date: '2023-06-01',
    property: '456 Oak Ave',
    tenant: 'Sarah Johnson',
    description: 'Monthly Rent',
    amount: 950,
    type: 'income',
    status: 'paid',
  },
  {
    id: 3,
    date: '2023-06-10',
    property: '123 Main St',
    tenant: '',
    description: 'Plumbing repair',
    amount: 250,
    type: 'expense',
    status: 'paid',
  },
];

export async function GET() {
  return NextResponse.json(transactions);
}

export async function POST(request: Request) {
  const data = await request.json();
  // In a real app, you would save this to a database
  return NextResponse.json({ id: transactions.length + 1, ...data });
}