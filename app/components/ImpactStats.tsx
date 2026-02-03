'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '9.8M+', label: 'Impressions This Year' },
  { value: '100k+', label: 'Articles Created' },
  { value: '15M+', label: 'Clicks Generated' },
  { value: '25+', label: 'Languages Supported' },
]

export default function ImpactStats() {
  return (
    <section className="py-16 px-4 glass-card border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
