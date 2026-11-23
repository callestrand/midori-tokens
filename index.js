// Studio Midori — brand tokens. Generated from tokens.json by scripts/build.mjs. Do not edit.
//
// A pure ES module with no imports, so a browser bundle, a Vercel function and a test can all load it by path.
// Every colour is a resolved hex (mail clients and PDFs cannot read CSS variables); web pages use tokens.css.

/** Every colour by its token name, aliases resolved: COLOR["linen-100"], COLOR.bg, COLOR["on-accent"]. */
export const COLOR = {
  "linen-50": "#fbf6ec",
  "linen-100": "#f4ecdc",
  "linen-200": "#e9dcc3",
  "linen-300": "#d6c4a5",
  "stone-500": "#8a7864",
  "stone-700": "#6b5a4c",
  "ink-900": "#2a1f1a",
  "saffron-300": "#f0c46e",
  "saffron-500": "#e0a030",
  "saffron-700": "#a8711a",
  "carriage-300": "#b7d6e2",
  "carriage-500": "#7fb0c6",
  "carriage-700": "#3f7690",
  "peacock-300": "#6fa3a0",
  "peacock-500": "#2c6e6c",
  "peacock-700": "#17484a",
  "terracotta-300": "#e29a7e",
  "terracotta-500": "#c0603f",
  "terracotta-700": "#8a3b25",
  "rose-300": "#f0c3bd",
  "rose-500": "#d98a87",
  "rose-700": "#a3524f",
  "teak-300": "#c9a27a",
  "teak-500": "#9a6a3f",
  "teak-700": "#5e3e22",
  "bg": "#f4ecdc",
  "surface": "#fbf6ec",
  "surface-muted": "#e9dcc3",
  "text": "#2a1f1a",
  "text-muted": "#6b5a4c",
  "border": "#d6c4a5",
  "border-strong": "#8a7864",
  "accent": "#e0a030",
  "on-accent": "#2a1f1a",
  "link": "#2c6e6c",
  "focus": "#2c6e6c",
  "danger": "#8a3b25",
  "status-neutral-bg": "#e9dcc3",
  "status-neutral-fg": "#6b5a4c",
  "status-progress-bg": "#f0c46e",
  "status-progress-fg": "#2a1f1a",
  "status-success-bg": "#b7d6e2",
  "status-success-fg": "#2a1f1a",
  "status-danger-bg": "#8a3b25",
  "status-danger-fg": "#f4ecdc"
}
/** The same colours with camelCase keys: C.linen100, C.bg, C.onAccent. */
export const C = {
  "linen50": "#fbf6ec",
  "linen100": "#f4ecdc",
  "linen200": "#e9dcc3",
  "linen300": "#d6c4a5",
  "stone500": "#8a7864",
  "stone700": "#6b5a4c",
  "ink900": "#2a1f1a",
  "saffron300": "#f0c46e",
  "saffron500": "#e0a030",
  "saffron700": "#a8711a",
  "carriage300": "#b7d6e2",
  "carriage500": "#7fb0c6",
  "carriage700": "#3f7690",
  "peacock300": "#6fa3a0",
  "peacock500": "#2c6e6c",
  "peacock700": "#17484a",
  "terracotta300": "#e29a7e",
  "terracotta500": "#c0603f",
  "terracotta700": "#8a3b25",
  "rose300": "#f0c3bd",
  "rose500": "#d98a87",
  "rose700": "#a3524f",
  "teak300": "#c9a27a",
  "teak500": "#9a6a3f",
  "teak700": "#5e3e22",
  "bg": "#f4ecdc",
  "surface": "#fbf6ec",
  "surfaceMuted": "#e9dcc3",
  "text": "#2a1f1a",
  "textMuted": "#6b5a4c",
  "border": "#d6c4a5",
  "borderStrong": "#8a7864",
  "accent": "#e0a030",
  "onAccent": "#2a1f1a",
  "link": "#2c6e6c",
  "focus": "#2c6e6c",
  "danger": "#8a3b25",
  "statusNeutralBg": "#e9dcc3",
  "statusNeutralFg": "#6b5a4c",
  "statusProgressBg": "#f0c46e",
  "statusProgressFg": "#2a1f1a",
  "statusSuccessBg": "#b7d6e2",
  "statusSuccessFg": "#2a1f1a",
  "statusDangerBg": "#8a3b25",
  "statusDangerFg": "#f4ecdc"
}
/** Spacing by step: SPACE[4] is 16px, SPACE["4.5"] is 18px. */
export const SPACE = {
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "8": "32px",
  "10": "40px",
  "12": "48px",
  "14": "56px",
  "18": "72px",
  "24": "96px",
  "30": "120px",
  "35": "140px",
  "3.5": "14px",
  "4.5": "18px"
}
export const RADIUS = {
  "none": "0",
  "sm": "2px"
}
/** Grid and page measures (desktop, then the *Mobile ones). Numbers where the value is a plain number. */
export const LAYOUT = {
  "columns": 12,
  "gutter": "24px",
  "pageMargin": "56px",
  "sectionTop": "120px",
  "sectionBottom": "140px",
  "navHeight": "80px",
  "hairline": "1px",
  "measureS": "360px",
  "measureM": "440px",
  "measureL": "520px",
  "breakpoint": "768px",
  "columnsMobile": 4,
  "gutterMobile": "16px",
  "pageMarginMobile": "24px",
  "sectionTopMobile": "72px",
  "sectionBottomMobile": "88px",
  "navHeightMobile": "64px"
}
export const RATIO = {
  "portrait": "3 / 4",
  "tall": "4 / 5",
  "square": "1 / 1",
  "landscape": "4 / 3",
  "wide": "3 / 2"
}
export const BP = { mobile: 768 }
export const MOTION = {
  "ease": "cubic-bezier(.2,.7,.2,1)",
  "hover": ".25s",
  "image": ".6s",
  "overlay": ".45s",
  "slow": ".9s"
}
/** Status pairs for the portal. Always write the status out as a word; colour alone never carries it. */
export const STATUS = {
  "neutral": {
    "bg": "#e9dcc3",
    "fg": "#6b5a4c"
  },
  "progress": {
    "bg": "#f0c46e",
    "fg": "#2a1f1a"
  },
  "success": {
    "bg": "#b7d6e2",
    "fg": "#2a1f1a"
  },
  "danger": {
    "bg": "#8a3b25",
    "fg": "#f4ecdc"
  }
}
/** Which text colour goes on which fill, from the design system's colour hand-off. */
export const TEXT_ON = {
  "linen-100": "ink-900",
  "linen-50": "ink-900",
  "all-300": "ink-900",
  "saffron-500": "ink-900",
  "carriage-500": "ink-900",
  "rose-500": "ink-900",
  "peacock-500": "linen-100",
  "peacock-700": "linen-100",
  "ink-900": "linen-100",
  "stone-700": "linen-100",
  "terracotta-700": "linen-100",
  "rose-700": "linen-100",
  "teak-700": "linen-100",
  "carriage-700": "linen-50",
  "stone-500": "no body text (large: ink-900)",
  "saffron-700": "no body text (large: ink-900)",
  "terracotta-500": "no body text (large: ink-900)",
  "teak-500": "no body text (large: linen-50)"
}

export const FONT = {
  family: "Martian Mono",
  file: "fonts/MartianMono-wght.woff2",
  mono: "\"Martian Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace",
  /** For inline styles in HTML mail: single quotes, so it fits inside style="…". */
  email: "'Martian Mono', 'SF Mono', Menlo, Consolas, 'Courier New', Courier, monospace",
}
/** Load Martian Mono in a mail's <head>. Gmail and Outlook ignore it and fall back to the rest of FONT.email. */
export const EMAIL_FONTS_HREF = "https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400&display=swap"
export const EMAIL = { width: 600 }

/** Text styles for the web (display is fluid). */
export const TYPE = {
  "display": {
    "fontSize": "clamp(56px, 9vw, 128px)",
    "lineHeight": "1",
    "fontWeight": 400,
    "letterSpacing": "0.02em",
    "uppercase": false
  },
  "body": {
    "fontSize": "14px",
    "lineHeight": "1.7",
    "fontWeight": 400,
    "letterSpacing": "0.02em",
    "uppercase": false
  },
  "label": {
    "fontSize": "12px",
    "lineHeight": "1.2",
    "fontWeight": 400,
    "letterSpacing": "0.16em",
    "uppercase": true
  },
  "quote": {
    "fontSize": "12px",
    "lineHeight": "2.1",
    "fontWeight": 400,
    "letterSpacing": "0.16em",
    "uppercase": true
  },
  "index": {
    "fontSize": "10px",
    "lineHeight": "1.2",
    "fontWeight": 400,
    "letterSpacing": "0",
    "uppercase": true
  }
}
/** The same styles with fixed px values, for mail. */
export const EMAIL_TYPE = {
  "display": {
    "fontSize": "128px",
    "lineHeight": "128px",
    "fontWeight": 400,
    "letterSpacing": "0.02em",
    "uppercase": false
  },
  "body": {
    "fontSize": "14px",
    "lineHeight": "24px",
    "fontWeight": 400,
    "letterSpacing": "0.02em",
    "uppercase": false
  },
  "label": {
    "fontSize": "12px",
    "lineHeight": "14px",
    "fontWeight": 400,
    "letterSpacing": "0.16em",
    "uppercase": true
  },
  "quote": {
    "fontSize": "12px",
    "lineHeight": "25px",
    "fontWeight": 400,
    "letterSpacing": "0.16em",
    "uppercase": true
  },
  "index": {
    "fontSize": "10px",
    "lineHeight": "12px",
    "fontWeight": 400,
    "letterSpacing": "0",
    "uppercase": true
  }
}

/** A React style object for a text style: ty("label", { color: "var(--accent)" }). */
export function ty(name, extra = {}) {
  const s = TYPE[name]
  if (!s) throw new Error("Unknown type style: " + name)
  return {
    fontFamily: FONT.mono,
    fontSize: s.fontSize,
    lineHeight: s.lineHeight,
    fontWeight: s.fontWeight,
    letterSpacing: s.letterSpacing,
    textTransform: s.uppercase ? "uppercase" : "none",
    color: "var(--text)",
    ...extra,
  }
}

/** An inline CSS declaration string for mail: style="${emailTy("label")}". */
export function emailTy(name, color = COLOR.text) {
  const s = EMAIL_TYPE[name]
  if (!s) throw new Error("Unknown type style: " + name)
  return "font-family:" + FONT.email + ";font-size:" + s.fontSize + ";line-height:" + s.lineHeight + ";font-weight:" + s.fontWeight +
    ";letter-spacing:" + s.letterSpacing + (s.uppercase ? ";text-transform:uppercase" : "") + ";color:" + color
}

/** The :root block of tokens.css, for a page that injects variables itself (no @font-face: load the font from Google Fonts). */
export const cssVariables = ":root{\n  --linen-50:#fbf6ec;\n  --linen-100:#f4ecdc;\n  --linen-200:#e9dcc3;\n  --linen-300:#d6c4a5;\n  --stone-500:#8a7864;\n  --stone-700:#6b5a4c;\n  --ink-900:#2a1f1a;\n  --saffron-300:#f0c46e;\n  --saffron-500:#e0a030;\n  --saffron-700:#a8711a;\n  --carriage-300:#b7d6e2;\n  --carriage-500:#7fb0c6;\n  --carriage-700:#3f7690;\n  --peacock-300:#6fa3a0;\n  --peacock-500:#2c6e6c;\n  --peacock-700:#17484a;\n  --terracotta-300:#e29a7e;\n  --terracotta-500:#c0603f;\n  --terracotta-700:#8a3b25;\n  --rose-300:#f0c3bd;\n  --rose-500:#d98a87;\n  --rose-700:#a3524f;\n  --teak-300:#c9a27a;\n  --teak-500:#9a6a3f;\n  --teak-700:#5e3e22;\n  --bg:var(--linen-100);\n  --surface:var(--linen-50);\n  --surface-muted:var(--linen-200);\n  --text:var(--ink-900);\n  --text-muted:var(--stone-700);\n  --border:var(--linen-300);\n  --border-strong:var(--stone-500);\n  --accent:var(--saffron-500);\n  --on-accent:var(--ink-900);\n  --link:var(--peacock-500);\n  --focus:var(--peacock-500);\n  --danger:var(--terracotta-700);\n  --status-neutral-bg:var(--linen-200);\n  --status-neutral-fg:var(--stone-700);\n  --status-progress-bg:var(--saffron-300);\n  --status-progress-fg:var(--ink-900);\n  --status-success-bg:var(--carriage-300);\n  --status-success-fg:var(--ink-900);\n  --status-danger-bg:var(--terracotta-700);\n  --status-danger-fg:var(--linen-100);\n  --space-2:8px;\n  --space-3:12px;\n  --space-3\\.5:14px;\n  --space-4:16px;\n  --space-4\\.5:18px;\n  --space-5:20px;\n  --space-6:24px;\n  --space-8:32px;\n  --space-10:40px;\n  --space-12:48px;\n  --space-14:56px;\n  --space-18:72px;\n  --space-24:96px;\n  --space-30:120px;\n  --space-35:140px;\n  --radius-none:0;\n  --radius-sm:2px;\n  --columns:12;\n  --gutter:24px;\n  --page-margin:56px;\n  --section-top:120px;\n  --section-bottom:140px;\n  --nav-height:80px;\n  --hairline:1px;\n  --measure-s:360px;\n  --measure-m:440px;\n  --measure-l:520px;\n  --breakpoint:768px;\n  --columns-mobile:4;\n  --gutter-mobile:16px;\n  --page-margin-mobile:24px;\n  --section-top-mobile:72px;\n  --section-bottom-mobile:88px;\n  --nav-height-mobile:64px;\n  --ratio-portrait:3 / 4;\n  --ratio-tall:4 / 5;\n  --ratio-square:1 / 1;\n  --ratio-landscape:4 / 3;\n  --ratio-wide:3 / 2;\n  --font-mono:\"Martian Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace;\n  --font-mono-email:\"Martian Mono\", \"SF Mono\", Menlo, Consolas, \"Courier New\", Courier, monospace;\n  --fs-display:clamp(56px, 9vw, 128px);\n  --lh-display:1;\n  --ls-display:0.02em;\n  --fw-display:400;\n  --fs-body:14px;\n  --lh-body:1.7;\n  --ls-body:0.02em;\n  --fw-body:400;\n  --fs-label:12px;\n  --lh-label:1.2;\n  --ls-label:0.16em;\n  --fw-label:400;\n  --fs-quote:12px;\n  --lh-quote:2.1;\n  --ls-quote:0.16em;\n  --fw-quote:400;\n  --fs-index:10px;\n  --lh-index:1.2;\n  --ls-index:0;\n  --fw-index:400;\n  --motion-ease:cubic-bezier(.2,.7,.2,1);\n  --motion-hover:.25s;\n  --motion-image:.6s;\n  --motion-overlay:.45s;\n  --motion-slow:.9s;\n}"
