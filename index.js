export const C = {
  primary:   "#3D463F",
  secondary: "#586259",
  white:     "#FFFFFF",
  black:     "#000000",
  beige:     "#F4F5F2",
  light:     "#EEF0EC",
}

export const F = {
  serif: "'Marcellus', serif",
  sans:  "'Marcellus', serif",
  body:  "'Be Vietnam Pro', sans-serif",
  mono:  "'IBM Plex Mono', monospace",
}

export const TY = {
  display:   { font: F.serif, size: "var(--fs-display)",  weight: "400", ls: "0.01em",   lh: "1.04"               },
  headingL:  { font: F.sans,  size: "var(--fs-headingl)", weight: "400", ls: "-0.02em",  lh: "1.08"               },
  headingM:  { font: F.sans,  size: "var(--fs-headingm)", weight: "400", ls: "-0.005em", lh: "1.25"               },
  quote:     { font: F.sans,  size: "var(--fs-quote)",    weight: "400", ls: "-0.005em", lh: "1.8"                },
  headingS:  { font: F.sans,  size: "var(--fs-headings)", weight: "400", ls: "-0.005em", lh: "var(--lh-heading-s)"},
  headingXS: { font: F.sans,  size: "var(--fs-headingxs)", weight: "400", ls: "-0.005em", lh: "var(--lh-heading-s)"},
  caps:      { font: F.mono,  size: "var(--fs-caps)",     weight: "400", ls: "0.16em",   lh: "1.8",               up: true },
  navLabel:  { font: F.body,  size: "var(--fs-navlabel)", weight: "300", ls: "0",        lh: "1.8",               up: true },
  button:    { font: F.mono,  size: "var(--fs-caps)",     weight: "400", ls: "0.16em",   lh: "1.8",               up: true },
  navbar:    { font: F.body,  size: "var(--fs-navbar)",   weight: "300", ls: "0",        lh: "1.8"                },
  bodyL:     { font: F.body,  size: "var(--fs-body)",     weight: "300", ls: "0",        lh: "1.8"                },
  body:      { font: F.body,  size: "var(--fs-body)",     weight: "300", ls: "0",        lh: "1.8"                },
  bodyS:     { font: F.body,  size: "var(--fs-body)",     weight: "300", ls: "0",        lh: "1.8"                },
  bodyXS:    { font: F.body,  size: "var(--fs-bodyxs)",   weight: "300", ls: "0",        lh: "1.8"                },
  link:      { font: F.body,  size: "var(--fs-body)",     weight: "300", ls: "0",        lh: "1.8"                },
}

export function ty(k, extra = {}) {
  const s = TY[k]
  return {
    fontFamily: s.font, fontSize: s.size, fontWeight: s.weight,
    letterSpacing: s.ls, lineHeight: s.lh, color: "var(--c-primary)",
    textTransform: s.up ? "uppercase" : "none", ...extra,
  }
}

export const typographyCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Be+Vietnam+Pro:wght@300&family=IBM+Plex+Mono:wght@400;500&display=swap');
  :root{
    --c-primary:#3D463F;--c-secondary:#586259;--c-placeholder:rgba(22,32,26,.4);--c-footer-legal:rgba(255,255,255,.4);--c-beige:#F4F5F2;--c-light:#EEF0EC;
    --ff-serif:'Marcellus',serif;--ff-sans:'Marcellus',serif;--ff-body:'Be Vietnam Pro',sans-serif;--ff-mono:'IBM Plex Mono',monospace;
    --fw-light:300;--fw-regular:400;--fw-medium:500;--fw-bold:700;
    --ls-heading:-0.02em;--ls-caps:0.16em;--ls-story:0.12em;
    --lh-story:1.05;--lh-heading:1.08;--lh-heading-s:1.25;--lh-body-l:1.4;--lh-body:1.8;--lh-flat:1;
    --fs-display:58px;--fs-headingl:48px;--fs-headingm:32px;--fs-headings:26px;--fs-headingxs:20px;--fs-bodyl:20px;--fs-body:15px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-caps:11px;--fs-button:12px;--fs-navbar:16px;--fs-navlabel:14px;--fs-quote:20px
  }
  @media(max-width:1440px){:root{--fs-display:48px;--fs-headingl:42px;--fs-headingm:32px;--fs-headings:26px;--fs-headingxs:20px;--fs-bodyl:18px;--fs-body:14px;--fs-bodys:13px;--fs-bodyxs:12px;--fs-caps:11px;--fs-button:11px;--fs-navbar:15px;--fs-navlabel:14px;--fs-quote:18px}}
  @media(max-width:768px){:root{--fs-display:40px;--fs-headingl:38px;--fs-headingm:32px;--fs-headings:26px;--fs-headingxs:20px;--fs-bodyl:17px;--fs-body:15px;--fs-bodys:13px;--fs-bodyxs:12px;--fs-caps:11px;--fs-button:11px;--fs-navbar:15px;--fs-navlabel:14px;--fs-quote:16px}}
`
