'use client'

import { motion } from 'framer-motion'

export default function ImpactStats() {
  return (
    <section className="pb-20 px-4 bg-black relative overflow-hidden">
      {/* Matrix background effect */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          animation: 'matrix 3s linear infinite',
          position: 'absolute',
          top: '-50px',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <div className="max-w-6xl mx-auto text-center relative z-10 pt-12">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#00FF00] font-mono mb-6 text-lg"
        >
          // Create SEO optimized blog
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          We've created over <span className="text-[#00FF00]">100k</span> articles.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl"
        >
          Driving <span className="text-[#00FF00]">0.6 billion</span> impressions & <span className="text-[#00FF00]">15 million</span> clicks.
        </motion.p>
      </div>

      <style jsx global>{`
        @keyframes matrix {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }
      `}</style>
    </section>
  )
}



