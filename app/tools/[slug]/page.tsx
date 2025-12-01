//individual home page of ai-tools 
import { notFound } from "next/navigation"
import { getToolBySlug, getToolsByCategory } from "@/lib/tools-service"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ToolDetail } from "@/components/tool-detail"
import { RelatedTools } from "@/components/related-tools"
import type { Metadata } from "next"

interface ToolPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    return { title: "Tool Not Found" }
  }

  return {
    title: `${tool.name} - AI Tools Directory`,
    description: tool.description,
  }
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  const relatedTools = getToolsByCategory(tool.category).filter((t) => t.slug !== slug)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <Header />
      <main className="flex-1">
        <ToolDetail tool={tool} />
        <RelatedTools tools={relatedTools.slice(0, 4)} categoryName={tool.category} />
      </main>
      <Footer />
    </div>
  )
}
