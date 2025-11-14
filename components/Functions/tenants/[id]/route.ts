import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

// Mock data for a tenant
const tenant = {
  id: 1,
  name: 'John Smith',
  email: 'john.smith@example.com',
  phone: '(555) 123-4567',
  property: '123 Main Street',
  unit: 'Unit 1A',
  leaseStart: '2023-01-01',
  leaseEnd: '2023-12-31',
  monthlyRent: '$1,200',
  status: 'Active',
};

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  return NextResponse.json(tenant);
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
  return NextResponse.json({ message: `Tenant ${params.id} deleted` });
}