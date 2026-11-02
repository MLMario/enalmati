# Changelog

Append-only, newest first. One entry per session or shipped change. Code-level detail
lives in git; this is what changed and why it matters.

## 2026-11-02 (5)

- Added `origin` remote `https://github.com/MLMario/enalmati.git`; first commit `20bc020`.
  First push failed (stale Keychain credential, L-006); after Mario set a fine-grained token, `main` pushed. X-3 closed.
- Node v26.13.0 installed (X-2 closed). Installed `astro` 7.4.5, `@astrojs/check`, `typescript`,
  `@types/node`; added `"types": ["node"]` to `tsconfig.json`.
- PLAN-001 step 7 verified: `npm test` 3/3, `npm run build` OK, `astro check` 0 errors,
  9 sections at 375px and desktop, email only in footer.

## 2026-11-02 (4)

- Chose visual direction: mix of Bosque editorial + Claridad corporativa (D-016). Q-8 closed.
- Added B-006 (explore the mix), B-007 (final tokens), B-008 (photo decision).

## 2026-11-02 (3)

- Published style-direction canvas with 4 directions, each a hero + one section, using only
  sourced copy and the live site's photos: https://claude.ai/artifact/AzYAou8Jdw1SSW9f7J94uP
  (B-005).

## 2026-11-02 (2)

- Hosting moves to Vercel (D-013); Netlify stays live until launch.
- Inspected live site (B-001 done): single static HTML, rebuild decided (D-014).
  Snapshot + 6 extracted images in `reference/current-site/`.
- Stack: Astro (D-015). Scaffolded SPEC-001: config, 9 section placeholders, header,
  footer, `WhatsAppButton`, `data/whatsapp.ts` with the 8 messages, link tests, tokens.
- Not yet installed or built: Node isn't on the machine.

## 2026-11-02

- Renamed project folder `alamati` → `enalmati`; initialized git repo (`main`).
- Added project memory: `CLAUDE.md`, `docs/STATUS.md`, `BACKLOG.md`, `DECISIONS.md`,
  `CHANGELOG.md`, `LEARNINGS.md`, `PROCESS.md`.
- Added templates: `docs/templates/spec.md`, `docs/templates/plan.md`.
- Recorded decisions D-001…D-012, including group minimum = 10 and no virtual workshops.
