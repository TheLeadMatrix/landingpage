'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

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
    <div ref={containerRef} className="overflow-hidden mb-6">
      <motion.div
        className="flex space-x-4"
        animate={controls}
      >
        {[...languages, ...languages].map((lang, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700"
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
    <section className="py-20 px-4 bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          We support over 25 languages
        </motion.h2>
        
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

