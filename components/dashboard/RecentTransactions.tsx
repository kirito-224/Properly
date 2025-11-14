export function RecentTransactions() {
  const transactions = [
    { id: 1, name: 'John Smith', property: '123 Main St', amount: '$1,200', date: '2023-06-15', status: 'Completed' },
    { id: 2, name: 'Sarah Johnson', property: '456 Oak Ave', amount: '$950', date: '2023-06-14', status: 'Completed' },
    { id: 3, name: 'Michael Brown', property: '789 Pine Rd', amount: '$1,500', date: '2023-06-14', status: 'Pending' },
    { id: 4, name: 'Emily Davis', property: '321 Elm St', amount: '$1,100', date: '2023-06-13', status: 'Completed' },
  ];

  return (
    <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Recent Transactions</h3>
        <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
          View all
        </a>
      </div>
      <div className="mt-6 flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <li key={transaction.id} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">{transaction.name}</p>
                  <p className="truncate text-sm text-gray-500">{transaction.property}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{transaction.amount}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    transaction.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}