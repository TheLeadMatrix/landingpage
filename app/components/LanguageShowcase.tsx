'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Globe } from 'lucide-react'

const languages = [
  "English", "Spanish", "Russian", "Swedish", "Turkish", "Ukrainian", "Italian", "Japanese", 
  "Korean", "Latvian", "Portuguese", "Hebrew", "German", "French", "Finnish", "Bengali", 
  "Bulgarian", "Arabic", "Dutch", "Chinese", "Croatian", "Czech", "Hungarian", "Hindi"
]

const LanguageRow = ({ languages, direction }: { languages: string[], direction: 'left' | 'right' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (containerWidth > 0) {
      controls.start({
        x: direction === 'left' ? [-containerWidth / 2, 0] : [0, -containerWidth / 2],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        },
      })
    }
  }, [containerWidth, controls, direction])

  return (
    <div ref={containerRef} className="overflow-hidden mb-4">
      <motion.div
        className="flex gap-3"
        animate={controls}
      >
        {[...languages, ...languages].map((lang, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground hover:border-accent/50 transition-colors"
          >
            {lang}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function LanguageShowcase() {
  const rowCount = 3
  const languagesPerRow = Math.ceil(languages.length / rowCount)
  
  return (
    <section className="py-20 px-4 bg-card border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-accent/10 mb-4">
            <Globe className="h-6 w-6 text-accent" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            We support over 25 languages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach global audiences with content optimized for local search engines
          </p>
        </motion.div>
        
        <div className="relative">
          {[...Array(rowCount)].map((_, index) => (
            <LanguageRow
              key={index}
              languages={languages.slice(index * languagesPerRow, (index + 1) * languagesPerRow)}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
