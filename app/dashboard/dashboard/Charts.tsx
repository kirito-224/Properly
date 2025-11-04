"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Legend,
} from 'recharts'

const revenueData = [
  { month: 'May', revenue: 20500 },
  { month: 'Jun', revenue: 21800 },
  { month: 'Jul', revenue: 22400 },
  { month: 'Aug', revenue: 23100 },
  { month: 'Sep', revenue: 24050 },
  { month: 'Oct', revenue: 24500 },
  { month: 'Nov', revenue: 25200 },
]

const occupancyData = [
  { name: 'Apt A', occupancy: 95 },
  { name: 'Apt B', occupancy: 92 },
  { name: 'Apt C', occupancy: 98 },
  { name: 'Apt D', occupancy: 88 },
  { name: 'Apt E', occupancy: 100 },
  { name: 'Apt F', occupancy: 91 },
]

const marketTrendData = [
  { month: 'May', price: 310000 },
  { month: 'Jun', price: 315000 },
  { month: 'Jul', price: 320000 },
  { month: 'Aug', price: 318000 },
  { month: 'Sep', price: 325000 },
  { month: 'Oct', price: 332000 },
  { month: 'Nov', price: 335500 },
]

export default function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 col-span-1 lg:col-span-2">
        <h3 className="text-md font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']} />
              <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-md font-semibold text-gray-900 mb-4">Occupancy Rate</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={occupancyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip formatter={(value: number) => [`${value}%`, 'Occupancy']} />
              <Bar dataKey="occupancy" fill="#16a34a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 col-span-1 lg:col-span-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-md font-semibold text-gray-900">Market Trends</h3>
          <span className="text-xs text-gray-500">City-wide median price</span>
        </div>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={marketTrendData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip formatter={(value: number) => [`$${value.toLocaleString()}`, 'Median Price']} />
              <Legend />
              <Area type="monotone" dataKey="price" stroke="#f97316" fillOpacity={1} fill="url(#colorPrice)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
