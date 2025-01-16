'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function AnimatedBlog() {
  const [key, setKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-8 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gray-800 rounded-lg p-8 shadow-2xl border border-gray-700"
        >
          {/* Paper texture overlay */}
          <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-white to-transparent pointer-events-none rounded-lg" />
          
          {/* Content */}
          <div className="relative space-y-6">
            {/* Step 1: Topic Analysis */}
            <div className="border-l-2 border-blue-500 pl-4">
              <h3 className="text-blue-400 font-mono text-sm mb-2">// Step 1: Topic Analysis</h3>
              <TypeAnimation
                sequence={[
                  'Analyzing trending topics in your niche...',
                  1000,
                  'Topic identified: "10 Essential SEO Strategies for 2025"',
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="text-gray-300"
              />
            </div>

            {/* Step 2: Keyword Research */}
            <div className="border-l-2 border-green-500 pl-4">
              <h3 className="text-green-400 font-mono text-sm mb-2">// Step 2: Keyword Research</h3>
              <TypeAnimation
                sequence={[
                  'Identifying primary and secondary keywords...',
                  1000,
                  'Keywords found: "SEO 2025, AI SEO, voice search optimization"',
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="text-gray-300"
              />
            </div>

            {/* Step 3: Content Generation */}
            <div className="border-l-2 border-purple-500 pl-4">
              <h3 className="text-purple-400 font-mono text-sm mb-2">// Step 3: Content Generation</h3>
              <TypeAnimation
                sequence={[
                  'Generating SEO-optimized content...',
                  1000,
                  'Content structure: Introduction → Key Strategies → Implementation → Conclusion',
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="text-gray-300"
              />
            </div>

            {/* Step 4: Optimization */}
            <div className="border-l-2 border-yellow-500 pl-4">
              <h3 className="text-yellow-400 font-mono text-sm mb-2">// Step 4: Final Optimization</h3>
              <TypeAnimation
                sequence={[
                  'Optimizing meta tags and internal links...',
                  1000,
                  'Blog post ready for publication!',
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="text-gray-300"
              />
            </div>
          </div>

          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse rounded-lg filter blur-xl opacity-30 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}


