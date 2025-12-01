"use client"

import type React from "react"

import { useState } from "react"
import { X, Search } from "lucide-react"

interface HeroSectionProps {
  onSearch: (query: string) => void
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [searchValue, setSearchValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchValue)
  }

  const handleClearSearch = () => {
    setSearchValue("")
    onSearch("")
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-12 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* icon */}
        <div className="mb-4 sm:mb-6 flex justify-center">
          <div className="text-5xl sm:text-6xl">🤖</div>
        </div>

        {/* heading */}
        <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
          AI Tools Directory
        </h1>

        {/* subtitle */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
          Find the best AI tools for your projects. Explore hundreds of options today.
        </p>

        {/* search form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by tool name (e.g. ChatGPT, Midjourney)..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
            />
            {searchValue && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition"
                aria-label="clear"
              >
                <X size={18} />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition font-medium text-sm sm:text-base whitespace-nowrap flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Search
          </button>
        </form>
      </div>
    </section>
  )
}
