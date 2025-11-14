import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // In a real app, you would handle Stripe webhooks here
  // For now, we'll just return a mock response
  return NextResponse.json({ received: true });
}