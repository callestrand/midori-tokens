import { test } from "node:test"
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"
import { generate } from "../scripts/build.mjs"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const read = f => readFileSync(join(root, f), "utf8")

test("tokens.css and index.js are up to date with tokens.json (run: node scripts/build.mjs)", () => {
  const { tokensCss, indexJs } = generate()
  assert.equal(read("tokens.css"), tokensCss)
  assert.equal(read("index.js"), indexJs)
})

test("every var(--x) in bundle.css is defined in tokens.css", () => {
  const defined = new Set([...read("tokens.css").matchAll(/(--[A-Za-z0-9_\\.-]+)\s*:/g)].map(m => m[1].replace(/\\/g, "")))
  const used = [...read("bundle.css").matchAll(/var\((--[A-Za-z0-9_\\.-]+)/g)].map(m => m[1].replace(/\\/g, ""))
  assert.ok(used.length > 50)
  const missing = [...new Set(used)].filter(n => !defined.has(n))
  assert.deepEqual(missing, [])
})

test("bundle.css has no raw hex values: components read the roles", () => {
  assert.deepEqual(read("bundle.css").match(/#[0-9a-fA-F]{3,8}\b/g) || [], [])
})

test("index.js has no imports, so a Vercel function can load it by relative path", () => {
  assert.doesNotMatch(read("index.js"), /^\s*import\s/m)
  assert.doesNotMatch(read("index.js"), /\brequire\(/)
})

test("the exports every consumer relies on", async () => {
  const t = await import("../index.js")
  for (const name of ["COLOR", "C", "SPACE", "RADIUS", "LAYOUT", "RATIO", "BP", "MOTION", "STATUS", "TEXT_ON", "FONT", "EMAIL", "EMAIL_FONTS_HREF", "TYPE", "EMAIL_TYPE", "ty", "emailTy", "cssVariables"]) {
    assert.ok(name in t, `missing export ${name}`)
  }
  assert.equal(t.COLOR.bg, "#f4ecdc")
  assert.equal(t.C.onAccent, "#2a1f1a")
  assert.equal(t.SPACE["4.5"], "18px")
  assert.equal(t.BP.mobile, 768)
  assert.equal(t.LAYOUT.columns, 12)
})

test("no colour is left as an alias, and statuses are all present", async () => {
  const t = await import("../index.js")
  for (const [k, v] of Object.entries(t.COLOR)) assert.match(v, /^#[0-9a-f]{3,8}$/i, k)
  assert.deepEqual(Object.keys(t.STATUS), ["neutral", "progress", "success", "danger"])
})

test("mail output: single-quoted stack, px line-height, capitals only where the style asks", async () => {
  const { emailTy, FONT } = await import("../index.js")
  assert.ok(!FONT.email.includes('"'))
  const label = emailTy("label")
  assert.match(label, /font-size:12px/)
  assert.match(label, /text-transform:uppercase/)
  assert.match(emailTy("body"), /line-height:24px/)
  assert.doesNotMatch(emailTy("body"), /text-transform/)
  assert.throws(() => emailTy("nope"))
})

test("the logo: every variant exists as svg and png, and an svg carries no script", async () => {
  const { LOGO } = await import("../index.js")
  assert.equal(LOGO.variants.length, 8)
  for (const v of LOGO.variants) {
    const svg = read(LOGO.svg(v))
    assert.match(svg, /^<svg /)
    assert.doesNotMatch(svg, /<script|onload=|href="http/i)
    assert.ok(read(LOGO.png(v)).length > 1000, v)
  }
  assert.equal(LOGO.primary, LOGO.svg("primary"))
})

test("the favicon set exists and the svg carries no script", async () => {
  const { FAVICON } = await import("../index.js")
  assert.doesNotMatch(read(FAVICON.svg), /<script|onload=|href="http/i)
  for (const f of [FAVICON.ico, FAVICON.appleTouch, ...Object.values(FAVICON.png)]) assert.ok(read(f).length > 100, f)
})
