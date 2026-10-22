const services = [
  { number: "01", title: "Strategia digitale", text: "Ogni grande progetto parte dalle domande giuste. Trasformiamo obiettivi e intuizioni in una direzione chiara.", tags: "Ricerca · Posizionamento", icon: "◎" },
  { number: "02", title: "Design che connette", text: "Identità riconoscibili e interfacce intuitive. Progettiamo esperienze che mettono le persone al centro.", tags: "Brand identity · UI/UX", icon: "✳" },
  { number: "03", title: "Sviluppo su misura", text: "Diamo vita alle idee con siti veloci, accessibili e responsive. Curati in ogni dettaglio, su ogni schermo.", tags: "Web development · Performance", icon: "↗" },
];

export default function Home() {
  return (
    <>
      <a href="#contenuto" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-4">Salta al contenuto</a>
      <header className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-7 lg:px-12">
        <a href="#" aria-label="Forma, homepage" className="flex items-center gap-2 text-3xl font-bold tracking-tight"><span aria-hidden="true" className="text-[#52703e]">◒</span> forma<span className="text-[#52703e]">.</span></a>
        <nav aria-label="Navigazione principale" className="flex flex-wrap items-center gap-5 text-sm font-medium sm:gap-9">
          <a href="#approccio" className="hover:underline">Il nostro approccio</a>
          <a href="#servizi" className="hover:underline">Cosa facciamo</a>
          <a href="#contatti" className="rounded-full bg-[#203d30] px-5 py-3 text-white transition-colors hover:bg-[#34563e]">Parliamone <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="contenuto">
        <section id="approccio" aria-labelledby="hero-title" className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-12 lg:pb-28 lg:pt-16">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]"><span className="h-2 w-2 rounded-full bg-[#567b3e]" /> Studio digitale, pensiero creativo</p>
            <h1 id="hero-title" className="max-w-xl text-5xl leading-[1.08] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">Le tue idee.<br />Una nuova <span className="font-serif font-normal italic text-[#567345]">forma.</span></h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-[#526057]">Uniamo strategia, design e tecnologia per creare esperienze digitali semplici da usare, impossibili da dimenticare.</p>
            <a href="#servizi" className="mt-9 inline-flex items-center gap-7 rounded-full bg-[#203d30] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#34563e]">Esplora le possibilità <span aria-hidden="true">↗</span></a>
            <div className="mt-10 flex items-center gap-3 text-xs text-[#526057]"><span aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full border border-[#bac5b2]">✓</span> Idee concrete. Cura artigianale. Visione digitale.</div>
          </div>
          <div aria-hidden="true" className="hero-art relative isolate flex aspect-[4/4.3] items-center justify-center overflow-hidden rounded-[2rem]">
            <div className="absolute inset-8 rounded-full border border-white/20" />
            <div className="absolute inset-16 rounded-full border border-white/15" />
            <div className="orb relative h-[62%] w-[62%] rounded-full" />
            <div className="absolute top-[43%] h-[18%] w-[90%] -rotate-35 rounded-[50%] border-[18px] border-[#e6efca] shadow-xl sm:border-[24px]" />
            <div className="absolute top-6 left-6 rounded-full border border-white/40 px-3 py-2 text-[10px] tracking-[0.16em] text-white">DOVE LE IDEE PRENDONO FORMA</div>
            <div className="absolute right-6 bottom-6 left-6 flex justify-between border-t border-white/40 pt-4 text-xs text-white"><span>Creatività, con una direzione.</span><span>© FORMA</span></div>
          </div>
        </section>
        <section id="servizi" aria-labelledby="services-title" className="border-t border-[#dce1d6] bg-[#eff2e9] px-6 py-16 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-[1184px]">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#526057]">Cosa facciamo</p><h2 id="services-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">Dall’intuizione all’impatto.</h2></div><p className="max-w-xs text-sm leading-relaxed text-[#526057]">Tre competenze, un unico obiettivo:<br />far crescere il valore della tua idea.</p></div>
            <div className="grid gap-5 md:grid-cols-3">{services.map((service) => <article key={service.number} className="rounded-2xl border border-[#dce1d6] bg-[#f8f9f5] p-7 lg:p-8"><div className="mb-10 flex items-center justify-between"><span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6eddc] text-3xl text-[#365233]">{service.icon}</span><span className="text-xs text-[#63705f]">/ {service.number}</span></div><h3 className="text-xl font-semibold tracking-tight">{service.title}</h3><p className="mt-4 text-sm leading-7 text-[#526057]">{service.text}</p><p className="mt-7 border-t border-[#dce1d6] pt-5 text-xs font-medium text-[#526057]">{service.tags}</p></article>)}</div>
            <p className="mt-5 text-xs text-[#526057]">Contenuti e servizi dimostrativi per questo progetto.</p>
          </div>
        </section>
        <section id="contatti" aria-labelledby="contact-title" className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-16 lg:px-12"><div><p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#526057]">Il prossimo passo</p><h2 id="contact-title" className="text-3xl font-semibold tracking-tight">Le grandi idee iniziano con un ciao.</h2></div><p className="max-w-sm text-sm leading-6 text-[#526057]">Questo è un sito dimostrativo. I recapiti dello studio saranno disponibili qui al lancio.</p></section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-[#dce1d6] px-6 py-7 text-xs text-[#526057] lg:px-12"><p>© {new Date().getFullYear()} Forma. Progetto dimostrativo.</p><p>Progettato con cura, per ogni schermo.</p></footer>
    </>
  );
}
