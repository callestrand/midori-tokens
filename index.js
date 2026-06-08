export const F = {
  serif: "'Century Gothic', sans-serif",
  sans:  "'Be Vietnam Pro', sans-serif",
}

export const TY = {
  display:   { font: F.serif, size: "var(--fs-display)",   weight: "var(--fw-light)",  ls: "var(--ls-heading)", lh: "var(--lh-heading)",  up: true },
  headingL:  { font: F.serif, size: "var(--fs-headingl)",  weight: "var(--fw-light)",  ls: "var(--ls-heading)", lh: "var(--lh-heading)",  up: true },
  headingM:  { font: F.serif, size: "var(--fs-headingm)",  weight: "var(--fw-light)",  ls: "var(--ls-heading)", lh: "var(--lh-heading)",  up: true },
  quote:     { font: F.serif, size: "var(--fs-quote)",     weight: "var(--fw-light)",  ls: "var(--ls-heading)", lh: "var(--lh-body)",     up: true },
  headingS:  { font: F.serif, size: "var(--fs-headings)",  weight: "var(--fw-light)",  ls: "var(--ls-heading)", lh: "var(--lh-heading-s)", up: true },
  headingXS: { font: F.serif, size: "var(--fs-headingxs)", weight: "var(--fw-light)",  ls: "var(--ls-heading)", lh: "var(--lh-heading-s)", up: true },
  caps:      { font: F.sans,  size: "var(--fs-caps)",      weight: "var(--fw-light)", ls: "var(--ls-caps)",    lh: "var(--lh-body)",     up: true },
  button:    { font: F.sans,  size: "var(--fs-button)",    weight: "var(--fw-light)", ls: "var(--ls-caps)",    lh: "var(--lh-body)",     up: true },
  navbar:    { font: F.sans,  size: "var(--fs-navbar)",    weight: "var(--fw-light)", ls: "0",                 lh: "var(--lh-flat)"     },
  bodyL:     { font: F.sans,  size: "var(--fs-bodyl)",     weight: "var(--fw-light)", ls: "0",                 lh: "var(--lh-body-l)"   },
  body:      { font: F.sans,  size: "var(--fs-body)",      weight: "var(--fw-light)", ls: "0",                 lh: "var(--lh-body)"     },
  bodyS:     { font: F.sans,  size: "var(--fs-bodys)",     weight: "var(--fw-light)", ls: "0",                 lh: "var(--lh-body)"     },
  bodyXS:    { font: F.sans,  size: "var(--fs-bodyxs)",    weight: "var(--fw-light)", ls: "0",                 lh: "var(--lh-body)"     },
  link:      { font: F.sans,  size: "var(--fs-bodys)",     weight: "var(--fw-light)", ls: "0",                 lh: "var(--lh-body)"     },
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
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500&display=swap');
  @font-face{font-family:'Century Gothic';src:url('/Century-Gothic-Sans-Font/CenturyGothicPaneuropeanRegular.ttf') format('truetype');font-weight:300;font-style:normal;font-display:swap}
  @font-face{font-family:'Century Gothic';src:url('/Century-Gothic-Sans-Font/CenturyGothicPaneuropeanBold.ttf') format('truetype');font-weight:700;font-style:normal;font-display:swap}
  :root{
    --c-primary:#242424;--c-secondary:#999999;--c-placeholder:rgba(36,36,36,.4);--c-footer-legal:rgba(255,255,255,.4);
    --ff-serif:'Century Gothic',sans-serif;--ff-sans:'Be Vietnam Pro',sans-serif;
    --fw-thin:200;--fw-light:300;--fw-medium:500;
    --ls-heading:0.02em;--ls-caps:0.1em;--ls-story:0.12em;
    --lh-story:1.05;--lh-heading:1.1;--lh-heading-s:1.2;--lh-body-l:1.4;--lh-body:1.5;--lh-flat:1;
    --fs-display:100px;--fs-headingl:60px;--fs-headingm:38px;--fs-headings:24px;--fs-headingxs:20px;--fs-bodyl:26px;--fs-body:21px;--fs-bodys:16px;--fs-bodyxs:14px;--fs-caps:13px;--fs-button:13px;--fs-navbar:16px;--fs-quote:24px
  }
  @media(max-width:1440px){:root{--fs-display:80px;--fs-headingl:48px;--fs-headingm:30px;--fs-headings:20px;--fs-headingxs:16px;--fs-bodyl:22px;--fs-body:17px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-caps:11px;--fs-button:11px;--fs-navbar:14px;--fs-quote:20px}}
  @media(max-width:1024px){:root{--fs-display:80px;--fs-headingl:48px;--fs-headingm:30px;--fs-headings:20px;--fs-headingxs:16px;--fs-bodyl:22px;--fs-body:17px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-caps:11px;--fs-button:11px;--fs-navbar:14px;--fs-quote:20px}}
  @media(max-width:768px){:root{--fs-display:58px;--fs-headingl:42px;--fs-headingm:30px;--fs-headings:20px;--fs-headingxs:16px;--fs-bodyl:22px;--fs-body:17px;--fs-bodys:14px;--fs-bodyxs:12px;--fs-caps:12px;--fs-button:12px;--fs-navbar:16px;--fs-quote:20px}}
`
