'use client'

import { motion } from 'framer-motion'
import { Bot, Zap, Clock, Target } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: 'Fully Autonomous',
    description: 'Our AI agents handle everything from research to publication',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Generate high-quality content in minutes, not hours',
  },
  {
    icon: Clock,
    title: 'Always On',
    description: 'Consistent content delivery on autopilot, 24/7',
  },
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'Keywords and topics tailored to your exact audience',
  },
]

export default function SEOBotIntro() {
  return (
    <section className="py-20 px-4 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Why YourLeadMatrix?
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            SEO for busy founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            An all-in-one AI agent that saves you time and effort while delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-background border border-border hover:border-accent/50 transition-colors group"
            >
              <div className="p-3 rounded-lg bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
