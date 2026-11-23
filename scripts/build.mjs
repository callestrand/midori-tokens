// Generates tokens.css and index.js from tokens.json (and handoff.json). Run: node scripts/build.mjs
// tokens.json, bundle.css, handoff.json and fonts/ are copied unchanged from the Claude Design system, so
// re-syncing is file-for-file: copy them over, run this, run `node --test`.
//
// Things the design system keeps in prose rather than in tokens.json (its README) are written down here, once:
// MOTION, which styles are set in capitals, the fluid size of `display`, the Google Fonts link for mail.
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath, pathToFileURL } from "node:url"
import { dirname, join } from "node:path"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const read = f => readFileSync(join(root, f), "utf8")

// From the design system's README ("Rörelse" and "Typografi").
const MOTION = {
  ease: "cubic-bezier(.2,.7,.2,1)",
  hover: ".25s",        // buttons and background changes
  image: ".6s",         // greyscale to colour
  overlay: ".45s",      // menus and overlays (with `ease`)
  slow: ".9s",          // parallax and larger movements (.5–.9s, with `ease`)
}
const UPPERCASE = new Set(["label", "quote", "index"])
const FLUID = { display: "clamp(56px, 9vw, 128px)" }
const EMAIL_FONTS_HREF = "https://fonts.googleapis.com/css2?family=Martian+Mono:wght@400&display=swap"

const camel = n => n.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase())
const cssName = n => "--" + n.replace(/\./g, "\\.")
const j = v => JSON.stringify(v, null, 2)

function resolveColors(list) {
  const raw = new Map(list.map(t => [t.name, t.value]))
  if (raw.size !== list.length) throw new Error("Duplicate colour token name")
  const out = {}
  const resolve = (name, seen = []) => {
    if (!raw.has(name)) throw new Error(`Colour alias to a missing token: ${name}`)
    if (seen.includes(name)) throw new Error(`Colour alias cycle: ${[...seen, name].join(" → ")}`)
    const v = raw.get(name)
    const m = /^\{(.+)\}$/.exec(v)
    return m ? resolve(m[1], [...seen, name]) : v
  }
  for (const t of list) out[t.name] = resolve(t.name)
  return out
}

export function generate() {
  const tk = JSON.parse(read("tokens.json"))
  const handoff = JSON.parse(read("handoff.json"))
  const colors = resolveColors(tk.color.tokens)
  const px = v => parseFloat(v)

  const vars = []
  const add = (name, value) => vars.push(`  ${cssName(name)}:${value};`)
  for (const t of tk.color.tokens) add(t.name, /^\{(.+)\}$/.test(t.value) ? `var(${cssName(t.value.slice(1, -1))})` : t.value)
  for (const t of tk.spacing.tokens) add(t.name, t.value)
  for (const t of tk.radius.tokens) add(t.name, t.value)
  for (const t of tk.layout.tokens) add(t.name, t.value)
  for (const t of tk.ratio.tokens) add(t.name, t.value)
  for (const [k, v] of Object.entries(tk.type.families)) add("font-" + k, v)
  const style = {}
  for (const g of tk.type.groups) for (const s of g.styles) {
    style[s.name] = s
    add("fs-" + s.name, FLUID[s.name] || s.fontSize)
    add("lh-" + s.name, s.lineHeight)
    add("ls-" + s.name, s.letterSpacing || "0")
    add("fw-" + s.name, String(s.fontWeight))
  }
  for (const [k, v] of Object.entries(MOTION)) add("motion-" + k, v)
  const rootBlock = `:root{\n${vars.join("\n")}\n}`

  const font = tk.type.fonts[0]
  const fontFace = `@font-face{font-family:${JSON.stringify(font.family)};src:url("./${font.file}") format("woff2");font-weight:${font.weight};font-style:normal;font-display:swap}`
  const tokensCss = `/* ${tk.name} — generated from tokens.json by scripts/build.mjs. Do not edit. */\n${fontFace}\n${rootBlock}\n`

  const cColors = Object.fromEntries(Object.entries(colors).map(([k, v]) => [camel(k), v]))
  const spaceByStep = Object.fromEntries(tk.spacing.tokens.map(t => [t.name.replace(/^space-/, ""), t.value]))
  const radius = Object.fromEntries(tk.radius.tokens.map(t => [t.name.replace(/^radius-/, ""), t.value]))
  const layout = Object.fromEntries(tk.layout.tokens.map(t => [camel(t.name), /^\d+$/.test(t.value) ? Number(t.value) : t.value]))
  const ratio = Object.fromEntries(tk.ratio.tokens.map(t => [t.name.replace(/^ratio-/, ""), t.value]))
  const type = {}
  const typeEmail = {}
  for (const [name, s] of Object.entries(style)) {
    const base = { fontSize: s.fontSize, lineHeight: s.lineHeight, fontWeight: s.fontWeight, letterSpacing: s.letterSpacing || "0", uppercase: UPPERCASE.has(name) }
    type[name] = { ...base, fontSize: FLUID[name] || s.fontSize }
    // Mail clients want fixed px sizes and a px line-height.
    typeEmail[name] = { ...base, lineHeight: `${Math.round(px(s.fontSize) * Number(s.lineHeight))}px` }
  }
  const status = {}
  for (const k of ["neutral", "progress", "success", "danger"]) status[k] = { bg: colors[`status-${k}-bg`], fg: colors[`status-${k}-fg`] }
  const emailStack = tk.type.families["mono-email"].replace(/"/g, "'")

  const indexJs = `// ${tk.name} — brand tokens. Generated from tokens.json by scripts/build.mjs. Do not edit.
//
// A pure ES module with no imports, so a browser bundle, a Vercel function and a test can all load it by path.
// Every colour is a resolved hex (mail clients and PDFs cannot read CSS variables); web pages use tokens.css.

/** Every colour by its token name, aliases resolved: COLOR["linen-100"], COLOR.bg, COLOR["on-accent"]. */
export const COLOR = ${j(colors)}
/** The same colours with camelCase keys: C.linen100, C.bg, C.onAccent. */
export const C = ${j(cColors)}
/** Spacing by step: SPACE[4] is 16px, SPACE["4.5"] is 18px. */
export const SPACE = ${j(spaceByStep)}
export const RADIUS = ${j(radius)}
/** Grid and page measures (desktop, then the *Mobile ones). Numbers where the value is a plain number. */
export const LAYOUT = ${j(layout)}
export const RATIO = ${j(ratio)}
export const BP = { mobile: ${px(tk.layout.tokens.find(t => t.name === "breakpoint").value)} }
export const MOTION = ${j(MOTION)}
/** Status pairs for the portal. Always write the status out as a word; colour alone never carries it. */
export const STATUS = ${j(status)}
/** Which text colour goes on which fill, from the design system's colour hand-off. */
export const TEXT_ON = ${j(handoff.textOn)}

export const FONT = {
  family: ${JSON.stringify(tk.type.fonts[0].family)},
  file: ${JSON.stringify(tk.type.fonts[0].file)},
  mono: ${JSON.stringify(tk.type.families.mono)},
  /** For inline styles in HTML mail: single quotes, so it fits inside style="…". */
  email: ${JSON.stringify(emailStack)},
}
/** Load Martian Mono in a mail's <head>. Gmail and Outlook ignore it and fall back to the rest of FONT.email. */
export const EMAIL_FONTS_HREF = ${JSON.stringify(EMAIL_FONTS_HREF)}
export const EMAIL = { width: 600 }

/**
 * The logotype: a saffron panel with STUDIO MIDORI in ink (text turned into shapes). The files are in logo/ (svg for the web, png at
 * 3880 × 1000 for everything that cannot draw an svg: mail, pdf). \`primary\` is the saffron one; the others are the same panel in the
 * other palette colours: linen and ink as grounds, carriage, peacock, terracotta, rose and teak as colour fields.
 */
export const LOGO = {
  width: 388.8, height: 100, aspect: 3.888,
  primary: "logo/svg/studio-midori-logo-primary.svg",
  primaryPng: "logo/png/studio-midori-logo-primary.png",
  variants: ["primary", "carriage", "peacock", "terracotta", "rose", "teak", "linen", "ink"],
  svg: (variant = "primary") => "logo/svg/studio-midori-logo-" + variant + ".svg",
  png: (variant = "primary") => "logo/png/studio-midori-logo-" + variant + ".png",
}

/**
 * The square mark: a saffron panel with SM in ink (favicon, app icon). Files in logo/favicon/: favicon.svg (any size), favicon.ico
 * (16, 32 and 48), favicon-16/32/48.png, apple-touch-icon.png (180), icon-192.png and icon-512.png (the 512 also serves as a maskable
 * icon: the letters sit well inside the safe zone). head.html is the designer's snippet for a page's <head>.
 */
export const FAVICON = {
  svg: "logo/favicon/favicon.svg", ico: "logo/favicon/favicon.ico", appleTouch: "logo/favicon/apple-touch-icon.png",
  png: { 16: "logo/favicon/favicon-16.png", 32: "logo/favicon/favicon-32.png", 48: "logo/favicon/favicon-48.png", 192: "logo/favicon/icon-192.png", 512: "logo/favicon/icon-512.png" },
}

/** Text styles for the web (display is fluid). */
export const TYPE = ${j(type)}
/** The same styles with fixed px values, for mail. */
export const EMAIL_TYPE = ${j(typeEmail)}

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

/** An inline CSS declaration string for mail: style="\${emailTy("label")}". */
export function emailTy(name, color = COLOR.text) {
  const s = EMAIL_TYPE[name]
  if (!s) throw new Error("Unknown type style: " + name)
  return "font-family:" + FONT.email + ";font-size:" + s.fontSize + ";line-height:" + s.lineHeight + ";font-weight:" + s.fontWeight +
    ";letter-spacing:" + s.letterSpacing + (s.uppercase ? ";text-transform:uppercase" : "") + ";color:" + color
}

/** The :root block of tokens.css, for a page that injects variables itself (no @font-face: load the font from Google Fonts). */
export const cssVariables = ${JSON.stringify(rootBlock)}
`
  return { tokensCss, indexJs }
}

if (import.meta.url === pathToFileURL(process.argv[1] || "").href) {
  const { tokensCss, indexJs } = generate()
  writeFileSync(join(root, "tokens.css"), tokensCss)
  writeFileSync(join(root, "index.js"), indexJs)
  console.log("Wrote tokens.css and index.js")
}
