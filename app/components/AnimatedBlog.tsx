'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Search, FileText, Zap, CheckCircle } from 'lucide-react'

const steps = [
  { 
    icon: Search, 
    title: 'Topic Analysis', 
    color: 'text-accent',
    borderColor: 'border-accent',
    bgColor: 'bg-accent/10'
  },
  { 
    icon: FileText, 
    title: 'Keyword Research', 
    color: 'text-teal-400',
    borderColor: 'border-teal-400',
    bgColor: 'bg-teal-400/10'
  },
  { 
    icon: Zap, 
    title: 'Content Generation', 
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400',
    bgColor: 'bg-cyan-400/10'
  },
  { 
    icon: CheckCircle, 
    title: 'Final Optimization', 
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400',
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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Live Demo
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Watch our AI in action
          </h2>
        </motion.div>

        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-card rounded-xl p-6 sm:p-8 border border-border shadow-2xl shadow-black/20"
        >
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`flex items-start gap-4 p-4 rounded-lg ${step.bgColor} border ${step.borderColor}/20`}
              >
                <div className={`p-2 rounded-lg ${step.bgColor}`}>
                  <step.icon className={`h-5 w-5 ${step.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-medium ${step.color} mb-1`}>
                    {step.title}
                  </h3>
                  <TypeAnimation
                    sequence={
                      index === 0
                        ? ['Analyzing trending topics in your niche...', 1000, 'Topic identified: "10 Essential SEO Strategies for 2025"', 2000]
                        : index === 1
                        ? ['Identifying primary and secondary keywords...', 1000, 'Keywords found: "SEO 2025, AI SEO, voice search optimization"', 2000]
                        : index === 2
                        ? ['Generating SEO-optimized content...', 1000, 'Structure: Introduction, Key Strategies, Implementation, Conclusion', 2000]
                        : ['Optimizing meta tags and internal links...', 1000, 'Blog post ready for publication!', 2000]
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
