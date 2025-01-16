'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface BookingPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingPopup({ isOpen, onClose }: BookingPopupProps) {
  const [isMounted, setIsMounted] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsMounted(true)

    const handleWheel = (e: WheelEvent) => {
      if (popupRef.current && popupRef.current.contains(e.target as Node)) {
        e.stopPropagation()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('wheel', handleWheel)
    }
  }, [isOpen])

  if (!isMounted) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-800 rounded-lg p-6 w-[400px] h-[400px] overflow-hidden flex flex-col"
          >
            <h2 className="text-2xl font-bold mb-4 text-white">Book a Call</h2>
            <div className="h-[320px] overflow-y-auto">
              <iframe 
                src="https://link.yourleadmatrix.com/widget/booking/bv9szTNrVyisg3zyEffM?embed=true&view=compact" 
                style={{width: '100%', height: '100%', border: 'none'}}
                scrolling="yes"
                id="bv9szTNrVyisg3zyEffM_1736955998667"
              ></iframe>
            </div>
            <button
              onClick={onClose}
              className="mt-4 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

