export default function FinancesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Finances</h1>
        <p className="text-gray-500">Track your income and expenses</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Total Income (Monthly)</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">$12,450</dd>
          <dd className="mt-1 text-sm font-medium text-green-500">+$1,200 from last month</dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Total Expenses (Monthly)</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">$3,200</dd>
          <dd className="mt-1 text-sm font-medium text-red-500">+$500 from last month</dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Cash Flow (Monthly)</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">$9,250</dd>
          <dd className="mt-1 text-sm font-medium text-green-500">+$700 from last month</dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Occupancy Rate</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">85%</dd>
          <dd className="mt-1 text-sm font-medium text-green-500">+5% from last month</dd>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Income Sources</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Rent</span>
              <span className="text-sm font-medium text-gray-900">$12,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Late Fees</span>
              <span className="text-sm font-medium text-gray-900">$300</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Other</span>
              <span className="text-sm font-medium text-gray-900">$150</span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">Total</span>
              <span className="text-sm font-medium text-gray-900">$12,450</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Expense Categories</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Maintenance</span>
              <span className="text-sm font-medium text-gray-900">$1,200</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Utilities</span>
              <span className="text-sm font-medium text-gray-900">$800</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Property Management</span>
              <span className="text-sm font-medium text-gray-900">$600</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Other</span>
              <span className="text-sm font-medium text-gray-900">$600</span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900">Total</span>
              <span className="text-sm font-medium text-gray-900">$3,200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}