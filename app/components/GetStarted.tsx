'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import BookingPopup from './BookingPopup'

export default function GetStarted() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to dominate search rankings?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Book a call to get a personalized quote tailored to your business needs.
            Let our AI agents handle your SEO while you focus on growth.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors group"
          >
            Get a Quote
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <BookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  )
}
