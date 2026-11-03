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
- Deferred Vercel setup (D-018); B-024 back to `todo`, open question Q-10 added. Next step is B-006.
- Style canvas: added "Mezcla 1 + 3" artboards (desktop 1280 + phone 375) with hero + logistics box, benefits, how it works, programs (B-006). Benefits use Carolyn's full approved text; "Respondemos en minutos" replaced by the 24 h proposal promise (`research/02` §B4).
- Style canvas: added "Experiencias" carousel artboards (desktop + 375px): 8 activities as cards without benefits (photo or green panel, type · duration, name), chips naming all activities by type, arrows + counter, one general WhatsApp CTA.
- Carousel: removed the activity chips per Mario's canvas comment (D-020 updated).
- Decisions D-021 (RR. HH. simplicity → Por qué) and D-022 (FAQ on its own page; closes Q-3).
- Decisions D-023…D-026 (Conócenos, no English, nothing virtual, no social links). Q-1/4/6/7 closed; Q-11…13 added for after draft approval; Q-5 flagged.
- D-027: keep the current site's four claims; `CLAUDE.md` rule updated; Q-5 closed.
- Programas redrawn in two tracks with current-site plan copy and "Más elegido"; Beneficios cut to 5; carousel embedded in the merged page. STATUS rewritten for end of session 3.

## 2026-11-02 (session 4)

- Canvas `Mezcla`: Programas merged into one track (Piloto · Trimestral · Semestral); hero box duration "60 o 90 min, tú eliges"; plan WhatsApp messages merged.
- Canvas `Experiencias`: card labels show type only, no duration.
- Decisions D-028…D-030.
- Plans corrected: each is sessions **or** workshops (1 / 3 / 6), not a mix.
- Mario approved the first draft (D-031).
- Shareable draft page published: https://claude.ai/artifact/1qQcrUe6Y1Pj7f7TqqdyoT (source in `drafts/borrador-1/`). Adds Por qué (5 differentiators + RR. HH. box), Quiénes somos (bio summary, no photo), Cierre band, Footer, FAQ view (`#preguntas`, 6 questions incl. ice safety). All 6 WhatsApp messages wired.
- Carolyn question batch 1 written: `docs/carolyn/2026-11-02-preguntas.md`.
- `CLAUDE.md`: added `drafts/` and `docs/carolyn/` to the file map.
- STATUS/BACKLOG: next session explores new design styles (B-009); B-007 waits for it.

## 2026-11-03 (session 5)

- B-009 started after new feedback: minimalist palette, symbols as decoration, no yoga-pose figures except the seated lotus figure and the lotus (D-032).
- Researched symbol-led design styles; brief written: `docs/design/style-brief-2026-11-03.md` (6 styles, shared symbol set, styles left out, sources).
- Style explorer published: https://claude.ai/artifact/VBJkjxUQA5whAuAdPvtEx8 (source `drafts/estilos/`). Six styles (Línea serena, Noche celeste, Geometría sagrada, Zen ensō, Emblema plano, Raíz ayurvédica), each a live homepage preview with the borrador 1 copy and WhatsApp links, a desktop/phone toggle, and a brief per style (palette, type, symbols, HR fit, risk).
- Open question Q-15 added (Om on the site).
- `CLAUDE.md`: added `drafts/estilos/` and `docs/design/` to the file map.
