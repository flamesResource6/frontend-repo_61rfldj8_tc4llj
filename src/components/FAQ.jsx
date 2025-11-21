import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    q: 'Czy potrzebuję umiejętności programowania?',
    a: 'Nie. Uczymy podejścia no/low-code i gotowych integracji z AI. Liczy się zrozumienie problemu i chęć budowania.'
  },
  {
    q: 'Co jeśli nie mam konkretnego pomysłu?',
    a: 'W pierwszym bloku wybieramy obszar problemu i wspólnie formułujemy propozycję wartości. Wyjdziesz z kierunkiem i planem.'
  },
  {
    q: 'Czy naprawdę zdążę z MVP w 48 godzin?',
    a: 'Tak. Pracujemy sprintami, z wcześniej przygotowanymi scaffoldami i biblioteką gotowych komponentów. Tempo to nasz sprzymierzeniec.'
  },
  {
    q: 'Czy dostanę wsparcie po szkoleniu?',
    a: 'Tak. Dostęp do społeczności oraz opcjonalne konsultacje 1‑na‑1 w wersji VIP.'
  }
]

function Item({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900/40">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left">
        <span className="text-white font-semibold">{item.q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-slate-300 text-sm">{item.a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="relative py-20" style={{ backgroundColor: '#0A0E1A' }}>
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-10">FAQ</h3>
        <div className="space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} item={f} />
          ))}
        </div>
        <div className="mt-10 text-center text-slate-500 text-xs">© {new Date().getFullYear()} AI Venture Builder • Regulamin • Polityka prywatności • Kontakt</div>
      </div>
    </section>
  )
}
