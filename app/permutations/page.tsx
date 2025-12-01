//home page of best ai tool etc-etc.
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PermutationCard } from "@/components/permutation-card"
import { generatePermutations } from "@/lib/permutations-service"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Tool Collections | AIToolsV2",
  description: "Browse curated collections of AI tools by category, pricing, and use cases.",
}

export default function PermutationsPage() {
  const permutations = generatePermutations()

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
              AI Tool Collections
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-pretty max-w-3xl">
              Explore curated collections of AI tools organized by category, pricing model, and popular alternatives.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-12 md:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {permutations.map((perm) => (
              <PermutationCard
                key={perm.slug}
                title={perm.title}
                description={perm.description}
                slug={perm.slug}
                toolCount={perm.tools.length}
                category={perm.category}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
