import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { PortfolioProvider } from "@/contexts/PortfolioContext"

export const metadata: Metadata = {
  title: "Ludjy Derisier - Software Engineer & Music Producer",
  description: "Dig through my crate — each record tells a story. A-Side: Code. B-Side: Beats.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <PortfolioProvider>
          <Suspense fallback={null}>
            {children}
            <Analytics />
          </Suspense>
        </PortfolioProvider>
      </body>
    </html>
  )
}
