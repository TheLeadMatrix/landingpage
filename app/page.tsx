// YourLeadMatrix Landing Page
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ImpactStats from './components/ImpactStats'
import AnimatedBlog from './components/AnimatedBlog'
import SEOBotIntro from './components/SEOBotIntro'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import SuccessStories from './components/SuccessStories'
import LanguageShowcase from './components/LanguageShowcase'
import BlogPosts from './components/BlogPosts'
import GetStarted from './components/GetStarted'
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


