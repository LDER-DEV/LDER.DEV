"use client"

import { motion } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"
import type { Project } from "./vinyl-crate"
import { Button } from "./ui/button"

interface ProjectDetailProps {
  project: Project
  onClose: () => void
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, rotateY: -15 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        exit={{ scale: 0.9, opacity: 0, rotateY: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-card rounded-lg shadow-2xl overflow-hidden"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <X className="h-5 w-5" />
        </Button>

        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="aspect-square rounded-full overflow-hidden shadow-xl vinyl-texture"
              style={{ backgroundColor: project.coverColor }}
            >
              <img
                src={project.coverImage || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm shadow-lg flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-foreground" />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">{project.title}</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 text-muted-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              {project.demoLink && (
                <Button asChild className="flex-1">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubLink && (
                <Button asChild variant="outline" className="flex-1 bg-transparent">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
