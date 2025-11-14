import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // In a real app, you would handle file upload here
  // For now, we'll just return a mock response
  return NextResponse.json({ 
    id: 1, 
    name: 'Lease Agreement - John Smith.pdf',
    url: '/documents/lease-agreement-john-smith.pdf',
    uploadedAt: new Date().toISOString()
  });
}