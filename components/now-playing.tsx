"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Music2 } from "lucide-react"
import { Button } from "./ui/button"
import { usePortfolio } from "@/contexts/PortfolioContext"

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const SpotifyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const SoundCloudIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.051 0-.078.046-.084.098l-.18 1.326.18 1.28c.006.052.033.098.084.098.052 0 .082-.046.087-.098l.201-1.28-.201-1.326c-.005-.052-.035-.098-.087-.098m1.78-1.053c-.058 0-.099.051-.106.108l-.21 2.325.21 2.24c.007.058.048.109.106.109.061 0 .103-.051.11-.109l.232-2.24-.232-2.325c-.007-.057-.049-.108-.11-.108m.945-.783c-.064 0-.111.057-.118.122l-.186 3.108.186 3.021c.007.065.054.122.118.122.066 0 .112-.057.12-.122l.205-3.021-.205-3.108c-.008-.065-.054-.122-.12-.122m.922-.936c-.073 0-.126.063-.133.135l-.164 4.044.164 3.938c.007.072.06.135.133.135.075 0 .127-.063.136-.135l.186-3.938-.186-4.044c-.009-.072-.061-.135-.136-.135m.906-1.146c-.081 0-.139.069-.146.152l-.151 5.09.151 4.935c.007.083.065.152.146.152.082 0 .142-.069.149-.152l.17-4.935-.17-5.09c-.007-.083-.067-.152-.149-.152m.914-.542c-.09 0-.154.075-.161.166l-.138 5.632.138 5.478c.007.091.071.166.161.166.092 0 .157-.075.164-.166l.155-5.478-.155-5.632c-.007-.091-.072-.166-.164-.166m.92-.906c-.097 0-.168.081-.176.178l-.123 6.538.123 6.374c.008.097.079.178.176.178.099 0 .172-.081.18-.178l.138-6.374-.138-6.538c-.008-.097-.081-.178-.18-.178m.9-.834c-.105 0-.182.087-.19.191l-.112 7.372.112 7.209c.008.104.085.191.19.191.108 0 .186-.087.194-.191l.125-7.209-.125-7.372c-.008-.104-.086-.191-.194-.191m.914-.903c-.114 0-.198.093-.207.207l-.099 8.275.099 8.064c.009.114.093.207.207.207.116 0 .202-.093.211-.207l.111-8.064-.111-8.275c-.009-.114-.095-.207-.211-.207m.908-.913c-.123 0-.213.099-.223.223l-.087 9.188.087 8.925c.01.124.1.223.223.223.125 0 .216-.099.227-.223l.098-8.925-.098-9.188c-.011-.124-.102-.223-.227-.223m.906-1.051c-.132 0-.228.105-.239.238l-.074 10.239.074 9.989c.011.133.107.238.239.238.134 0 .231-.105.243-.238l.083-9.989-.083-10.239c-.012-.133-.109-.238-.243-.238m.914-1.114c-.142 0-.247.111-.258.254l-.062 11.353.062 11.017c.011.143.116.254.258.254.143 0 .251-.111.263-.254l.07-11.017-.07-11.353c-.012-.143-.12-.254-.263-.254m.906-1.146c-.151 0-.263.117-.275.269l-.05 12.499.05 12.184c.012.152.124.269.275.269.153 0 .267-.117.279-.269l.056-12.184-.056-12.499c-.012-.152-.126-.269-.279-.269m.914-1.265c-.161 0-.279.123-.291.284l-.037 13.764.037 13.474c.012.161.13.284.291.284.163 0 .282-.123.294-.284l.042-13.474-.042-13.764c-.012-.161-.131-.284-.294-.284m.914-1.343c-.171 0-.296.129-.308.299l-.025 15.107.025 14.738c.012.17.137.299.308.299.172 0 .298-.129.31-.299l.028-14.738-.028-15.107c-.012-.17-.138-.299-.31-.299m.921-1.435c-.181 0-.313.135-.325.315l-.012 16.542.012 16.226c.012.18.144.315.325.315.183 0 .316-.135.329-.315l.014-16.226-.014-16.542c-.013-.18-.146-.315-.329-.315m.914-1.526c-.191 0-.33.141-.343.331v17.968l.014 17.704c.013.19.152.331.343.331.193 0 .333-.141.346-.331l.016-17.704-.016-17.968c-.013-.19-.153-.331-.346-.331"/>
  </svg>
)

// A-Side: Software Engineer Links
const devSocialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: XIcon, label: "X (Twitter)", href: "https://x.com/ludjyd" },
]

// B-Side: Music Producer Links
const musicSocialLinks = [
  { icon: SpotifyIcon, label: "Spotify", href: "https://spotify.https://open.spotify.com/artist/3riolUwWc16ENJ93ruHTTW" },
  { icon: SoundCloudIcon, label: "SoundCloud", href: "https://soundcloud.com/respectyourlder/albums" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/respectyourlder" },
]

export function NowPlaying() {
  const { side } = usePortfolio()
  return (
    <section className="h-full">
      <div className="h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cd-case-container rounded-2xl p-6 md:p-8 shadow-2xl border border-white/30 relative overflow-hidden flex-1 flex flex-col"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

          <div className="relative flex flex-col h-full">
            {/* Profile Image at Top */}
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-32 h-32 lg:w-40 lg:h-40"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent vinyl-texture shadow-2xl" />
                <img 
                  src={side === "a-side" ? "/profile.jpeg" : "/respectyourlder.png"} 
                  alt={side === "a-side" ? "Ludjy Derisier" : "LDER"}
                  className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-lg" 
                />
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              key={side} // Force re-render on side change
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center gap-2 mb-6"
            >
              {(side === "a-side" ? devSocialLinks : musicSocialLinks).map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-full bg-white/10 border-gray-300/40 hover:bg-white/20 hover:border-gray-400/60 backdrop-blur-sm"
                  >
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <link.icon className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            {/* Text Content */}
            <motion.div
              key={`content-${side}`} // Force re-render on side change
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col text-center space-y-4"
            >
              {side === "a-side" ? (
                // A-Side: Software Engineer
                <>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-2">Ludjy Derisier</h2>
                    <p className="text-base lg:text-lg text-muted-foreground font-medium">
                      Software Engineer
                    </p>
                  </div>

                  <div className="flex-1 flex text-left ">
                    <div className="space-y-3 text-sm lg:text-base text-muted-foreground leading-relaxed">
                      <p>
                      From fixing tech issues at my family’s driving school to re-soldering Sanwa buttons on a broken MIDI controller, hands-on problem-solving has always been who I am. I’m motivated by the challenge of taking something that isn’t working and reimagining it into something better.

                      </p>
                      <p>
                      As a software engineer, I focus on building technology that makes creative expression and community more accessible. Whether developing The Move, an MVP that connects independent artists with venues, TYPEBEAT to help creators gather audio more easily, or contributing to freelance projects that support artists and local nonprofits, my work always aims to bring people together. The experiences I’ve had in community arts continue to guide how I design, build, and think about impact.

                      </p>
                      <p>
                      I’m always learning and looking for new ways to build software that helps people feel more connected to art, opportunity, and each other.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                // B-Side: Music Producer
                <>
                  <div>
                    <div className="mb-0.5">   
                      <h2 className="text-2xl lg:text-3xl font-bold">LDER</h2>
                    </div>
                    <p className="text-base lg:text-lg text-muted-foreground font-medium">
                      Musician
                    </p>
                  </div>

                  <div className="flex-1 flex ">
                    <div className="space-y-3 text-sm lg:text-base text-muted-foreground leading-relaxed">
                      <p>
                        LDER is a Haitian-American music producer from Boston. Drawing inspiration from the electronic drum and bass beats of Cartoon Network's anime block Toonami, LDER blends upbeat percussion and melodic sounds with samples of beeps and blips.
                      </p>
                      <p>
                        He was formerly the organizer of East Meets Beats at EMW Bookstore in Cambridge, MA, and currently organizes the "Beats on the Beach" program for Save the Harbor, Save the Bay.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
