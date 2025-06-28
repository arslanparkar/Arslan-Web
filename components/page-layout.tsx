import type React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}
