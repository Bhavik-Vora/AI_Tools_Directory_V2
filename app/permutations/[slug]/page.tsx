//specific home page of ai tools permutation wise
import { notFound } from "next/navigation"
import { getPermutationBySlug, getAllPermutationSlugs } from "@/lib/permutations-service"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturedToolsGrid } from "@/components/featured-tools-grid"
import type { Metadata } from "next"

interface PermutationPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PermutationPageProps): Promise<Metadata> {
  const { slug } = await params
  const permutation = getPermutationBySlug(slug)

  if (!permutation) {
    return { title: "Page Not Found" }
  }

  return {
    title: `${permutation.title} | AIToolsV2`,
    description: permutation.description,
    openGraph: {
      title: permutation.title,
      description: permutation.description,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllPermutationSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function PermutationPage({ params }: PermutationPageProps) {
  const { slug } = await params
  const permutation = getPermutationBySlug(slug)

  if (!permutation) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section for Permutation */}
        <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
              {permutation.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-pretty max-w-3xl">
              {permutation.description}
            </p>
            {permutation.category && (
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium">
                  {permutation.category}
                </span>
                {permutation.pricing && (
                  <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200 rounded-full text-sm font-medium">
                    {permutation.pricing}
                  </span>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-12 md:py-16">
          <FeaturedToolsGrid tools={permutation.tools} title="" />
        </section>
      </main>
      <Footer />
    </div>
  )
}
