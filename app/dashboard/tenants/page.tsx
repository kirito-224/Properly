'use client'

import { useState } from 'react'
import { Users, Search, Filter, Mail, Phone, MapPin, Plus } from 'lucide-react'
import Link from 'next/link'

const mockTenants = [
  {
    id: '1',
    first_name: 'Sarah',
    last_name: 'Johnson',
    email: 'sarah.johnson@example.com',
    phone_number: '(555) 123-4567',
    property: '123 Main St',
    unit: 'Unit 3A',
    move_in_date: '2023-05-15',
    status: 'ACTIVE',
  },
  {
    id: '2',
    first_name: 'Michael',
    last_name: 'Chen',
    email: 'michael.chen@example.com',
    phone_number: '(555) 234-5678',
    property: '456 Oak Ave',
    unit: 'Unit 5B',
    move_in_date: '2023-08-20',
    status: 'ACTIVE',
  },
  {
    id: '3',
    first_name: 'Emily',
    last_name: 'Davis',
    email: 'emily.davis@example.com',
    phone_number: '(555) 345-6789',
    property: '789 Pine Rd',
    unit: 'Unit 2C',
    move_in_date: '2022-11-10',
    status: 'ACTIVE',
  },
  {
    id: '4',
    first_name: 'James',
    last_name: 'Wilson',
    email: 'james.wilson@example.com',
    phone_number: '(555) 456-7890',
    property: '321 Elm St',
    unit: 'Unit 1A',
    move_in_date: '2021-09-01',
    status: 'INACTIVE',
  },
]

const statusColors = {
  ACTIVE: 'bg-green-100 text-green-700',
  INACTIVE: 'bg-gray-100 text-gray-700',
  EVICTED: 'bg-red-100 text-red-700',
}

export default function TenantsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredTenants = mockTenants.filter((tenant) => {
    const matchesSearch =
      tenant.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tenant.property.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || tenant.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tenants</h1>
          <p className="mt-1 text-sm text-gray-500">Manage tenant information and leases</p>
        </div>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          <Plus className="h-4 w-4 mr-2" />
          Add Tenant
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search tenants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block w-full sm:w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg"
            >
              <option value="all">All Status</option>
              <option value="ACTIVE">Active</option>
              <option value="INACTIVE">Inactive</option>
              <option value="EVICTED">Evicted</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTenants.map((tenant) => (
          <div
            key={tenant.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {tenant.first_name} {tenant.last_name}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[tenant.status as keyof typeof statusColors]}`}>
                    {tenant.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="h-4 w-4 mr-2 text-gray-400" />
                <a href={`mailto:${tenant.email}`} className="hover:text-blue-600">
                  {tenant.email}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <a href={`tel:${tenant.phone_number}`} className="hover:text-blue-600">
                  {tenant.phone_number}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span>{tenant.property} • {tenant.unit}</span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-gray-500">Move-in Date</p>
                <p className="text-sm font-medium text-gray-900">{new Date(tenant.move_in_date).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
              <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                View Details
              </button>
              <button className="flex-1 px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTenants.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No tenants found</h3>
          <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  )
}

