'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Building2, MapPin, DollarSign, Home, Plus, Search, Filter } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import type { Property, PropertyType } from '@/components/layout/types'

const mockProperties: Property[] = [
  {
    id: '1',
    user_id: '1',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zip_code: '10001',
    country: 'USA',
    property_type: 'RESIDENTIAL',
    purchase_price: 450000,
    purchase_date: '2022-03-15',
    number_of_units: 4,
    photo_url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'ACTIVE',
    created_at: '2022-03-15T00:00:00Z',
    updated_at: '2022-03-15T00:00:00Z',
  },
  {
    id: '2',
    user_id: '1',
    address: '456 Oak Avenue',
    city: 'Brooklyn',
    state: 'NY',
    zip_code: '11201',
    country: 'USA',
    property_type: 'MULTI_UNIT',
    purchase_price: 890000,
    purchase_date: '2021-06-22',
    number_of_units: 8,
    photo_url: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'ACTIVE',
    created_at: '2021-06-22T00:00:00Z',
    updated_at: '2021-06-22T00:00:00Z',
  },
  {
    id: '3',
    user_id: '1',
    address: '789 Pine Road',
    city: 'Queens',
    state: 'NY',
    zip_code: '11354',
    country: 'USA',
    property_type: 'RESIDENTIAL',
    purchase_price: 525000,
    purchase_date: '2023-01-10',
    number_of_units: 1,
    photo_url: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'ACTIVE',
    created_at: '2023-01-10T00:00:00Z',
    updated_at: '2023-01-10T00:00:00Z',
  },
  {
    id: '4',
    user_id: '1',
    address: '321 Elm Street',
    city: 'Manhattan',
    state: 'NY',
    zip_code: '10011',
    country: 'USA',
    property_type: 'COMMERCIAL',
    purchase_price: 1200000,
    purchase_date: '2020-11-05',
    number_of_units: 3,
    photo_url: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'ACTIVE',
    created_at: '2020-11-05T00:00:00Z',
    updated_at: '2020-11-05T00:00:00Z',
  },
]

const propertyTypeColors: Record<PropertyType, string> = {
  RESIDENTIAL: 'bg-blue-100 text-blue-700',
  COMMERCIAL: 'bg-purple-100 text-purple-700',
  MULTI_UNIT: 'bg-green-100 text-green-700',
  HMO: 'bg-orange-100 text-orange-700',
}

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')

  const filteredProperties = mockProperties.filter((property) => {
    const matchesSearch =
      property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.city.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || property.property_type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Properties</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your property portfolio</p>
        </div>
        <Link
          href="/dashboard/properties/new"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by address or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="block w-full sm:w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg"
            >
              <option value="all">All Types</option>
              <option value="RESIDENTIAL">Residential</option>
              <option value="COMMERCIAL">Commercial</option>
              <option value="MULTI_UNIT">Multi-Unit</option>
              <option value="HMO">HMO</option>
            </select>
          </div>
        </div>
      </div>

      {filteredProperties.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
          <p className="text-gray-500 mb-6">Get started by adding your first property</p>
          <Link
            href="/dashboard/properties/new"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Property
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              href={`/dashboard/properties/${property.id}`}
              className="group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden card-hover"
            >
              <div className="relative h-48 bg-gray-200">
                <img
                  src={property.photo_url || 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'}
                  alt={property.address}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      propertyTypeColors[property.property_type]
                    }`}
                  >
                    {property.property_type.replace('_', ' ')}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {property.address}
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.city}, {property.state} {property.zip_code}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-sm text-gray-600">
                    <Home className="h-4 w-4 mr-1" />
                    {property.number_of_units} {property.number_of_units === 1 ? 'Unit' : 'Units'}
                  </div>
                  <div className="flex items-center text-sm font-semibold text-gray-900">
                    <DollarSign className="h-4 w-4" />
                    {formatCurrency(property.purchase_price)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
