import { motion } from 'framer-motion'
import { ShieldCheck, Star, Crown } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="signup" className="relative py-24" style={{ backgroundColor: '#0A0E1A' }}>
      {/* Scarcity banner */}
      <div className="mx-auto max-w-7xl px-6 mb-6">
        <div className="rounded-xl border border-yellow-400/30 bg-yellow-400/10 text-yellow-200 px-4 py-3 text-sm">
          ⚠️ Uwaga: Tylko 14 miejsc. Zostało: 9.
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-10">Zainwestuj w efekt — dołącz teraz</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Standard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6"
          >
            <div className="flex items-center gap-2 text-slate-200 mb-2"><Star className="w-5 h-5 text-cyan-300" /> Standard</div>
            <div className="text-white text-4xl font-extrabold mb-4">2 490 PLN</div>
            <ul className="text-slate-300 space-y-2 text-sm mb-6">
              <li>• Udział w 2-dniowym bootcampie</li>
              <li>• Materiały i dostęp do nagrań</li>
              <li>• Dostęp do społeczności</li>
            </ul>
            <a href="#form" className="inline-block text-center w-full rounded-xl py-3 font-bold text-slate-900" style={{
              background: 'linear-gradient(90deg, #00E5FF 0%, #7B2CBF 100%)',
              boxShadow: '0 10px 30px rgba(0,229,255,0.35), 0 0 60px rgba(123,44,191,0.25)'
            }}>Zapisz się</a>
          </motion.div>

          {/* VIP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative rounded-2xl border border-cyan-400/40 bg-slate-900/60 p-6"
            style={{ boxShadow: '0 0 50px rgba(0,229,255,0.25), inset 0 0 20px rgba(123,44,191,0.15)' }}
          >
            <div className="absolute -top-3 right-4 text-[10px] tracking-wider bg-cyan-400/20 border border-cyan-300/40 text-cyan-100 px-2 py-1 rounded">BEST VALUE</div>
            <div className="flex items-center gap-2 text-white mb-2 font-semibold"><Crown className="w-5 h-5 text-cyan-300" /> VIP</div>
            <div className="text-white text-4xl font-extrabold mb-4">4 990 PLN</div>
            <ul className="text-slate-200 space-y-2 text-sm mb-6">
              <li>• Wszystko ze Standard</li>
              <li>• 1‑na‑1 konsultacja (60 min)</li>
              <li>• Baza promptów i gotowych workflow</li>
            </ul>
            <a href="#form" className="inline-block text-center w-full rounded-xl py-3 font-extrabold text-slate-900" style={{
              background: 'linear-gradient(90deg, #00E5FF 0%, #7B2CBF 100%)',
              boxShadow: '0 10px 30px rgba(0,229,255,0.5), 0 0 70px rgba(123,44,191,0.35)'
            }}>Zapisz się — VIP</a>
          </motion.div>
        </div>

        {/* Guarantee + Form */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5" />
            <p className="text-sm">Gwarancja satysfakcji: jeśli uznasz, że to nie było warte inwestycji — oddam pieniądze.</p>
          </div>

          <form id="form" className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-slate-700 bg-slate-900/40 p-6">
            <input required className="w-full rounded-lg bg-slate-800/60 border border-slate-600/40 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Imię i nazwisko" />
            <input required type="email" className="w-full rounded-lg bg-slate-800/60 border border-slate-600/40 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Email" />
            <input className="sm:col-span-2 w-full rounded-lg bg-slate-800/60 border border-slate-600/40 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Telefon (opcjonalnie)" />
            <textarea className="sm:col-span-2 w-full rounded-lg bg-slate-800/60 border border-slate-600/40 px-4 py-3 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Napisz w 1 zdaniu, co chcesz zbudować" rows="3" />
            <button type="submit" className="sm:col-span-2 rounded-xl py-3 font-extrabold text-slate-900" style={{
              background: 'linear-gradient(90deg, #00E5FF 0%, #7B2CBF 100%)',
              boxShadow: '0 10px 30px rgba(0,229,255,0.35), 0 0 60px rgba(123,44,191,0.25)'
            }}>Wyślij zgłoszenie</button>
          </form>
        </div>
      </div>
    </section>
  )
}
