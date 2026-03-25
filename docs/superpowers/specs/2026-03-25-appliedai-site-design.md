# Applied AI Club Website -- Design Spec

**Date:** 2026-03-25
**Author:** Andy Salvo + Claude
**Status:** Review Complete (Approved with Notes -- all notes addressed)

---

## Overview

A fresh website for the Applied AI Club at University Park, replacing the current Wix site at appliedaipsu.com. Built as a startup-style single-page scroll site with one standalone page (Explore AI), deployed to GitHub Pages. The repo is an agentic repo -- every architectural decision is documented so AI agents can maintain and extend it.

The site connects to an existing Google Sheets mailing list via a Google Apps Script web app. This is the only external integration at launch.

## Official Naming

- **Penn State Discover:** Applied AI Club at University Park
- **General use:** Applied AI
- **Repo:** `appliedai` (github.com/andysalvo/appliedai)
- **Formal/legal contexts:** "Applied AI Club at University Park" (footer disclaimer, about section)
- **Never:** "Penn State Applied AI" (violates AD07 -- institution name cannot precede org name)

## Design Direction

Startup-style site with personality. Inspired by Visual Electric, V7 Labs, Flora, and Unagi Games (see reference video). Key principles:

1. **Scroll animations that make you want to keep scrolling.** Every section has an entrance. Not gratuitous -- purposeful motion that reveals content.
2. **Generous spacing.** Bento-style grids, large padding between sections (py-24 to py-32), elements breathe.
3. **Duo-tone typography.** Roboto Slab in Navy for display headlines at large scale, Inter in lighter weights for body/secondary. Strong scale contrast.
4. **White background.** Sections alternate white and subtle surface-alt for rhythm. No dark theme, no cream, no particle backgrounds.
5. **Subtle polish builds trust.** Micro-interactions on hover, smooth transitions, cursor-responsive touches. Details that go unnoticed consciously but build confidence.
6. **Personality over minimalism.** Not bland. Not AI slop. Honest, student-sounding, alive.

## Tech Stack

Identical to smealstudentaihub (proven, documented):

- Next.js 16, React 19, TypeScript strict
- Tailwind CSS v4 with `@theme` and `--color-*: initial` brand locking
- framer-motion (Motion) for scroll animations
- Static export (`output: 'export'`) to GitHub Pages
- Playwright + Jest testing scaffold
- ESLint 9 (flat config) + Prettier + commitlint + husky

## Design System

### Colors (Penn State brand tokens, locked in `@theme`)

| Token                 | Hex     | Usage                           |
| --------------------- | ------- | ------------------------------- |
| `--color-navy`        | #001E44 | Primary dark, headlines, footer |
| `--color-beaver-blue` | #1E407C | Buttons, links, interactive     |
| `--color-pugh-blue`   | #96BEE6 | Accents, secondary backgrounds  |
| `--color-pa-sky`      | #009CDE | Link hover, active indicators   |
| `--color-white`       | #FFFFFF | Primary background              |
| `--color-surface`     | #F3F4F6 | Alternate section backgrounds   |
| `--color-surface-alt` | #EEF3FA | Subtle blue-tinted surface      |
| `--color-text`        | #1A1F2E | Body text                       |
| `--color-muted`       | #4B5563 | Secondary text                  |
| `--color-border`      | #E2E5EA | Borders, dividers               |

### Typography

- **Display:** Roboto Slab (300, 400, 500, 600, 700) via next/font
- **Body:** Inter (300, 400, 500, 600, 700) via next/font
- **Scale contrast:** Hero headlines at clamp(3rem, 6vw, 5rem), section headers at clamp(2rem, 4vw, 3rem), body at 15-16px

### Spacing

- Base unit: 4px
- Section padding: py-24 to py-32 (generous, startup feel)
- Card padding: px-6 py-8 to px-8 py-10
- Grid gaps: gap-6 to gap-8
- Max content width: max-w-6xl mx-auto px-6

### Border Radius

- sm: 4px, md: 8px, lg: 12px, xl: 16px

### Transitions

- Global easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Standard duration: 300ms for interactions, 500ms for entrance animations
- Stagger delay: 80-120ms between items

## Page Structure

### Navigation

Glass blur header (bg-white/85 backdrop-blur-xl). Non-sticky -- the nav sits at the top and scrolls away with the page. The glass blur serves the hero section where gradient accents sit behind it. Once the nav leaves the viewport, users scroll through full-bleed content sections. This is intentional: the site is a single scroll experience, not a utility app that needs persistent nav.

Nav items:

- What We Do (anchor: #what-we-do)
- Labs (anchor: #labs)
- Team (anchor: #team)
- Explore AI (link: /explore)
- Join (anchor: #join -- styled as CTA button)

Mobile: hamburger menu with slide-in panel.

### Home Page (single scroll, 6 sections)

**Section 1: Hero**

- Big headline: "Applied AI" in Roboto Slab, large scale
- Tagline: one line describing the club (from existing copy, not marketing-speak)
- Subtle scroll indicator (animated chevron or line)
- White background with gentle gradient blur accents (pugh-blue, navy at low opacity)
- Entrance animation: staggered text reveal

**Section 2: Mission**

- "Our Mission" heading
- Existing copy: "Our mission is to build a community where students can learn how AI is applied in real-world settings and explore the many ways it creates value in different areas of business."
- Supporting paragraph from current site
- Left-border accent, generous typography
- Scroll-triggered fade-in

**Section 3: What We Do** (id: what-we-do)

- Three-card bento grid for the pillars
- **Events and Programming:** "We host guest speakers, run tool walkthroughs, and discuss how AI is changing business and the workplace. Meetings are open to all Penn State students regardless of major or experience."
- **Applied AI Labs:** "Labs is the research and development arm of the Applied AI Club. We run experiments, build tools, and give members who want to go deeper a place to work on real projects with real AI systems."
- **Explore AI:** "We maintain a registry of AI tools worth knowing, organized for students at every level. From beginner-friendly assistants to the agentic tools shaping the industry, it is a good place to start." (links to /explore)
- Each card: distinct top accent color, staggered scroll-in
- Surface-alt background for this section

**Section 4: Labs Spotlight** (id: labs)

- Feature section showing what Labs has built
- Student AI Hub as the flagship project (with screenshot/mockup linking to the Hub)
- "Where We Are Going" direction (LangChain, RAG, vector databases, agents)
- "Submit your idea" link or callout (links to Google Form or future integration)
- Slide-in or parallax entrance animation

**Section 5: Our Team** (id: team)

- Officer cards: headshot, name, role, email
- Spring 2026 board: Ryan Einzig (President), Evan Chappell (Vice-President), Andy Salvo (Programming Lead), Brody Bell (Treasurer)
- Clean grid (2x2 on desktop, stacked on mobile)
- Intro line: "Meet our Spring 2026 executive board."
- Staggered grid reveal

**Section 6: Join** (id: join)

- Mailing list form (first name + email)
- Copy: conversational, not desperate. Something like "Stay in the loop" or "Get involved"
- GroupMe link nearby: "Students: Join our GroupMe"
- Contact email: appliedaipsu@gmail.com
- Surface-alt background to visually separate from content above

### Explore AI Page (/explore)

Standalone page with the tool registry. Carries over from current Wix site.

**Tools (8 at launch):**

- ChatGPT, Claude, Perplexity, Openclaw, Ollama, Cursor, v0, Codex
- Each tool: name, maker, one-line description, "what you can do with it" section, link
- Card-based layout with generous spacing
- Staggered scroll-in on the grid
- Intro section: "A list of essential AI tools worth knowing" (from current site)

**Data source:** `src/data/tools.ts` -- structured TypeScript array. Agents can add tools by editing one file.

```typescript
interface Tool {
  name: string
  maker: string
  description: string
  capabilities: string[]
  url: string
  category?: string
}
```

### Footer

Navy background (#001E44). Grouped links:

- Left: "Applied AI" brand, "at Penn State" secondary
- Center: Quick links (What We Do, Labs, Team, Explore AI, Join)
- Right: Contact (appliedaipsu@gmail.com), GroupMe link, LinkedIn
- Bottom bar: "This is a student organization website and does not represent official Penn State positions." + copyright

## Mailing List Architecture

```
[MailingListForm.tsx] --POST JSON--> [Google Apps Script Web App]
         |                                    |
         v                                    v
  [Show loading state]              [Validate + check dupe]
         |                                    |
         v                                    v
  [Show success/error]             [Append row to Sheet]
                                              |
                                              v
                                   [Return JSON response]
```

### Form Component (MailingListForm.tsx)

- Client component (`'use client'`)
- Fields: first name (required), email (required, validated)
- States: idle, submitting, success, error
- POSTs to `NEXT_PUBLIC_MAILING_LIST_ENDPOINT` env var
- Success message: "You're in. We'll be in touch."
- Error message: "Something went wrong. Try again or email us at appliedaipsu@gmail.com."
- No CAPTCHA at launch (Apps Script handles duplicate checking)

### Google Apps Script (mailing-list.gs)

- `doPost(e)` handler
- Parses JSON body: `{ firstName, email }`
- Validates email format
- Checks for duplicate email in sheet
- Appends row: `[timestamp, firstName, email, "website"]`
- Returns JSON: `{ success: true }` or `{ success: false, error: "..." }`
- Source of truth copy in repo: `scripts/google/mailing-list.gs`
- Deployed as "Execute as me, anyone can access"

**CORS implementation note:** Google Apps Script does not support OPTIONS preflight requests. To avoid CORS issues, the form component POSTs with `Content-Type: text/plain` (not `application/json`), which avoids triggering a preflight. The Apps Script parses the body as JSON server-side via `JSON.parse(e.postData.contents)`. The response uses `ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON)`. This is the proven pattern for static-site-to-Apps-Script communication. The CORS origin must allow both `andysalvo.github.io` (initial) and `appliedaipsu.com` (after domain switch).

### Sheet Structure

| Column A  | Column B   | Column C | Column D |
| --------- | ---------- | -------- | -------- |
| Timestamp | First Name | Email    | Source   |

The "Source" column distinguishes website submissions from other sources (manual adds, future integrations).

## Agentic Architecture

### AGENTS.md (canonical)

Six sections (proven pattern from smealstudentaihub):

1. **Commands** -- dev, build, preview, lint, format, test, e2e
2. **Project structure** -- directory tree with annotations
3. **Code style** -- TypeScript, Tailwind, component patterns
4. **Git workflow** -- branch naming, conventional commits, PR requirements
5. **Boundaries** -- always do, ask first, never do
6. **Google integration** -- how the Apps Script works, how to modify it, where the credentials live

### Architecture Decision Records (docs/decisions/)

- ADR-0001: Repo lineage and FFC attribution
- ADR-0002: Google Apps Script mailing list architecture
- ADR-0003: Design system (Penn State tokens + startup visual language)
- ADR-0004: Page structure (single scroll + explore page)
- Future ADRs for every significant decision

### Content as Data

All content that changes lives in data files, not buried in JSX:

| File                     | Contents                                                          | How agents update it                |
| ------------------------ | ----------------------------------------------------------------- | ----------------------------------- |
| `src/data/team.ts`       | Officer roster (name, role, email, photo path)                    | Edit array, add headshot to public/ |
| `src/data/tools.ts`      | Explore AI registry (name, maker, description, capabilities, url) | Edit array                          |
| `src/data/navigation.ts` | Nav items and anchor targets                                      | Edit array                          |
| `src/data/pillars.ts`    | What We Do section content                                        | Edit objects                        |
| `content/VOICE_BRIEF.md` | Writing style contract                                            | Read before writing any copy        |

### Agent Instruction Layers

- `AGENTS.md` -- canonical (all agents read this)
- `CLAUDE.md` -- Claude-specific thin layer. Points to AGENTS.md as canonical, adds Claude-specific rules: always run build before committing, use `@/` path alias, prefer Edit over Write for existing files. Keep under 50 lines.
- `GEMINI.md` -- Gemini-specific thin layer. Written fresh for the Applied AI context (not copied from sibling). Points to AGENTS.md, adds Gemini CLI tool mappings.
- `.github/copilot-instructions.md` -- Copilot thin layer
- `.claude/rules/` -- Security boundary rules (bash allowlist/denylist)

## Animation System

### Carry Forward from smealstudentaihub

- `FadeIn.tsx` -- scroll-triggered opacity 0->1, y +20->0, 0.5s
- `StaggerGrid.tsx` / `StaggerItem.tsx` -- staggered children reveal, 80ms delay

### New Components

- `ParallaxText.tsx` -- text that translates on scroll (useScroll + useTransform), for hero and section headers
- `SlideIn.tsx` -- horizontal entrance from left or right, configurable direction, for alternating content sections
- `RevealText.tsx` -- character-by-character or word-by-word text reveal on scroll, for the hero headline

### Bundle Optimization

- `LazyMotion` + `domAnimation` feature bundle (~4.6kb initial + 15kb lazy)
- Animations only on entrance (once: true), never on reading content
- Respect `prefers-reduced-motion`: all animation components check `useReducedMotion()` from framer-motion and skip animation when true. This is an accessibility requirement.

### Rule

"Always a hint of animation in every section, but never too much."

## CI/CD Pipeline

Adapted from smealstudentaihub:

### ci.yml (every PR + push to main)

- Prettier format check
- ESLint
- Jest unit tests
- Next.js build
- Playwright E2E (4 shards)

### deploy.yml (after CI succeeds on main)

- Rebuild with `NEXT_PUBLIC_BASE_PATH=/appliedai`
- Deploy to GitHub Pages
- Post-deploy smoke test

### lighthouse.yml (after deploy)

- 3 runs per page, median scores
- CI warning thresholds (floor, not target): Performance 55%, Accessibility 90%, Best Practices 65%, SEO 95%
- Target: Performance > 80% (see success criteria)

### codeql.yml (security scanning)

- JS/TS + GitHub Actions
- Weekly + on push to main

## Project Structure

```
appliedai/
  src/
    app/
      globals.css               # Tailwind v4 @theme with Penn State tokens
      layout.tsx                # Root layout (fonts, metadata)
      page.tsx                  # Home (single scroll, 6 sections)
      explore/
        page.tsx                # Explore AI tool registry
      not-found.tsx             # Custom 404 (brand colors, link home)
    components/
      header/
        index.tsx               # Glass nav bar
      footer/
        index.tsx               # Navy footer
      MailingListForm.tsx       # Google Sheets form (client component)
      ui/
        FadeIn.tsx              # Scroll-triggered fade
        StaggerGrid.tsx         # Staggered grid reveal
        ParallaxText.tsx        # Scroll-driven text parallax
        SlideIn.tsx             # Horizontal slide entrance
        RevealText.tsx          # Text reveal animation
    data/
      team.ts                   # Officer roster
      tools.ts                  # Explore AI registry
      navigation.ts             # Nav items
      pillars.ts                # What We Do content
    lib/
      fonts.ts                  # Inter + Roboto Slab
      siteMetadata.ts           # SEO metadata
      assetPath.ts              # GitHub Pages basePath helper
  content/
    VOICE_BRIEF.md              # Writing style contract (written fresh for club tone, not copied from Hub)
  public/
    images/
      team/                     # Officer headshots
    .nojekyll
  scripts/
    google/
      mailing-list.gs           # Version-controlled Apps Script source
  docs/
    decisions/                  # ADRs
    corpus/                     # Research (carried from smealstudentaihub where relevant)
  .github/
    workflows/
      ci.yml
      deploy.yml
      lighthouse.yml
      codeql.yml
    copilot-instructions.md
  .claude/
    settings.json               # Bash security boundaries
  .husky/
    pre-commit                  # Format + lint
    commit-msg                  # Commitlint
  AGENTS.md                     # Canonical agent instructions
  CLAUDE.md                     # Claude thin layer
  GEMINI.md                     # Gemini thin layer
  NOTICE                        # FFC attribution
  CONTRIBUTORS.md
  GOVERNANCE.md
  package.json
  tsconfig.json
  next.config.ts
  jest.config.js
  playwright.config.ts
  .prettierrc.json
  .prettierignore
  .gitignore
  .editorconfig
  postcss.config.mjs
  commitlint.config.js
  eslint.config.mjs
  lighthouserc.json
  .linkinatorrc.json
```

## Attribution

NOTICE and CONTRIBUTORS.md credit Clarke Moyer (@clarkemoyer) and the Free For Charity scaffold as the infrastructure origin. The lineage is: FFC template -> smealstudentaihub (first adaptation) -> appliedai (second adaptation, fresh repo). ADR-0001 documents this chain.

## What's NOT in v1

- Events calendar (future: Google Calendar integration)
- Google Sheets as CMS for content beyond the mailing list (future)
- Blog/news section (future: could mirror the Hub's AI News pattern)
- Member directory or login
- Analytics dashboard
- Idea submission form (Labs page on Wix had this -- future integration)
- Dark mode toggle

## Success Criteria

1. Site loads fast on GitHub Pages (Lighthouse performance > 80%)
2. Mailing list form works end-to-end (form -> Apps Script -> Sheet)
3. Any agent reading AGENTS.md can make a content change without human guidance
4. Andy looks at it and says it has the startup feel from the reference video
5. The Wix site can be retired once the domain switches over
