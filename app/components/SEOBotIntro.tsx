'use client'

import { motion } from 'framer-motion'

export default function SEOBotIntro() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Matrix background effect */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          animation: 'matrix 3s linear infinite'
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#00FF00] font-mono mb-2 text-lg"
          style={{ fontFamily: 'inherit' }}
        >
          // Why choose YourLeadMatrix?
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: 'inherit' }}
        >
          SEO for project busy founders
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-2xl md:text-3xl opacity-90"
          style={{ fontFamily: 'inherit' }}
        >
          We are an all-in-one AI agent that saves you time and effort.
        </motion.h1>
      </div>
    </section>
  )
}

