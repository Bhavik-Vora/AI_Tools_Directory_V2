import type { Tool } from "@/lib/types"
import { ToolCard } from "./tool-card"

interface RelatedToolsProps {
  tools: Tool[]
  categoryName: string
}

export function RelatedTools({ tools, categoryName }: RelatedToolsProps) {
  if (tools.length === 0) return null

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
        More in <span className="text-blue-600 dark:text-blue-400">{categoryName}</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  )
}
