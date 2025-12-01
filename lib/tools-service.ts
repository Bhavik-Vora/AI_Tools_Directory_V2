import toolsData from "./tools-data.json"
import type { Tool, Category, PricingType } from "./types"

export const getAllTools = (): Tool[] => toolsData.tools

export const getFeaturedTools = (): Tool[] => toolsData.tools.filter((tool) => tool.featured).slice(0, 8)

export const getToolsByCategory = (category: string): Tool[] =>
  toolsData.tools.filter((tool) => tool.category === category)

export const getToolBySlug = (slug: string): Tool | undefined => toolsData.tools.find((tool) => tool.slug === slug)

export const getToolsByPricing = (pricing: PricingType): Tool[] =>
  toolsData.tools.filter((tool) => tool.pricing === pricing)

export const searchTools = (query: string): Tool[] =>
  toolsData.tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase()) ||
      tool.details.toLowerCase().includes(query.toLowerCase()),
  )

export const getCategories = (): string[] => toolsData.categories

export const getCategoryWithTools = (category: string): Category => ({
  name: category,
  tools: getToolsByCategory(category),
})

export const getTopToolsByVotes = (limit = 10): Tool[] =>
  [...toolsData.tools].sort((a, b) => b.votes - a.votes).slice(0, limit)

export const getCategoryStats = (): Record<string, number> => {
  const stats: Record<string, number> = {}
  toolsData.tools.forEach((tool) => {
    stats[tool.category] = (stats[tool.category] || 0) + 1
  })
  return stats
}
