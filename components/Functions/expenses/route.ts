import { NextResponse } from 'next/server';

// Mock data for expenses
const expenses = [
  {
    id: 1,
    date: '2023-06-10',
    property: '123 Main St',
    category: 'Maintenance',
    description: 'Plumbing repair',
    amount: 250,
    status: 'paid',
  },
  {
    id: 2,
    date: '2023-06-05',
    property: '456 Oak Ave',
    category: 'Utilities',
    description: 'Electricity bill',
    amount: 180,
    status: 'paid',
  },
];

export async function GET() {
  return NextResponse.json(expenses);
}

export async function POST(request: Request) {
  const data = await request.json();
  // In a real app, you would save this to a database
  return NextResponse.json({ id: expenses.length + 1, ...data });
}