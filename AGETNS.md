# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Karpathy Skills

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

## Execution Model

How Karpathy Skills and gstack work together:

- **Always apply Karpathy principles before using any gstack skill** — think and simplify first, then invoke the workflow tool.
- **Prefer the simplest viable solution before planning or coding** — `/autoplan` is for non-trivial tasks; skip it for small, obvious changes.
- **Avoid over-engineering during gstack workflows** — each gstack phase (Plan → Build → Review) should produce the minimum output needed to advance to the next phase.
- **If a plan becomes complex, stop and simplify before proceeding** — use `/office-hours` to re-clarify scope rather than pushing forward with a bloated plan.

---

## gstack

gstack is installed at `~/.claude/skills/gstack`. Use it for structured development workflows.

**Web browsing:** Always use `/browse` from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

**Core workflow:**
```
Think → Plan → Build → Review → Test → Ship
```

**Recommended commands:**

| Command | Purpose |
|---|---|
| `/office-hours` | Clarify problem scope before starting |
| `/autoplan` | Generate a structured implementation plan |
| `/review` | Validate code quality and correctness |
| `/qa` | Test behavior end-to-end |
| `/ship` | Finalize and land changes |

---

## Commands

```bash
# Development
bun run dev          # Start Vite dev server

# Build
bun run build        # Production build + generates sitemap (scripts/generate-sitemap.js)
bun run build:dev    # Development build

# Lint & Test
bun run lint         # ESLint
bun run test         # Vitest (single run)
bun run test:watch   # Vitest (watch mode)

# Preview
bun run preview      # Preview production build
```

Run a single test file:
```bash
bunx vitest run src/path/to/file.test.ts
```

## Architecture

This is a React 18 + TypeScript + Vite SPA for **BYCI (Build Your Career Institute)**, a professional training platform targeting GCC (Gulf) professionals. The app is fully bilingual (English/Arabic) with RTL support.

### i18n / Language System

The entire UI is driven by `LanguageContext` ([src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx)):
- `lang` is `'en' | 'ar'`, persisted to `localStorage` as `byci-lang`
- `t` exposes the full translation object from [src/data/translations.ts](src/data/translations.ts)
- `isRTL` / `dir` control document-level text direction (set on `<html>`)
- On first visit, `showSplash` is `true` and the app renders `SplashScreen` instead of the router — this gate lives in `AppContent` in [src/App.tsx](src/App.tsx)
- All data objects (programs, blog articles) carry parallel `*En` / `*Ar` fields rather than going through the translation system

### Data Layer

All content is static TypeScript:
- [src/data/programs.ts](src/data/programs.ts) — `Program[]` with bilingual fields for title, description, overview, outcomes, modules, instructor, certification, FAQ. Helper functions `getCategoryLabel` / `getLevelLabel`.
- [src/data/blog.ts](src/data/blog.ts) — `BlogArticle[]` with bilingual fields. Helper `getBlogCategoryLabel`.
- [src/data/translations.ts](src/data/translations.ts) — Full UI string map for both languages (nav, hero, sections, forms, etc.)

### Routing

Routes defined in [src/App.tsx](src/App.tsx) via React Router v6:
- `/` → Index, `/programs` → Programs, `/programs/:id` → ProgramDetail
- `/about`, `/contact`, `/corporate`, `/certifications`, `/enrollment`
- `/blog`, `/blog/:id` → BlogDetail

### Component Structure

- `src/components/Layout.tsx` — wraps every page with `Header`, `Footer`, and a floating `WhatsAppButton`
- `src/components/ui/` — shadcn/ui primitives (Radix UI based); do not edit these manually
- Custom components: `ProgramCard`, `TestimonialCard`, `NavLink`, `SplashScreen`

### Styling

- Tailwind CSS with a custom theme in [tailwind.config.ts](tailwind.config.ts)
- Custom color tokens: `navy`, `navy-light`, `accent-light`, `section-bg` (all CSS variables)
- Custom font families: `font-en` (Inter) and `font-ar` (Cairo)
- Path alias `@/` maps to `src/`

### Testing

Vitest + jsdom + `@testing-library/react`. Setup in [src/test/setup.ts](src/test/setup.ts). Tests live alongside source in `src/**/*.{test,spec}.{ts,tsx}`.

### SEO

Pages use `react-helmet-async` (`HelmetProvider` wraps the app). Sitemap is generated post-build via `scripts/generate-sitemap.js`.
