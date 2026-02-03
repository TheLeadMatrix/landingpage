'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const articles = [
  {
    title: "The Ultimate Guide to Automated Appointment Scheduling",
    url: "https://yourleadmatrix.com/the-ultimate-guide-to-automated-appointment-scheduling/",
    category: "Ultimate Guides",
    excerpt: "Master the art of automated scheduling with our comprehensive guide to streamlining your appointment booking process."
  },
  {
    title: "Appointment Reminder Best Practices: 8 Tips for Success",
    url: "https://yourleadmatrix.com/appointment-reminder-best-practices-8-tips-for-success/",
    category: "Best Practices",
    excerpt: "Discover proven strategies to improve appointment attendance and enhance your reminder system effectiveness."
  },
  {
    title: "5 Client Scheduling Mistakes Costing You Business",
    url: "https://yourleadmatrix.com/5-client-scheduling-mistakes-costing-you-business/",
    category: "Business Tips",
    excerpt: "Learn about common scheduling pitfalls and how to avoid them to protect your business revenue."
  },
  {
    title: "Manual vs Automated Scheduling: Which is Better for Your Business?",
    url: "https://yourleadmatrix.com/manual-vs-automated-scheduling-which-is-better-for-your-business/",
    category: "Versus Articles",
    excerpt: "Compare the pros and cons of manual and automated scheduling to make the right choice for your business."
  },
  {
    title: "How to Automate Client Follow-ups: A Guide for Service Providers",
    url: "https://yourleadmatrix.com/how-to-automate-client-follow-ups-a-guide-for-service-providers/",
    category: "How-to Guides",
    excerpt: "Transform your follow-up process with automation strategies designed for service-based businesses."
  },
  {
    title: "7 Ways to Reduce Appointment No-Shows for Small Businesses",
    url: "https://yourleadmatrix.com/7-ways-to-reduce-appointment-no-shows-for-small-businesses/",
    category: "Business Tips",
    excerpt: "Implement effective strategies to minimize no-shows and maintain a healthy appointment schedule."
  }
]

export default function BlogPosts() {
  return (
    <section id="articles" className="py-24 px-4 bg-gradient-to-b from-[#0f172a] to-[#020617]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Content Examples
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            See What We Create
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl glass-card glass-card-hover"
            >
              <span className="inline-flex px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                {article.category}
              </span>
              
              <h3 className="font-display text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
              
              <Link 
                href={article.url}
                className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
              >
                Read article
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
