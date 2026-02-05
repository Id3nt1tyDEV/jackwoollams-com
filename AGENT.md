# AGENT.md

## Working Rules

- Keep `AUDIT_LOG.md` append-only. Never edit or delete prior entries.
- Every file-modification step must include a new appended audit entry before the step is complete.
- Use small Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`.
- Run commands from repo root.
- Prefer minimal, consultant-style implementation and content.

## Formatting Conventions

- Use TypeScript for Astro project files.
- Use Tailwind for styling and keep visuals clean, credible, and responsive.
- Keep copy concise and professional.
- Format with Prettier + `prettier-plugin-astro`.

## Milestone Definition Of Done

- Milestone A: Repo initialized, Astro minimal scaffolded with TypeScript, Tailwind + MDX configured, required pages/layout/components created, `pnpm dev` starts, `pnpm build` passes.
- Milestone B: Layout/navigation/home page refined and responsive.
- Milestone C: Work + case studies section complete with stub content.
- Milestone D: Writing/notes section scaffolded (stub acceptable).
- Milestone E: Cloudflare Pages configuration documented and build verified.

## Local Commands

- Install: `pnpm install`
- Dev: `pnpm dev`
- Build: `pnpm build`
- Preview: `pnpm preview`

## Cloudflare Pages Build Settings (Draft)

- Framework preset: `Astro`
- Build command: `pnpm build`
- Build output directory: `dist`
- Install command: `pnpm install`
- Node.js version: `20`
