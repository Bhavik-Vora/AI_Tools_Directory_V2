import toolsData from "./tools-data.json"
import type { Tool } from "./types"

export type PermutationType = "best-free" | "best-paid" | "best-trial" | "category" | "category-pricing"

export interface Permutation {
  slug: string
  title: string
  description: string
  type: PermutationType
  category?: string
  pricing?: string
  tools: Tool[]
}

export function generatePermutations(): Permutation[] {
  const permutations: Permutation[] = []
  const tools = toolsData.tools

  // 1. Best Free AI Tools
  permutations.push({
    slug: "best-free-ai-tools",
    title: "Best Free AI Tools",
    description: "Explore the top free AI tools available online with no cost to get started.",
    type: "best-free",
    tools: tools.filter((t) => t.pricing === "Free").sort((a, b) => b.votes - a.votes),
  })

  // 2. Best Paid AI Tools
  permutations.push({
    slug: "best-paid-ai-tools",
    title: "Best Paid AI Tools",
    description: "Discover premium AI tools that offer advanced features and capabilities.",
    type: "best-paid",
    tools: tools.filter((t) => t.pricing === "Paid").sort((a, b) => b.votes - a.votes),
  })

  // 3. Best Free Trial AI Tools
  permutations.push({
    slug: "best-free-trial-ai-tools",
    title: "Best Free Trial AI Tools",
    description: "Test premium AI tools with free trial periods before committing.",
    type: "best-trial",
    tools: tools.filter((t) => t.pricing === "Free Trial").sort((a, b) => b.votes - a.votes),
  })

  // 4. Generate category + pricing permutations
  const categories = [
    "Image Generators",
    "Video Generators",
    "AI Chat & Assistant",
    "Code Assistants",
    "Business Tools",
    "Writing & SEO",
    "Music & Audio",
    "Design Tools",
  ]

  categories.forEach((category) => {
    // Best in category
    const categoryTools = tools.filter((t) => t.category === category).sort((a, b) => b.votes - a.votes)
    permutations.push({
      slug: `best-${category.toLowerCase().replace(/\s+/g, "-")}`,
      title: `Best ${category}`,
      description: `Top-rated ${category.toLowerCase()} tools to enhance your creative projects.`,
      type: "category",
      category,
      tools: categoryTools,
    })

    // Free tools in category
    permutations.push({
      slug: `free-${category.toLowerCase().replace(/\s+/g, "-")}`,
      title: `Free ${category}`,
      description: `Explore free ${category.toLowerCase()} without any cost.`,
      type: "category-pricing",
      category,
      pricing: "Free",
      tools: categoryTools.filter((t) => t.pricing === "Free"),
    })

    // Paid tools in category
    permutations.push({
      slug: `paid-${category.toLowerCase().replace(/\s+/g, "-")}`,
      title: `Premium ${category}`,
      description: `Best paid ${category.toLowerCase()} with advanced features.`,
      type: "category-pricing",
      category,
      pricing: "Paid",
      tools: categoryTools.filter((t) => t.pricing === "Paid"),
    })
  })

  // 5. Popular alternatives permutations
  const popularTools = ["ChatGPT", "DALL-E 3", "GitHub Copilot", "Grammarly"]
  popularTools.forEach((toolName) => {
    const tool = tools.find((t) => t.name === toolName)
    if (tool) {
      const alternatives = tools
        .filter((t) => t.category === tool.category && t.slug !== tool.slug)
        .sort((a, b) => b.votes - a.votes)

      permutations.push({
        slug: `best-${tool.slug}-alternatives`,
        title: `Best ${tool.name} Alternatives`,
        description: `Discover the best alternatives to ${tool.name} in ${tool.category}.`,
        type: "category",
        category: tool.category,
        tools: alternatives,
      })
    }
  })

  return permutations
}

export function getPermutationBySlug(slug: string): Permutation | null {
  const permutations = generatePermutations()
  return permutations.find((p) => p.slug === slug) || null
}

export function getAllPermutationSlugs(): string[] {
  return generatePermutations().map((p) => p.slug)
}
