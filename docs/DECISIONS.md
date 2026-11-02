# Decision log

Append-only. To reverse a decision, add a new entry that says `Supersedes D-###`.
Source is who decided and where it is written down.

| ID | Date | Decision | Why | Source |
|---|---|---|---|---|
| D-001 | 2026-10 | Primary audience is companies (B2B): the site speaks to HR / management. | Current site speaks to individuals and doesn't convert. | Brief, `research/01` |
| D-002 | 2026-10 | WhatsApp +51 996 134 087 is the only CTA channel. Every button uses `wa.me` with a plan-specific pre-filled message. Email only in the footer. | Lead response speed drives conversion; pre-filled messages tell Carolyn which plan the lead wants. | Brief; Carolyn, `research/02` §A5, §B2 |
| D-003 | 2026-10 | No prices on the site. The price FAQ says it depends on format and team size, and promises a proposal in 24 h. | Prices vary with headcount, location and venue. | Carolyn, `research/02` §B4 |
| D-004 | 2026-10 | No booking, calendar or backend forms. | Carolyn would have to configure and maintain them. | Brief, `research/01` |
| D-005 | 2026-10 | Retreats (Bali, Ko Pha Ngan, Cusco) removed: section, menu entry and waitlist form. | They are B2C and dilute the B2B offer. | Carolyn, `research/02` §B6 |
| D-006 | 2026-10 | No testimonials, results or unbacked claims. | None exist. | Brief, `research/01` |
| D-007 | 2026-10 | No portrait of Carolyn; specialists are not named. Presented as a team curated by Carolyn. | Her preference; specialists assigned by availability. | Carolyn, `research/02` §B5 |
| D-008 | 2026-10 | Hosting on Netlify, managed by us. | No need to request access from Carolyn. | Brief, `research/01` |
| D-009 | 2026-11-02 | Minimum group size is **10** (max 30). The "8 a 30" in Carolyn's FAQ draft is wrong. | Resolves contradiction in `research/02` §B4. | Mario, 2026-11-02 |
| D-010 | 2026-11-02 | **No workshop can be run virtually.** | Resolves pending question in `research/02` §B4. | Mario, 2026-11-02 |
| D-011 | 2026-11-02 | Project folder renamed `alamati` → `enalmati`; git repo started on `main`. Project docs in English, site copy in Spanish. | Match brand/domain. | Mario, 2026-11-02 |
| D-012 | 2026-11-02 | Working process: spec → plan → build → verify → log; copy deck approved before build. | See `PROCESS.md`. | Mario, 2026-11-02 |
| D-013 | 2026-11-02 | **Deploy on Vercel**, not Netlify. Build and preview on our Vercel account; the current site stays live on Netlify until launch, then the domain moves to Vercel. Supersedes D-008. | Moving away from Netlify. | Mario, 2026-11-02 |
| D-014 | 2026-11-02 | Rebuild from scratch rather than edit the current site. | Current site is one hand-written 788 KB HTML file with inline CSS and base64 images; nothing structural to reuse. Assets and tokens are extracted to `reference/current-site/`. | B-001 findings |
| D-015 | 2026-11-02 | Stack: **Astro** (static), no UI or CSS framework; Node LTS. Copy and WhatsApp messages in data modules; tests with Node's built-in runner. | One static page; generated CTAs instead of hand-encoded links; Vercel-native. | Mario, 2026-11-02 (SPEC-001) |
| D-016 | 2026-11-02 | Visual direction: **mix of 1 "Bosque editorial" and 3 "Claridad corporativa"** from the style canvas. Brand feel from 1 (forest green + gold, Fraunces serif, arched photo); B2B structure from 3 (logistics box in the hero, numbered steps, scannable layout). Forest green leads the brand, not magenta. Resolves Q-8. | Premium and on-logo, while answering HR's first questions (duration, group size, venue, what the company provides) above the fold. | Mario, 2026-11-02 |
