import Hero from './components/Hero'
import AboutMentor from './components/AboutMentor'
import Contrast from './components/Contrast'
import Program from './components/Program'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0E1A' }}>
      <Hero />
      <AboutMentor />
      <Contrast />
      <Program />
      <Pricing />
      <FAQ />
    </div>
  )
}

export default App
