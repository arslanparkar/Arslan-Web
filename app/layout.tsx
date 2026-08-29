import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Arslan Parkar | AI/ML Engineer & Technology Leader",
  description: "Portfolio of Arslan Parkar, an AI/ML engineer, automation builder, researcher, and technology leader in Boston.",
  generator: "v0.dev",
  keywords: ["Arslan Parkar", "AI/ML Engineer", "Machine Learning Engineer", "Automation Engineer", "Hardware Validation", "Northeastern University", "Infineon Technologies", "Boston"],
  authors: [{ name: "Arslan Parkar" }],
  openGraph: {
    title: "Arslan Parkar | AI/ML Engineer & Technology Leader",
    description: "AI/ML, automation, hardware validation, and product engineering work by Arslan Parkar.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
