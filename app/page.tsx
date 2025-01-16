import HeroSection from './components/HeroSection'
import AnimatedBlog from './components/AnimatedBlog'
import SEOBotIntro from './components/SEOBotIntro'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import SuccessStories from './components/SuccessStories'
import LanguageShowcase from './components/LanguageShowcase'
import GetStarted from './components/GetStarted'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <HeroSection />
      <AnimatedBlog />
      <SEOBotIntro />
      <HowItWorks />
      <WhyChooseUs />
      <SuccessStories />
      <LanguageShowcase />
      <GetStarted />
    </main>
  )
}

