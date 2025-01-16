'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function WhyChooseUs() {
  const data = [
    { month: 'Jan', blogs: 100 },
    { month: 'Feb', blogs: 200 },
    { month: 'Mar', blogs: 300 },
    { month: 'Apr', blogs: 400 },
    { month: 'May', blogs: 500 },
    { month: 'Jun', blogs: 600 },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-[#00FF00] font-mono text-base mb-2 block">// Our Impact</span>
          We create <span className="text-[#00FF00]">100 new articles</span> every month!
          <br />
          Driving <span className="text-[#00FF00]">consistent growth</span> in your SEO performance.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Your SEO Secret Weapon
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
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
            <ul className="mt-4 list-disc list-inside">
              <li>Consistent monthly content creation</li>
              <li>Targeted keyword optimization</li>
              <li>Improved search engine rankings</li>
              <li>Increased organic traffic</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-80"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis 
                  dataKey="month" 
                  stroke="#888" 
                  label={{ value: 'Months', position: 'insideBottom', offset: -5, fill: '#888' }}
                />
                <YAxis 
                  stroke="#888" 
                  label={{ value: 'Total Blogs', angle: -90, position: 'insideLeft', offset: 10, fill: '#888' }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#333', border: 'none' }}
                  labelStyle={{ color: '#00FF00' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="blogs" fill="#00FF00" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-8 text-lg"
        >
          Experience steady growth with our consistent content creation strategy!
        </motion.p>
      </div>
    </section>
  )
}

