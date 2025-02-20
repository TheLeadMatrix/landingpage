import HeroSection from './components/HeroSection'
import ImpactStats from './components/ImpactStats'
import AnimatedBlog from './components/AnimatedBlog'
import SEOBotIntro from './components/SEOBotIntro'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import SuccessStories from './components/SuccessStories'
import LanguageShowcase from './components/LanguageShowcase'
import GetStarted from './components/GetStarted'
import BlogPosts from './components/BlogPosts'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <HeroSection />
      <ImpactStats />
      <AnimatedBlog />
      <SEOBotIntro />
      <HowItWorks />
      <WhyChooseUs />
      <SuccessStories />
      <LanguageShowcase />
      <BlogPosts />
      <GetStarted />
    </main>
  )
}


