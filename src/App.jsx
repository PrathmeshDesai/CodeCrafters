import { useState, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import CustomCursor from './components/CustomCursor'
import AudioPlayer from './components/AudioPlayer'
import EntryGate from './components/EntryGate'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Tracks from './components/Tracks'
import Prizes from './components/Prizes'
import Team from './components/Team'
import Countdown from './components/Countdown'
import Footer from './components/Footer'
import './index.css'

function App() {
  const [entered, setEntered] = useState(false)

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="min-h-screen cursor-none">
      <CustomCursor />
      <AudioPlayer />
      
      {!entered ? (
        <EntryGate onEnter={() => setEntered(true)} />
      ) : (
        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <Countdown />
          <About />
          <Features />
          <Prizes />
          <Tracks />
          <Footer />
        </main>
      )}
    </div>
  )
}

export default App
