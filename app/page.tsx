import { VinylCrate } from "@/components/vinyl-crate"
import { NowPlaying } from "@/components/now-playing"
import { ContactFooter } from "@/components/contact-footer"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <main className="min-h-screen grain-overlay">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">LDER.DEV</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            
          </p>
        </header>

        {/* Side by side on desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 md:mb-24">
          {/* About Section - Left/Top */}
          <div className="lg:w-2/5 flex-shrink-0">
            <NowPlaying />
          </div>

          {/* Projects Section - Right/Bottom */}
          <div className="lg:flex-1">
            <VinylCrate />
          </div>
        </div>

        {/* Skills Section */}
        <SkillsSection />

        <ContactFooter />
      </div>
    </main>
  )
}
