import { ArrowUpRight, Check } from "lucide-react"
import type { Tool } from "@/lib/types"
import Link from "next/link"

interface ToolDetailProps {
  tool: Tool
}

export function ToolDetail({ tool }: ToolDetailProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium mb-4 inline-block"
        >
          ← Back to Directory
        </Link>
      </div>

      {/* Tool Header */}
      <div className="flex items-start gap-6 mb-8">
        <div className="text-6xl flex-shrink-0">{tool.logo}</div>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">{tool.name}</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">{tool.description}</p>
          <div className="flex items-center gap-4 flex-wrap">
            <span
              className={`text-sm font-semibold px-4 py-2 rounded-full ${
                tool.pricing === "Free"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                  : tool.pricing === "Paid"
                    ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400"
                    : "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"
              }`}
            >
              {tool.pricing}
            </span>
            <span className="text-sm text-slate-500 dark:text-slate-400">Category: {tool.category}</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">⬆ {tool.votes} votes</span>
          </div>
        </div>
      </div>

      {/* Visit Button */}
      <a
        href={tool.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition font-medium mb-12"
      >
        Visit Website
        <ArrowUpRight className="w-4 h-4" />
      </a>

      {/* Divider */}
      <div className="border-t border-slate-200 dark:border-slate-700 my-12" />

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{tool.details}</p>
        </div>

        {/* Features */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Key Features</h2>
          <ul className="space-y-3">
            {tool.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 dark:text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid md:grid-cols-3 gap-6 p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Pricing</p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">{tool.pricing}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Category</p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">{tool.category}</p>
        </div>
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Community Rating</p>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">⬆ {tool.votes}</p>
        </div>
      </div>
    </div>
  )
}
