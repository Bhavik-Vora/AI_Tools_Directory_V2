"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FilterSectionProps {
  onCategoryChange: (category: string) => void
  onPricingChange: (pricing: string) => void
  selectedCategory: string
  selectedPricing: string
}

export function FilterSection({
  onCategoryChange,
  onPricingChange,
  selectedCategory,
  selectedPricing,
}: FilterSectionProps) {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)

  const categories = [
    "All",
    "Image Generators",
    "Video Generators",
    "AI Chat & Assistant",
    "Code Assistants",
    "Business Tools",
    "Writing & SEO",
    "Music & Audio",
    "Design Tools",
  ]

  const pricingOptions = ["All", "Free", "Paid", "Free Trial"]

  return (
    <section className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-4 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          {/* Category Dropdown */}
          <div className="relative w-full sm:w-auto">
            <button
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
              className="w-full sm:w-48 px-4 py-2.5 text-sm border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition flex items-center justify-between gap-2 font-medium"
            >
              <span className="truncate">{selectedCategory}</span>
              <ChevronDown className="w-4 h-4 flex-shrink-0" />
            </button>

            {showCategoryDropdown && (
              <div className="absolute top-full left-0 mt-2 w-full sm:w-56 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg shadow-lg z-20 max-h-64 overflow-y-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onCategoryChange(cat)
                      setShowCategoryDropdown(false)
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition text-slate-900 dark:text-white"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
            {pricingOptions.map((option) => (
              <button
                key={option}
                onClick={() => onPricingChange(option)}
                className={`px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium rounded-full transition whitespace-nowrap ${
                  selectedPricing === option
                    ? "bg-blue-600 dark:bg-blue-500 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
