"use client"

import { FileText, Upload, Search, Filter } from 'lucide-react'

export default function DocumentsPage() {
	return (
		<div className="space-y-6">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<h1 className="text-3xl font-bold text-gray-900">Documents</h1>
					<p className="mt-1 text-sm text-gray-500">Manage leases, receipts, and important files</p>
				</div>
				<button className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
					<Upload className="h-4 w-4 mr-2" />
					Upload Document
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
							placeholder="Search documents..."
							className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						/>
					</div>
					<div className="flex items-center space-x-2">
						<Filter className="h-5 w-5 text-gray-400" />
						<select className="block w-full sm:w-48 pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-lg">
							<option>All Types</option>
							<option>Leases</option>
							<option>Receipts</option>
							<option>Insurance</option>
							<option>Tax</option>
						</select>
					</div>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
				<FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
				<h3 className="text-lg font-medium text-gray-900 mb-2">No documents yet</h3>
				<p className="text-gray-500 mb-6">Upload your first document to get started</p>
				<button className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
					<Upload className="h-4 w-4 mr-2" />
					Upload Document
				</button>
			</div>
		</div>
	)
}

