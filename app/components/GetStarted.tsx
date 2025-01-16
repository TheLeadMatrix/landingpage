'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import BookingPopup from './BookingPopup'

export default function GetStarted() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="py-20 px-4 bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        Let's Take Your SEO to the Next Level
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl mb-8 text-center"
      >
        Book a call to get a personalized quote tailored to your business needs.
      </motion.p>
      <div className="flex justify-center">
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
    </section>
  )
}

