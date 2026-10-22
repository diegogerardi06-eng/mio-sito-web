"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";

const sources = [
  {
    id: "solare", name: "Solare", element: "La luce diventa possibilità.", number: "01",
    title: "Ogni giorno, una nuova luce.",
    description: "I pannelli fotovoltaici trasformano la luce del sole in elettricità. Una risorsa che arriva dall’alto e può trovare spazio anche sui tetti delle nostre case.",
    detail: "La produzione varia con la luce disponibile: di notte si ferma, con le nuvole si riduce. Accumulo e rete aiutano a gestire questa variabilità.",
    label: "DALLA LUCE ALL’ELETTRICITÀ", className: "solar",
  },
  {
    id: "eolico", name: "Eolico", element: "Il vento mette in moto il futuro.", number: "02",
    title: "La forza di ciò che non vedi.",
    description: "Il vento fa ruotare le pale di una turbina. Un generatore trasforma quel movimento in elettricità, sulla terraferma o al largo delle coste.",
    detail: "Servono luoghi adatti e una progettazione attenta al paesaggio e agli ecosistemi. La produzione segue l’intensità del vento.",
    label: "DAL MOVIMENTO ALL’ELETTRICITÀ", className: "wind",
  },
  {
    id: "idroelettrico", name: "Idroelettrico", element: "L’acqua apre nuove strade.", number: "03",
    title: "L’energia segue il suo corso.",
    description: "L’acqua in movimento aziona una turbina collegata a un generatore. Fiumi e bacini diventano così parte di un sistema che produce elettricità.",
    detail: "La disponibilità d’acqua conta. Gli impianti vanno progettati e gestiti rispettando gli ambienti fluviali e gli altri usi della risorsa.",
    label: "DALL’ACQUA ALL’ELETTRICITÀ", className: "water",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="arrow"><path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h16m-6-6 6 6-6 6"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function EnergyIcon({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className="energy-icon">
      {kind === "solare" ? <><circle cx="24" cy="24" r="8" /><path d="M24 4v6m0 28v6M4 24h6m28 0h6M10 10l4 4m20 20 4 4M10 38l4-4m20-20 4-4" /></> : kind === "eolico" ? <><path d="M6 17h24a6 6 0 1 0-6-6M6 25h32a5 5 0 1 1-5 5M6 33h13a5 5 0 1 1-5 5" /></> : <><path d="M24 4C20 11 10 21 10 30a14 14 0 0 0 28 0C38 21 28 11 24 4Z" /><path d="M18 30a6 6 0 0 0 6 6" /></>}
    </svg>
  );
}

function EnergyDrawing({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 420 290" fill="none" aria-hidden="true" className="energy-drawing">
      <circle cx="210" cy="140" r="113" stroke="currentColor" strokeOpacity=".12" />
      <circle cx="210" cy="140" r="82" stroke="currentColor" strokeOpacity=".12" />
      {kind === "solare" ? <>
        <circle cx="286" cy="73" r="30" fill="currentColor" fillOpacity=".24" />
        <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="m115 101 146 0 43 103H72l43-103Z" fill="currentColor" fillOpacity=".08" />
          <path d="m151 101-22 103m59-103v103m36-103 22 103m-116-68h146M101 170h189M151 204v25m76-25v25M127 230h125" />
          <path d="M286 24v8m42 41h8m-20-32 6-6m-36 79v8" strokeLinecap="round" />
        </g>
      </> : kind === "eolico" ? <>
        <circle cx="284" cy="92" r="43" fill="currentColor" fillOpacity=".15" />
        <g stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <path d="m185 120-8 113h20l-8-113M130 233h111" />
          <path d="m186 111-9-78c-1-9 8-10 10-1l11 68m-8 12 74 26c9 3 6 11-3 9l-70-16m-9-11-57 54c-7 6-13 0-6-7l45-56" fill="currentColor" fillOpacity=".08" />
          <circle cx="187" cy="112" r="11" fill="var(--panel-bg)" />
          <path d="m282 170-5 63h13l-5-63m-2-7-5-44m9 48 41 17m-50-14-31 29M265 233h39" />
        </g>
      </> : <>
        <path d="M216 35c-15 27-55 65-55 99a55 55 0 1 0 110 0c0-34-40-72-55-99Z" fill="currentColor" fillOpacity=".13" stroke="currentColor" strokeWidth="2" />
        <path d="M191 136c0 14 11 25 25 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M81 214c22-19 43 19 65 0s43 19 65 0 43 19 65 0 43 19 65 0M81 238c22-19 43 19 65 0s43 19 65 0 43 19 65 0 43 19 65 0" /></g>
      </>}
      <path d="M51 257h318" stroke="currentColor" strokeOpacity=".2" />
    </svg>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);

  function changeTab(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % sources.length;
    else if (event.key === "ArrowLeft") next = (index + sources.length - 1) % sources.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = sources.length - 1;
    else return;
    event.preventDefault();
    setActive(next);
    document.getElementById("tab-" + sources[next].id)?.focus();
  }

  return (
    <>
      <a href="#contenuto" className="skip-link">Salta al contenuto</a>
      <header className="header wrap">
        <a href="#inizio" className="brand" aria-label="Verde, torna all’inizio"><span className="brand-symbol" aria-hidden="true">✳</span> verde<span className="brand-dot">.</span></a>
        <nav aria-label="Navigazione principale" className="nav">
          <a href="#energie">Le energie</a>
          <a href="#visione" className="nav-vision">La visione</a>
          <a href="#domande">Domande</a>
        </nav>
        <a href="#energie" className="header-cta">Esplora il futuro <Arrow diagonal /></a>
      </header>

      <main id="contenuto">
        <section id="inizio" className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-frame">
            <Image src="/wind-energy.jpg" alt="Turbine eoliche tra i campi, illuminate dal sole al tramonto" fill priority sizes="(max-width: 760px) 100vw, 94vw" className="hero-photo" />
            <div className="hero-shade" />
            <div className="hero-content">
              <p className="eyebrow hero-eyebrow"><span className="status-dot" /> NATURALMENTE, GREEN ENERGY</p>
              <h1 id="hero-title">Il futuro è<br />nella nostra<br /><em>natura.</em></h1>
              <p className="hero-description">Sole, vento, acqua. L’energia per cambiare<br className="desktop-break" /> le cose è già intorno a noi.</p>
              <a href="#energie" className="button button-lime">Scopri le energie <Arrow /></a>
            </div>
            <span className="hero-sun" aria-hidden="true">✳</span>
            <div className="hero-caption"><span>UNA NUOVA PROSPETTIVA</span><p>Meno fossili.<br />Più possibilità.</p></div>
            <div className="hero-bottom"><span>Piccole idee. Un orizzonte più grande.</span><a href="#energie" aria-label="Scorri alle energie rinnovabili">Scorri per esplorare <span aria-hidden="true">↓</span></a></div>
          </div>
        </section>

        <div className="nature-strip wrap" aria-label="Le tre risorse naturali">
          <p>Il cambiamento ha<br /><strong>radici naturali.</strong></p>
          <span><EnergyIcon kind="solare" /> La luce del sole</span>
          <span><EnergyIcon kind="eolico" /> La forza del vento</span>
          <span><EnergyIcon kind="idroelettrico" /> Il movimento dell’acqua</span>
        </div>

        <section id="energie" className="energy-section wrap section-space" aria-labelledby="energy-title">
          <div className="section-heading"><div><p className="eyebrow">01 / LE ENERGIE RINNOVABILI</p><h2 id="energy-title">La natura ha già<br />le <em>risposte.</em></h2></div><p>Tre risorse, tanti modi di ripensare l’energia.<br />Scegli una fonte e scopri come funziona.</p></div>
          <div role="tablist" aria-label="Scegli una fonte rinnovabile" className="source-tabs">
            {sources.map((item, index) => <button key={item.id} type="button" role="tab" id={"tab-" + item.id} aria-selected={active === index} aria-controls={"panel-" + item.id} tabIndex={active === index ? 0 : -1} className={"source-tab " + (active === index ? "is-active" : "")} onClick={() => setActive(index)} onKeyDown={(event) => changeTab(event, index)}><span className="tab-top"><EnergyIcon kind={item.id} /><span className="source-number">{item.number}</span></span><span className="tab-name">{item.name}<Arrow diagonal /></span><span className="tab-description">{item.element}</span></button>)}
          </div>
          {sources.map((item, index) => <div key={item.id} id={"panel-" + item.id} role="tabpanel" aria-labelledby={"tab-" + item.id} tabIndex={0} hidden={active !== index} className={"source-panel " + item.className}><div className="source-copy"><p className="eyebrow">{item.label}</p><h3>{item.title}</h3><p>{item.description}</p><div className="source-note"><span aria-hidden="true">↳</span><p><strong>Da sapere.</strong> {item.detail}</p></div></div><div className="source-art"><EnergyDrawing kind={item.id} /><span>{item.number} / {item.name.toUpperCase()}</span></div></div>)}
          <p className="energy-footnote">Rinnovabile significa che la fonte si rigenera naturalmente. Ogni tecnologia richiede comunque materiali, spazio e una progettazione responsabile.</p>
        </section>

        <section id="visione" className="vision-section" aria-labelledby="vision-title"><div className="wrap vision-grid"><div className="vision-title"><p className="eyebrow">02 / UN’IDEA DI FUTURO</p><h2 id="vision-title">L’energia migliore<br />inizia da una<br /><em>scelta consapevole.</em></h2><p>Il futuro si costruisce con le tecnologie.<br />E con il modo in cui impariamo a usarle.</p><a href="#domande" className="text-link">Partiamo dalle domande <Arrow /></a></div><div className="vision-steps"><article><span>01</span><div><h3>Capire, prima di scegliere.</h3><p>Conoscere le fonti e i loro limiti è il primo passo per orientarsi, oltre gli slogan.</p></div></article><article><span>02</span><div><h3>Usare meglio ciò che abbiamo.</h3><p>Ridurre gli sprechi e migliorare l’efficienza dà valore a ogni unità di energia.</p></div></article><article><span>03</span><div><h3>Pensare un po’ più lontano.</h3><p>Integrare fonti diverse, reti e accumuli aiuta a costruire un sistema energetico più flessibile.</p></div></article></div></div></section>

        <section id="domande" className="faq-section wrap section-space" aria-labelledby="faq-title"><div><p className="eyebrow">03 / FACCIAMO CHIAREZZA</p><h2 id="faq-title">Buone domande.<br /><em>Nuove prospettive.</em></h2><p>L’energia cambia. La curiosità ci aiuta<br />a starle al passo.</p></div><div className="faq-list"><details><summary>Che cosa significa “green energy”?<span aria-hidden="true">+</span></summary><p>È un’espressione usata per descrivere energia prodotta con un impatto ambientale contenuto. Spesso si riferisce a fonti rinnovabili come sole, vento e acqua. Nessuna tecnologia, però, è priva di impatti: va considerato il suo intero ciclo di vita.</p></details><details><summary>Rinnovabile significa inesauribile?<span aria-hidden="true">+</span></summary><p>La fonte si ricostituisce naturalmente, ma la sua disponibilità non è sempre costante. Luce solare, vento e portata dei fiumi cambiano nel tempo e da un luogo all’altro.</p></details><details><summary>Da dove si può cominciare, ogni giorno?<span aria-hidden="true">+</span></summary><p>Dal conoscere i propri consumi, evitare gli sprechi e usare con attenzione riscaldamento ed elettrodomestici. Per interventi più importanti, come un impianto fotovoltaico, servono una valutazione tecnica e il confronto tra soluzioni adatte alla propria situazione.</p></details></div></section>
      </main>

      <footer className="footer wrap"><div className="footer-top"><a href="#inizio" className="brand" aria-label="Verde, torna all’inizio"><span className="brand-symbol" aria-hidden="true">✳</span> verde<span className="brand-dot">.</span></a><p>Una piccola idea.<br />Un futuro più verde.</p><a href="#inizio" className="back-top">Torniamo su <Arrow diagonal /></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Verde · Progetto dimostrativo</p><p>Immagine da <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash<span className="sr-only"> (si apre in una nuova scheda)</span></a> · Fatto con un’energia diversa.</p></div></footer>
    </>
  );
}
