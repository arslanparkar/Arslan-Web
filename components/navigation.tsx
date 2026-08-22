"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Work", href: "/work" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" },
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
    // Scroll to top when navigating
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link
            href="/"
            className="text-xl font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            onClick={handleNavClick}
          >
            Arslan Parkar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-black dark:hover:text-white ${
                  pathname === item.href ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400"
                }`}
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-black dark:text-white"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <button className="text-black dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
