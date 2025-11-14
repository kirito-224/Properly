export function DashboardStats() {
  const stats = [
    { name: 'Total Properties', value: '12', change: '+2' },
    { name: 'Active Tenants', value: '18', change: '+3' },
    { name: 'Monthly Income', value: '$12,450', change: '+$1,200' },
    { name: 'Pending Maintenance', value: '3', change: '-1' },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">{stat.name}</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
          <dd className="mt-1 text-sm font-medium text-green-500">{stat.change}</dd>
        </div>
      ))}
    </div>
  );
}