import { getToolsByCategory } from "@/lib/tools-service"
import { ToolCard } from "./tool-card"

interface CategoryGridProps {
  selectedCategory: string
  selectedPricing: string
  categories: string[]
}

export function CategoryGrid({ selectedCategory, selectedPricing, categories }: CategoryGridProps) {
  const filterTools = (tools: any[]) => {
    return tools.filter((tool) => {
      if (selectedPricing !== "All" && tool.pricing !== selectedPricing) return false
      return true
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      {selectedCategory !== "All" ? (
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
            <span className="text-blue-600 dark:text-blue-400">{selectedCategory}</span> Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {filterTools(getToolsByCategory(selectedCategory)).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      ) : (
        // Show all categories when "All" is selected
        <div className="space-y-12 sm:space-y-16">
          {categories.map((category) => {
            const tools = filterTools(getToolsByCategory(category))
            if (tools.length === 0) return null

            return (
              <div key={category}>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">
                  <span className="text-blue-600 dark:text-blue-400">{category}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {tools.slice(0, 4).map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
