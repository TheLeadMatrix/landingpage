'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const metrics = [
  {
    title: "Small Business Growth",
    clicks: "1.84K",
    impressions: "48.4K",
    ctr: "3.8%",
    position: "23.4",
    graphUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo%201-h3Ade45Fjr2mzzkCkjAN3ZfzE4TLQl.webp"
  },
  {
    title: "E-commerce Success",
    clicks: "7.27K",
    impressions: "298K",
    ctr: "2.4%",
    position: "25.3",
    graphUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo%202-ut3jRvxUAd9vHhjaGwSDgdjBJa3TO2.webp"
  },
  {
    title: "Enterprise Scale",
    clicks: "49.1K",
    impressions: "1.12M",
    ctr: "4.4%",
    position: "15.4",
    graphUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo%203-ecGLrSBNOdx97RcTzLxowmqMxnEVDj.webp"
  },
  {
    title: "Sustained Growth",
    clicks: "5.18K",
    impressions: "165K",
    ctr: "3.1%",
    position: "21.2",
    graphUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo%204-OYEnGN6BDDDutwQzMQHhCLL2QCCLXS.webp"
  }
]

export default function SuccessStories() {

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-[#00FF00] font-mono text-base block mb-2">// Real Results</span>
          Proven SEO Performance Across Industries
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:border-[#00FF00] hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] hover:scale-[1.02]"
            >
              <h3 className="text-xl font-bold mb-4 text-[#00FF00]">{metric.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-500 bg-opacity-20 p-4 rounded-lg">
                  <p className="text-sm text-blue-300 mb-1">Total Clicks</p>
                  <p className="text-2xl font-bold text-blue-400">{metric.clicks}</p>
                </div>
                <div className="bg-purple-500 bg-opacity-20 p-4 rounded-lg">
                  <p className="text-sm text-purple-300 mb-1">Impressions</p>
                  <p className="text-2xl font-bold text-purple-400">{metric.impressions}</p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Avg. CTR</p>
                  <p className="text-2xl font-bold text-gray-300">{metric.ctr}</p>
                </div>
                <div className="bg-gray-700 bg-opacity-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 mb-1">Avg. Position</p>
                  <p className="text-2xl font-bold text-gray-300">{metric.position}</p>
                </div>
              </div>

              <div className="relative h-[200px] w-full rounded-lg overflow-hidden">
                <Image
                  src={metric.graphUrl || "/placeholder.svg"}
                  alt={`Performance graph for ${metric.title}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}


