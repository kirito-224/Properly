'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Properties', href: '/properties', icon: '🏠' },
    { name: 'Tenants', href: '/tenants', icon: '👥' },
    { name: 'Finances', href: '/finances', icon: '💰' },
    { name: 'Reports', href: '/reports', icon: '📈' },
    { name: 'Documents', href: '/documents', icon: '📄' },
    { name: 'Settings', href: '/settings', icon: '⚙️' },
  ];

  return (
    <div className="flex flex-col h-full border-r border-gray-200 bg-white">
      <div className="flex h-16 items-center px-4 border-b border-gray-200">
        <Link href="/dashboard" className="text-lg font-bold text-blue-600">
          PropertyManager
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
        <a href="#" className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                JD
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">John Doe</p>
              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}