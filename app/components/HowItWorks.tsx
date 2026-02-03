'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, BarChart, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import BookingPopup from './BookingPopup'

const steps = [
  {
    number: '01',
    title: 'Content Research',
    description: 'Our AI scours the web to find trending topics and untapped keywords in your niche.',
    icon: Search
  },
  {
    number: '02',
    title: 'AI Blog Creation',
    description: 'We generate SEO blogs optimized with LSI keywords, metadata, and strategic internal links.',
    icon: PenTool
  },
  {
    number: '03',
    title: 'Performance Analytics',
    description: 'Track rankings, engagement, and ROI in real-time with our built-in analytics.',
    icon: BarChart
  }
]

export default function HowItWorks() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section id="how-it-works" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            A 3-step process for SEO domination
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all group"
            >
              <span className="absolute -top-4 -left-4 font-display text-6xl font-bold text-accent/10 group-hover:text-accent/20 transition-colors">
                {step.number}
              </span>
              <div className="relative">
                <div className="p-3 rounded-lg bg-accent/10 w-fit mb-6 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={() => setIsPopupOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-colors group"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <BookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  )
}
