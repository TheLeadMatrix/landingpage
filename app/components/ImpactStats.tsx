'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '100k+', label: 'Articles Created' },
  { value: '600M+', label: 'Impressions Driven' },
  { value: '15M+', label: 'Clicks Generated' },
  { value: '25+', label: 'Languages Supported' },
]

export default function ImpactStats() {
  return (
    <section className="py-20 px-4 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Proven Results
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Trusted by businesses worldwide
          </h2>
        </motion.div>

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
