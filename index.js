export const C = {
  // Applied working tints
  whitepaper: "#FFFFFB", // --sm-whitepaper · pages and modal backgrounds (Vandelay, Moodboard)
  washi:  "#F4F5F2",   // --sm-washi  · page backgrounds (websites); box/list/table bg (Vandelay)
  sumi:   "#16201A",   // --sm-sumi   · default body text, dark surfaces
  slate:  "#48514A",   // --sm-slate  · muted labels
  ash:    "#8B948C",   // --sm-ash    · text on dark backgrounds
  // Monochrome base
  stone:  "#DDE0DB",   // --sm-stone  · dividers, hover states
  // Accent
  midori: "#2F4B3A",   // --sm-midori · single accent, use sparingly
  // Surfaces
  white:   "#FFFFFF",  // --sm-white · pure white · video-bleed section bg, text on video/dark
  imgPlaceholder: "#f0efed", // --sm-imgplaceholder · skeleton bg behind loading imagery
  hairline:"rgba(22,32,26,.12)", // --sm-hairline · sumi at 12% — control/hairline borders
}

// Translucent overlays. Kept as literals here (the single source) so every
// hover state, scrim, and on-video text value propagates from one place.
export const OVERLAY = {
  hoverDark:    "rgba(0,0,0,0.05)",     // transparent button on a light surface, hover
  hoverLight:   "rgba(255,255,255,0.1)",// transparent button on video/dark, hover
  solidHover:   "rgba(0,0,0,0.80)",     // solid (primary) button background, hover
  textOnVideo:  "rgba(255,255,255,0.82)",// caption/body text over video or imagery (--c-on-video)
  borderOnDark: "rgba(255,255,255,0.1)",// hairline divider on dark surfaces (footer)
  scrimHero:    "linear-gradient(to top,rgba(0,0,0,.6) 0%,rgba(0,0,0,.05) 60%,transparent 100%)", // hero video scrim
}

// Font weights — single source for the numeric weights mirrored by the --fw-* CSS
// custom properties below. JS consumers (inline styles) read FW.*; CSS reads var(--fw-*).
export const FW = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
}

export const F = {
  serif: "'Marcellus', serif",
  sans:  "'Marcellus', serif",
  body:  "'Be Vietnam Pro', sans-serif",
  mono:  "'Be Vietnam Pro', sans-serif",
}

// Type roles reference the --ls-*/--lh-* custom properties (defined in typographyCSS)
// rather than raw literals, so the type scale has a single source. ty() is consumed
// only in DOM inline styles, where var() resolves; PDFs/emails don't use it.
export const TY = {
  display:   { font: F.serif, size: "var(--fs-display)",  weight: "400", ls: "var(--ls-display)",    lh: "var(--lh-display)"  },
  headingL:  { font: F.sans,  size: "var(--fs-headingl)", weight: "400", ls: "var(--ls-heading)",    lh: "var(--lh-heading)"  },
  headingM:  { font: F.sans,  size: "var(--fs-headingm)", weight: "400", ls: "var(--ls-subheading)", lh: "var(--lh-heading-s)"},
  quote:     { font: F.sans,  size: "var(--fs-quote)",    weight: "400", ls: "var(--ls-subheading)", lh: "var(--lh-body)"     },
  headingS:  { font: F.sans,  size: "var(--fs-headings)", weight: "400", ls: "var(--ls-subheading)", lh: "var(--lh-heading-s)"},
  headingXS: { font: F.sans,  size: "var(--fs-headingxs)", weight: "400", ls: "var(--ls-subheading)", lh: "var(--lh-heading-s)"},
  caps:      { font: F.mono,  size: "var(--fs-caps)",     weight: "300", ls: "var(--ls-caps)",       lh: "var(--lh-body)",    up: true },
  navLabel:  { font: F.body,  size: "var(--fs-navlabel)", weight: "300", ls: "0",                     lh: "var(--lh-body)",    up: true },
  button:    { font: F.mono,  size: "var(--fs-button)",   weight: "300", ls: "var(--ls-caps)",       lh: "var(--lh-body)",    up: true },
  navbar:    { font: F.body,  size: "var(--fs-navbar)",   weight: "300", ls: "0",                     lh: "var(--lh-body)"     },
  bodyL:     { font: F.body,  size: "var(--fs-bodyl)",    weight: "300", ls: "0",                     lh: "var(--lh-normal)"   },
  body:      { font: F.body,  size: "var(--fs-body)",     weight: "300", ls: "0",                     lh: "var(--lh-normal)"   },
  bodyS:     { font: F.body,  size: "var(--fs-bodys)",    weight: "300", ls: "0",                     lh: "var(--lh-normal)"   },
  bodyXS:    { font: F.body,  size: "var(--fs-bodyxs)",   weight: "300", ls: "0",                     lh: "var(--lh-normal)"   },
  link:      { font: F.body,  size: "var(--fs-link)",     weight: "300", ls: "0",                     lh: "var(--lh-normal)"   },
}

export function ty(k, extra = {}) {
  const s = TY[k]
  return {
    fontFamily: s.font, fontSize: s.size, fontWeight: s.weight,
    letterSpacing: s.ls, lineHeight: s.lh, color: s.color || "var(--c-primary)",
    textTransform: s.up ? "uppercase" : "none", ...extra,
  }
}

export const SPACE = {
  1: "4px", 2: "8px", 3: "12px", 4: "16px",
  5: "24px", 6: "32px", 7: "48px", 8: "64px",
  9: "80px", 10: "120px", 11: "160px", 12: "240px",
}

export const BP = {
  sm:  "480px",
  md:  "768px",
  lg:  "1024px",
  xl:  "1280px",
  xxl: "1440px",
}

export const RADIUS = {
  none: "0",
  sm:   "2px",
  md:   "4px",
  full: "9999px",
}

export const DIVIDER = {
  color:  C.stone,
  weight: "1px",
  style:  "solid",
}

export const MOTION = {
  fast:    "120ms ease",
  base:    "200ms ease",
  slow:    "400ms ease",
  spring:  "300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
  easeOut: "cubic-bezier(.25,.46,.45,.94)",
}

export const typographyCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Be+Vietnam+Pro:wght@300&display=swap');
  :root{
    --c-primary:${C.sumi};--c-secondary:${C.slate};--c-placeholder:rgba(22,32,26,.4);--c-footer-legal:rgba(255,255,255,.4);--c-beige:${C.washi};--c-on-video:${OVERLAY.textOnVideo};
    --sm-washi:${C.washi};--sm-stone:${C.stone};--sm-ash:${C.ash};--sm-slate:${C.slate};--sm-sumi:${C.sumi};--sm-midori:${C.midori};--sm-whitepaper:${C.whitepaper};--sm-white:${C.white};--sm-imgplaceholder:${C.imgPlaceholder};--sm-hairline:${C.hairline};
    --ff-serif:${F.serif};--ff-sans:${F.sans};--ff-body:${F.body};--ff-mono:${F.mono};
    --fw-light:${FW.light};--fw-regular:${FW.regular};--fw-medium:${FW.medium};--fw-semibold:${FW.semibold};--fw-bold:${FW.bold};
    --ls-heading:-0.02em;--ls-caps:0.16em;--ls-story:0.12em;--ls-display:0.01em;--ls-subheading:-0.005em;
    --lh-story:1.05;--lh-heading:1.08;--lh-heading-s:1.25;--lh-body-l:1.4;--lh-body:1.8;--lh-flat:1;--lh-display:1.04;--lh-tight:1.2;--lh-snug:1.3;--lh-normal:1.5;--lh-relaxed:1.6;--lh-loose:1.7;--lh-airy:1.9;
    --fs-display:58px;--fs-headingl:48px;--fs-headingm:30px;--fs-headings:22px;--fs-headingxs:18px;--fs-bodyl:22px;--fs-body:18px;--fs-bodys:15px;--fs-bodyxs:13px;--fs-link:15px;--fs-caps:12px;--fs-button:11px;--fs-navbar:16px;--fs-navlabel:14px;--fs-quote:20px
  }
  @media(max-width:1440px){:root{--fs-display:48px;--fs-headingl:42px;--fs-headingm:30px;--fs-headings:22px;--fs-headingxs:18px;--fs-bodyl:20px;--fs-body:16px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-link:14px;--fs-caps:11px;--fs-button:10px;--fs-navbar:14px;--fs-navlabel:14px;--fs-quote:18px}}
  @media(max-width:768px){:root{--fs-display:40px;--fs-headingl:38px;--fs-headingm:30px;--fs-headings:22px;--fs-headingxs:18px;--fs-bodyl:20px;--fs-body:16px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-link:14px;--fs-caps:11px;--fs-button:10px;--fs-navbar:14px;--fs-navlabel:14px;--fs-quote:16px}}
`
