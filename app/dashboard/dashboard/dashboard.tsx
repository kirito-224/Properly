'use client'

import { Building2, DollarSign, Users, TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { formatCurrency } from '@/lib/utils'
import Charts from './Charts'

const stats = [
  {
    name: 'Total Properties',
    value: '12',
    change: '+2 this month',
    changeType: 'positive',
    icon: Building2,
    iconColor: 'bg-blue-500',
  },
  {
    name: 'Monthly Income',
    value: '$24,500',
    change: '+12.5%',
    changeType: 'positive',
    icon: TrendingUp,
    iconColor: 'bg-green-500',
  },
  {
    name: 'Active Tenants',
    value: '28',
    change: '+3 this month',
    changeType: 'positive',
    icon: Users,
    iconColor: 'bg-purple-500',
  },
  {
    name: 'Net Income',
    value: '$18,420',
    change: '+8.2%',
    changeType: 'positive',
    icon: DollarSign,
    iconColor: 'bg-orange-500',
  },
]

const recentTransactions = [
  {
    id: 1,
    description: 'Rent Payment - Unit 4B',
    amount: 1500,
    date: '2025-11-02',
    type: 'income',
    property: '123 Main St',
  },
  {
    id: 2,
    description: 'Plumbing Repair',
    amount: -350,
    date: '2025-11-01',
    type: 'expense',
    property: '456 Oak Ave',
  },
  {
    id: 3,
    description: 'Rent Payment - Unit 2A',
    amount: 1800,
    date: '2025-11-01',
    type: 'income',
    property: '789 Pine Rd',
  },
  {
    id: 4,
    description: 'Property Insurance',
    amount: -500,
    date: '2025-10-31',
    type: 'expense',
    property: '123 Main St',
  },
  {
    id: 5,
    description: 'Rent Payment - Unit 1C',
    amount: 1650,
    date: '2025-10-30',
    type: 'income',
    property: '456 Oak Ave',
  },
]

const upcomingPayments = [
  { id: 1, tenant: 'Sarah Johnson', unit: 'Unit 3A', amount: 1700, dueDate: '2025-11-05', status: 'pending' },
  { id: 2, tenant: 'Michael Chen', unit: 'Unit 5B', amount: 1550, dueDate: '2025-11-05', status: 'pending' },
  { id: 3, tenant: 'Emily Davis', unit: 'Unit 2C', amount: 1800, dueDate: '2025-11-10', status: 'pending' },
  { id: 4, tenant: 'James Wilson', unit: 'Unit 1A', amount: 1600, dueDate: '2025-11-15', status: 'overdue' },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">Welcome back, here's your portfolio overview</p>
        </div>
        <Link
          href="/dashboard/properties/new"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <Building2 className="h-4 w-4 mr-2" />
          Add Property
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.iconColor} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span
                className={`inline-flex items-center text-xs font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.changeType === 'positive' ? (
                  <TrendingUp className="h-3 w-3 mr-1" />
                ) : (
                  <TrendingDown className="h-3 w-3 mr-1" />
                )}
                {stat.change}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
            <Link
              href="/dashboard/finances"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center"
            >
              View all
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{transaction.description}</p>
                  <p className="text-xs text-gray-500">{transaction.property} • {transaction.date}</p>
                </div>
                <div className={`text-sm font-semibold ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.type === 'income' ? '+' : ''}{formatCurrency(transaction.amount)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Upcoming Payments</h2>
            <Link
              href="/dashboard/tenants"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 inline-flex items-center"
            >
              View all
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingPayments.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{payment.tenant}</p>
                  <p className="text-xs text-gray-500">{payment.unit} • Due {payment.dueDate}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-semibold text-gray-900">{formatCurrency(payment.amount)}</span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      payment.status === 'overdue'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Charts />
    </div>
  )
}
