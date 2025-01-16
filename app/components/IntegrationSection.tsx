'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const integrations = [
  { 
    name: 'Lead Matrix', 
    logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yourleadmatrix_prev_ui-enNF3CvCoMekNxW3cbv20Et5na2art.png',
    className: 'col-span-2 md:col-span-4 mb-8'
  },
  { name: 'Webflow', logo: 'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6009ec8cda7f30d560c9d93c_webflow-w-small.png' },
  { name: 'Ghost', logo: 'https://ghost.org/images/logos/ghost-logo-dark.svg' },
  { name: 'WordPress', logo: 'https://s.w.org/style/images/about/WordPress-logotype-standard.png' },
  { name: 'Framer', logo: 'https://framerusercontent.com/images/48ha9ZR1hEmw6hTFexQKbY3Zg.png' },
  { name: 'WIX', logo: 'https://static.wixstatic.com/media/f88f40_e1b3d2f2c1494f48a4a71f4a2f7a2124~mv2.png' },
  { name: 'Shopify', logo: 'https://cdn.shopify.com/s/files/1/0557/9815/7023/files/shopify-logo-primary.svg' },
  { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Zapier', logo: 'https://cdn.zapier.com/zapier/images/logos/zapier-logo.svg' },
  { name: 'Next.js', logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png' },
  { name: 'Webhooks', logo: '/placeholder.svg?height=64&width=64' },
  { name: 'REST_API', logo: '/placeholder.svg?height=64&width=64' }
]

export default function IntegrationSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-black">
      {/* Matrix-like background effect */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          animation: 'matrix 3s linear infinite'
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#00FF00] font-mono mb-2"
        >
          // Integration
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Auto sync with popular CMS
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center gap-4 ${integration.className || ''}`}
            >
              <div className={`relative ${integration.name === 'Lead Matrix' ? 'w-48 h-24' : 'w-16 h-16'}`}>
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  fill
                  className="object-contain"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#00FF00] font-mono">■</span>
                <span className="font-mono">{integration.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <button className="bg-[#00FF00] hover:bg-[#00DD00] text-black font-bold py-3 px-8 rounded-md transition-colors duration-300">
            Try now
          </button>
        </motion.div>
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

