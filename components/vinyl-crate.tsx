"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Grid3x3, Disc3, ChevronLeft, ChevronRight, SkipBack, SkipForward } from "lucide-react"
import { VinylRecord } from "./vinyl-record"
import { ProjectDetail } from "./project-detail"
import { Button } from "./ui/button"
import { usePortfolio } from "@/contexts/PortfolioContext"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  demoLink?: string
  githubLink?: string
  coverImage: string
  coverColor: string
}

export interface Track {
  id: string
  title: string
  description: string
  year: string
  type: "Album" | "Single" | "EP"
  soundcloudLink: string
  coverImage: string
  coverColor: string
}

// Music Tracks for B-Side
const tracks: Track[] = [
  {
    id: "1",
    title: "Channel 3",
    description: "A sonic journey through electronic beats and boom bap rhythms, blending Toonami-inspired sounds with jazzy samples.",
    year: "2021",
    type: "Album",
    soundcloudLink: "https://soundcloud.com/respectyourlder/sets/ch-03",
    coverImage: "https://i1.sndcdn.com/artworks-syfzj7mld39a1e9K-KeWgzA-t1080x1080.jpg",
    coverColor: "oklch(0.25 0.05 280)",
  },
  {
    id: "2",
    title: "New Type Mood",
    description: "Hard-hitting single showcasing LDER's signature blend of electronic drum patterns and melodic hooks.",
    year: "2020",
    type: "EP",
    soundcloudLink: "https://soundcloud.com/respectyourlder/sets/new-type-mood",
    coverImage: "https://i1.sndcdn.com/artworks-VqzzCLMwywwJM5Mu-SPIWsQ-t1080x1080.jpg",
    coverColor: "oklch(0.20 0.04 240)",
  },
  {
    id: "3",
    title: "Klexos",
    description: "An album exploring new sonic territories with upbeat percussion and video game-inspired samples.",
    year: "2020",
    type: "EP",
    soundcloudLink: "https://soundcloud.com/respectyourlder/sets/klexos-ep",
    coverImage: "https://i1.sndcdn.com/artworks-000436222725-ufzq02-t1080x1080.jpg",
    coverColor: "oklch(0.22 0.04 200)",
  },
  
]

// Projects for A-Side
const projects: Project[] = [
  {
    id: "1",
    title: "Jieta.Esq",
    description:
      "A professional website designed for Attorney Morjieta Derisier, showcasing her career highlights and accomplishments. Built with React and styled using CSS.",
    techStack: ["React", "Javascript","CSS"],
    demoLink: "https://jieta.netlify.app/",
    githubLink: "https://github.com/LDER-DEV/Jieta",
    coverImage: "/Jieta.png",
    coverColor: "oklch(0.25 0.05 280)",
  },
  {
    id: "2",
    title: "TYPEBEAT",
    description:
      "This Chrome extension allows users to quickly convert YouTube videos to high-quality MP3 files. Simply paste a YouTube link, and the extension retrieves audio in 320 kbps MP3 format, offering an easy solution for music producers seeking sample material",
    techStack: ["HTML", "CSS", "Node.js", "FFMPEG", "YT-DLP"],
    demoLink: "https://chromewebstore.google.com/detail/typebeat/igehpdfdahifdcdnpaiomdfhofddjhie",
    coverImage: "/typebeat.png",
    coverColor: "oklch(0.20 0.04 240)",
  },
  {
    id: "3",
    title: "The Move",
    description:
      "The Move is a full-stack web application designed to aid artists in booking venues and thriving in their local communities. This platform empowers artists to discover and secure the perfect stages for their performances, fostering growth and connection within their artistic realms. From intimate coffee shops to bustling concert halls, 'The Move' is the perfect tool for artists to amplify their presence and leave a mark on their local scene.",
    techStack: ["Express", "EJS", "Node.js", "Bootstrap", "Three.js"],
    demoLink: "https://themove.onrender.com/",
    githubLink: "https://github.com/LDER-DEV/The-Move",
    coverImage: "/themove.png",
    coverColor: "oklch(0.22 0.04 200)",
  },
  {
    id: "4",
    title: "JOJO's Bizzare Tic-Tac-Toe",
    description:
      "a'JOJO's Bizzare Adventure' themed game of tic-tac-toe in which there are two players, X always goes first. When a winner is found each box will fill with an announcement saying who won!",
    techStack: ["HTML", "CSS", "Javascript"],
    demoLink: "https://jojosbizzarettt.netlify.app/",
    githubLink: "https://github.com/LDER-DEV/tic-tac-toe/tree/answer",
    coverImage: "/jojottt.png",
    coverColor: "oklch(0.18 0.03 320)",
  },
  {
    id: "5",
    title: "Show me the weather",
    description: "an application that displays the weather at the given location accompanied by a mood visualizer based on the weather conditions",
    techStack: ["Javascript", "HTML", "CSS", "Weather API"],
    demoLink: "https://https://showmetheweather.netlify.app/.com",
    githubLink: "https://https://github.com/LDER-DEV/weather-api-bootcamp/tree/answer.com",
    coverImage: "/showmetheweather.png",
    coverColor: "oklch(0.23 0.04 160)",
  },
]

export function VinylCrate() {
  const { side } = usePortfolio()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel")
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  // Get the appropriate items based on side
  const items = side === "a-side" ? projects : tracks
  const itemType = side === "a-side" ? "TRACK" : "TRACK"

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Reset carousel when switching sides
  useEffect(() => {
    if (api) {
      api.scrollTo(0)
      setCurrent(0)
    }
  }, [side, api])

  // Ensure current index is within bounds when items change
  useEffect(() => {
    if (current >= items.length) {
      setCurrent(0)
      if (api) {
        api.scrollTo(0)
      }
    }
  }, [items.length, current, api])

  return (
    <>
      <section className="h-full">
        {/* View Toggle */}
        <div className="flex justify-end mb-6">
          <div className="bg-background/80 backdrop-blur-sm rounded-lg p-1 shadow-lg border">
            <Button
              variant={viewMode === "carousel" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("carousel")}
              className="gap-2"
            >
              <Disc3 className="h-4 w-4" />
              <span className="hidden sm:inline">Player</span>
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="gap-2"
            >
              <Grid3x3 className="h-4 w-4" />
              <span className="hidden sm:inline">Grid</span>
            </Button>
          </div>
        </div>

        {viewMode === "carousel" ? (
          /* CD Player Carousel View */
          <div className="cd-player-container rounded-xl p-8 md:p-12 shadow-2xl bg-gradient-to-br from-blue-400/20 via-blue-300/20 to-cyan-400/20 backdrop-blur-sm border border-white/20">
            {/* Track Info */}
            <div className="flex justify-between items-center mb-8">
              <div className="bg-white/40 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/30">
                <span className="text-sm font-bold text-blue-900/70 tracking-wider">PROJECT</span>
                <span className="ml-2 text-2xl font-bold text-blue-900">
                  {String(current + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="bg-white/40 backdrop-blur-md rounded-full px-6 py-2 shadow-lg border border-white/30">
                <span className="text-sm font-bold text-blue-900/70 tracking-wider">TOTAL</span>
                <span className="ml-2 text-2xl font-bold text-blue-900">
                  {String(items.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Carousel */}
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: items.length > 1,
                skipSnaps: false,
                dragFree: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {items.map((item, index) => (
                  <CarouselItem key={item.id} className={`pl-2 md:pl-4 ${items.length <= 3 ? 'md:basis-1/2 lg:basis-1/2' : 'md:basis-1/2 lg:basis-1/3'}`}>
                    <div className="p-4">
                      <motion.div
                        animate={{
                          scale: current === index ? 1 : 0.85,
                          opacity: current === index ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {side === "a-side" ? (
                          <VinylRecord
                            project={item as Project}
                            index={index}
                            onClick={() => setSelectedProject(item as Project)}
                          />
                        ) : (
                          <VinylRecord
                            project={item as any}
                            index={index}
                            onClick={() => window.open((item as Track).soundcloudLink, '_blank')}
                          />
                        )}
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* CD Player Controls */}
            <div className="flex justify-center items-center gap-3 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-white/60 hover:bg-white/80 backdrop-blur-md border-2 border-white/40 shadow-lg"
                onClick={() => api?.scrollTo(0)}
              >
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-14 w-14 bg-white/60 hover:bg-white/80 backdrop-blur-md border-2 border-white/40 shadow-lg"
                onClick={() => api?.scrollPrev()}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="default"
                size="icon"
                className="rounded-full h-16 w-16 bg-green-500 hover:bg-green-600 shadow-xl scale-110"
                onClick={() => {
                  if (items[current]) {
                    if (side === "a-side") {
                      setSelectedProject(items[current] as Project)
                    } else {
                      window.open((items[current] as Track).soundcloudLink, '_blank')
                    }
                  }
                }}
              >
                <span className="text-2xl">▶</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-14 w-14 bg-white/60 hover:bg-white/80 backdrop-blur-md border-2 border-white/40 shadow-lg"
                onClick={() => api?.scrollNext()}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-12 w-12 bg-white/60 hover:bg-white/80 backdrop-blur-md border-2 border-white/40 shadow-lg"
                onClick={() => api?.scrollTo(items.length - 1)}
              >
                <SkipForward className="h-5 w-5" />
              </Button>
            </div>

            {/* Current Item Title */}
            <div className="text-center mt-6">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {items[current]?.title || "Loading..."}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {items[current] && side === "a-side" 
                  ? (items[current] as Project).techStack.join(" • ")
                  : items[current] 
                    ? `${(items[current] as Track).type} • ${(items[current] as Track).year}`
                    : ""
                }
              </p>
            </div>
          </div>
        ) : (
          /* Grid View - CD Case Style */
          <div className="cd-case-container rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {items.map((item, index) => (
                side === "a-side" ? (
                  <VinylRecord
                    key={item.id}
                    project={item as Project}
                    index={index}
                    onClick={() => setSelectedProject(item as Project)}
                  />
                ) : (
                  <VinylRecord
                    key={item.id}
                    project={item as any}
                    index={index}
                    onClick={() => window.open((item as Track).soundcloudLink, '_blank')}
                  />
                )
              ))}
            </div>
          </div>
        )}
      </section>

      <AnimatePresence>
        {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </>
  )
}
