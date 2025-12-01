export interface Tool {
  id: number
  slug: string
  name: string
  category: string
  pricing: "Free" | "Paid" | "Free Trial"
  description: string
  logo: string
  website: string
  featured: boolean
  votes: number
  details: string
  features: string[]
}

export interface Category {
  name: string
  tools: Tool[]
}

export type PricingType = "Free" | "Paid" | "Free Trial"
