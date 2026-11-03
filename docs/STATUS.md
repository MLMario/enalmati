# Status

_Snapshot — rewrite, don't append. Last updated: 2026-11-03 (end of session 5)._

**Phase:** 1 Discovery and design: first draft approved (D-031); **new style being chosen** (B-009, D-032);
waiting on Carolyn (batch 1). 3 Build foundation: built and tested locally; Vercel deferred.

## Where we are

- **Style explorer (new):** https://claude.ai/artifact/VBJkjxUQA5whAuAdPvtEx8. Source: `drafts/estilos/`.
  Six minimalist, symbol-led styles, each a live homepage preview with the borrador 1 copy: Línea serena,
  Noche celeste, Geometría sagrada, Zen ensō, Emblema plano, Raíz ayurvédica. Brief:
  `docs/design/style-brief-2026-11-03.md`. Our recommendation: Línea serena, plus moon-phase steps and
  the petal-count lotus on plan cards.
- **Symbol rules (D-032):** minimalist palette; symbols as decoration; no yoga-pose figures except the
  seated lotus figure and the lotus. Third eye and hamsa are left out; Om is pending Carolyn (Q-15).
- **Shareable draft page:** https://claude.ai/artifact/1qQcrUe6Y1Pj7f7TqqdyoT (source `drafts/borrador-1/`).
  Its copy and WhatsApp links are the content base for every style.
- **Programas** (D-028…D-030): Piloto (1) · Trimestral (3, Más elegido) · Semestral (6); all sessions or
  all workshops; 60 or 90 min per activity. Trimestral count pending Carolyn.
- **Carolyn batch 1** written: `docs/carolyn/2026-11-02-preguntas.md`.
- Astro scaffold (SPEC-001) built and tested; `main` on GitHub. Vercel deferred (D-018).

## Blockers

| ID | Blocker | Blocks | Next action |
|---|---|---|---|
| — | Mario's pick from the style explorer | Tokens (B-007), symbol set (B-034) | Mario reviews the 6 styles |
| — | Carolyn's answers to batch 1 | Copy deck (B-010), photos (B-008) | Mario shares the draft page and sends the batch |

## Open questions

| ID | Question | For | Blocks |
|---|---|---|---|
| Q-15 | May the site use the **Om** symbol? It is sacred and may read as religious to HR in Lima. Only Raíz ayurvédica uses it. | Carolyn | Raíz ayurvédica style |
| Q-11 | Plan contents: 1/3/6 (Trimestral 3 or 2?), sessions *or* workshops per plan, 60/90 for every activity, "Más elegido", plan lines. Batch 1 §1. | Carolyn | Programas copy |
| Q-12 | Workshop photos; keep/label/replace the AI-looking session photos (B-008). Batch 1 §2. Note: the style previews show symbols instead of photos on activity cards. | Carolyn | Carousel, launch |
| Q-13 | Approve our own phrasing (listed per section) and merged WhatsApp messages (D-030). Batch 1 §4. | Carolyn | Copy deck |
| Q-14 | Ice immersion: contraindications complete? Supervision, health form, time in water? Batch 1 §3. | Carolyn | FAQ |
| Q-2 | WhatsApp conversations per month today. Batch 1 §5 — drop it if GA4 `G-9WZYHE19G0` already has a baseline (L-004). | Mario → Carolyn | Measuring success |
| Q-10 | When to set up Vercel (B-024)? | Us | Previews, launch |
| Q-9 | Does Vercel support Node 26? (D-017) | Us | Before launch |

## Next session — start here

1. Ask Mario which style he picked from the explorer (or which mix), and why.
2. Log a decision that supersedes D-016. If Om is involved, add Q-15 to Carolyn's batch first.
3. Apply the chosen style to a new draft (`drafts/borrador-2/`), using the same copy as borrador 1.
4. Then B-034 (final symbol set) and B-007 (tokens in `src/styles/tokens.css`).
5. If Carolyn has answered batch 1: apply her answers to the chosen draft and log them.
