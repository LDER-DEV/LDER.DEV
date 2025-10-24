"use client"

import { motion } from "framer-motion"
import { usePortfolio } from "@/contexts/PortfolioContext"

interface Skill {
  name: string
  iconUrl: string
  color: string
}

const skills: Skill[] = [
  {
    name: "MongoDB",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "oklch(0.4 0.15 145)"
  },
  {
    name: "JavaScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "oklch(0.6 0.2 65)"
  },
  {
    name: "TypeScript",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "oklch(0.5 0.2 240)"
  },
  {
    name: "Node.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "oklch(0.4 0.15 120)"
  },
  {
    name: "Next.js",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "oklch(0.2 0.05 0)"
  },
  {
    name: "React",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "oklch(0.5 0.2 200)"
  },
  {
    name: "CSS",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "oklch(0.6 0.2 280)"
  },
  {
    name: "HTML",
    iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "oklch(0.6 0.2 30)"
  }
]

export function SkillsSection() {
  const { side } = usePortfolio()
  
  // Only show skills section on A-side
  if (side !== "a-side") {
    return null
  }

  return (
    <section className="mb-16 md:mb-24">
      <div className="cd-case-container rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-balance">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-gray-300/40 hover:bg-white/20 hover:border-gray-400/60 transition-all duration-300 cursor-pointer shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 mb-2 flex items-center justify-center">
                <img 
                  src={skill.iconUrl}
                  alt={`${skill.name} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-medium text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
