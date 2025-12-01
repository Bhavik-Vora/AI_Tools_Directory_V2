import type { Tool } from "@/lib/types"
import { ToolCard } from "./tool-card"

interface FeaturedToolsGridProps {
  tools: Tool[]
  title?: string
}

export function FeaturedToolsGrid({ tools, title = "Featured Tools" }: FeaturedToolsGridProps) {
  return (
    <section className="bg-white dark:bg-slate-950 py-12 px-4 sm:py-16">
      <div className="max-w-7xl mx-auto">
        {title && <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">{title}</h2>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
