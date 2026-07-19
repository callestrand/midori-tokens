export const C = {
  // Monochrome base
  washi:  "#F4F5F2",   // --sm-washi  · page background
  stone:  "#DDE0DB",   // --sm-stone  · dividers, hover states
  ash:    "#8B948C",   // --sm-ash    · secondary text, captions
  slate:  "#48514A",   // --sm-slate  · muted UI, sub-headings
  sumi:   "#16201A",   // --sm-sumi   · primary text, dark surfaces
  // Accent
  midori: "#2F4B3A",   // --sm-midori · single accent, use sparingly
  // Surfaces
  whitepaper: "#FFFFFB", // --sm-whitepaper · input field background (matches Vandelay's T.whitepaper)
  // Applied tints (computed, do not modify)
  ink80:   "#3D463F",  // body text
  slate70: "#586259",  // muted label
  ashLight:"#A6ADA6",  // text on dark
}

export const F = {
  serif: "'Marcellus', serif",
  sans:  "'Marcellus', serif",
  body:  "'Be Vietnam Pro', sans-serif",
  mono:  "'Be Vietnam Pro', sans-serif",
}

export const TY = {
  display:   { font: F.serif, size: "var(--fs-display)",  weight: "400", ls: "0.01em",   lh: "1.04"               },
  headingL:  { font: F.sans,  size: "var(--fs-headingl)", weight: "400", ls: "-0.02em",  lh: "1.08"               },
  headingM:  { font: F.sans,  size: "var(--fs-headingm)", weight: "400", ls: "-0.005em", lh: "1.25"               },
  quote:     { font: F.sans,  size: "var(--fs-quote)",    weight: "400", ls: "-0.005em", lh: "1.8"                },
  headingS:  { font: F.sans,  size: "var(--fs-headings)", weight: "400", ls: "-0.005em", lh: "var(--lh-heading-s)"},
  headingXS: { font: F.sans,  size: "var(--fs-headingxs)", weight: "400", ls: "-0.005em", lh: "var(--lh-heading-s)"},
  caps:      { font: F.mono,  size: "var(--fs-caps)",     weight: "300", ls: "0.16em",   lh: "1.8",               up: true },
  navLabel:  { font: F.body,  size: "var(--fs-navlabel)", weight: "300", ls: "0",        lh: "1.8",               up: true },
  button:    { font: F.mono,  size: "var(--fs-caps)",     weight: "300", ls: "0.16em",   lh: "1.8",               up: true },
  navbar:    { font: F.body,  size: "var(--fs-navbar)",   weight: "300", ls: "0",        lh: "1.8"                },
  bodyL:     { font: F.body,  size: "var(--fs-bodyl)",    weight: "300", ls: "0",        lh: "1.5"                },
  body:      { font: F.body,  size: "var(--fs-body)",     weight: "300", ls: "0",        lh: "1.5"                },
  bodyS:     { font: F.body,  size: "var(--fs-bodys)",    weight: "300", ls: "0",        lh: "1.5"                },
  bodyXS:    { font: F.body,  size: "var(--fs-bodyxs)",   weight: "300", ls: "0",        lh: "1.5"                },
  link:      { font: F.body,  size: "var(--fs-link)",     weight: "300", ls: "0",        lh: "1.5"                },
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
    --c-primary:#3D463F;--c-secondary:#586259;--c-placeholder:rgba(22,32,26,.4);--c-footer-legal:rgba(255,255,255,.4);--c-beige:#F4F5F2;
    --sm-washi:#F4F5F2;--sm-stone:#DDE0DB;--sm-ash:#8B948C;--sm-slate:#48514A;--sm-sumi:#16201A;--sm-midori:#2F4B3A;--sm-whitepaper:#FFFFFB;
    --ff-serif:'Marcellus',serif;--ff-sans:'Marcellus',serif;--ff-body:'Be Vietnam Pro',sans-serif;--ff-mono:'Be Vietnam Pro',sans-serif;
    --fw-light:300;--fw-regular:400;--fw-medium:500;--fw-bold:700;
    --ls-heading:-0.02em;--ls-caps:0.16em;--ls-story:0.12em;
    --lh-story:1.05;--lh-heading:1.08;--lh-heading-s:1.25;--lh-body-l:1.4;--lh-body:1.8;--lh-flat:1;
    --fs-display:58px;--fs-headingl:48px;--fs-headingm:30px;--fs-headings:22px;--fs-headingxs:18px;--fs-bodyl:22px;--fs-body:18px;--fs-bodys:15px;--fs-bodyxs:13px;--fs-link:15px;--fs-caps:12px;--fs-button:11px;--fs-navbar:16px;--fs-navlabel:14px;--fs-quote:20px
  }
  @media(max-width:1440px){:root{--fs-display:48px;--fs-headingl:42px;--fs-headingm:30px;--fs-headings:22px;--fs-headingxs:18px;--fs-bodyl:20px;--fs-body:16px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-link:14px;--fs-caps:11px;--fs-button:10px;--fs-navbar:14px;--fs-navlabel:14px;--fs-quote:18px}}
  @media(max-width:768px){:root{--fs-display:40px;--fs-headingl:38px;--fs-headingm:30px;--fs-headings:22px;--fs-headingxs:18px;--fs-bodyl:20px;--fs-body:16px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-link:14px;--fs-caps:11px;--fs-button:10px;--fs-navbar:14px;--fs-navlabel:14px;--fs-quote:16px}}
`
