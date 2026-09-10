import { useState, useEffect } from 'react'
import { LoadingScreen } from '@/components/sections/LoadingScreen'
import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { Certifications } from '@/components/sections/Certifications'
import { Projects } from '@/components/sections/Projects'
import { GitHubSection } from '@/components/sections/GitHubSection'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { AnimatedCursor } from '@/components/ui/AnimatedCursor'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className="relative min-h-screen bg-dark text-white overflow-hidden">
        <ScrollProgress />
        <AnimatedCursor />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Certifications />
          <Projects />
          <GitHubSection />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App