'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Check } from 'lucide-react'

const data = [
  { month: 'Jan', blogs: 100 },
  { month: 'Feb', blogs: 200 },
  { month: 'Mar', blogs: 300 },
  { month: 'Apr', blogs: 400 },
  { month: 'May', blogs: 500 },
  { month: 'Jun', blogs: 600 },
]

const benefits = [
  'Consistent monthly content creation',
  'Targeted keyword optimization',
  'Improved search engine rankings',
  'Increased organic traffic',
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Our Impact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Your SEO secret weapon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We create <span className="text-foreground font-semibold">100 new articles</span> every month, 
            driving consistent growth in your SEO performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              AI-Powered Optimization
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our AI generates perfectly optimized blogs tailored to your industry, targeting high-ROI keywords while
              maintaining readability and engagement. From concept to publication, we handle it all.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="p-1 rounded-full bg-accent/10">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-80 p-6 rounded-xl bg-background border border-border"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  itemStyle={{ color: 'hsl(var(--accent))' }}
                />
                <Bar dataKey="blogs" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
