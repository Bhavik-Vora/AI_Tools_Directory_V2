import type { MetadataRoute } from "next"
import toolsData from "@/lib/tools-data.json"
import { getAllPermutationSlugs } from "@/lib/permutations-service"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-tools-directory-v2-t1s9.vercel.app"
  const tools = toolsData.tools

  // Home page
  const homeUrl: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  // Individual tool pages
  const toolUrls: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Permutation pages
  const permutationSlugs = getAllPermutationSlugs()
  const permutationUrls: MetadataRoute.Sitemap = permutationSlugs.map((slug) => ({
    url: `${baseUrl}/permutations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...homeUrl, ...toolUrls, ...permutationUrls]
}
