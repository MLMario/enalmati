# SPEC-001 — Site foundation

| | |
|---|---|
| Status | approved (scaffold requested 2026-11-02) |
| Backlog | B-020, B-021 |
| Plan | PLAN-001 |
| Date | 2026-11-02 |

## Problem

The current site is one hand-written 788 KB HTML file with inline CSS and base64 images
(D-014). Every CTA is hand-coded, so the 8 plan-specific WhatsApp messages would be
copy-pasted and URL-encoded by hand.

## Goal

A codebase where copy and CTAs can change safely and quickly, deployed on Vercel (D-013),
so build work in phase 3 is only layout and content.

## Scope

**In:**
- Astro static site, one page (`/`), Spanish (`lang="es"`).
- Nine section components in the fixed order (research/01 §2), as placeholders.
- `WhatsAppButton` as the only CTA, fed by `data/whatsapp.ts` (8 messages, research/02 §B2).
- Design tokens from the live site; fonts Fraunces / Jost / Inter.
- Images from the live site, optimized through `astro:assets`.
- Tests for the WhatsApp links.
- Vercel project linked to the repo; preview per branch.

**Out:**
- Section content (SPEC-002 copy deck).
- Final visual design and brand base decision (B-002).
- Analytics (B-032), English version (Q-7), social links (Q-6).

## Content

| Element | Copy | Source |
|---|---|---|
| WhatsApp messages (8) | as in `src/data/whatsapp.ts` | research/02 §B2 |
| Phone | +51 996 134 087 | research/01, D-002 |
| Footer email | info@enalmati.com | D-002 |
| Page title / description | placeholder, rewritten in SPEC-002 | research/02 §A1 |

## Behaviour

- Sticky header: logo + WhatsApp button (general message).
- Section anchors: `#inicio`, `#beneficios`, `#servicios`, `#como-funciona`, `#programas`,
  `#por-que`, `#quienes-somos`, `#preguntas`, `#contacto`.
- WhatsApp links open in a new tab, carry `data-wa="<key>"` for later click tracking.

## Acceptance criteria

- [ ] `npm run build` succeeds; output is static HTML.
- [ ] `npm test` passes: 8 messages, correct number, messages round-trip through encoding.
- [ ] Page renders all 9 sections in order at 375px and desktop.
- [ ] Header and footer show the logo; footer is the only place with the email.
- [ ] Vercel preview URL builds from a branch.

## Open questions

| ID | Question | Blocks |
|---|---|---|
| B-002 | Brand base: magenta-led (live CSS) or forest-green-led (logo)? | Final tokens |

## Decisions referenced

D-002, D-013, D-014
