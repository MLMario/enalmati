# Working process

## Phases

| # | Phase | Output | Exit criteria |
|---|---|---|---|
| 0 | Setup | Repo, docs structure | Done |
| 1 | Discovery | Tech base of current site, assets inventory, baseline metric | Open blockers in STATUS cleared |
| 2 | Copy deck | `SPEC-002` — every word of the page, in Spanish, sourced from `research/02` | Approved by us, then by Carolyn |
| 3 | Build | Site sections, one spec each (or grouped) | All section specs verified |
| 4 | QA & launch | Mobile/desktop pass, every WhatsApp link tested, domain moved Netlify → Vercel | Live on enalmati.com |
| 5 | Measure | WhatsApp conversations vs baseline | Agreed review date passed |

Copy comes before build on purpose: the content is the main conversion lever and the
main risk (invented claims). Locking it first means build work is layout, not writing.

## Per work item

1. **Pick** the top unblocked item in `BACKLOG.md`. Mark it `in progress`.
2. **Spec** (if it changes what the site says or does): copy `templates/spec.md` to
   `specs/SPEC-###-slug.md`. State the problem, the content sources, acceptance criteria.
   Get approval before building.
3. **Plan** (if it touches more than a couple of files or has ordering risk): copy
   `templates/plan.md` to `plans/PLAN-###-slug.md`.
4. **Build** on a branch `spec-###-slug`.
5. **Verify** against the spec's acceptance criteria: browser at 375px and desktop,
   every WhatsApp link opened and its message read. Record results in the plan.
6. **Log**: CHANGELOG entry, close the backlog item, new decisions → DECISIONS,
   surprises → LEARNINGS, rewrite STATUS.
7. **Merge** to `main` → production deploy.

Skip steps 2–3 for trivial fixes (typo, colour tweak); still do 5 and 6.

## Questions for Carolyn

- Collect them in `STATUS.md` → *Open questions*, each with an ID and what it blocks.
- Send them batched, not one by one.
- Her answer becomes a `D-###` entry with source "Carolyn, <date>". Then remove the
  question from STATUS.

## Reviews with Carolyn

Use Vercel preview deployments (one URL per branch) so she reviews the real page, not
screenshots. Her feedback goes into the backlog as items, not straight into code.

## IDs

| Prefix | Where | Rule |
|---|---|---|
| `B-###` | BACKLOG | Never reused |
| `D-###` | DECISIONS | Append-only; to change a decision, add a new one that supersedes it |
| `L-###` | LEARNINGS | Append-only |
| `SPEC-###` / `PLAN-###` | specs/, plans/ | Plan shares its spec's number |
