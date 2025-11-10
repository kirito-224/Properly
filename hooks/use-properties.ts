"use client"

import { useEffect, useState } from "react"

import type { Property } from "@/types/property"

const mockProperties: Property[] = [
  {
    id: "prop-1",
    address: "1250 Lakeside Drive",
    city: "Austin",
    state: "TX",
    zipCode: "78701",
    propertyType: "RESIDENTIAL",
    numberOfUnits: 1,
    purchasePrice: 425000,
    photoUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "prop-2",
    address: "432 Market Street",
    city: "San Francisco",
    state: "CA",
    zipCode: "94105",
    propertyType: "COMMERCIAL",
    numberOfUnits: 4,
    purchasePrice: 1320000,
    photoUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "prop-3",
    address: "78 Willow Park",
    city: "Denver",
    state: "CO",
    zipCode: "80203",
    propertyType: "MULTI_UNIT",
    numberOfUnits: 6,
    purchasePrice: 860000,
    photoUrl: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "prop-4",
    address: "19 Northwood Terrace",
    city: "Chicago",
    state: "IL",
    zipCode: "60614",
    propertyType: "HMO",
    numberOfUnits: 5,
    purchasePrice: 675000,
    photoUrl: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
]

interface UsePropertiesState {
  data: Property[]
  isLoading: boolean
  error: Error | null
}

export function useProperties(): UsePropertiesState {
  const [state, setState] = useState<UsePropertiesState>({
    data: [],
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setState({ data: mockProperties, isLoading: false, error: null })
      } catch (error) {
        setState({
          data: [],
          isLoading: false,
          error: error instanceof Error ? error : new Error("Unable to load properties"),
        })
      }
    }, 600)

    return () => clearTimeout(timer)
  }, [])

  return state
}
