"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // check if user has theme preference saved
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark)

    setDarkMode(shouldBeDark)
    applyDarkMode(shouldBeDark)
  }, [])

  const applyDarkMode = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const handleThemeToggle = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    applyDarkMode(newMode)
  }

  if (!isMounted) return null

  return (
    <>
      {/* banner */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white text-center py-2 text-xs md:text-sm px-2">
        Check out the best AI tools deals this Black Friday! 🚀
      </div>

      {/* main header */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-bold">
              <span className="text-rose-500 dark:text-rose-400">AI</span>
              <span className="text-slate-900 dark:text-white">ToolsV2</span>
            </div>
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition text-sm"
            >
              Home
            </Link>
            <Link
              href="/permutations"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition text-sm"
            >
              Collections
            </Link>
            <a
              href="#"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition text-sm"
            >
              About
            </a>
          </nav>

          {/* actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleThemeToggle}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition"
              aria-label="theme toggle"
            >
              {darkMode ? <Sun size={20} className="text-slate-400" /> : <Moon size={20} className="text-slate-600" />}
            </button>

            <button className="hidden sm:inline-block px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition font-medium text-sm">
              Sign up
            </button>

            {/* mobile menu toggle */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
              {menuOpen ? (
                <X size={24} className="text-slate-900 dark:text-white" />
              ) : (
                <Menu size={24} className="text-slate-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 py-4 px-4 bg-slate-50 dark:bg-slate-900">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm"
              >
                Home
              </Link>
              <Link
                href="/permutations"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm"
              >
                Collections
              </Link>
              <a
                href="#"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-sm"
              >
                About
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
