# PLAN-001 — Site foundation

| | |
|---|---|
| Spec | SPEC-001 |
| Branch | main (initial scaffold) |
| Status | in progress |

## Approach

Astro with no UI framework and no CSS framework: the site is one static page, so plain
`.astro` components with scoped CSS and global tokens are enough. Messages live in one
TS module so every CTA is generated, not hand-encoded. Tests use Node's built-in runner
(no extra dependency).

## Steps

| # | Step | Files | Done |
|---|---|---|---|
| 1 | Config, tsconfig, `.nvmrc`, `.gitignore` | root | [x] |
| 2 | Contact + WhatsApp data, link test | `src/data/`, `tests/` | [x] |
| 3 | Tokens + global CSS from the live site | `src/styles/` | [x] |
| 4 | Layout, header, footer, WhatsApp button | `src/layouts/`, `src/components/` | [x] |
| 5 | Nine section placeholders + page | `src/components/sections/`, `src/pages/` | [x] |
| 6 | Install Node LTS (Mario) | — | [ ] |
| 7 | `npm install astro`, build, test, dev check | `package.json` | [ ] |
| 8 | First commit, push to a remote | — | [ ] |
| 9 | Create Vercel project, link repo, check preview | — | [ ] |

## Risks

- No Node on this Mac yet → steps 7+ wait on step 6.
- Vercel needs a Git remote (GitHub) to do branch previews; none exists yet.

## Verification

| Criterion | How checked | Result |
|---|---|---|
| Build succeeds | `npm run build` | |
| Links correct | `npm test` | |
| 9 sections at 375px / desktop | browser | |
| Email only in footer | grep `mailto` in `dist/` | |
| Vercel preview | open preview URL | |

## Notes
