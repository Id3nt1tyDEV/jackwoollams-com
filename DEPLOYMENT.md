# DEPLOYMENT.md

## Cloudflare Pages

- Framework preset: `Astro`
- Install command: `pnpm install`
- Build command: `pnpm build`
- Build output directory: `dist`
- Deploy command: _(leave empty / disabled)_
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
2. Confirm Pages deploy command is empty (do not run `wrangler deploy` in Pages builds).
3. Run `pnpm install`, `pnpm format`, `pnpm lint`, and `pnpm build`.
4. Confirm `dist/sitemap-index.xml` and `dist/rss.xml` exist.
5. Deploy to Cloudflare Pages.

## Troubleshooting

- `docs/cloudflare-pages-build-auth-10000.md` contains the auth error 10000 decision path.
