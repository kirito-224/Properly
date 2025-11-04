'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Building2,
  LayoutDashboard,
  Home,
  Users,
  DollarSign,
  FileText,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Properties', href: '/dashboard/properties', icon: Home },
  { name: 'Tenants', href: '/dashboard/tenants', icon: Users },
  { name: 'Finances', href: '/dashboard/finances', icon: DollarSign },
  { name: 'Documents', href: '/dashboard/documents', icon: FileText },
  { name: 'Reports', href: '/dashboard/reports', icon: BarChart3 },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      <div className="flex items-center h-16 px-6 border-b border-gray-200">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">PropertyHub</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <item.icon className={cn('mr-3 h-5 w-5', isActive ? 'text-blue-600' : 'text-gray-400')} />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-gray-200 p-4">
        <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
          <LogOut className="mr-3 h-5 w-5 text-gray-400" />
          Sign Out
        </button>
      </div>
    </div>
  )
}
