# Portfolio di Luciano Cretella

Portfolio React + Vite, con pagine Home, Chi sono, Contatti e pagina 404. Design responsive, menu mobile accessibile e traduzione completa dell’interfaccia in italiano e inglese.

## Avvio

```sh
npm install
npm run dev
```

`npm run build` genera la versione di produzione in `dist`; `npm run preview` permette di controllarla localmente. Il file `vercel.json` conserva il routing delle pagine su Vercel.

## Contenuti e lingue

- `src/data/profile.js`: nome, contatti, link del progetto e percorso del CV.
- `src/i18n/messages.js`: tutti i testi IT/EN, inclusi metadati, menu, etichette accessibili, descrizioni delle immagini e pagina 404.
- `src/i18n/LanguageProvider.jsx`: scelta lingua, preferenza salvata e URL condivisibili.
- `src/styles/globals.css`: colori, font locali, layout e breakpoint.

La priorità della lingua è: parametro URL valido (`?lang=it` o `?lang=en`), preferenza salvata, lingua del browser. I browser in inglese aprono la versione inglese; gli altri quella italiana. Il sito funziona anche quando lo storage non è disponibile. I link interni mantengono la lingua scelta; il selettore conserva pagina e ancora correnti. I metadati vengono aggiornati nel browser; l’HTML iniziale resta italiano, senza prerender multilingua.

Per aggiungere una lingua, duplica la struttura completa di `messages.it` in una nuova chiave e aggiungi la voce a `languages` nello stesso file. Il test confronta le chiavi delle traduzioni. Per estendere anche il riconoscimento automatico del browser aggiorna `initialLanguage` nel provider.

Il PDF del CV rimane il documento originale italiano, esplicitamente indicato nelle due lingue. Anche l’anteprima fotografica del gestionale conserva il contenuto originale italiano. Il testo alternativo è tradotto. Per tradurre questi contenuti serve aggiungere le relative risorse localizzate.

## Verifiche

```sh
npx playwright install chromium webkit
npm test
```

I test usano un server locale sulla porta 5176 e verificano tutte le pagine IT/EN a 320, 390, 768, 1024 e 1440 px, navigazione e persistenza della lingua, menu e tastiera, immagini, CV, assenza di errori JavaScript e controlli automatici WCAG AA con axe. Il controllo automatico non sostituisce la revisione visiva e manuale.

Su Windows è possibile usare Edge già installato con `$env:PLAYWRIGHT_CHANNEL='msedge'`. Per browser Playwright già installati in un’altra directory impostare `PLAYWRIGHT_BROWSERS_PATH`.

Le animazioni rispettano `prefers-reduced-motion`; i font sono serviti localmente.
