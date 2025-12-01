"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FilterSection } from "@/components/filter-section"
import { FeaturedToolsGrid } from "@/components/featured-tools-grid"
import { CategoryGrid } from "@/components/category-grid"
import { Footer } from "@/components/footer"
import { getFeaturedTools, getCategories, searchTools } from "@/lib/tools-service"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPricing, setSelectedPricing] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const featuredTools = useMemo(() => getFeaturedTools(), [])
  const categories = useMemo(() => getCategories(), [])
  const searchResults = useMemo(() => (searchQuery.trim() ? searchTools(searchQuery) : []), [searchQuery])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      <HeroSection onSearch={setSearchQuery} />

      <FilterSection
        onCategoryChange={setSelectedCategory}
        onPricingChange={setSelectedPricing}
        selectedCategory={selectedCategory}
        selectedPricing={selectedPricing}
      />

   
      {searchQuery.trim() && (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6">
            Search Results for <span className="text-blue-600 dark:text-blue-400">"{searchQuery}"</span>
          </h2>
          {searchResults.length > 0 ? (
            <FeaturedToolsGrid tools={searchResults} title="" />
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-300 text-lg">No tools found matching your search.</p>
            </div>
          )}
        </div>
      )}

      {!searchQuery.trim() && (
        <>
          <CategoryGrid selectedCategory={selectedCategory} selectedPricing={selectedPricing} categories={categories} />
          <FeaturedToolsGrid tools={featuredTools} title="Featured AI Tools" />
        </>
      )}

      <Footer />
    </div>
  )
}
