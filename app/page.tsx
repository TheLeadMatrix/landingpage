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
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
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
      <Footer />
    </main>
  )
}


