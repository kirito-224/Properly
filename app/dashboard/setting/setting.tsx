'use client'

import { User, Bell, Lock, CreditCard, Settings as SettingsIcon } from 'lucide-react'

export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your account and preferences</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          <div className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <User className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-1">Profile Information</h4>
                <p className="text-sm text-gray-500 mb-4">Update your personal information and contact details</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Bell className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-1">Notifications</h4>
                <p className="text-sm text-gray-500 mb-4">Manage email and push notification preferences</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Configure Notifications
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Lock className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-1">Security</h4>
                <p className="text-sm text-gray-500 mb-4">Change your password and manage security settings</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Update Security
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <CreditCard className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-1">Billing & Subscription</h4>
                <p className="text-sm text-gray-500 mb-4">Manage your subscription plan and payment methods</p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                    FREE PLAN
                  </span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Upgrade Plan
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <SettingsIcon className="h-6 w-6 text-gray-400" />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-sm font-medium text-gray-900 mb-1">Preferences</h4>
                <p className="text-sm text-gray-500 mb-4">Customize your dashboard and application settings</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Edit Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h4 className="text-sm font-medium text-red-900 mb-2">Danger Zone</h4>
        <p className="text-sm text-red-700 mb-4">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <button className="px-4 py-2 border border-red-300 rounded-lg text-sm font-medium text-red-700 hover:bg-red-100 transition-colors">
          Delete Account
        </button>
      </div>
    </div>
  )
}
