# Studio Midori brand tokens

The design system of every public Studio Midori surface (website, fabric book, and Vandelay's emails, newsletters,
client portal and PDFs), generated from the system built in Claude Design.

| File | What | Edit? |
|---|---|---|
| `tokens.json`, `bundle.css`, `handoff.json`, `fonts/` | Copied unchanged from the Claude Design system | No: re-sync (below) |
| `brand-book.md` | The system's README (the brand book, in Swedish) | No: re-sync |
| `base.css` | Page defaults (body, links, selection, focus) | Yes |
| `scripts/build.mjs` | Generates `tokens.css` and `index.js`; also holds what the design keeps only in prose (motion, which styles are capitals, the fluid `display` size, the mail font link) | Yes |
| `tokens.css`, `index.js` | Generated. Committed, so a submodule consumer needs no build step | No: run the script |

## Using it

- **Web page:** import `tokens.css`, `bundle.css` and `base.css` once (inside the surface that uses the system), then use the `sm-*`
  classes and the role variables (`var(--bg)`, `var(--text)`, `var(--accent)`, …), never raw hex.
  Variable names are unprefixed and generic (`--bg`, `--gutter`), so never load this next to another system's CSS on one page.
- **JavaScript:** `import { COLOR, C, SPACE, LAYOUT, STATUS, ty, emailTy, FONT, EMAIL_FONTS_HREF } from "…/index.js"`.
  The file has no imports, so a Vercel function can load it by relative path. Every colour is a resolved hex.
- **Mail:** hex only, `FONT.email` (single quotes, falls back to Courier in Gmail and Outlook), 600px (`EMAIL.width`),
  `emailTy("label")` for inline styles, `EMAIL_FONTS_HREF` in the `<head>`. Wordmark and big numbers as images.

## Re-syncing from Claude Design

1. Read the design system artifact (`project/tokens.json`, `project/components/bundle.css`, `project/README.md`,
   `project/fonts/*`) and the concept's `project/handoff/colors.json`; copy them over `tokens.json`, `bundle.css`,
   `brand-book.md`, `fonts/`, `handoff.json`.
2. `node scripts/build.mjs`, then `node --test`.
3. The tests fail if generated files are stale, if `bundle.css` uses a variable `tokens.css` lacks, or if it contains a raw hex.

## History

`main` held the original (v1) tokens until the new system replaced them; they are frozen at tag `v1-final`
and live as plain files in the website (`src/legacy/tokens`) and Vandelay (`src/tokens`).
