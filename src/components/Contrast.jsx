import { CheckCircle2, XCircle, Rocket, Presentation } from 'lucide-react'

export default function Contrast() {
  return (
    <section className="relative py-20" style={{ backgroundColor: '#0A0E1A' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent" />

          {/* Old World */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Presentation className="w-6 h-6 text-red-400" />
              <h3 className="text-white text-2xl font-bold">INNE SZKOLENIA O AI...</h3>
            </div>
            <ul className="space-y-4 text-red-200/90">
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 mt-0.5" /> Pasja do slajdów, nie do budowania</li>
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 mt-0.5" /> 80% teorii, 20% ćwiczeń</li>
              <li className="flex items-start gap-3"><XCircle className="w-5 h-5 mt-0.5" /> Zero efektów po wyjściu z sali</li>
            </ul>
          </div>

          {/* Our Bootcamp */}
          <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-8">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-cyan-300" />
              <h3 className="text-white text-2xl font-bold">...VS AI VENTURE BUILDER</h3>
            </div>
            <ul className="space-y-4 text-cyan-100">
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-300" /> 90% praktyki, tworzenie realnego prototypu</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-300" /> AI jako członek zespołu — promptowanie, automatyzacje, API</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 text-cyan-300" /> Wychodzisz z MVP i pitch deckiem
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
