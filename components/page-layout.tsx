import type React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
