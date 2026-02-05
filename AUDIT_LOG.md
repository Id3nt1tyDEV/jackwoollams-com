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

### 2026-02-05 14:15:15 +07:00

- Milestone: B
- Summary: Refined design tokens with deep navy accent, added active nav state (including Services), upgraded BaseLayout metadata/canonical support, and added robots.txt.
- Files changed:
  - src/styles/global.css
  - src/components/Nav.astro
  - src/layouts/BaseLayout.astro
  - public/robots.txt
- Commands executed:
  - WriteAllText src/styles/global.css
  - WriteAllText src/components/Nav.astro
  - WriteAllText src/layouts/BaseLayout.astro
  - WriteAllText public/robots.txt
- Notes/next steps:
  - Build reusable case study/service components and update pages/frontmatter to dynamic data-driven rendering.

### 2026-02-05 14:18:46 +07:00

- Milestone: B
- Summary: Added reusable case-study/service/tag components, standardized case-study MDX frontmatter schema, and rebuilt Home/Services/Case Studies pages around frontmatter-driven rendering.
- Files changed:
  - src/data/caseStudies.ts
  - src/components/CaseStudyCard.astro
  - src/components/ServiceCard.astro
  - src/components/TagPill.astro
  - src/styles/global.css
  - src/pages/index.astro
  - src/pages/services.astro
  - src/pages/case-studies/index.astro
  - src/pages/work/index.astro
  - src/pages/contact.astro
  - src/pages/case-studies/contact-centre-kpi-governance-reliability-controls.mdx
  - src/pages/case-studies/workforce-insights-time-in-motion-staffing-models.mdx
  - src/pages/case-studies/automation-uplift-reducing-manual-reporting.mdx
  - src/pages/case-studies/cross-provider-calibration-consistency-scale.mdx
- Commands executed:
  - pply_patch (add src/data/caseStudies.ts)
  - pply_patch (add src/components/TagPill.astro)
  - pply_patch (add src/components/CaseStudyCard.astro)
  - pply_patch (add src/components/ServiceCard.astro)
  - pply_patch (update src/styles/global.css)
  - WriteAllText for updated pages and MDX files
- Notes/next steps:
  - Update repo quality gates (scripts + CI), refresh README deployment docs, then run full verification commands.

### 2026-02-05 14:19:52 +07:00

- Milestone: B
- Summary: Updated quality gates (format check + astro lint), added GitHub Actions CI workflow, and refreshed README with Cloudflare Pages deployment settings.
- Files changed:
  - package.json
  - .github/workflows/ci.yml
  - README.md
- Commands executed:
  - pply_patch package.json
  - pply_patch add .github/workflows/ci.yml
  - WriteAllText README.md
- Notes/next steps:
  - Run required verification commands (pnpm install, pnpm format, pnpm lint, pnpm build) and log results.

### 2026-02-05 14:22:53 +07:00

- Milestone: B
- Summary: Completed required verification gates and installed @astrojs/check + ypescript so lint uses stro check successfully.
- Files changed:
  - package.json
  - pnpm-lock.yaml
  - AUDIT_LOG.md
- Commands executed:
  - pnpm add -D @astrojs/check typescript
  - pnpm install (pass)
  - pnpm format (pass)
  - pnpm lint (pass, 0 errors / 0 warnings)
  - pnpm build (pass, 9 pages built)
- Notes/next steps:
  - Finalize atomic commits for Milestone B and provide tree + review notes.

### 2026-02-05 14:34:01 +07:00

- Milestone: C
- Summary: Tightened Home and Services copy for client-safe claims, switched Home CTA priority to Email Jack, added 4-step engagement flow, and added focus-visible/accessibility styling.
- Files changed:
  - src/pages/index.astro
  - src/pages/services.astro
  - src/styles/global.css
- Commands executed:
  - pply_patch src/styles/global.css
  - WriteAllText src/pages/index.astro
  - WriteAllText src/pages/services.astro
- Verification run:
  - Deferred to final Milestone C verification gate (pnpm format, pnpm lint, pnpm build).
- Notes/next steps:
  - Enforce controlled case-study taxonomy and align filter UI/frontmatter.

### 2026-02-05 14:36:06 +07:00

- Milestone: C
- Summary: Enforced controlled case-study taxonomy in one source, validated tags in data loading, and updated case studies/filter UI to use only approved tags.
- Files changed:
  - src/data/taxonomy.ts
  - src/data/caseStudies.ts
  - src/pages/case-studies/index.astro
  - src/pages/case-studies/contact-centre-kpi-governance-reliability-controls.mdx
  - src/pages/case-studies/workforce-insights-time-in-motion-staffing-models.mdx
  - src/pages/case-studies/automation-uplift-reducing-manual-reporting.mdx
  - src/pages/case-studies/cross-provider-calibration-consistency-scale.mdx
- Commands executed:
  - pply_patch add src/data/taxonomy.ts
  - WriteAllText src/data/caseStudies.ts
  - WriteAllText src/pages/case-studies/index.astro
  - pply_patch update case-study tag fields
- Verification run:
  - Deferred to final Milestone C verification gate (pnpm format, pnpm lint, pnpm build).
- Notes/next steps:
  - Add Writing section routes/MDX stubs and include Writing in global navigation.

### 2026-02-05 14:37:05 +07:00

- Milestone: C
- Summary: Added Writing section with dynamic listing, three MDX stubs, reusable WritingCard component, and global nav link to /writing.
- Files changed:
  - src/components/Nav.astro
  - src/components/WritingCard.astro
  - src/data/writing.ts
  - src/pages/writing/index.astro
  - src/pages/writing/kpi-governance-under-delivery-pressure.mdx
  - src/pages/writing/making-reporting-automation-auditable.mdx
  - src/pages/writing/when-contact-centre-metrics-disagree.mdx
- Commands executed:
  - WriteAllText src/components/Nav.astro
  - WriteAllText src/components/WritingCard.astro
  - WriteAllText src/data/writing.ts
  - WriteAllText src/pages/writing/index.astro
  - WriteAllText src/pages/writing/\*.mdx
- Verification run:
  - Deferred to final Milestone C verification gate (pnpm format, pnpm lint, pnpm build).
- Notes/next steps:
  - Final SEO hardening review for canonical/OG defaults and robots production indexing settings.

### 2026-02-05 14:38:01 +07:00

- Milestone: C
- Summary: Hardened SEO defaults by ensuring canonical/OG URL resolution is production-site based and updated robots.txt sitemap target for production indexing.
- Files changed:
  - src/layouts/BaseLayout.astro
  - public/robots.txt
- Commands executed:
  - pply_patch src/layouts/BaseLayout.astro
  - pply_patch public/robots.txt
- Verification run:
  - Deferred to final Milestone C verification gate (pnpm format, pnpm lint, pnpm build).
- Notes/next steps:
  - Run full formatting/lint/build checks and record final verification results.

### 2026-02-05 14:39:01 +07:00
- Milestone: C
- Summary: Completed Milestone C verification gates after content, taxonomy, writing, and SEO updates.
- Files changed:
  - AUDIT_LOG.md
- Commands executed:
  - pnpm format (pass)
  - pnpm lint (pass; astro check reported 0 errors, 0 warnings)
  - pnpm build (pass; 13 pages built)
- Verification run:
  - pnpm format: pass
  - pnpm lint: pass
  - pnpm build: pass
- Notes/next steps:
  - Commit final audit updates and share Milestone C Chat Relay summary.

### 2026-02-05 14:39:46 +07:00
- Milestone: C
- Summary: Applied Prettier normalization after Milestone C updates to keep formatting consistent across new/updated page, data, and component files.
- Files changed:
  - src/components/Nav.astro
  - src/components/WritingCard.astro
  - src/data/caseStudies.ts
  - src/data/taxonomy.ts
  - src/data/writing.ts
  - src/layouts/BaseLayout.astro
  - src/pages/case-studies/index.astro
  - src/pages/index.astro
  - src/pages/services.astro
  - src/pages/writing/index.astro
  - src/pages/writing/kpi-governance-under-delivery-pressure.mdx
  - src/pages/writing/making-reporting-automation-auditable.mdx
  - src/pages/writing/when-contact-centre-metrics-disagree.mdx
  - AUDIT_LOG.md
- Commands executed:
  - pnpm format
- Verification run:
  - pnpm format: pass
- Notes/next steps:
  - Commit formatting-only normalization and provide final Chat Relay summary with verification + commits.

### 2026-02-05 16:40:01 +07:00
- Milestone: D
- Summary: Added /about page, added /about nav link, and added two client-safe testimonial excerpts (Ruel + Amita) on Home.
- Files changed:
  - src/pages/about.astro
  - src/components/Nav.astro
  - src/pages/index.astro
- Commands executed:
  - pply_patch src/components/Nav.astro
  - pply_patch src/pages/index.astro
  - pply_patch add src/pages/about.astro
- Verification run:
  - Deferred to Milestone D/E final verification gate (pnpm install, pnpm format, pnpm lint, pnpm build).
- Notes/next steps:
  - Migrate case studies and writing to Astro Content Collections with schema validation and dynamic detail pages.

### 2026-02-05 16:43:56 +07:00
- Milestone: D
- Summary: Migrated case studies and writing to Astro Content Collections with schema validation, converted loaders to getCollection(), added dynamic detail routes with back links, and removed page-based MDX duplicates.
- Files changed:
  - src/content/config.ts
  - src/content/case-studies/*.mdx
  - src/content/writing/*.mdx
  - src/data/caseStudies.ts
  - src/data/writing.ts
  - src/pages/index.astro
  - src/pages/case-studies/index.astro
  - src/pages/case-studies/[slug].astro
  - src/pages/writing/index.astro
  - src/pages/writing/[slug].astro
  - src/pages/case-studies/*.mdx (deleted)
  - src/pages/writing/*.mdx (deleted)
- Commands executed:
  - WriteAllText src/content/config.ts
  - WriteAllText src/content/case-studies/*.mdx
  - WriteAllText src/content/writing/*.mdx
  - WriteAllText src/data/caseStudies.ts
  - WriteAllText src/data/writing.ts
  - WriteAllText src/pages/case-studies/[slug].astro
  - WriteAllText src/pages/writing/[slug].astro
  - cmd /c del /q src/pages/case-studies/*.mdx
  - cmd /c del /q src/pages/writing/*.mdx
- Verification run:
  - Deferred to Milestone D/E final verification gate (pnpm install, pnpm format, pnpm lint, pnpm build).
- Notes/next steps:
  - Add skip link + 404 accessibility polish, then implement sitemap/rss/cloudflare deployment hardening.
