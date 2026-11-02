# Learnings

Append-only. Things that would have saved time or prevented a mistake.

| ID | Date | Learning | Apply as |
|---|---|---|---|
| L-001 | 2026-11-02 | Carolyn's answers can contradict each other (group minimum 10 in logistics vs 8 in her FAQ draft). | Cross-check every number in the copy deck against all of `research/02` before it goes on the page. |
| L-002 | 2026-11-02 | The brief listed "virtual" as a venue option, but no workshop can be virtual and ice immersion obviously can't be. | Don't carry venue/format options into copy without checking them per service. |
| L-003 | 2026-11-02 | The brief calls the brand "forest green, gold and magenta", but the live CSS is magenta-led (`--magenta:#8B2252`, `--ocre:#C39432`), while the logo PNG is forest green + gold. | Check the real files, not descriptions, before setting design tokens. |
| L-004 | 2026-11-02 | The live site already runs GA4 (`G-9WZYHE19G0`). | Possible WhatsApp baseline already exists — check before asking Carolyn. |
| L-005 | 2026-11-02 | The 4 photos on the live site look AI-generated (generic models, an "Almati" banner in the scene), yet show the 4 sessions as if they happened. The brief says no real session photos exist. | Decide whether to keep them, label them as illustrative, or replace with stock before launch (honesty rule, D-006). |
| L-006 | 2026-11-02 | `git push` over HTTPS failed without prompting: macOS Keychain (`osxkeychain` helper) held an old GitHub password. | Clear it with `printf "protocol=https\nhost=github.com\n\n" \| git credential-osxkeychain erase`, then push with a fine-grained token. |
| L-007 | 2026-11-02 | Astro 7 `astro dev` detaches and exits (prints a pid; stop with `astro dev stop`). The in-app browser's `preview_start` by name still looks in the old `alamati` folder. | Start the dev server with Bash, open `http://localhost:4321` by URL. |
| L-008 | 2026-11-02 | The nodejs.org download page installed Node 26, not the 24 pinned in `.nvmrc`. | When asking Mario to install a tool, give the exact version-pinned file/command and check the result before building. |
