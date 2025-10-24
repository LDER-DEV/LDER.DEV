"use client"

import { motion } from "framer-motion"
import type { Project } from "./vinyl-crate"

interface VinylRecordProps {
  project: Project
  index: number
  onClick: () => void
}

export function VinylRecord({ project, index, onClick }: VinylRecordProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        y: -12,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-300/60 dark:border-gray-500/60"
      style={{ backgroundColor: project.coverColor }}
    >
      <div className="absolute inset-0 vinyl-texture" />

      <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
        <img
          src={project.coverImage || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover rounded-sm opacity-90 group-hover:opacity-100 transition-opacity"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
          <p className="text-white text-xs md:text-sm font-medium text-balance">{project.title}</p>
        </div>
      </div>

      <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-white" />
      </div>
    </motion.button>
  )
}
