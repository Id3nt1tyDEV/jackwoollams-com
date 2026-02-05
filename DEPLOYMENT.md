# DEPLOYMENT.md

## Cloudflare Pages
- Framework preset: `Astro`
- Install command: `pnpm install`
- Build command: `pnpm build`
- Build output directory: `dist`
- Node version: `20`

## Environment Variables
- `SITE_URL`
  - Production site base URL used for canonical tags, sitemap, and RSS.
  - Recommended value: `https://jackwoollams.com`
- `PUBLIC_CF_ANALYTICS_TOKEN` (optional)
  - Enables Cloudflare Web Analytics beacon when present.

## Generated SEO Outputs
- Sitemap: `/sitemap-index.xml`
- RSS feed: `/rss.xml`

## Deployment Checklist
1. Confirm `SITE_URL` is set correctly.
2. Run `pnpm install`, `pnpm format`, `pnpm lint`, and `pnpm build`.
3. Confirm `dist/sitemap-index.xml` and `dist/rss.xml` exist.
4. Deploy to Cloudflare Pages.