import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

// Mock data for a property
const property = {
  id: 1,
  name: '123 Main Street',
  address: 'San Francisco, CA 94105',
  units: 4,
  occupancy: 100,
  description: 'Beautiful property in the heart of San Francisco. Recently renovated with modern amenities.',
};

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  return NextResponse.json(property);
}

export async function PATCH(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  const data = await request.json();
  // In a real app, you would update this in a database
  return NextResponse.json({ id: params.id, ...data });
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  // In a real app, you would delete this from a database
  return NextResponse.json({ message: `Property ${params.id} deleted` });
}