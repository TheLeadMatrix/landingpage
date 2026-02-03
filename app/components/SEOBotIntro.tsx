import { FileText, Sparkles, Calculator, CheckCircle } from 'lucide-react'

const capabilities = [
  {
    icon: FileText,
    title: '3,000+ Word Authority Posts',
    description: 'Not just fluff. Our agents perform Google Scraping & Research to write comprehensive Ultimate Guides, How-to\'s, and Versus Articles that rank.',
    tag: 'Fact-Checked',
  },
  {
    icon: Sparkles,
    title: 'Viral Content Engine',
    description: 'AI-generated trending content pieces designed for maximum shareability and engagement across social platforms.',
    tag: 'High Engagement',
  },
  {
    icon: Calculator,
    title: 'Interactive Tools & Calculators',
    description: 'Custom calculators and interactive widgets that drive traffic and backlinks to your site automatically.',
    tag: 'Lead Magnets',
  },
  {
    icon: CheckCircle,
    title: 'Programmatic SEO Assets',
    description: 'Scalable landing pages and content assets that target long-tail keywords at scale.',
    tag: 'Scalable',
  },
]

export default function SEOBotIntro() {
  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-[#0f172a] to-[#020617]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            The Output
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Agents Deliver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A 3-column grid of high-value content types our AI agents create for your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl glass-card glass-card-hover group"
            >
              <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="inline-flex px-2.5 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-3">
                {item.tag}
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
