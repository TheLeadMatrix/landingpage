'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Check } from 'lucide-react'

const data = [
  { month: 'Jan', impressions: 100 },
  { month: 'Feb', impressions: 250 },
  { month: 'Mar', impressions: 400 },
  { month: 'Apr', impressions: 650 },
  { month: 'May', impressions: 900 },
  { month: 'Jun', impressions: 1200 },
]

const benefits = [
  '100+ articles published monthly',
  'Real-time SEO performance tracking',
  '3,000+ word fact-checked deep-dives',
  'Programmatic SEO at scale',
  'Human editor review option',
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#020617] to-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why Us
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Unfair Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI agents work 24/7, delivering consistent content that compounds your organic growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Compounding Results
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unlike freelancers or agencies that produce sporadic content, our AI agents deliver consistent, 
              high-quality output that compounds over time. The result? Exponential organic growth.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div className="p-1 rounded-full bg-accent/20">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="h-80 p-6 rounded-2xl glass-card">
            <p className="text-sm font-medium text-muted-foreground mb-4">Organic Impressions Growth</p>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="impressionsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}k`}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)',
                  }}
                  labelStyle={{ color: 'hsl(var(--foreground))' }}
                  itemStyle={{ color: 'hsl(var(--accent))' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="impressions" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  fill="url(#impressionsGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
