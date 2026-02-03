'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Sparkles } from 'lucide-react'
import BookingPopup from './BookingPopup'

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a1628] to-[#0f172a]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm text-muted-foreground">Powered by AI and GPT agents</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
        >
          <span className="text-balance">Fully autonomous SEO agents for</span>
          <br />
          <span className="text-accent">
            <TypeAnimation
              sequence={[
                'marketers',
                2000,
                'founders',
                2000,
                'creators',
                2000,
                'agencies',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
        >
          We handle 100% of your SEO content strategy so you can focus on building your product. 
          AI-powered content that drives real organic traffic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors group"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-foreground border border-border rounded-lg hover:bg-card transition-colors"
          >
            See How It Works
          </a>
        </motion.div>
      </div>

      <BookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  )
}
