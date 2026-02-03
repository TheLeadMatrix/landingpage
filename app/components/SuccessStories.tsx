'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TrendingUp, MousePointer, Eye, Target } from 'lucide-react'

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
    <section id="results" className="py-24 px-4 bg-gradient-to-b from-[#0f172a] to-[#020617]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Proof
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Real Results. Real Clients.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Google Search Console data from actual client campaigns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-card glass-card-hover"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                {metric.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-1">
                    <MousePointer className="h-4 w-4 text-primary" />
                    <p className="text-xs text-muted-foreground">Total Clicks</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{metric.clicks}</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="flex items-center gap-2 mb-1">
                    <Eye className="h-4 w-4 text-accent" />
                    <p className="text-xs text-muted-foreground">Impressions</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{metric.impressions}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Avg. CTR</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{metric.ctr}</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Avg. Position</p>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{metric.position}</p>
                </div>
              </div>

              <div className="relative h-[180px] w-full rounded-xl overflow-hidden border border-white/10">
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
