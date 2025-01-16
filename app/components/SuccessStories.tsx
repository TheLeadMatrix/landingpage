'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BookingPopup from './BookingPopup'

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Innovators',
    quote: 'Our organic traffic increased by 200% within just 3 months of using this AI-powered SEO blog service.',
    stats: { traffic: '+200%', rankings: '+15 positions', roi: '350%' }
  },
  {
    name: 'Jane Smith',
    company: 'E-commerce Giants',
    quote: 'We\'ve seen a significant boost in our search rankings and conversions since implementing this service.',
    stats: { traffic: '+150%', rankings: '+10 positions', roi: '280%' }
  },
  {
    name: 'Mike Johnson',
    company: 'Local Business Pro',
    quote: 'As a small business, this service has been a game-changer for our online presence and lead generation.',
    stats: { traffic: '+180%', rankings: '+12 positions', roi: '320%' }
  }
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Real Results from Real Businesses
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-700 p-6 rounded-lg mb-8"
          >
            <p className="text-lg mb-4">"{testimonials[currentIndex].quote}"</p>
            <p className="font-semibold">
              {testimonials[currentIndex].name}, {testimonials[currentIndex].company}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between items-center">
          <button onClick={prevTestimonial} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Previous
          </button>
          <button onClick={nextTestimonial} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            Next
          </button>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {Object.entries(testimonials[currentIndex].stats).map(([key, value]) => (
            <div key={key} className="bg-gray-700 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-2">{key}</h3>
              <p className="text-2xl text-[#00FF00]">{value}</p>
            </div>
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
      </div>
    </section>
  )
}

