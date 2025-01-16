'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 1000 },
  { name: 'Jun', value: 1500 }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold mb-12 text-center"
      >
        <span className="text-[#00FF00] font-mono text-base mb-2 block">// Our Impact</span>
        We've created over <span className="text-[#00FF00]">100k</span> articles!
        <br />
        Driving <span className="text-[#00FF00]">0.6 billion</span> impressions & <span className="text-[#00FF00]">15 million</span> clicks.
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        Your SEO Secret Weapon
      </motion.h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">AI-Powered Optimization</h3>
          <p className="mb-4">
            Our AI generates perfectly optimized blogs tailored to your industry, targeting high-ROI keywords while
            maintaining readability and engagement.
          </p>
          <p>
            From concept to publication, we handle it all—saving you time and delivering results.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="h-64"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  )
}

