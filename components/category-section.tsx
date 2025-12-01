import type { Tool } from "@/lib/types"
import { getCategories, getCategoryWithTools } from "@/lib/tools-service"
import { ArrowRight } from "lucide-react"

interface CategoryItemProps {
  title: string
  tools: Tool[]
}

function CategoryItem({ title, tools }: CategoryItemProps) {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 hover:border-slate-300 dark:hover:border-slate-600 transition">
      <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 text-lg">⚡ {title}</h3>
      <div className="space-y-3 mb-4">
        {tools.slice(0, 5).map((tool, idx) => (
          <div key={tool.id} className="flex items-start gap-3 text-sm">
            <span className="text-slate-500 dark:text-slate-400 font-semibold w-6">{idx + 1}.</span>
            <span className="text-xl">{tool.logo}</span>
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline flex-1 truncate">
              {tool.name}
            </a>
            <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
          </div>
        ))}
      </div>
      <button className="w-full text-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium py-2 border-t border-slate-200 dark:border-slate-700">
        See all category ({tools.length}) →
      </button>
    </div>
  )
}

export function CategorySection() {
  const categories = getCategories()
  const selectedCategories = categories.slice(0, 4)

  return (
    <section className="bg-slate-50 dark:bg-slate-900/50 py-16 px-4 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">SOME AI CATEGORIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedCategories.map((category) => {
            const categoryData = getCategoryWithTools(category)
            return <CategoryItem key={category} title={category} tools={categoryData.tools} />
          })}
        </div>
      </div>
    </section>
  )
}
