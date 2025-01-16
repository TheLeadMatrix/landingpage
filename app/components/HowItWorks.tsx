'use client'

import { motion } from 'framer-motion'
import { Search, PenTool, BarChart } from 'lucide-react'
import { useState } from 'react'
import BookingPopup from './BookingPopup'

const steps = [
  {
    title: 'Content Research',
    description: 'Our AI scours the web to find trending topics and untapped keywords in your niche.',
    icon: Search
  },
  {
    title: 'AI Blog Creation',
    description: 'We generate SEO blogs optimized with LSI keywords, metadata, and strategic internal links.',
    icon: PenTool
  },
  {
    title: 'Performance Analytics',
    description: 'Track rankings, engagement, and ROI in real-time with our built-in analytics.',
    icon: BarChart
  }
];

export default function HowItWorks() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="py-20 px-4 bg-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        A 3-Step Process for SEO Domination
      </motion.h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-700 p-6 rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <step.icon className="w-12 h-12 mb-4 text-[#00FF00]" />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
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

