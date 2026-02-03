'use client'

import { useState } from 'react'
import { ArrowRight, TrendingUp } from 'lucide-react'
import BookingPopup from './BookingPopup'

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a1628] to-[#0f172a]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial glow - Indigo tint */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
          <span className="text-balance">The Autonomous SEO Department</span>
          <br />
          <span className="text-balance">for Modern Founders.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-pretty leading-relaxed animate-fade-in animation-delay-150">
          We don't just write blogs. We deploy intelligent agents to research, verify, and publish 
          3,000+ word deep-dives, interactive tools, and programmatic SEO assets.
        </p>

        {/* Social Proof Strip */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full glass-card animate-fade-in animation-delay-200">
          <TrendingUp className="h-4 w-4 text-accent" />
          <span className="text-sm text-muted-foreground">
            Driving <span className="text-accent font-semibold">9.8M+ Impressions</span> for clients this year.
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-300">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all group shadow-lg shadow-primary/25"
          >
            View Pricing & Plans
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#results"
            className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-foreground glass-card rounded-lg glass-card-hover"
          >
            See Live Results
          </a>
        </div>
      </div>

      <BookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  )
}
