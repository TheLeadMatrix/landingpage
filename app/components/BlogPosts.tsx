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
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Matrix background effect */}
      <div 
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
          animation: 'matrix 3s linear infinite'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-[#00FF00] font-mono text-sm sm:text-base mb-2 block">
            // Article examples
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Latest SEO Insights & Guides
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-[#00FF00] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#00FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 text-xs font-mono text-black bg-[#00FF00] rounded-full mb-4">
                  {article.category}
                </span>
                
                <h3 className="text-lg sm:text-xl font-bold mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <Link 
                  href={article.url}
                  className="inline-flex items-center text-[#00FF00] hover:text-[#00DD00] transition-colors duration-300"
                >
                  <span className="text-sm font-semibold">Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
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

