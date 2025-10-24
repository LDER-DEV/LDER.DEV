"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type PortfolioSide = "a-side" | "b-side"

interface PortfolioContextType {
  side: PortfolioSide
  setSide: (side: PortfolioSide) => void
  toggleSide: () => void
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [side, setSide] = useState<PortfolioSide>("a-side")

  const toggleSide = () => {
    setSide(prev => prev === "a-side" ? "b-side" : "a-side")
  }

  return (
    <PortfolioContext.Provider value={{ side, setSide, toggleSide }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error("usePortfolio must be used within PortfolioProvider")
  }
  return context
}

