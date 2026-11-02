# enalmati.com

Single-page site for En Almati (corporate wellbeing, Lima). Astro, static, deployed on Vercel.

Project docs start at [`CLAUDE.md`](CLAUDE.md) → [`docs/STATUS.md`](docs/STATUS.md).

## Develop

Requires Node ≥ 22.18 (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm test         # WhatsApp link checks
npm run build    # → dist/
```

## Layout

```
src/
  pages/index.astro          the page: sections in the order fixed by research/01
  components/sections/       one component per section
  components/WhatsAppButton  the only CTA; takes a message key
  data/whatsapp.ts           the 8 pre-filled messages + waLink()
  data/contact.ts            phone, email
  styles/tokens.css          design tokens
  assets/images/             logo + photos (optimized by astro:assets)
reference/current-site/      snapshot of the live site; not deployed
```
