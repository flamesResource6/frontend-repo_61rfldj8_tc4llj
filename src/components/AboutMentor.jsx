import { Quote } from 'lucide-react'

export default function AboutMentor() {
  return (
    <section className="relative py-24" style={{ backgroundColor: '#0A0E1A' }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-x-0 -top-10 mx-auto h-40 w-[85%] rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(closest-side, rgba(123,44,191,0.35), transparent 70%)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Photo - use a dynamic stage photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative max-w-md mx-auto">
              <img
                className="rounded-3xl shadow-2xl ring-1 ring-white/10 object-cover w-full h-[420px]"
                src="https://images.unsplash.com/photo-1561484930-998b6a7b22e8?q=80&w=1887&auto=format&fit=crop"
                alt="Mentor on stage"
              />
              <div className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-2xl" style={{
                background: 'linear-gradient(135deg, rgba(0,229,255,0.5), rgba(123,44,191,0.5))'
              }} />
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              NIE JESTEM TEORETYKIEM. JESTEM BUDOWNICZYM.
            </h2>

            <div className="relative mb-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00E5FF] to-[#7B2CBF] rounded" />
              <blockquote className="pl-5 text-slate-200 text-lg">
                <Quote className="inline w-5 h-5 text-cyan-300 mr-2" />
                AI nie zabierze Ci pracy. Zabierze ją ktoś, kto używa AI lepiej od Ciebie. Moją misją jest sprawić, byś to Ty był tą osobą.
              </blockquote>
            </div>

            <p className="text-slate-300/90 leading-relaxed">
              Jestem praktykiem budowania produktów z AI: od automatyzacji procesów, przez chatboty sprzedażowe, po prototypy aplikacji dla startupów i korporacji. Zamiast teorii — narzędzia, warsztat i tempo inkubatora. W 48 godzin przeprowadzę Cię od problemu do działającego MVP i pitch decku, który możesz pokazać inwestorowi lub szefowi.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
