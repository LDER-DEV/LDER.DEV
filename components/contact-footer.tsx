"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import emailjs from "@emailjs/browser"

const socialLinks = [
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
]

// EmailJS Configuration
// These values are loaded from environment variables (.env.local)
// See .env.example for setup instructions
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

export function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error" | "not-configured">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")
    setErrorMessage("")

    // Check if EmailJS is configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("not-configured")
      setErrorMessage("EmailJS environment variables are not configured. Please check your .env.local file.")
      setIsLoading(false)
      return
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Ludjy", // Your name
        },
        EMAILJS_PUBLIC_KEY
      )

      console.log("Email sent successfully:", response)
      setStatus("success")
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error: any) {
      console.error("Email sending failed:", error)
      
      // Provide specific error messages
      if (error.text) {
        setErrorMessage(`Error: ${error.text}`)
      } else if (error.status === 404) {
        setErrorMessage("Service or Template not found. Please check your IDs.")
      } else if (error.status === 412) {
        setErrorMessage("Invalid Public Key. Please check your credentials.")
      } else {
        setErrorMessage("Failed to send message. Please check console for details.")
      }
      
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <footer className="pt-12 pb-8">
      <div className="cd-case-container rounded-2xl p-6 md:p-8 lg:p-12 shadow-2xl border border-white/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Contact Me</h2>
          <p className="text-muted-foreground mb-8 text-center text-pretty">
            Drop the needle and reach out — I&apos;d love to hear from you
          </p>

          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="bg-white/10 border-gray-300/40 focus:border-gray-400/60 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="bg-white/10 border-gray-300/40 focus:border-gray-400/60 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isLoading}
                    className="bg-white/10 border-gray-300/40 focus:border-gray-400/60 backdrop-blur-sm resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-green-500/20 border border-green-500/40 text-green-700 dark:text-green-400"
                  >
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Message sent successfully!</span>
                  </motion.div>
                )}

                {status === "not-configured" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 p-4 rounded-lg bg-yellow-500/20 border border-yellow-500/40 text-yellow-700 dark:text-yellow-400"
                  >
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium mb-1">EmailJS Not Configured</p>
                      <p className="text-xs opacity-90">
                        Please follow the setup instructions in EMAILJS_SETUP.md to enable the contact form.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2 p-3 rounded-lg bg-red-500/20 border border-red-500/40 text-red-700 dark:text-red-400"
                  >
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium">{errorMessage || "Failed to send message. Please try again."}</p>
                    </div>
                  </motion.div>
                )}

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity disabled:opacity-50"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center text-sm text-muted-foreground mt-8 pt-6 border-t border-gray-300/20"
              >
                <p className="mb-2">Every project spins its own track</p>
                <p>© {new Date().getFullYear()} Ludjy Derisier. All rights reserved.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
