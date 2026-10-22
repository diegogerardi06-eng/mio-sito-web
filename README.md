# Forma — sito dimostrativo

Homepage responsive in italiano con Next.js App Router, TypeScript e Tailwind CSS. Non richiede database, credenziali o servizi esterni. L'illustrazione è realizzata in CSS e non scarica immagini o font esterni.

## Sviluppo

Usare Node.js 24 LTS (minimo 20.9) e npm:

```sh
npm ci
npm run dev
```

Il server usa la porta 3000. Per controllare il progetto:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` avvia la build di produzione, da generare prima con `npm run build`. I controlli lint e TypeScript sono separati dalla build. Non è presente una suite di test automatizzati.

## Vercel

Importare il repository su Vercel selezionando il preset Next.js, Node.js 24 e la directory radice. Il comando di build è `npm run build`; mantenere la directory di output predefinita. Nessuna variabile d'ambiente è necessaria. La preparazione del progetto non effettua alcun deploy.

Prima di un lancio pubblico sostituire i contenuti dimostrativi e aggiungere i recapiti reali. La sezione contatti dichiara esplicitamente che il sito è dimostrativo.
