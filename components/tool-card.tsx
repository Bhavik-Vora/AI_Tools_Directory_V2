"use client"

import type { Tool } from "@/lib/types"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <div className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-5 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 h-full flex flex-col cursor-pointer hover:border-teal-300 dark:hover:border-teal-700">
        {/* votes/popularity */}
        <div className="text-xs text-slate-500 dark:text-slate-400 mb-3">⬆ {tool.votes} votes</div>

        {/* tool header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="text-3xl flex-shrink-0 mt-1">{tool.logo}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-slate-900 dark:text-white text-sm group-hover:text-rose-600 dark:group-hover:text-rose-400 transition truncate">
              {tool.name}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{tool.category}</p>
          </div>
        </div>

        {/* description */}
        <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 flex-1 line-clamp-2">{tool.description}</p>

        {/* pricing tag */}
        <div className="mb-4">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full inline-block ${
              tool.pricing === "Free"
                ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                : tool.pricing === "Paid"
                  ? "bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400"
                  : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400"
            }`}
          >
            {tool.pricing}
          </span>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault()
          }}
          className="w-full bg-rose-600 dark:bg-rose-700 text-white py-2 rounded-lg hover:bg-rose-700 dark:hover:bg-rose-600 transition font-medium flex items-center justify-center gap-2 text-sm"
        >
          View Details
          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </button>
      </div>
    </Link>
  )
}
