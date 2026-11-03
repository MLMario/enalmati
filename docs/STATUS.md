# Status

_Snapshot — rewrite, don't append. Last updated: 2026-11-03 (end of session 3)._

**Phase:** 1 Discovery (done except Q-2) · first-draft design on the style canvas (in progress) ·
3 Build foundation (built and tested locally; Vercel deferred).

## Where we are

- Astro scaffold (SPEC-001 / PLAN-001) built and tested locally (steps 1–7). Step 9 (Vercel)
  **deferred** (D-018). `main` on https://github.com/MLMario/enalmati.git.
- Style canvas: https://claude.ai/artifact/AzYAou8Jdw1SSW9f7J94uP (private). New row
  "Mezcla 1 + 3" (Bosque look + Claridad structure, D-016):
  - `Mezcla` (desktop) / `Mezcla-movil` (375px): header, hero + logistics box, Beneficios (5),
    Experiencias carousel (imported), Cómo funciona (4 steps), Programas in two tracks.
  - `Experiencias` (desktop + 375px): carousel of 8 activity cards, no benefits, no chips (D-020).
  - Programas: Sesiones (Conócenos · Trimestral · Semestral) and Talleres (Piloto · Trimestral ·
    Semestral) + "a medida" strip. Plan copy and "Más elegido" badges come from the current site
    (D-023, D-027). Each button has its own WhatsApp message.
- Page structure agreed: one main scroll page + separate FAQ page (D-022).
  Main page: Header → Hero → Beneficios → Experiencias → Cómo funciona → Programas →
  Por qué (incl. RR. HH. simplicity, D-021) → Quiénes somos → Cierre → Footer.
- Decisions this session: D-018…D-027. `CLAUDE.md` claims rule updated (D-027).
- Nothing rendered/verified by Claude on the canvas; Mario reviewed visually.

## Blockers

| ID | Blocker | Blocks | Next action |
|---|---|---|---|
| — | None. | | |

## Open questions

| ID | Question | For | Blocks |
|---|---|---|---|
| Q-2 | WhatsApp conversations per month today? Check GA4 `G-9WZYHE19G0` first (L-004). | Us → Carolyn | Measuring success |
| Q-11 | Confirm plan contents (1/3/6 sessions or workshops over 1/3/6 months). Taken from the current site; not in Carolyn's answers. **After draft approval.** | Carolyn | Programas copy |
| Q-12 | Photos for the 4 workshops; keep or replace AI-looking photos (B-008). **After draft approval.** | Carolyn | Carousel, launch |
| Q-13 | Carolyn approves our own phrasing (hero tag, section labels, card lines, button labels). **After draft approval.** | Carolyn | Copy deck |
| Q-10 | When to set up Vercel (B-024)? Deferred; needed before sharing previews and before launch. | Us | Previews, launch |
| Q-9 | Does Vercel support Node 26? If yes, move `.nvmrc` to 26 (D-017). | Us | Before launch |

## Next session — start here

1. **B-006 (rest of first draft on the canvas):** add Por qué (5 differentiators + RR. HH.),
   Quiénes somos (bio, no photo), Cierre band, Footer (email only) to `Mezcla`; draw the FAQ
   page as its own artboard and point "Preguntas" / "Ver precauciones" to it.
2. Mario reviews the full draft; then B-007 tokens and SPEC-002 copy deck.
3. Canvas files are regenerated from scratch scripts that are not in the repo; edit the
   artboards directly (read them from the canvas first).
