'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import BookingPopup from './BookingPopup'

export default function GetStarted() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section id="pricing" className="py-28 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Limited spots available</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Scale Your Organic Traffic?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a strategy call to get a custom content roadmap for your business. 
            See how our AI agents can 10x your SEO output.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-xl hover:bg-primary/90 transition-all group shadow-lg shadow-primary/30"
          >
            Book Your Strategy Call
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <BookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  )
}
