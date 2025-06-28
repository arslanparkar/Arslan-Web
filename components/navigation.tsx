"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Research", href: "/research" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-xl font-medium hover:text-gray-300 transition-colors">
            Arslan Parkar
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  pathname === item.href ? "text-white" : "text-gray-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link href="/contact">
            <Button className="hidden md:block bg-white text-black hover:bg-gray-200">Get Started</Button>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
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
