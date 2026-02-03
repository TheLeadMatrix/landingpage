'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Settings, Rocket, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import BookingPopup from './BookingPopup'

const steps = [
  {
    number: '01',
    title: 'Strategy Call',
    description: 'We learn about your niche, target audience, and business goals. Our team crafts a custom content roadmap.',
    icon: MessageSquare
  },
  {
    number: '02',
    title: 'Agent Configuration',
    description: 'We configure your dedicated AI agents with your brand voice, style guidelines, and keyword targets.',
    icon: Settings
  },
  {
    number: '03',
    title: 'Autonomous Execution',
    description: 'Your agents research, write, optimize, and publish content on autopilot. You review and approve.',
    icon: Rocket
  }
]

export default function HowItWorks() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section id="how-it-works" className="py-24 px-4 bg-gradient-to-b from-[#0f172a] to-[#020617]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            The Process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            How It Works
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
              className="relative p-8 rounded-2xl glass-card glass-card-hover group"
            >
              <span className="absolute -top-4 -left-2 font-display text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {step.number}
              </span>
              <div className="relative">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-6 w-6 text-primary" />
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
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all group shadow-lg shadow-primary/25"
          >
            Book Your Strategy Call
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      <BookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  )
}
