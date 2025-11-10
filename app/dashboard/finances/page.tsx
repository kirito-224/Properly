"use client"

import { useMemo, useState } from 'react'
import { TrendingUp, TrendingDown, Plus, Calendar, Filter, DollarSign } from 'lucide-react'
import { formatCurrency, formatDate } from '@/lib/utils'
import { useTransactions } from '@/hooks/use-transactions'
import type { Transaction } from '@/types/transaction'

const stats = [
	{ name: 'Total Income (YTD)', value: 145800, change: '+12.5%', changeType: 'positive' as const },
	{ name: 'Total Expenses (YTD)', value: 52300, change: '+8.2%', changeType: 'positive' as const },
	{ name: 'Net Income (YTD)', value: 93500, change: '+15.3%', changeType: 'positive' as const },
	{ name: 'This Month', value: 12400, change: '+5.1%', changeType: 'positive' as const },
]

export default function FinancesPage() {
	const { data: transactions = [], isLoading } = useTransactions()
	const [typeFilter, setTypeFilter] = useState<'all' | 'income' | 'expense'>('all')

	const filteredTransactions = useMemo<Transaction[]>(() => {
		if (typeFilter === 'all') {
			return transactions
		}
		return transactions.filter((transaction: Transaction) => transaction.type === typeFilter)
	}, [transactions, typeFilter])

	const rows: (Transaction | null)[] = isLoading ? Array.from({ length: 6 }, () => null) : filteredTransactions

	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold text-gray-900">Finances</h1>
					<p className="mt-1 text-sm text-gray-500">Track income, expenses, and financial performance</p>
				</div>
				<div className="flex gap-2">
					<button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
						<TrendingUp className="h-4 w-4 mr-2" />
						Add Income
					</button>
					<button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
						<Plus className="h-4 w-4 mr-2" />
						Add Expense
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{stats.map((stat) => (
					<div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
						<div className="flex items-center justify-between mb-2">
							<p className="text-sm font-medium text-gray-600">{stat.name}</p>
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
						<p className="text-2xl font-bold text-gray-900">{formatCurrency(stat.value)}</p>
					</div>
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-lg font-semibold text-gray-900">Income vs Expenses</h2>
						<div className="flex items-center space-x-2">
							<Calendar className="h-5 w-5 text-gray-400" />
							<select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500">
								<option>Last 6 Months</option>
								<option>Last 3 Months</option>
								<option>This Year</option>
							</select>
						</div>
					</div>
					<div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
						<div className="text-center">
							<TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-2" />
							<p className="text-sm text-gray-500">Chart visualization coming soon</p>
						</div>
					</div>
				</div>

				<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
					<h2 className="text-lg font-semibold text-gray-900 mb-6">Expense Breakdown</h2>
					<div className="space-y-4">
						{[
							{ category: 'Maintenance', amount: 1200, percentage: 35, color: 'bg-blue-500' },
							{ category: 'Insurance', amount: 800, percentage: 24, color: 'bg-green-500' },
							{ category: 'Utilities', amount: 650, percentage: 19, color: 'bg-yellow-500' },
							{ category: 'Landscaping', amount: 450, percentage: 13, color: 'bg-purple-500' },
							{ category: 'Other', amount: 300, percentage: 9, color: 'bg-gray-500' },
						].map((item) => (
							<div key={item.category}>
								<div className="flex items-center justify-between mb-1">
									<span className="text-sm font-medium text-gray-700">{item.category}</span>
									<span className="text-sm font-semibold text-gray-900">{formatCurrency(item.amount)}</span>
								</div>
								<div className="w-full bg-gray-200 rounded-full h-2">
									<div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-sm border border-gray-200">
				<div className="p-6 border-b border-gray-200">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
						<div className="flex items-center space-x-2">
							<Filter className="h-5 w-5 text-gray-400" />
							<select
								value={typeFilter}
								onChange={(event) => setTypeFilter(event.target.value as 'all' | 'income' | 'expense')}
								className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								<option value="all">All Types</option>
								<option value="income">Income Only</option>
								<option value="expense">Expense Only</option>
							</select>
						</div>
					</div>
				</div>

				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Description
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Property
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Category
								</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Date
								</th>
								<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
									Amount
								</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{rows.map((transaction, index) => (
								<tr
									key={transaction ? transaction.id : `skeleton-${index}`}
									className="hover:bg-gray-50 transition-colors"
								>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="flex items-center">
											<div
												className={`flex-shrink-0 h-10 w-10 rounded-lg flex items-center justify-center ${
													transaction?.type === 'income' ? 'bg-green-100' : 'bg-red-100'
												}`}
											>
												<DollarSign
													className={`h-5 w-5 ${
														transaction?.type === 'income' ? 'text-green-600' : 'text-red-600'
													}`}
												/>
											</div>
											<div className="ml-4">
												<div className="text-sm font-medium text-gray-900">
													{transaction?.description ?? 'Loading...'}
												</div>
											</div>
										</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{transaction?.property ?? '—'}
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
											{transaction?.category ?? '—'}
										</span>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										{transaction ? formatDate(transaction.date) : '—'}
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-right">
										<span
											className={`text-sm font-semibold ${
												transaction?.type === 'income' ? 'text-green-600' : 'text-red-600'
											}`}
										>
											{transaction?.type === 'income' ? '+' : ''}
											{transaction ? formatCurrency(transaction.amount) : formatCurrency(0)}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

