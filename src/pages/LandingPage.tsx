import AdminSection from '../components/AdminSection'
import AIIntelligence from '../components/AIIntelligence'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import ProblemSection from '../components/ProblemSection'
import StudentSection from '../components/StudentSection'

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <AIIntelligence />
        <StudentSection />
        <AdminSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage