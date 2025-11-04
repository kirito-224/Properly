'use client'

import { BarChart3, Download, Calendar, FileText } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'

const reportTypes = [
  {
    title: 'Profit & Loss Statement',
    description: 'Comprehensive income and expense summary',
    icon: BarChart3,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Income Summary',
    description: 'Detailed breakdown of all income sources',
    icon: BarChart3,
    color: 'bg-green-100 text-green-600',
  },
  {
    title: 'Expense Report',
    description: 'Categorized view of all expenses',
    icon: BarChart3,
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Cash Flow Analysis',
    description: 'Track cash movement over time',
    icon: BarChart3,
    color: 'bg-purple-100 text-purple-600',
  },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <p className="mt-1 text-sm text-gray-500">Generate detailed financial reports for your portfolio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reportTypes.map((report) => (
          <div key={report.title} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div className={`${report.color} p-3 rounded-lg`}>
                <report.icon className="h-6 w-6" />
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center">
                <Download className="h-4 w-4 mr-1" />
                Export
              </button>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{report.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{report.description}</p>
            <button className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              View Report
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Quick Summary</h2>
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-400" />
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>This Year</option>
              <option>Last Year</option>
              <option>Last 6 Months</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(145800)}</p>
            <p className="text-xs text-green-600 mt-1">+12.5% from last year</p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-sm text-gray-500 mb-1">Total Expenses</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(52300)}</p>
            <p className="text-xs text-red-600 mt-1">+8.2% from last year</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-sm text-gray-500 mb-1">Net Profit</p>
            <p className="text-2xl font-bold text-gray-900">{formatCurrency(93500)}</p>
            <p className="text-xs text-blue-600 mt-1">+15.3% from last year</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
        <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Reports Coming Soon</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          We're building more powerful reporting tools including custom date ranges, property-specific reports, and exportable PDFs.
        </p>
      </div>
    </div>
  )
}
