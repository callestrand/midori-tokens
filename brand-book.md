# Studio Midori

Designsystem för Studio Midori – bespoke herr- och damkläder, sydda på beställning i Bangkok och provade personligen i Stockholm. Det gäller hemsidan och de andra publika ytorna: nyhetsbrev, kundportal och tryck.

Systemet är **utläst ur hemsidekonceptet (v2)** och färgpaletten. Typsnitt, avstånd, rutnät och sektionsrytm kommer därifrån. Loggan är ny och läggs in senare. Namnet är Studio Midori och skrivs i versaler i alla sammanhang där typografin tillämpas.

## Principer

- **Papper först.** Det mesta av ytan är `linen-100` med `ink-900`-text. Färg är ett medvetet val, inte en tapet.
- **Ett typsnitt.** Allt är Martian Mono i 400. Menyer, knappar och etiketter är 12px VERSALER med 0.16em spärrning, och längre löptext är 14px med normala gemener. Hierarkin skapas av yta, avstånd och färgfält, inte av vikt.
- **Stora, platta fält.** Hela sektioner i en färg, bilder utan kant. Inga övertoningar, inga skuggor, hörn 0 eller 2px.
- **Saffran leder.** `saffron-500` är märkets igenkänningsfärg. `carriage-500` och `peacock` är följeslagare. Terrakotta, rosa och teak används som egna sektionsfärger, aldrig flera i samma vy.
- **Luft.** Sektioner har 120px över och 140px under. Sidmarginalen är 56px.

## Typografi

Typsnitt: **Martian Mono** (Google Fonts, OFL), variabel vikt 100–800. Filen ligger i `fonts/`. Backup: `ui-monospace, "SF Mono", Menlo, Consolas, monospace`.

| Stil | Storlek / rad / spärrning | Används till |
|---|---|---|
| `display` | 128px / 1 / 0.02em (clamp 56–128px, `9vw`) | Stora tal, till exempel klockan i Stockholm och Bangkok |
| `body` | 14px / 1.7 / 0.02em | Löptext i längre stycken: artiklar, FAQ, villkor, portal, nyhetsbrev. Gemener |
| `label` | 12px / 1.2 / 0.16em | Meny, knappar, etiketter, korta texter, bildtexter. Versaler |
| `quote` | 12px / 2.1 / 0.16em | Citat och luftiga stycken, max 440px |
| `index` | 10px / 1.2 / 0 | Siffror i tidslinjer och arkiv |

Regler som tokens inte kan uttrycka:

- `label`, `quote` och `index` sätts i versaler (`text-transform: uppercase`). `body` sätts i vanlig text, utan versalomvandling.
- `body` är ett förslag för längre texter. Hemsidan har ingen sådan stil, eftersom all text där är `label`.
- Vikten är alltid 400.
- Etikett (eyebrow): en 40px hårlinje (`border-strong`, 1px), 16px gap, sedan versal text. Exempel: `—— ABOUT`.
- Bildtext till kollektionskort: `NO. 01 — LINEN SUITING · STOCKHOLM 2026`.
- Markering (`::selection`): bakgrund `peacock-500`, text `linen-100`.

## Layout och rytm

Alla sektioner bygger på ett 12-kolumnsrutnät med 24px gutter och 56px sidmarginal, på en 1440px bred sida. Läs värdena i `layout` och `spacing` i tokens.

- **Sektion:** `padding: 120px 56px 140px`. Tyngre avslut kan ha 150–180px nedtill.
- **Radgap:** 56, 72 eller 96px mellan block i en sektion.
- **Textbredd:** 360, 440 eller 520px (`measure-s/m/l`).
- **Bildformat:** `ratio-portrait` 3/4 är standard. Se `ratio` i tokens.
- **Meny:** fast, 80px hög, wordmark till vänster, länkar med 34px gap.
- **Hero:** helbild på 100vh med en saffransfärgad informationsrad (`accent`) över bilden: namn, slogan, e-post och telefon.

### Sektionskatalog (från hemsidan)

Sektioner utan färg ligger på `bg`. Färgsektioner:

| Sektion | Bakgrund | Textfärg |
|---|---|---|
| Quote | `rose-300` | `ink-900` |
| Glossary | `carriage-500` | `ink-900` |
| Timeline | `peacock-700` | `linen-100` |
| Repairs | `terracotta-300` | `ink-900` |
| Principles | `accent` (saffron-500) | `ink-900` |
| Makers | `teak-300` | `ink-900` |
| Care | `peacock-500` | `linen-100` |

Övriga sektioner: Hero, Statement, Collection (tre porträttkort i olika höjd), Feature, Lookbook (galleri utan sidmarginal), Story, Chapter (helbild), Anatomy, Process, Measurements, Cloth library, Price guide, Journal, Archive, Questions, Begin an order, Two cities (tider i `display`), Visit, Fitting CTA (helbild med text) och Letters (nyhetsbrev).

## Mobil

Hemsidan saknar mobilversion, så dessa regler är ett förslag. Det finns en enda brytpunkt, `breakpoint` (768px), som gäller mobil och surfplatta.

- Sidmarginal 24px, 4 kolumner med 16px gap.
- Sektionspadding 72px över och 88px under.
- Alla sektionsbarn tar full bredd i en kolumn. Förskjutningar i höjd (marginal över kort) nollas.
- Menyn är 64px hög. Länkarna döljs och en `Menu`-länk visas. Länken öppnar en helskärmspanel i linne (`MobileMenu`) med länkarna som rader.
- Infobar, nyhetsfält och listrader staplas. Sidfotens kolumner staplas.
- Typografin ändras inte, utom att `display` skalar ner via `clamp` till 56px.

Reglerna ligger i `components/bundle.css`. Media queries kan inte läsa variabler, så 768px skrivs ut där.

## Komponenter

Klasserna finns i `components/bundle.css` och har prefixet `sm-`. Alla värden kommer från tokens. Varje komponent har en egen förhandsvisning och en kort guide.

Utlästa ur hemsidan: **Button** (primär, kontur, ink och valknapp), **Link** (understruken i löptext), **Eyebrow**, **Navigation**, **InfoBar**, **Card**, **Accordion**, **ListRow**, **Newsletter**, **Summary**, **Footer** och **Section** (sektionsfärger).

Tillägg, eftersom hemsidan inte täcker dem: **MobileMenu** (mobilmeny), **Field** och **Badge** (portal) samt **Email** (nyhetsbrevsmall).

Regler som gäller alla komponenter:

- Använd klasserna och rollerna. Skriv inga råa hex-värden, utom i mejl där `var()` inte fungerar.
- Hörn är 0 eller `radius-sm`. Inga skuggor, inga övertoningar.
- Fokus: 2px `focus`-ring med 2px avstånd på alla interaktiva element.
- Hover: bakgrundsbyte på `.25s`.

## Rörelse

Systemet har ingen tokenfamilj för rörelse. Värdena från hemsidan:

- Hover på knappar och bakgrund: `.25s`.
- Bildfilter (gråskala till färg): `.6s`.
- Menyer och överlägg: `.45s cubic-bezier(.2,.7,.2,1)`.
- Parallax och större förflyttningar: `.5–.9s cubic-bezier(.2,.7,.2,1)`.

## Bilder

Bildernas färgbehandling styrs inte av systemet. Hemsidan använder porträtt i naturligt ljus, en bred svartvit hero och färgbilder för kollektionen, och alla får förbli som fotografen levererade dem. Det som styrs är formen:

- Bildformat enligt `ratio` i tokens. Standard är `ratio-portrait` (3/4).
- Hörn `radius-sm` (2px) på kort och 0 på helbilder. Ingen ram, ingen skugga.
- Bildtext i `label` 20px under bilden, med formen `No. 01 — Namn · Stockholm 2026`.
- Tills riktiga bilder finns visas en `surface-muted`-yta med namnet i `label`.

## Ikoner

Systemet har en liten uppsättning linjeikoner för portalen: `close`, `menu`, `arrow-right` och `calendar`. De ligger i tillgångsgruppen Icons, i en ljus och en mörk färg. Hemsidan själv använder inga ikoner, bara textsymboler: `+`, `−`, `—` och numrering. Se guiden i gruppen för storlekar och användning.

## Paletten

Se färgrutnätet och `tokens.json`. Varje kulör har tre steg: 300 (ljus yta), 500 (identitet) och 700 (text, ikon, hover).

| Familj | Roll | Nyckelton |
|---|---|---|
| linen / stone / ink | Papper, linjer, bläck | `linen-100` #f4ecdc · `ink-900` #2a1f1a |
| saffron | Huvudfärg | `saffron-500` #e0a030 |
| carriage | Andra identitetsfärg | `carriage-500` #7fb0c6 |
| peacock | Länkar, fokus, djupa fält | `peacock-500` #2c6e6c |
| terracotta | Sektionsfärg, fel | `terracotta-500` #c0603f |
| rose | Sektionsfärg | `rose-500` #d98a87 |
| teak | Sektionsfärg, material | `teak-500` #9a6a3f |

Bygg alltid mot rollerna (`bg`, `surface`, `surface-muted`, `text`, `text-muted`, `border`, `border-strong`, `accent`, `on-accent`, `link`, `focus`, `danger`). 

### Kontrast

- Text på saffran, kupéblått, rosa, terrakotta-300, teak-300 och alla 300-toner: alltid `ink-900`.
- Text på `peacock-500` och `peacock-700`: `linen-100`.
- `terracotta-500` bär ljus text bara i 24px och större.
- `saffron-500` används aldrig som textfärg på ljust papper.
- `stone-500` är för ramar, inte text.

### Statusfärger (portal)

Systemet har fyra statusar: `status-neutral` (Beställd), `status-progress` (I produktion), `status-success` (Klar) och `status-danger` (Försenad). Varje status har en `-bg` och en `-fg`.

- Skriv alltid ut statusen som ett ord. Färgen ensam bär aldrig betydelsen.
- Success är ljus och blåaktig (`carriage-300`) och danger är mörk (`terracotta-700`). De skiljer sig i ljushet (5:1), så att de går att särskilja även utan att se röd och grön. Ett klassiskt grönt och rött par har valts bort av det skälet.

## Nyhetsbrev

Nyhetsbreven skickas genom Vandelay. Google Fonts fungerar i mejl bara i klienter som stöder webbtypsnitt (Apple Mail och iOS Mail, men inte Gmail eller Outlook för Windows), och det är mottagarens klient som avgör, inte avsändaren. Därför:

- Ladda Martian Mono via Google Fonts och sätt `font-family` till `mono-email`: `"Martian Mono", "SF Mono", Menlo, Consolas, "Courier New", Courier, monospace`.
- Designa mallen så att den håller med reservtypsnittet. Courier New och Menlo är smalare än Martian Mono, så ge texten luft och låt inga rader bero på exakt bredd.
- Tabellbaserad layout, 600px bredd och inbyggd CSS.
- Rubriker som måste vara exakta (wordmark, stora tal) läggs som bild.

## Öppna frågor

1. **Logotyp.** Ny logotyp läggs in som tillgång när den är klar.

## Användning

```css
.button-primary { background: var(--accent); color: var(--on-accent); border-radius: var(--radius-sm); padding: 18px 24px; font: 400 12px var(--font-mono); letter-spacing: .16em; text-transform: uppercase; }
a { color: var(--text); }
a:hover { color: var(--link); }
:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
```
