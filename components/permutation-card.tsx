//collection file
import Link from "next/link"

interface PermutationCardProps {
  title: string
  description: string
  slug: string
  toolCount: number
  category?: string
}

export function PermutationCard({ title, description, slug, toolCount, category }: PermutationCardProps) {
  return (
    <Link href={`/permutations/${slug}`}>
      <div className="group relative overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-xs font-semibold">
            {toolCount}
          </span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{description}</p>
        {category && (
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Category: <span className="font-semibold text-slate-700 dark:text-slate-300">{category}</span>
          </div>
        )}
        <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Explore →
        </div>
      </div>
    </Link>
  )
}
