"use client"

import { motion } from "framer-motion"
import { Code, Music } from "lucide-react"
import { usePortfolio } from "@/contexts/PortfolioContext"

export function SideToggle() {
  const { side, toggleSide } = usePortfolio()

  return (
    <div className="flex justify-end mb-6">
      <motion.button
        onClick={toggleSide}
        className="relative bg-background/80 backdrop-blur-md border-2 border-border rounded-full p-1 shadow-2xl hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-28 h-12 sm:w-32 sm:h-14 rounded-full overflow-hidden">
          {/* Background slider */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary to-muted rounded-full"
            animate={{
              x: side === "a-side" ? 0 : "50%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {/* Toggle options */}
          <div className="relative flex h-full">
            {/* A-Side */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                animate={{
                  color: side === "a-side" ? "white" : "hsl(var(--foreground))",
                  scale: side === "a-side" ? 1.1 : 0.9,
                }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center"
              >
                <Code className="h-3 w-3 sm:h-4 sm:w-4 mb-0.5" />
                <span className="text-[8px] sm:text-[10px] font-bold">A-SIDE</span>
              </motion.div>
            </div>

            {/* B-Side */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                animate={{
                  color: side === "b-side" ? "white" : "hsl(var(--foreground))",
                  scale: side === "b-side" ? 1.1 : 0.9,
                }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center"
              >
                <Music className="h-3 w-3 sm:h-4 sm:w-4 mb-0.5" />
                <span className="text-[8px] sm:text-[10px] font-bold">B-SIDE</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.button>
    </div>
  )
}

