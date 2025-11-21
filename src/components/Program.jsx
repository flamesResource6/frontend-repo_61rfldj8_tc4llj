import { motion } from 'framer-motion'
import { BadgeCheck, Clock } from 'lucide-react'

const modulesDay1 = [
  {
    time: '09:00 – 10:00',
    title: 'Mapa Problemu i Propozycja Wartości',
    desc: 'Definiujemy problem i użytkownika. Ustalamy KPI i mierniki sukcesu.',
    badges: ['OpenAI', 'FigJam']
  },
  {
    time: '10:15 – 12:00',
    title: 'Od Idei do Architektury MVP',
    desc: 'Dobieramy narzędzia no/low-code, projektujemy przepływy danych.',
    badges: ['Replit', 'n8n']
  },
  {
    time: '13:00 – 16:00',
    title: 'Budowa rdzenia aplikacji',
    desc: 'Implementujemy kluczowe funkcje — integracje z modelami i automatyzacjami.',
    badges: ['OpenAI API', 'Lovable']
  },
]

const modulesDay2 = [
  {
    time: '09:00 – 11:30',
    title: 'Testy z użytkownikami i iteracje',
    desc: 'Szybkie pętle feedbacku i poprawki UX.',
    badges: ['Hotjar', 'Vercel']
  },
  {
    time: '12:00 – 14:00',
    title: 'Pitch Deck i metryki',
    desc: 'Tworzymy narrację, liczby i demo video.',
    badges: ['Canva', 'Loom']
  },
  {
    time: '15:00 – 17:00',
    title: 'Demo Day',
    desc: 'Prezentacje projektów, feedback i następne kroki.',
    badges: ['Notion', 'Product Hunt']
  },
]

function ModuleCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-xl border border-cyan-400/20 bg-slate-900/40 p-4 backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 text-cyan-300 text-sm font-semibold">
        <Clock className="w-4 h-4" /> {item.time}
      </div>
      <h4 className="mt-2 text-white font-bold">{item.title}</h4>
      <p className="text-slate-300 text-sm mt-1">{item.desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.badges.map((b) => (
          <span key={b} className="text-[10px] uppercase tracking-wide px-2 py-1 rounded border border-cyan-400/30 text-cyan-200/90">
            {b}
          </span>
        ))}
      </div>
      <BadgeCheck className="absolute -top-3 -right-3 w-6 h-6 text-cyan-300" />
    </motion.div>
  )
}

export default function Program() {
  return (
    <section className="relative py-24" style={{ backgroundColor: '#0A0E1A' }}>
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-14">Program — Twoja 48‑godzinna transformacja</h3>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Vertical neon timeline */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[#00E5FF] via-[#7B2CBF] to-transparent shadow-[0_0_20px_#00E5FF]" />

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-300 text-xs">DZIEŃ 1</div>
            <div className="space-y-4">
              {modulesDay1.map((m) => (
                <ModuleCard key={m.title} item={m} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-purple-300 text-xs">DZIEŃ 2</div>
            <div className="space-y-4">
              {modulesDay2.map((m) => (
                <ModuleCard key={m.title} item={m} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
