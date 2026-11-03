# Status

_Snapshot — rewrite, don't append. Last updated: 2026-11-03 (end of session 4)._

**Phase:** 1 Discovery and design: **first draft approved** (D-031); waiting on Carolyn (batch 1).
3 Build foundation: built and tested locally; Vercel deferred.

## Where we are

- **Shareable draft page:** https://claude.ai/artifact/1qQcrUe6Y1Pj7f7TqqdyoT (private until Mario
  shares it). Source: `drafts/borrador-1/` (publish from there). All 9 sections + FAQ view
  (`#preguntas`), working WhatsApp buttons (general, Piloto, Trimestral, Semestral, a medida).
- **Style canvas:** https://claude.ai/artifact/AzYAou8Jdw1SSW9f7J94uP. `Mezcla` has Header → Programas
  only; Por qué, Quiénes somos, Cierre, Footer and FAQ exist only on the draft page.
- **Programas** (D-028…D-030): one set of plans: Piloto (1 mes · 1 sesión o taller) · Trimestral
  (3, Más elegido) · Semestral (6). Each plan is all sessions or all workshops; the company picks
  60 or 90 min per activity. Trimestral count = 3 pending Carolyn (Mario wrote "2").
- **Carolyn batch 1** written: `docs/carolyn/2026-11-02-preguntas.md` (Spanish, by section).
- Astro scaffold (SPEC-001) built and tested; `main` on GitHub. Vercel deferred (D-018).

## Blockers

| ID | Blocker | Blocks | Next action |
|---|---|---|---|
| — | Carolyn's answers to batch 1 | Copy deck (B-010), photos (B-008) | Mario shares the draft page and sends the batch |

## Open questions

| ID | Question | For | Blocks |
|---|---|---|---|
| Q-11 | Plan contents: 1/3/6 (Trimestral 3 or 2?), sessions *or* workshops per plan, 60/90 for every activity, "Más elegido", plan lines. Batch 1 §1. | Carolyn | Programas copy |
| Q-12 | Workshop photos; keep/label/replace the AI-looking session photos (B-008). Batch 1 §2. | Carolyn | Carousel, launch |
| Q-13 | Approve our own phrasing (listed per section) and merged WhatsApp messages (D-030). Batch 1 §4. | Carolyn | Copy deck |
| Q-14 | Ice immersion: contraindications complete? Supervision, health form, time in water? Batch 1 §3. | Carolyn | FAQ |
| Q-2 | WhatsApp conversations per month today. Batch 1 §5 — drop it if GA4 `G-9WZYHE19G0` already has a baseline (L-004). | Mario → Carolyn | Measuring success |
| Q-10 | When to set up Vercel (B-024)? | Us | Previews, launch |
| Q-9 | Does Vercel support Node 26? (D-017) | Us | Before launch |

## Next session — start here

Goal: **review different design styles and make a few new drafts** (B-009).

1. Use `drafts/borrador-1/` as the content base: same sections, copy and WhatsApp links; only the
   look changes. Don't change copy while exploring styles (copy waits on Carolyn, batch 1).
2. Make each new draft its own folder (`drafts/borrador-2/`, `-3/`…) and its own Artifact, or
   artboards on the style canvas; decide with Mario at the start.
3. If Mario picks a new direction, log a decision that supersedes D-016, then do B-007 (tokens).
4. If Carolyn has answered batch 1 meanwhile: apply her answers to the chosen draft and log them.
