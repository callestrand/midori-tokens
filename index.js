export const F = {
  serif: "'Century Gothic', sans-serif",
  sans:  "'Be Vietnam Pro', sans-serif",
}

export const TY = {
  display:   { font: F.serif, size: "var(--fs-display)",   weight: 300, ls: "-0.02em", lh: 1.1 },
  headingL:  { font: F.serif, size: "var(--fs-headingl)",  weight: 300, ls: "-0.02em", lh: 1.1 },
  headingM:  { font: F.serif, size: "var(--fs-headingm)",  weight: 300, ls: "-0.04em", lh: 1.1, up: true },
  quote:     { font: F.serif, size: "var(--fs-quote)",     weight: 300, ls: "-0.04em", lh: 1.5, up: true },
  headingS:  { font: F.serif, size: "var(--fs-headings)",  weight: 300, ls: "-0.04em", lh: 1.2, up: true },
  headingXS: { font: F.serif, size: "var(--fs-headingxs)", weight: 300, ls: "-0.04em", lh: 1.2, up: true },
  caps:      { font: F.sans,  size: "var(--fs-caps)",    weight: 300, ls: "0.1em",  lh: 1.5, up: true },
  button:    { font: F.sans,  size: "var(--fs-button)",  weight: 300, ls: "0.1em", lh: 1.5, up: true },
  navbar:    { font: F.sans,  size: "var(--fs-navbar)",  weight: 300, ls: "0",      lh: 1   },
  bodyL:     { font: F.sans,  size: "var(--fs-bodyl)",   weight: 300, ls: "0",      lh: 1.4 },
  body:      { font: F.sans,  size: "var(--fs-body)",    weight: 300, ls: "0",      lh: 1.5 },
  bodyS:     { font: F.sans,  size: "var(--fs-bodys)",   weight: 300, ls: "0",      lh: 1.5 },
  bodyXS:    { font: F.sans,  size: "var(--fs-bodyxs)",  weight: 300, ls: "0",      lh: 1.5 },
  link:      { font: F.sans,  size: "var(--fs-bodys)",   weight: 300, ls: "0",      lh: 1.5 },
}

export function ty(k, extra = {}) {
  const s = TY[k]
  return {
    fontFamily: s.font, fontSize: s.size, fontWeight: s.weight,
    letterSpacing: s.ls, lineHeight: s.lh, color: "#242424",
    textTransform: s.up ? "uppercase" : "none", ...extra,
  }
}

export const typographyCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500&family=Be+Vietnam+Pro:wght@300;400;500&display=swap');
  :root{--fs-display:100px;--fs-headingl:60px;--fs-headingm:38px;--fs-headings:24px;--fs-headingxs:20px;--fs-bodyl:26px;--fs-body:21px;--fs-bodys:16px;--fs-bodyxs:14px;--fs-caps:13px;--fs-button:13px;--fs-navbar:16px;--fs-quote:24px}
  @media(max-width:1440px){:root{--fs-display:80px;--fs-headingl:48px;--fs-headingm:30px;--fs-headings:20px;--fs-headingxs:16px;--fs-bodyl:22px;--fs-body:17px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-caps:11px;--fs-button:11px;--fs-navbar:14px;--fs-quote:20px}}
  @media(max-width:1024px){:root{--fs-display:80px;--fs-headingl:48px;--fs-headingm:30px;--fs-headings:20px;--fs-headingxs:16px;--fs-bodyl:22px;--fs-body:17px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-caps:11px;--fs-button:11px;--fs-navbar:14px;--fs-quote:20px}}
  @media(max-width:768px){:root{--fs-display:58px;--fs-headingl:42px;--fs-headingm:30px;--fs-headings:20px;--fs-headingxs:16px;--fs-bodyl:22px;--fs-body:17px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-caps:12px;--fs-button:12px;--fs-navbar:16px;--fs-quote:20px}}
`
