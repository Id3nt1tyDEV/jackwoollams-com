# jackwoollams-com

Professional portfolio for Jack Woollams focused on AI-related analytics work, contact centre performance, and reporting/analytics consulting.

## Stack
- Astro
- Tailwind CSS
- MDX
- Astro Content Collections
- pnpm

## Local development
All commands run from repo root.

- Install: `pnpm install`
- Dev server: `pnpm dev`
- Format: `pnpm format`
- Format check: `pnpm format:check`
- Lint/type checks: `pnpm lint`
- Build: `pnpm build`
- Preview: `pnpm preview`

## Cloudflare Pages settings
- Framework preset: `Astro`
- Install command: `pnpm install`
- Build command: `pnpm build`
- Build output directory: `dist`
- Node version: `20`

## Environment variables
- `SITE_URL` (recommended: `https://jackwoollams.com`)
- `PUBLIC_CF_ANALYTICS_TOKEN` (optional)

## Content model highlights
- Case studies live in `src/content/case-studies/`.
- Writing posts live in `src/content/writing/`.
- Listing and featured sections load content via `getCollection()`.
- Contact is email-only: `jackwoollams1@gmail.com`.

## SEO outputs
- Sitemap: `/sitemap-index.xml`
- RSS feed: `/rss.xml`

## Notes
- Keep `AUDIT_LOG.md` append-only.
- Follow `AGENT.md` for workflow and commit conventions.
- See `DEPLOYMENT.md` for deployment and release checklist.