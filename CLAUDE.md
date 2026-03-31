# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal resume/portfolio website for Daniel Zavala, built as a single-page Next.js application deployed to Firebase Hosting.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — static export build (outputs to `out/`)
- `npm run lint` — run ESLint
- `firebase deploy` — deploy to Firebase Hosting (project: my-cv-511f4)

## Architecture

- **Next.js 14** with App Router, configured for **static export** (`output: "export"` in next.config.mjs)
- **Single page app**: `src/app/page.tsx` renders all sections in order: Banner → About → Services → Skills → Experience → Contact → Footer
- **Styling**: Tailwind CSS + SCSS Modules (component-level `.module.scss` files). Fonts: Montserrat (body) and Kaushan Script (accent), loaded via `next/font/google`
- **Animations**: react-typed for typing effects, tailwindcss-animatecss plugin (only `fadeInRight` used in NavItem)
- **Path alias**: `@/*` maps to `./src/*`
- **Metadata**: OG/Twitter tags are managed via the Next.js `metadata` export in `layout.tsx` — do not add raw `<meta>` tags in JSX

## Key Patterns

- Section components live in `src/components/sections/<Name>/` and accept an `id` prop for nav anchor linking
- Static data for sections is co-located in `Values.ts` or `allSkills.ts` files alongside their components
- Navigation: desktop `Navbar` + mobile `ResponsiveNav`, with `NavItem`/`MobileNavItem` components
- Layout (`src/app/layout.tsx`) wraps all pages with Header, Navbar, and ResponsiveNav
- Social media data is centralized in `src/components/sections/Skills/utils.tsx` (`socialMedia` array) — Header, Footer, Contact, and ResponsiveNav all import from there. Do not duplicate this data.
- Semantic HTML: Header uses `<header>`, Footer uses `<footer>`, Navbar uses `<nav>`

## Session Changes (2026-03-31)

- Navbar migrated from right-side vertical to top fixed horizontal; hides on first screen, appears after 50px scroll; active section tracked via `IntersectionObserver`
- `ResponsiveNav` rewritten to accept `{ showMenu, onClose }` props — state managed by `Navbar`
- No separate `Header` component — removed from `layout.tsx`; `{children}` wrapped in `<div className="pt-14">`
- `Banner.tsx`: `useScroll` targets section directly (no `.page` container); scroll on `body`/`window`
- Smooth scroll: `scroll-behavior: smooth` on `html`; scroll snap: `scroll-snap-type: y mandatory` + `scroll-snap-align: proximity` on sections
- Timeline: type-based icon colors via `getTypeStyle()` (Education=purple, Teaching=green, Work=blue) + Framer Motion stagger animations per item
- Contact: glassmorphism cards, brand colors per platform, copy-to-clipboard email
- Footer: 3-column layout (name | copyright | socials)
- **Gotcha**: Never use `backdrop-filter` in `.module.scss` — crashes Next.js SCSS compiler; use Tailwind `backdrop-blur-*`

## Conventions

- External links must use `target="_blank" rel="noopener noreferrer"` (never `target="blank"`)
- Icon-only links must include `aria-label={title}` for screen reader accessibility
- Touch targets on interactive elements should be at least 44x44px (use `p-3` minimum on icon links)
- Headings must use responsive font sizes (e.g., `text-3xl md:text-5xl`, not fixed `text-5xl`)
- Tailwind responsive classes follow mobile-first: base → `sm:` → `md:` → `lg:` → `xl:`
- The mobile menu (ResponsiveNav) closes on Escape key and backdrop click


agents:
  - name: "uiux-expert"
    description: "Experto en diseño UI/UX moderno"
    instructions_file: ".claude/agents/uiux-expert.md"
    model: "sonnet"
  
  - name: "frontend-dev"
    description: "Desarrollador frontend especializado"
    instructions_file: ".claude/agents/frontend-dev.md"
    model: "sonnet"
  
  - name: "team-lead"
    description: "Team lead coordinador"
    instructions_file: ".claude/agents/team-lead.md"
    model: "opus"