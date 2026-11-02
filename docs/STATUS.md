# Status

_Snapshot — rewrite, don't append. Last updated: 2026-11-02 (end of session 2)._

**Phase:** 1 Discovery (mostly done) · 3 Build foundation (built and tested locally) ·
visual direction chosen.

## Where we are

- Live site inspected; rebuilding from scratch (D-014). Deploy on Vercel (D-013).
- Astro scaffold (SPEC-001 / PLAN-001) **installed, built and tested** on Node 26 (D-017):
  `npm test` 3/3, `npm run build` OK, `astro check` 0 errors, 9 placeholder sections render
  at 375px and desktop. Steps 1–7 done.
- Git: `main` pushed to https://github.com/MLMario/enalmati.git (token auth via Keychain works).
- Style canvas with 4 directions: https://claude.ai/artifact/AzYAou8Jdw1SSW9f7J94uP
  (private). Direction chosen: **mix of 1 Bosque editorial + 3 Claridad corporativa** (D-016).

## Blockers

| ID | Blocker | Blocks | Next action |
|---|---|---|---|
| — | None. | | |

## Open questions

| ID | Question | For | Blocks |
|---|---|---|---|
| Q-1 | Can any **session** (breathwork, sound healing, yin yoga) be run virtually? Until answered, the site does not mention virtual. | Carolyn | FAQ / logistics copy |
| Q-2 | WhatsApp conversations per month today? Check GA4 `G-9WZYHE19G0` first (L-004). | Us → Carolyn | Measuring success |
| Q-3 | Single long scroll page — confirm. (Scaffold and canvas assume yes.) | Us | SPEC-002 |
| Q-4 | Unify plans: drop "Conócenos" for "Piloto"; one programs section for sessions + workshops? | Us → Carolyn | Copy deck |
| Q-5 | Remove unbacked claims ("Más elegido", etc.)? Recommended: yes, per D-006. | Us | Copy deck |
| Q-6 | Social links in footer (LinkedIn)? | Carolyn | Footer |
| Q-7 | English version: translate or drop the ES/EN switcher? | Us | Scope |
| Q-9 | Does Vercel support Node 26? If yes, move `.nvmrc` to 26 (D-017). | Us | Before launch |

## Next session — start here

1. PLAN-001 step 9 — create the Vercel project from the GitHub repo,
   confirm a branch preview (B-024).
2. **B-006:** explore the 1+3 mix on the style canvas (new artboards; keep the 4 originals).
   Hero with logistics box, benefits, how it works, programs; desktop + 375px.
3. Copy caveats from the canvas to carry into SPEC-002: headlines in directions 3/4 were
   our phrasing; session benefits were shortened from Carolyn's approved text;
   "Respondemos en minutos" is a public promise based on her commitment.
