'use client'

import { useState, useEffect, useRef } from 'react'
import { X } from 'lucide-react'

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

  if (!isMounted || !isOpen) {
    return null
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
      style={{ animationDelay: '0ms' }}
    >
      <div
        ref={popupRef}
        onClick={(e) => e.stopPropagation()}
        className="rounded-2xl w-full max-w-[700px] h-[700px] overflow-hidden flex flex-col glass-card shadow-2xl animate-scale-in"
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="font-display text-xl font-semibold text-foreground">Book a Strategy Call</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto bg-white">
          <iframe 
            src="https://link.yourleadmatrix.com/widget/booking/bv9szTNrVyisg3zyEffM" 
            style={{width: '100%', height: '100%', border: 'none'}}
            scrolling="yes"
            id="bv9szTNrVyisg3zyEffM_1736955998667"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
