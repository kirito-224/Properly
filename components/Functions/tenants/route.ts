import { NextResponse } from 'next/server';

// Mock data for tenants
const tenants = [
  {
    id: 1,
    name: 'John Smith',
    property: '123 Main St',
    unit: 'Unit 1A',
    leaseEnd: '2023-12-31',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    property: '456 Oak Ave',
    unit: 'Unit 2B',
    leaseEnd: '2024-03-31',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Michael Brown',
    property: '789 Pine Rd',
    unit: 'Unit 3C',
    leaseEnd: '2023-09-30',
    status: 'Pending',
  },
];

export async function GET() {
  return NextResponse.json(tenants);
}

export async function POST(request: Request) {
  const data = await request.json();
  // In a real app, you would save this to a database
  return NextResponse.json({ id: tenants.length + 1, ...data });
}