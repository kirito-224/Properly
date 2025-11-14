export function PropertyOverview() {
  const properties = [
    { id: 1, name: '123 Main St', units: 4, occupancy: '100%' },
    { id: 2, name: '456 Oak Ave', units: 6, occupancy: '83%' },
    { id: 3, name: '789 Pine Rd', units: 3, occupancy: '67%' },
    { id: 4, name: '321 Elm St', units: 5, occupancy: '90%' },
  ];

  return (
    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Property Overview</h3>
        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
          View all
        </a>
      </div>
      <div className="mt-6 flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {properties.map((property) => (
            <li key={property.id} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">{property.name}</p>
                  <p className="truncate text-sm text-gray-500">{property.units} units</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Occupancy</p>
                  <p className="text-sm text-gray-500">{property.occupancy}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}