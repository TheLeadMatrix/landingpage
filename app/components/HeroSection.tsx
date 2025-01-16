'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import BookingPopup from './BookingPopup'

export default function HeroSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Matrix background effect */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          animation: 'matrix 3s linear infinite'
        }}
      />

      <div className="relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#00FF00] font-mono mb-6 text-lg"
          style={{ fontFamily: 'inherit' }}
        >
          // Powered by AI and GPT agents
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{ fontFamily: 'inherit' }}
        >
          YourLeadMatrix — fully autonomous «SEO Robot»
          <br />
          with AI agents for{' '}
          <TypeAnimation
            sequence={[
              'marketers',
              2000,
              'busy founders',
              2000,
              'solo makers',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-[#00FF00]"
          />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl mt-6 mb-12 opacity-90"
          style={{ fontFamily: 'inherit' }}
        >
          We'll take 100% of SEO work out of your way so that you
          <br />
          can focus on building your product.
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPopupOpen(true)}
          className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300"
        >
          Book a Call
        </motion.button>
      </div>

      <BookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />

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

