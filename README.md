# Verde — Green energy

Pagina dimostrativa in italiano sulle energie rinnovabili. Next.js App Router, TypeScript e Tailwind CSS. Nessun database, account, modulo di contatto o variabile d'ambiente.

La pagina comprende una sezione introduttiva fotografica, tre schede interattive (solare, eolico e idroelettrico), una breve visione e domande espandibili. Le schede supportano tastiera, frecce, Home ed End. Il layout si adatta a telefono, tablet e desktop e rispetta la preferenza per movimenti ridotti.

## Sviluppo

Usare Node.js 24 LTS (minimo 20.9) e npm:

```sh
npm ci
npm run dev
```

Il server usa la porta 3000. Per controllare il progetto:

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

`npm start` avvia la build di produzione. Non è presente una suite di test automatizzati.

## Vercel

Il progetto mantiene la configurazione esistente: preset Next.js, Node.js 24, directory radice e build `npm run build`. Nessuna variabile d'ambiente richiesta. Le modifiche a un branch possono generare una Preview; l'integrazione nel ramo di produzione pubblica la versione sul dominio del progetto.

## Immagine

La fotografia eolica è conservata in `public/wind-energy.jpg` e viene servita dal sito, senza richieste a Unsplash durante la visita. Fonte: [Unsplash](https://images.unsplash.com/photo-1466611653911-95081537e5b7). Icone e illustrazioni sono SVG nel codice. I caratteri usano i font di sistema.
