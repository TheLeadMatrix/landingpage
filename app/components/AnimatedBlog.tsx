'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Search, FileText, Zap, CheckCircle } from 'lucide-react'

const steps = [
  { 
    icon: Search, 
    title: 'Deep Research', 
    color: 'text-primary',
    borderColor: 'border-primary/30',
    bgColor: 'bg-primary/10'
  },
  { 
    icon: FileText, 
    title: 'Content Generation', 
    color: 'text-accent',
    borderColor: 'border-accent/30',
    bgColor: 'bg-accent/10'
  },
  { 
    icon: Zap, 
    title: 'SEO Optimization', 
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400/30',
    bgColor: 'bg-yellow-400/10'
  },
  { 
    icon: CheckCircle, 
    title: 'Fact Verification', 
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
    bgColor: 'bg-emerald-400/10'
  },
]

export default function AnimatedBlog() {
  const [key, setKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#020617] to-[#0f172a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Live Demo
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Watch Our AI in Action
          </h2>
        </motion.div>

        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl glass-card p-6 sm:p-8 shadow-2xl shadow-black/30"
        >
          <div className="space-y-5">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`flex items-start gap-4 p-4 rounded-xl ${step.bgColor} border ${step.borderColor}`}
              >
                <div className={`p-2.5 rounded-lg ${step.bgColor}`}>
                  <step.icon className={`h-5 w-5 ${step.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-semibold ${step.color} mb-1`}>
                    {step.title}
                  </h3>
                  <TypeAnimation
                    sequence={
                      index === 0
                        ? ['Scanning top 20 SERP results for "AI SEO strategies 2026"...', 1500, 'Extracted 847 data points from authority sources.', 2500]
                        : index === 1
                        ? ['Generating 3,200-word comprehensive guide...', 1500, 'Structure: 8 sections with H2/H3 hierarchy complete.', 2500]
                        : index === 2
                        ? ['Optimizing for 12 LSI keywords and semantic entities...', 1500, 'Meta tags, schema markup, and internal links added.', 2500]
                        : ['Cross-referencing 23 cited statistics...', 1500, 'All facts verified. Article ready for publication!', 2500]
                    }
                    wrapper="p"
                    cursor={index === 3}
                    repeat={Infinity}
                    className="text-sm text-muted-foreground"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
