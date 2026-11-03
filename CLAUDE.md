# enalmati.com redesign

Redesign of the En Almati website (corporate wellbeing, Lima) so HR / management
understands the offer in seconds and **starts a WhatsApp conversation**.
Success metric: more WhatsApp conversations started.

## Start of every session

1. Read `docs/STATUS.md` (where we are, blockers, next step).
2. Read `docs/BACKLOG.md` (what to work on).
3. Check `docs/DECISIONS.md` before changing anything already decided.

## End of every session (or after any meaningful change)

- `docs/STATUS.md` — rewrite to reflect current state (it is a snapshot, not a log).
- `docs/CHANGELOG.md` — append what changed.
- `docs/DECISIONS.md` — append any decision taken, with source.
- `docs/BACKLOG.md` — close, add or reprioritize items.
- `docs/LEARNINGS.md` — append anything that would have saved time.

## Where things are

| Path | What |
|---|---|
| `research/` | Source material: brief (`01`) and Carolyn's answers (`02`). Read-only; never edit. Where it conflicts with `DECISIONS.md`, the decision wins. |
| `reference/current-site/` | Snapshot of the live site (2026-11-02) and its extracted images. Reference only; not deployed. |
| `drafts/borrador-1/` | Source of the shareable draft page (Artifact https://claude.ai/artifact/1qQcrUe6Y1Pj7f7TqqdyoT). Publish from here. |
| `drafts/estilos/` | Source of the style explorer (Artifact https://claude.ai/artifact/VBJkjxUQA5whAuAdPvtEx8): 6 symbol-led styles. |
| `docs/design/` | Design briefs (style research, symbol set). |
| `docs/carolyn/` | Question batches sent to Carolyn (Spanish), by date. |
| `docs/STATUS.md` | Current phase, blockers, open questions, next step |
| `docs/BACKLOG.md` | Prioritized work items (`B-###`) |
| `docs/DECISIONS.md` | Append-only decision log (`D-###`) |
| `docs/CHANGELOG.md` | Append-only log of changes, by date |
| `docs/LEARNINGS.md` | Gotchas and insights (`L-###`) |
| `docs/specs/` | What and why: `SPEC-###-slug.md` |
| `docs/plans/` | How: `PLAN-###-slug.md`, same number as its spec |
| `docs/templates/` | Templates for specs and plans |

## Work rules

- **Spec → plan → build → verify → log.** Anything bigger than a copy fix gets a spec
  approved before building. See `docs/PROCESS.md`.
- **Never invent content.** All copy comes from `research/02`. Editing for readability
  is fine; new facts, numbers, testimonials or claims are not. If content is missing, add an
  open question to `STATUS.md` instead of filling the gap.
  Exception (D-027): the current site's claims "Más elegido", "Técnica comprobada",
  "Resultados desde la primera sesión" and "Resultados visibles desde el primer taller"
  are kept by Mario's decision. Don't add new ones.
- Site copy is in **Spanish**. Project docs are in English.
- Every CTA goes to `https://wa.me/51996134087?text=<url-encoded message>` using the
  messages in `research/02` §B2. Email (`info@enalmati.com`) only in the footer.
- Out of scope: prices, booking/calendars, backend forms, retreats.
- Hosting: **Vercel** (D-013). Current site stays on Netlify until launch; domain moves at the end.
