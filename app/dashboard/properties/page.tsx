"use client"

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Building2, MapPin, DollarSign, Home, Plus, Search, Filter } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { useProperties } from '@/hooks/use-properties'
import type { Property, PropertyType } from '@/types/property'

const propertyTypeColors: Record<PropertyType, string> = {
	RESIDENTIAL: 'bg-blue-100 text-blue-700',
	COMMERCIAL: 'bg-purple-100 text-purple-700',
	MULTI_UNIT: 'bg-green-100 text-green-700',
	HMO: 'bg-orange-100 text-orange-700',
}

export default function PropertiesPage() {
	const { data: properties = [], isLoading, error } = useProperties()
	const [searchTerm, setSearchTerm] = useState('')
	const [selectedType, setSelectedType] = useState<PropertyType | 'all'>('all')

	const filteredProperties = useMemo<Property[]>(() => {
		return properties.filter((property: Property) => {
			const matchesSearch =
				property.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
				property.city.toLowerCase().includes(searchTerm.toLowerCase())
			const matchesType = selectedType === 'all' || property.propertyType === selectedType
			return matchesSearch && matchesType
		})
	}, [properties, searchTerm, selectedType])

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
							onChange={(event) => setSearchTerm(event.target.value)}
							className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
					</div>
					<div className="flex items-center space-x-2">
						<Filter className="h-5 w-5 text-gray-400" />
						<select
							value={selectedType}
							onChange={(event) => setSelectedType(event.target.value as PropertyType | 'all')}
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

			{error && (
				<div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
					{error.message}
				</div>
			)}

			{isLoading ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{Array.from({ length: 6 }).map((_, index) => (
						<div key={index} className="h-64 bg-white rounded-xl shadow-sm border border-gray-200 animate-pulse" />
					))}
				</div>
			) : filteredProperties.length === 0 ? (
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
									src={property.photoUrl ?? 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'}
									alt={property.address}
									className="w-full h-full object-cover"
								/>
								<div className="absolute top-3 right-3">
									<span className={`px-3 py-1 text-xs font-medium rounded-full ${propertyTypeColors[property.propertyType]}`}>
										{property.propertyType.replace('_', ' ')}
									</span>
								</div>
							</div>
							<div className="p-5">
								<h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
									{property.address}
								</h3>
								<div className="flex items-center text-sm text-gray-500 mb-4">
									<MapPin className="h-4 w-4 mr-1" />
									{property.city}, {property.state} {property.zipCode}
								</div>
								<div className="flex items-center justify-between pt-4 border-top border-gray-200">
									<div className="flex items-center text-sm text-gray-600">
										<Home className="h-4 w-4 mr-1" />
										{property.numberOfUnits} {property.numberOfUnits === 1 ? 'Unit' : 'Units'}
									</div>
									<div className="flex items-center text-sm font-semibold text-gray-900">
										<DollarSign className="h-4 w-4" />
										{formatCurrency(property.purchasePrice)}
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

