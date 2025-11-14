import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

// Mock data for a document
const document = {
  id: 1,
  name: 'Lease Agreement - John Smith.pdf',
  property: '123 Main St',
  type: 'Lease',
  uploadedAt: '2023-06-01',
  url: '/documents/lease-agreement-john-smith.pdf',
};

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  return NextResponse.json(document);
}

export async function DELETE(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  // In a real app, you would delete this from a database/storage
  return NextResponse.json({ message: `Document ${params.id} deleted` });
}