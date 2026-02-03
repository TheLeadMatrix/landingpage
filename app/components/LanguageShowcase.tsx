'use client'

import { Globe } from 'lucide-react'

const languages = [
  "English", "Spanish", "Russian", "Swedish", "Turkish", "Ukrainian", "Italian", "Japanese", 
  "Korean", "Latvian", "Portuguese", "Hebrew", "German", "French", "Finnish", "Bengali", 
  "Bulgarian", "Arabic", "Dutch", "Chinese", "Croatian", "Czech", "Hungarian", "Hindi"
]

export default function LanguageShowcase() {
  const rowCount = 3
  const languagesPerRow = Math.ceil(languages.length / rowCount)
  
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#020617] to-[#0f172a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 mb-4">
            <Globe className="h-6 w-6 text-primary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Global Reach: 25+ Languages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expand into new markets with content optimized for local search engines.
          </p>
        </div>
        
        <div className="relative">
          {[...Array(rowCount)].map((_, rowIndex) => {
            const rowLanguages = languages.slice(rowIndex * languagesPerRow, (rowIndex + 1) * languagesPerRow)
            const direction = rowIndex % 2 === 0 ? 'left' : 'right'
            return (
              <div key={rowIndex} className="overflow-hidden mb-4">
                <div 
                  className={`flex gap-3 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
                  style={{ width: 'max-content' }}
                >
                  {[...rowLanguages, ...rowLanguages, ...rowLanguages].map((lang, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 px-4 py-2 rounded-lg glass-card text-sm text-foreground hover:border-primary/50 transition-colors"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
