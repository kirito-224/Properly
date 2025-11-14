import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest, context: { params: Promise<{ id: string }> }) {
  const params = await context.params;
  // In a real app, you would stream the file from storage
  // For now, we'll just return a mock response
  return new NextResponse('File content would be here', {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="document-${params.id}.pdf"`,
    },
  });
}