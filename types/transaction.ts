export type TransactionType = "income" | "expense"

export interface Transaction {
  id: string
  description: string
  property: string
  category: string
  amount: number
  date: string
  type: TransactionType
  paymentMethod?: string
  notes?: string
}
