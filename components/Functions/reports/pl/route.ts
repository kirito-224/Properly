import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // In a real app, you would generate a profit and loss report
  // For now, we'll just return mock data
  const report = {
    period: '2023-06-01 to 2023-06-30',
    totalIncome: 12450,
    totalExpenses: 3200,
    netProfit: 9250,
    incomeBreakdown: [
      { category: 'Rent', amount: 12000 },
      { category: 'Late Fees', amount: 300 },
      { category: 'Other', amount: 150 },
    ],
    expenseBreakdown: [
      { category: 'Maintenance', amount: 1200 },
      { category: 'Utilities', amount: 800 },
      { category: 'Property Management', amount: 600 },
      { category: 'Other', amount: 600 },
    ],
  };

  return NextResponse.json(report);
}