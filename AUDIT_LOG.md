# AUDIT_LOG.md

## Rules

- Append-only log.
- Add one entry for every file-modification step.
- Never rewrite history; corrections are added as new entries.

## Entry Template

- Date/time:
- Milestone:
- Summary:
- Files changed:
  - `path/to/file`
- Commands executed:
  - `command`
- Notes/next steps:

---

## Entries

### 2026-02-05 13:55 local

- Milestone: A
- Summary: Created root working instructions and audit log framework.
- Files changed:
  - `AGENT.md`
  - `AUDIT_LOG.md`
- Commands executed:
  - `Set-Content AGENT.md`
  - `Set-Content AUDIT_LOG.md`
- Notes/next steps:
  - Scaffold Astro minimal + TypeScript and continue append-only entries.

### 2026-02-05 13:51 local

- Milestone: A
- Summary: Scaffolded Astro minimal TypeScript project and copied generated project files into repo root.
- Files changed:
  - `.gitignore`
  - `astro.config.mjs`
  - `package.json`
  - `pnpm-lock.yaml`
  - `README.md`
  - `tsconfig.json`
  - `src/pages/index.astro`
  - `public/*`
  - `.vscode/*`
  - `node_modules/*`
- Commands executed:
  - `pnpm create astro@latest . -- --template minimal --typescript strict --install --yes --no-git`
  - `Copy-Item -Recurse -Force tremendous-trappist\* .`
  - `Copy-Item -Recurse -Force tremendous-trappist\src .`
  - `Copy-Item -Recurse -Force tremendous-trappist\public .`
  - `Copy-Item -Force tremendous-trappist\[config files] .`
- Notes/next steps:
  - Remove temporary scaffold folder and add Tailwind + MDX integrations.

### 2026-02-05 13:52 local

- Milestone: A
- Summary: Removed temporary Astro scaffold folder after copying required files to root.
- Files changed:
  - `tremendous-trappist/*` (deleted temporary generated folder)
- Commands executed:
  - `cmd /c rmdir /s /q tremendous-trappist`
- Notes/next steps:
  - Configure Tailwind and MDX via official Astro integrations.

### 2026-02-05 13:54 local

- Milestone: A
- Summary: Installed dependencies cleanly and added official Astro Tailwind + MDX integrations.
- Files changed:
  - `package.json`
  - `pnpm-lock.yaml`
  - `astro.config.mjs`
  - `src/styles/global.css`
- Commands executed:
  - `$env:CI='true'; pnpm install`
  - `$env:CI='true'; pnpm astro add tailwind --yes`
  - `$env:CI='true'; pnpm astro add mdx --yes`
- Notes/next steps:
  - Add Prettier configuration and scaffold required pages/components/layout with first-draft copy.

### 2026-02-05 13:58 local

- Milestone: A
- Summary: Added base layout/components, required pages, four case study stubs, and Prettier setup; formatting run failed due BOM in package.json.
- Files changed:
  - `package.json`
  - `.prettierrc`
  - `.prettierignore`
  - `src/styles/global.css`
  - `src/layouts/BaseLayout.astro`
  - `src/components/Nav.astro`
  - `src/components/Footer.astro`
  - `src/pages/index.astro`
  - `src/pages/work/index.astro`
  - `src/pages/case-studies/index.astro`
  - `src/pages/contact.astro`
  - `src/pages/case-studies/contact-centre-kpi-governance-reliability-controls.mdx`
  - `src/pages/case-studies/workforce-insights-time-in-motion-staffing-models.mdx`
  - `src/pages/case-studies/automation-uplift-reducing-manual-reporting.mdx`
  - `src/pages/case-studies/cross-provider-calibration-consistency-scale.mdx`
  - `pnpm-lock.yaml`
- Commands executed:
  - `pnpm add -D prettier prettier-plugin-astro`
  - `Set-Content [files above]`
  - `pnpm format` (failed: BOM in `package.json`)
- Notes/next steps:
  - Rewrite `package.json` without BOM, run `pnpm format`, then continue with verification.

### 2026-02-05 14:00 local

- Milestone: A
- Summary: Fixed BOM issue in `package.json`, then successfully ran Prettier format and check.
- Files changed:
  - `package.json`
  - `pnpm-lock.yaml`
  - `AGENT.md`
  - `AUDIT_LOG.md`
  - `astro.config.mjs`
  - `src/components/Footer.astro`
  - `src/components/Nav.astro`
  - `src/layouts/BaseLayout.astro`
  - `src/pages/index.astro`
  - `src/pages/work/index.astro`
  - `src/pages/case-studies/index.astro`
  - `src/pages/contact.astro`
  - `src/pages/case-studies/*.mdx`
  - `src/styles/global.css`
  - `.prettierrc`
- Commands executed:
  - `[System.IO.File]::WriteAllText(... package.json ..., UTF8 no BOM)`
  - `pnpm format`
  - `pnpm lint`
- Notes/next steps:
  - Run `pnpm dev` startup check and `pnpm build` verification.

### 2026-02-05 14:01 local
- Milestone: A
- Summary: Fixed MDX frontmatter quoting, verified dev startup, stabilized build script for Windows/Node behavior, and confirmed successful production build.
- Files changed:
  - `src/pages/case-studies/automation-uplift-reducing-manual-reporting.mdx`
  - `src/pages/case-studies/cross-provider-calibration-consistency-scale.mdx`
  - `src/pages/case-studies/workforce-insights-time-in-motion-staffing-models.mdx`
  - `package.json`
  - `AUDIT_LOG.md`
  - `dist/*` (generated)
- Commands executed:
  - `pnpm build` (initial failure: MDX YAML)
  - `pnpm astro build` (success)
  - `pnpm format`
  - `pnpm dev --host 127.0.0.1 --port 4321` (startup verified via `dev.out.log`)
  - `pnpm build` (final success)
  - `cmd /c "del /q dev.out.log dev.err.log"`
- Notes/next steps:
  - Commit Milestone A changes and share tree + Cloudflare Pages build draft + Chat Relay summary.
