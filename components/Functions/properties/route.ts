import { NextResponse } from 'next/server';

// Mock data for properties
const properties = [
  {
    id: 1,
    name: '123 Main Street',
    address: 'San Francisco, CA 94105',
    units: 4,
    occupancy: 100,
  },
  {
    id: 2,
    name: '456 Oak Avenue',
    address: 'San Francisco, CA 94105',
    units: 6,
    occupancy: 83,
  },
  {
    id: 3,
    name: '789 Pine Road',
    address: 'San Francisco, CA 94105',
    units: 3,
    occupancy: 67,
  },
];

export async function GET() {
  return NextResponse.json(properties);
}

export async function POST(request: Request) {
  const data = await request.json();
  // In a real app, you would save this to a database
  return NextResponse.json({ id: properties.length + 1, ...data });
}