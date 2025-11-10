"use client"

import { useEffect, useState } from "react"

import type { Transaction } from "@/types/transaction"

const mockTransactions: Transaction[] = [
  {
    id: "txn-1",
    description: "April Rent - Lakeside Drive",
    property: "1250 Lakeside Drive",
    category: "Rental Income",
    amount: 2650,
    date: "2024-04-01",
    type: "income",
  },
  {
    id: "txn-2",
    description: "HVAC Repair",
    property: "432 Market Street",
    category: "Maintenance",
    amount: 860,
    date: "2024-03-28",
    type: "expense",
  },
  {
    id: "txn-3",
    description: "Security Deposit",
    property: "78 Willow Park",
    category: "Deposit",
    amount: 1200,
    date: "2024-03-25",
    type: "income",
  },
  {
    id: "txn-4",
    description: "Insurance Premium",
    property: "Portfolio",
    category: "Insurance",
    amount: 540,
    date: "2024-03-18",
    type: "expense",
  },
  {
    id: "txn-5",
    description: "Landscaping",
    property: "19 Northwood Terrace",
    category: "Landscaping",
    amount: 240,
    date: "2024-03-15",
    type: "expense",
  },
  {
    id: "txn-6",
    description: "Late Fee",
    property: "78 Willow Park",
    category: "Late Fees",
    amount: 125,
    date: "2024-03-12",
    type: "income",
  },
]

interface UseTransactionsState {
  data: Transaction[]
  isLoading: boolean
  error: Error | null
}

export function useTransactions(): UseTransactionsState {
  const [state, setState] = useState<UseTransactionsState>({
    data: [],
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setState({ data: mockTransactions, isLoading: false, error: null })
      } catch (error) {
        setState({
          data: [],
          isLoading: false,
          error: error instanceof Error ? error : new Error("Unable to load transactions"),
        })
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return state
}
