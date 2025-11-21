import { motion } from 'framer-motion'
import { Sparkles, Rocket, Cpu } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const neon = {
  blue: '#00E5FF',
  purple: '#7B2CBF',
  bg: '#0A0E1A',
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" style={{ backgroundColor: neon.bg }}>
      {/* Cinematic background layer */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-20 blur-[2px]"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="https://cdn.coverr.co/videos/coverr-people-working-on-laptops-4239/1080p.mp4" type="video/mp4" />
        </video>
        {/* Subtle circuit pattern overlay */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(0,229,255,0.25) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(123,44,191,0.25) 0, transparent 35%)'
        }} />
      </div>

      {/* Gradient aura to boost contrast - pointer events disabled to keep Spline interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0E1A]/40 to-[#0A0E1A]" />

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-300 text-xs">
              <Sparkles className="w-3.5 h-3.5" />
              AI Venture Builder • 2-dniowy bootcamp
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              OD POMYSŁU DO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7B2CBF] drop-shadow-[0_0_25px_rgba(0,229,255,0.35)]">MVP</span> W <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00E5FF]">48 GODZIN</span>.
            </h1>
            <p className="text-slate-300 text-lg max-w-xl">
              AI Venture Builder. 2-dniowy bootcamp. Wychodzisz z działającą aplikacją, nie z notatkami.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#signup" className="group inline-flex items-center gap-2 rounded-xl px-6 py-4 text-slate-900 font-bold shadow-[0_0_30px_rgba(0,229,255,0.35)]"
                 style={{
                   background: 'linear-gradient(90deg, #00E5FF 0%, #7B2CBF 100%)',
                   boxShadow: '0 0 30px rgba(0,229,255,0.35), 0 0 60px rgba(123,44,191,0.25)'
                 }}>
                <Rocket className="w-5 h-5" />
                ZBUDUJ SWOJE MVP
              </a>

              <div className="flex items-center gap-3 text-slate-400 text-xs">
                <span className="opacity-80">Stack technologiczny jutra</span>
                <div className="flex items-center gap-2 opacity-80">
                  <img alt="OpenAI" className="h-5" src="https://cdn.worldvectorlogo.com/logos/openai-2.svg" />
                  <img alt="Replit" className="h-4" src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Repl.it_logo.svg" />
                  <div className="flex items-center gap-1 text-[10px] px-2 py-1 rounded border border-slate-600/50"> 
                    <Cpu className="w-3 h-3 text-cyan-300" /> n8n
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: Spline 3D visualization */}
        <div className="relative h-[400px] sm:h-[520px] lg:h-[560px]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Glow ring */}
          <div className="pointer-events-none absolute -inset-10 rounded-full blur-3xl opacity-20" style={{
            background: 'radial-gradient(closest-side, rgba(0,229,255,0.35), transparent 70%)'
          }} />
        </div>
      </div>

      {/* Sticky CTA on mobile */}
      <div className="lg:hidden fixed bottom-4 left-0 right-0 z-30 px-4">
        <a href="#signup" className="block text-center rounded-2xl py-4 font-extrabold text-slate-900 shadow-xl"
           style={{
             background: 'linear-gradient(90deg, #00E5FF 0%, #7B2CBF 100%)',
             boxShadow: '0 10px 30px rgba(0,229,255,0.45), 0 0 60px rgba(123,44,191,0.35)'
           }}>
          ZBUDUJ SWOJE MVP
        </a>
      </div>
    </section>
  )
}
