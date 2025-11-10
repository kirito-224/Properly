export type PropertyType = "RESIDENTIAL" | "COMMERCIAL" | "MULTI_UNIT" | "HMO"

export interface Property {
  id: string
  address: string
  city: string
  state: string
  zipCode: string
  propertyType: PropertyType
  numberOfUnits: number
  purchasePrice: number
  currentValue?: number
  photoUrl?: string
  createdAt?: string
  updatedAt?: string
}
