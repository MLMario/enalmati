# Backlog

Ordered by priority within each phase. Status: `todo` · `in progress` · `blocked` · `done`.
Closed items stay in the *Done* table with their close date.

## Phase 1 — Discovery

| ID | Item | Status | Notes |
|---|---|---|---|
| B-002 | Inventory reusable assets: extract colour tokens, fonts, breathing animation into a short note. Images already extracted. | in progress | Brand base decided: forest green (D-016) |
| B-004 | Send Carolyn batch: Q-11, Q-12, Q-13 (+ Q-2 if GA4 has no baseline). | todo | After Mario approves the first draft |
| B-006 | Explore the 1+3 mix (D-016) on the style canvas: full hero + benefits + how it works + programs in one direction, desktop and 375px. | in progress | Hero, benefits, carousel, how it works, programs drawn. Left: Por qué, Quiénes somos, Cierre, Footer, FAQ page. **Next session.** Canvas: https://claude.ai/artifact/AzYAou8Jdw1SSW9f7J94uP |
| B-007 | Set final design tokens in `src/styles/tokens.css` from the chosen mix; drop magenta as lead. | todo | After B-006 |
| B-008 | Decide on the AI-looking photos (L-005): keep, label as illustrative, or replace. | todo | Before launch |

## Phase 2 — Copy deck

| ID | Item | Status | Notes |
|---|---|---|---|
| B-010 | SPEC-002 copy deck: all Spanish copy for the 9 sections, every line traced to `research/02`. | todo | Needs B-003 |
| B-011 | Write headline + subtitle from value prop (A1). | todo | Part of B-010 |
| B-012 | FAQ page (own page, D-022) incl. ice immersion safety question with contraindications. | todo | Part of B-010; min group 10 |
| B-013 | Carolyn approves copy deck. | todo | |

## Phase 3 — Build

| ID | Item | Status | Notes |
|---|---|---|---|
| B-020 | SPEC-001 site foundation: stack, structure, design tokens, Vercel setup. | in progress | Built, tested, pushed; left: Vercel (PLAN-001 step 9, deferred D-018) |
| B-022 | Build sections 1–9 per copy deck. | todo | Split into specs once SPEC-001 is done |
| B-023 | Footer: email, (social links if Q-6). | todo | |
| B-024 | Create GitHub remote and Vercel project; confirm branch previews work. | todo | GitHub done (`main` pushed); Vercel **deferred** (D-018, Q-10) |

## Phase 4 — QA & launch

| ID | Item | Status | Notes |
|---|---|---|---|
| B-030 | QA: mobile 375px + desktop, every WhatsApp link opened and message checked. | todo | |
| B-031 | Basic SEO/meta: title, description, OG image, Spanish `lang`. | todo | |
| B-032 | Click tracking on WhatsApp buttons. Current site already has GA4 (`G-9WZYHE19G0`) — reuse it for a `whatsapp_click` event with plan label. | todo | Check GA4 history for a baseline before asking Carolyn (Q-2) |
| B-033 | Production deploy on Vercel + move domain from Netlify (DNS), then retire the Netlify site. | todo | D-013 |

## Done

| ID | Item | Closed |
|---|---|---|
| B-000 | Project setup: folder rename, git, docs structure, templates. | 2026-11-02 |
| B-005 | Pick a visual direction → mix of 1 + 3 (D-016). | 2026-11-02 |
| B-003 | Resolve our own open questions Q-3, Q-4, Q-5, Q-7 (D-022…D-027). | 2026-11-03 |
| B-001 | Inspect live site: static HTML on Netlify, one 788 KB file, inline CSS, 6 base64 images, GA4, Google Fonts (Fraunces, Jost, Inter). Rebuild (D-014). | 2026-11-02 |
| B-021 | WhatsApp link system: one source of messages, URL-encoded, 8 variants. Tests pass 3/3. | 2026-11-02 |
