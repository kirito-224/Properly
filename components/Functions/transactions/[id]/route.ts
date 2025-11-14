import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

// Mock data for a transaction
const transaction = {
  id: 1,
  date: '2023-06-01',
  property: '123 Main St',
  tenant: 'John Smith',
  description: 'Monthly Rent',
  amount: 1200,
  type: 'income',
  status: 'paid',
};

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  return NextResponse.json(transaction);
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
  return NextResponse.json({ message: `Transaction ${params.id} deleted` });
}