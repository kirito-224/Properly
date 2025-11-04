export type UserRole = 'LANDLORD' | 'TENANT' | 'ADMIN'
export type SubscriptionTier = 'FREE' | 'STARTER' | 'PRO' | 'ENTERPRISE'
export type PropertyType = 'RESIDENTIAL' | 'COMMERCIAL' | 'MULTI_UNIT' | 'HMO'
export type PropertyStatus = 'ACTIVE' | 'INACTIVE' | 'SOLD'
export type TenantStatus = 'ACTIVE' | 'INACTIVE' | 'EVICTED'
export type TransactionType = 'RENT' | 'EXPENSE' | 'PAYMENT' | 'FEE' | 'DEPOSIT'
export type TransactionStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'CANCELLED'
export type DocumentType = 'LEASE' | 'RECEIPT' | 'INSURANCE' | 'TAX' | 'OTHER'
export type ExpenseCategory = 'MAINTENANCE' | 'UTILITIES' | 'INSURANCE' | 'MORTGAGE' | 'PROPERTY_TAX' | 'HOA' | 'REPAIRS' | 'LANDSCAPING' | 'OTHER'
export type PaymentMethod = 'BANK_TRANSFER' | 'CARD' | 'CHECK' | 'CASH'
export type PaymentStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED'

export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  subscription_tier: SubscriptionTier
  profile_picture_url?: string
  phone_number?: string
  created_at: string
  updated_at: string
}

export interface Property {
  id: string
  user_id: string
  address: string
  city: string
  state: string
  zip_code: string
  country: string
  property_type: PropertyType
  purchase_price: number
  purchase_date: string
  number_of_units: number
  photo_url?: string
  latitude?: number
  longitude?: number
  status: PropertyStatus
  created_at: string
  updated_at: string
}

export interface Unit {
  id: string
  property_id: string
  unit_number: string
  bedroom_count: number
  bathroom_count: number
  sqft?: number
  rent_amount: number
  created_at: string
}

export interface Tenant {
  id: string
  property_id: string
  unit_id?: string
  first_name: string
  last_name: string
  email: string
  phone_number: string
  move_in_date: string
  move_out_date?: string
  status: TenantStatus
  created_at: string
  updated_at: string
}

export interface Transaction {
  id: string
  property_id: string
  type: TransactionType
  amount: number
  description: string
  category?: string
  date: string
  status: TransactionStatus
  created_at: string
  updated_at: string
}

export interface Document {
  id: string
  property_id: string
  user_id: string
  file_name: string
  file_url: string
  file_type: DocumentType
  file_size: number
  created_at: string
}

export interface Expense {
  id: string
  property_id: string
  description: string
  amount: number
  category: ExpenseCategory
  date: string
  receipt_url?: string
  status: string
  created_at: string
  updated_at: string
}

export interface Payment {
  id: string
  tenant_id: string
  property_id: string
  amount: number
  status: PaymentStatus
  payment_method: PaymentMethod
  stripe_payment_id?: string
  due_date: string
  paid_date?: string
  created_at: string
  updated_at: string
}

export interface DashboardStats {
  totalProperties: number
  totalUnits: number
  occupiedUnits: number
  vacancyRate: number
  monthlyIncome: number
  monthlyExpenses: number
  netOperatingIncome: number
  ytdIncome: number
  ytdExpenses: number
}
