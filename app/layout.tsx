//metadata page / index.html / by defualt layout file
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AIToolsV2 - Best AI Tools Directory & Curated Collections",
  description:
    "Discover the largest list of top-quality AI tools. Browse 76+ tools across 8 categories: AI Chat, Image Generation, Video Creation, Code Assistants, and more.",
  keywords: "AI tools, AI directory, ChatGPT alternatives, DALL-E alternatives, best AI tools",
  metadataBase: new URL("https://aitoolsv2.com"),
  alternates: {
    canonical: "https://aitoolsv2.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aitoolsv2.com",
    siteName: "AIToolsV2",
    title: "AIToolsV2 - Best AI Tools Directory",
    description: "Discover the largest list of top-quality AI tools with curated collections.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIToolsV2 - AI Tools Directory",
    description: "Discover the best AI tools available online.",
  },
  icons: {
    icon: [
      {
        url: "/images.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
