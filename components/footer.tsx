import Link from "next/link"
import { Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 pb-8 border-b border-slate-200 dark:border-slate-800">
          <h3 className="font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5" /> Popular platforms:
          </h3>
          <div className="flex flex-wrap gap-6">
            {["Google", "OpenAI", "Meta", "Microsoft", "Stability.ai", "DeepMind"].map((platform) => (
              <span key={platform} className="text-slate-600 dark:text-slate-400 font-medium">
                {platform}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/permutations" className="hover:text-slate-900 dark:hover:text-white transition">
                  Collections
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                  Submit Tool
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 dark:hover:text-white transition">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; 2025 AIToolsV2. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
