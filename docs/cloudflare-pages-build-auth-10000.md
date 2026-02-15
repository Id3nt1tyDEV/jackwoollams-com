# Cloudflare Pages Build Auth Error 10000

## Symptom

Cloudflare build logs show:

- `A request to the Cloudflare API (/accounts/<acct>/pages/projects/<project>) failed. Authentication error [code: 10000]`
- Wrangler reports it is reading `CLOUDFLARE_API_TOKEN` from environment variables.

## Root Cause

This happens when the Pages project is configured to run a Wrangler deploy command during the build (for example `npx wrangler deploy` or `wrangler pages deploy`), and the token/account context is missing, wrong, or under-scoped.

For Git-integrated Pages, Wrangler deploy is usually unnecessary because Pages already deploys the build output automatically.

## Preferred Fix (Option A)

Use Cloudflare Pages as intended for Git-based deployments:

1. Build command: `pnpm build`
2. Build output directory: `dist`
3. Deploy command: leave empty / disabled

Also remove deploy-token variables from the Pages build environment if they are only there for Wrangler deploy:

- `CLOUDFLARE_API_TOKEN`
- `CF_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID` (only needed for Wrangler CLI deploy flows)

## If Wrangler Deploy Is Required (Option B)

Only use this when you intentionally deploy from CI/CLI.

Minimum requirements:

1. Token belongs to a user that has access to the target account and Pages project.
2. Token includes Pages write permissions (Pages edit/deploy scope).
3. `CLOUDFLARE_ACCOUNT_ID` is set explicitly to the correct account.
4. Use Pages deploy command, not Worker deploy command:
   - `npx wrangler pages deploy dist --project-name <project>`

## Verification Checklist

1. Confirm Pages settings:
   - Build command: `pnpm build`
   - Output directory: `dist`
   - No deploy command
2. Trigger a new build.
3. Confirm logs show build steps only (no Wrangler deploy invocation).
