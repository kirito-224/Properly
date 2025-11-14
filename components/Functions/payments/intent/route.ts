import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { amount, currency } = await request.json();
  
  // In a real app, you would create a payment intent with Stripe
  // For now, we'll just return a mock response
  return NextResponse.json({ 
    clientSecret: 'mock_client_secret_12345',
    amount,
    currency
  });
}