# Applied AI Club Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a startup-style website for the Applied AI Club at University Park, deployed to GitHub Pages, with a Google Sheets mailing list integration.

**Architecture:** Fresh Next.js 16 repo with static export. Single-page scroll home (6 sections) + Explore AI standalone page. Content lives in TypeScript data files for agentic maintainability. Mailing list form POSTs to Google Apps Script. All infrastructure patterns (CI/CD, hooks, testing, agent instructions) adapted from the proven smealstudentaihub sibling.

**Tech Stack:** Next.js 16, React 19, TypeScript strict, Tailwind CSS v4, framer-motion, Playwright, Jest, GitHub Pages

**Spec:** `docs/superpowers/specs/2026-03-25-appliedai-site-design.md`

**Sibling reference:** `/Users/andysalvo_1/Documents/GitHub/smealstudentaihub/` (do NOT copy files blindly -- adapt each for the Applied AI context)

---

## File Map

### Config & Root Files (Task 1)

- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `.prettierrc.json`
- Create: `.prettierignore`
- Create: `.gitignore`
- Create: `.editorconfig`
- Create: `commitlint.config.js`
- Create: `eslint.config.mjs`
- Create: `jest.config.js`
- Create: `jest.setup.js`
- Create: `lighthouserc.json`
- Create: `.linkinatorrc.json`

### Attribution & Governance (Task 2)

- Create: `NOTICE`
- Create: `CONTRIBUTORS.md`
- Create: `GOVERNANCE.md`
- Create: `LICENSE`

### Agent Instructions (Task 3)

- Create: `AGENTS.md`
- Create: `CLAUDE.md`
- Create: `GEMINI.md`
- Create: `.github/copilot-instructions.md`
- Create: `.claude/settings.json`

### ADRs (Task 4)

- Create: `docs/decisions/0001-repo-lineage-and-ffc-attribution.md`
- Create: `docs/decisions/0002-google-apps-script-mailing-list.md`
- Create: `docs/decisions/0003-design-system.md`
- Create: `docs/decisions/0004-page-structure.md`

### Design System & Layout (Task 5)

- Create: `src/app/globals.css`
- Create: `src/lib/fonts.ts`
- Create: `src/lib/siteMetadata.ts`
- Create: `src/lib/assetPath.ts`
- Create: `src/app/layout.tsx`
- Create: `public/.nojekyll`

### Animation Components (Task 6)

- Create: `src/components/ui/FadeIn.tsx`
- Create: `src/components/ui/StaggerGrid.tsx`
- Create: `src/components/ui/SlideIn.tsx`
- Create: `src/components/ui/RevealText.tsx`
- Create: `src/components/ui/ParallaxText.tsx`

### Data Files (Task 7)

- Create: `src/data/navigation.ts`
- Create: `src/data/team.ts`
- Create: `src/data/pillars.ts`
- Create: `src/data/tools.ts`

### Header & Footer (Task 8)

- Create: `src/components/header/index.tsx`
- Create: `src/components/footer/index.tsx`

### Home Page (Task 9)

- Create: `src/app/page.tsx`

### Mailing List Form (Task 10)

- Create: `src/components/MailingListForm.tsx`
- Create: `scripts/google/mailing-list.gs`

### Explore AI Page (Task 11)

- Create: `src/app/explore/page.tsx`

### 404 Page (Task 12)

- Create: `src/app/not-found.tsx`

### Voice Brief (Task 13)

- Create: `content/VOICE_BRIEF.md`

### CI/CD (Task 14)

- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/deploy.yml`
- Create: `.github/workflows/lighthouse.yml`
- Create: `.github/workflows/codeql.yml`

### Git Hooks (Task 15)

- Create: `.husky/pre-commit`
- Create: `.husky/commit-msg`

### Mailing List Env Example (Task 10)

- Create: `.env.local.example`

### Playwright Config (Task 16)

- Create: `playwright.config.ts`
- Create: `tests/home.spec.ts`

---

## Tasks

### Task 1: Initialize repo and install dependencies

**Files:**

- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `.prettierrc.json`
- Create: `.prettierignore`
- Create: `.gitignore`
- Create: `.editorconfig`
- Create: `commitlint.config.js`
- Create: `eslint.config.mjs`
- Create: `jest.config.js`
- Create: `jest.setup.js`
- Create: `lighthouserc.json`
- Create: `.linkinatorrc.json`

- [ ] **Step 1: Initialize git repo**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai
git init
```

- [ ] **Step 2: Create package.json**

```json
{
  "name": "appliedai",
  "version": "0.1.0",
  "description": "Website for the Applied AI Club at University Park. Built by students, maintained by agents.",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "preview": "npx serve out -l 3000",
    "lint": "eslint",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "check-links": "linkinator ./out --recurse --config .linkinatorrc.json",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:headed": "playwright test --headed",
    "test:smoke": "playwright test tests/home.spec.ts",
    "prepare": "husky"
  },
  "dependencies": {
    "framer-motion": "^12.23.25",
    "lucide-react": "^0.555.0",
    "next": "^16.0.10",
    "postcss": "^8.5.6",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "devDependencies": {
    "@axe-core/react": "^4.11.0",
    "@commitlint/cli": "^20.2.0",
    "@commitlint/config-conventional": "^20.2.0",
    "@eslint/eslintrc": "^3",
    "@lhci/cli": "^0.15.1",
    "@playwright/test": "^1.57.0",
    "@tailwindcss/postcss": "^4.1.17",
    "@testing-library/dom": "^10.4.1",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.0",
    "@types/jest": "^30.0.0",
    "@types/node": "^24",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.0.7",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.4",
    "husky": "^9.1.7",
    "jest": "^30.2.0",
    "jest-axe": "^10.0.0",
    "jest-environment-jsdom": "^30.2.0",
    "linkinator": "^7.5.1",
    "prettier": "^3.7.4",
    "tailwindcss": "^4.1.12",
    "typescript": "^5"
  }
}
```

Note: MDX deps (`@mdx-js/loader`, `@mdx-js/react`, `@next/mdx`, `@types/mdx`) are omitted. This site uses TypeScript data files, not MDX content.

- [ ] **Step 3: Create next.config.ts**

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
```

Note: No MDX plugin. Simpler than sibling.

- [ ] **Step 4: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Create postcss.config.mjs**

```javascript
const config = {
  plugins: ['@tailwindcss/postcss'],
}

export default config
```

- [ ] **Step 6: Create .prettierrc.json**

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

- [ ] **Step 7: Create .prettierignore**

```
node_modules
.next
out
build
coverage
test-results
playwright-report
.lighthouseci
```

- [ ] **Step 8: Create .gitignore**

```
# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage
/test-results/
/playwright-report/
/playwright/.cache/
/.lighthouseci/

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files
.env*

# typescript
*.tsbuildinfo
next-env.d.ts
```

- [ ] **Step 9: Create .editorconfig**

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false
```

- [ ] **Step 10: Create commitlint.config.js**

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf', 'ci', 'revert'],
    ],
  },
}
```

- [ ] **Step 11: Create eslint.config.mjs**

```javascript
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import nextPlugin from 'eslint-config-next'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...nextPlugin,
  ...compat.extends('plugin:prettier/recommended'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'test-results/**',
      'playwright-report/**',
    ],
  },
  {
    files: ['jest.config.js', 'jest.setup.js'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
]

export default eslintConfig
```

Note: No react-hooks workaround needed (fresh codebase, no legacy patterns).

- [ ] **Step 12: Create jest.config.js and jest.setup.js**

`jest.config.js`:

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  passWithNoTests: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.test.js',
    '**/__tests__/**/*.test.ts',
    '**/__tests__/**/*.test.tsx',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!**/node_modules/**',
    '!src/app/layout.tsx',
  ],
  coverageThreshold: {
    global: { branches: 10, functions: 10, lines: 10, statements: 10 },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = createJestConfig(customJestConfig)
```

`jest.setup.js`:

```javascript
require('@testing-library/jest-dom')
```

- [ ] **Step 13: Create lighthouserc.json**

```json
{
  "ci": {
    "collect": {
      "numberOfRuns": 3,
      "url": ["http://localhost:3000/appliedai/", "http://localhost:3000/appliedai/explore/"],
      "settings": {
        "preset": "desktop"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["warn", { "minScore": 0.55 }],
        "categories:accessibility": ["warn", { "minScore": 0.9 }],
        "categories:best-practices": ["warn", { "minScore": 0.65 }],
        "categories:seo": ["warn", { "minScore": 0.95 }]
      }
    }
  }
}
```

- [ ] **Step 14: Create .linkinatorrc.json**

```json
{
  "timeout": 10000,
  "retry": true,
  "retryErrors": true,
  "retryErrorsCount": 3,
  "retryErrorsJitter": 500,
  "skip": [
    "https://github.com/*",
    "http://localhost*",
    "https://groupme.com/*",
    "https://www.linkedin.com/*",
    "mailto:*",
    "tel:*"
  ]
}
```

- [ ] **Step 15: Install dependencies**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm install
```

- [ ] **Step 16: Verify build scaffold works**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npx next build 2>&1 | head -20
```

Expected: Will fail (no pages yet). That's fine -- confirms Next.js is installed.

- [ ] **Step 17: Commit**

```bash
git add -A
git commit -m "chore: initialize appliedai repo with Next.js 16, Tailwind v4, testing scaffold"
```

---

### Task 2: Attribution and governance files

**Files:**

- Create: `NOTICE`
- Create: `CONTRIBUTORS.md`
- Create: `GOVERNANCE.md`
- Create: `LICENSE`

- [ ] **Step 1: Create NOTICE**

```markdown
Applied AI Club Website
Copyright 2026 Applied AI Club at University Park

This project's infrastructure was originally developed by Clarke Moyer
(@clarkemoyer) as part of Free For Charity (https://freeforcharity.org).
The scaffold was first adapted for the Smeal Student AI Hub
(github.com/andysalvo/smealstudentaihub), then adapted again for this
repository. See CONTRIBUTORS.md for details.

Licensed under the Apache License, Version 2.0.
```

- [ ] **Step 2: Create CONTRIBUTORS.md**

```markdown
# Contributors

## Infrastructure

- **Clarke Moyer** (@clarkemoyer) -- Original FFC scaffold (CI/CD, testing, agent instructions, accessibility tooling). Program Manager at Penn State Applied Research Lab.

## Content and Design

- **Andy Salvo** (@andysalvo, ajs10845@psu.edu) -- Programming Lead, Applied AI Club. Site design, content, branding.

## Lineage

FFC template -> smealstudentaihub (first adaptation) -> appliedai (this repo)
```

- [ ] **Step 3: Create GOVERNANCE.md**

```markdown
# Governance

This site is maintained by the Applied AI Club at University Park.

## Decision Making

- Architectural decisions are documented in `docs/decisions/` as ADRs.
- Content changes go through pull requests with at least one human review.
- The Programming Lead has final say on technical decisions.
- The executive board has final say on content and branding.

## Contributing

See AGENTS.md for technical instructions. All contributions go through PRs.
```

- [ ] **Step 4: Create LICENSE**

Use Apache License 2.0 (matching FFC).

```bash
curl -sL https://www.apache.org/licenses/LICENSE-2.0.txt > LICENSE
```

- [ ] **Step 5: Commit**

```bash
git add NOTICE CONTRIBUTORS.md GOVERNANCE.md LICENSE
git commit -m "docs: add attribution, governance, and license (FFC lineage)"
```

---

### Task 3: Agent instruction files

**Files:**

- Create: `AGENTS.md`
- Create: `CLAUDE.md`
- Create: `GEMINI.md`
- Create: `.github/copilot-instructions.md`
- Create: `.claude/settings.json`

- [ ] **Step 1: Create AGENTS.md**

Write the canonical agent instruction file with all six sections. This is the longest single file in the project (~200 lines).

**Reference files to read first:**

- Sibling AGENTS.md for structure: `/Users/andysalvo_1/Documents/GitHub/smealstudentaihub/AGENTS.md`
- Spec for project structure tree: `docs/superpowers/specs/2026-03-25-appliedai-site-design.md` (Project Structure section)
- Spec for mailing list docs: same spec (Mailing List Architecture section)
- Spec for naming rules: same spec (Official Naming section)

**Six required sections:**

1. **Current State** -- project overview, site URL, repo URL, local dev command
2. **Commands** -- table with command, description, duration (match package.json scripts)
3. **Project Structure** -- annotated directory tree (from spec)
4. **Code Style** -- TypeScript strict, Tailwind v4 `@theme` tokens (never arbitrary values), `@/` alias, named exports, Link from next/link (not raw `<a>`), component patterns
5. **Git Workflow** -- branch naming (`feat/`, `fix/`, `docs/`), conventional commits, PR required, no direct push to main
6. **Boundaries** -- always do (run build before committing, use brand tokens, screenshot after visual changes), ask first (adding deps, changing `@theme`, modifying CI), never do (commit secrets, push to main, use Penn State marks, use arbitrary Tailwind values, use em dashes)
7. **Google Integration** -- how Apps Script works, env var, how to modify, Sheet structure
8. **Penn State Branding** -- naming rules (AD07), colors, fonts, what you can/cannot use

Write this as a complete markdown file. Do NOT use placeholder text -- every section must have real, useful content.

- [ ] **Step 2: Create CLAUDE.md**

```markdown
# Claude Instructions

Read `AGENTS.md` first. It is the canonical instruction file.

## Claude-specific rules

- Always run `npm run build` before committing to verify static export works
- Use `@/` path alias for all imports from src/
- Prefer Edit tool over Write for modifying existing files
- Run `npm run format` before committing if you changed any files
- No em dashes in any content or copy
```

- [ ] **Step 3: Create GEMINI.md**

```markdown
# Gemini Instructions

Read `AGENTS.md` first. It is the canonical instruction file.

## Gemini CLI tool mappings

- File search: use `glob` (not find or ls)
- Content search: use `grep` (not grep or rg)
- Read files: use `read_file` (not cat/head/tail)
- Edit files: use `edit_file` (not sed/awk)
- Write files: use `write_file` (not echo/cat)
```

- [ ] **Step 4: Create .github/copilot-instructions.md**

```markdown
# Copilot Instructions

Read `AGENTS.md` in the repo root for full project context, commands, style guide, and boundaries.
```

- [ ] **Step 5: Create .claude/settings.json**

```json
{
  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(npx next *)",
      "Bash(npx playwright *)",
      "Bash(npx serve *)",
      "Bash(git *)",
      "Bash(node scripts/*)",
      "Bash(ls *)",
      "Bash(mkdir *)",
      "Bash(cat *)",
      "Bash(head *)"
    ],
    "deny": ["Bash(rm -rf *)", "Bash(curl * | sh)", "Bash(wget * | sh)"]
  }
}
```

- [ ] **Step 6: Commit**

```bash
git add AGENTS.md CLAUDE.md GEMINI.md .github/copilot-instructions.md .claude/settings.json
git commit -m "docs: add agent instruction files (AGENTS.md canonical, thin layers)"
```

---

### Task 4: Architecture Decision Records

**Files:**

- Create: `docs/decisions/0001-repo-lineage-and-ffc-attribution.md`
- Create: `docs/decisions/0002-google-apps-script-mailing-list.md`
- Create: `docs/decisions/0003-design-system.md`
- Create: `docs/decisions/0004-page-structure.md`

- [ ] **Step 1: Create ADR-0001 (repo lineage)**

Document: FFC template origin, smealstudentaihub as first fork, this repo as second adaptation. Why fresh repo instead of fork (different purpose, different content, clean git history). Apache 2.0 license. NOTICE and CONTRIBUTORS credit chain.

- [ ] **Step 2: Create ADR-0002 (Google Apps Script mailing list)**

Document: Why Apps Script over serverless (zero cost, lives in the Sheet, any officer can see it). The CORS workaround (Content-Type: text/plain to avoid preflight). Env var for endpoint URL. Sheet structure (timestamp, first name, email, source). Duplicate checking. Deployment as "execute as me, anyone can access". Link to `scripts/google/mailing-list.gs` as version-controlled source.

- [ ] **Step 3: Create ADR-0003 (design system)**

Document: Penn State brand tokens locked via Tailwind v4 `@theme` with `--color-*: initial`. Startup visual language (generous spacing, scroll animations, duo-tone typography). White background decision. Animation system (Motion, not GSAP). `prefers-reduced-motion` handling.

- [ ] **Step 4: Create ADR-0004 (page structure)**

Document: Single-page scroll with anchor nav (not multi-page). Why: club sites are about first impressions, one scroll tells the story. Explore AI as standalone page because it has the most content. Footer as grounding element.

- [ ] **Step 5: Commit**

```bash
git add docs/decisions/
git commit -m "docs: add ADRs for lineage, mailing list, design system, page structure"
```

---

### Task 5: Design system and root layout

**Files:**

- Create: `src/app/globals.css`
- Create: `src/lib/fonts.ts`
- Create: `src/lib/siteMetadata.ts`
- Create: `src/lib/assetPath.ts`
- Create: `src/app/layout.tsx`
- Create: `public/.nojekyll`

- [ ] **Step 1: Create globals.css**

```css
@import 'tailwindcss';

/* Penn State brand tokens -- Applied AI Club */
@theme {
  --color-*: initial;

  /* Primary brand */
  --color-navy: #001e44;
  --color-beaver-blue: #1e407c;
  --color-pugh-blue: #96bee6;
  --color-white: #ffffff;
  --color-pa-sky: #009cde;

  /* Functional */
  --color-bg: #ffffff;
  --color-text: #1a1f2e;
  --color-text-muted: #4b5563;
  --color-surface: #f3f4f6;
  --color-surface-alt: #eef3fa;
  --color-border: #e2e5ea;

  /* Semantic */
  --color-link: #1e407c;
  --color-link-hover: #009cde;
  --color-success: #2e7d32;
  --color-warning: #f57c00;
  --color-error: #c62828;

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-serif: 'Roboto Slab', 'Georgia', 'Times New Roman', serif;
  --font-display: 'Roboto Slab', 'Georgia', serif;

  /* Spacing */
  --spacing: 4px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
}

/* Smooth transitions */
* {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

/* Accessibility: screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

- [ ] **Step 2: Create src/lib/fonts.ts**

```typescript
import { Inter, Roboto_Slab } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-roboto-slab',
})
```

Note: No Roboto body font (sibling had it but we only need Inter + Roboto Slab).

- [ ] **Step 3: Create src/lib/siteMetadata.ts**

```typescript
import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  metadataBase: new URL('https://andysalvo.github.io/appliedai'),
  title: {
    default: 'Applied AI',
    template: '%s | Applied AI',
  },
  description:
    'The Applied AI Club at University Park helps students understand how AI is used in the real world.',
  keywords: [
    'AI',
    'artificial intelligence',
    'Penn State',
    'student club',
    'applied AI',
    'machine learning',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Applied AI',
    title: 'Applied AI',
    description:
      'The Applied AI Club at University Park helps students understand how AI is used in the real world.',
  },
}
```

- [ ] **Step 4: Create src/lib/assetPath.ts**

```typescript
/**
 * Construct asset paths that work with GitHub Pages basePath.
 * When deployed at andysalvo.github.io/appliedai/, assets need the prefix.
 */
export function assetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${path}`
}
```

- [ ] **Step 5: Create src/app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { inter, robotoSlab } from '@/lib/fonts'
import { siteMetadata } from '@/lib/siteMetadata'
import './globals.css'

export const metadata: Metadata = siteMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoSlab.variable}`}>
      <body className="font-sans text-text bg-white antialiased flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  )
}
```

Note: No Header/Footer in layout yet. They will be added in Task 8 after they exist.

- [ ] **Step 6: Create public/.nojekyll**

Empty file. Prevents GitHub Pages from using Jekyll.

```bash
touch public/.nojekyll
```

- [ ] **Step 7: Create a minimal home page to verify build**

Create `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="flex-1">
      <div className="max-w-6xl mx-auto px-6 py-32">
        <h1 className="font-display text-navy text-5xl font-bold">Applied AI</h1>
        <p className="text-text-muted mt-4 text-lg">Coming soon.</p>
      </div>
    </main>
  )
}
```

- [ ] **Step 8: Verify build succeeds**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run build
```

Expected: Build succeeds, static export to `out/`.

- [ ] **Step 9: Commit**

```bash
git add src/ public/
git commit -m "feat: design system, root layout, and minimal home page"
```

---

### Task 6: Animation components

**Files:**

- Create: `src/components/ui/FadeIn.tsx`
- Create: `src/components/ui/StaggerGrid.tsx`
- Create: `src/components/ui/SlideIn.tsx`
- Create: `src/components/ui/RevealText.tsx`

- [ ] **Step 1: Create FadeIn.tsx**

```tsx
'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 2: Create StaggerGrid.tsx**

```tsx
'use client'

import { motion, useReducedMotion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
}

interface StaggerGridProps {
  children: React.ReactNode
  className?: string
}

export function StaggerGrid({ children, className }: StaggerGridProps) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 3: Create SlideIn.tsx**

```tsx
'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface SlideInProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  delay?: number
  className?: string
}

export function SlideIn({ children, direction = 'left', delay = 0, className }: SlideInProps) {
  const shouldReduce = useReducedMotion()
  const x = direction === 'left' ? -40 : 40

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 4: Create RevealText.tsx**

```tsx
'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
}

export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
  const shouldReduce = useReducedMotion()
  const words = text.split(' ')

  if (shouldReduce) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.06,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
```

- [ ] **Step 5: Create ParallaxText.tsx**

```tsx
'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

interface ParallaxTextProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export function ParallaxText({ children, offset = 30, className }: ParallaxTextProps) {
  const shouldReduce = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 6: Verify build**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run build
```

Expected: PASS

- [ ] **Step 7: Commit**

```bash
git add src/components/ui/
git commit -m "feat: animation components (FadeIn, StaggerGrid, SlideIn, RevealText, ParallaxText)"
```

---

### Task 7: Content data files

**Files:**

- Create: `src/data/navigation.ts`
- Create: `src/data/team.ts`
- Create: `src/data/pillars.ts`
- Create: `src/data/tools.ts`

- [ ] **Step 1: Create navigation.ts**

```typescript
export interface NavItem {
  label: string
  href: string
  isAnchor: boolean
  isCta?: boolean
}

export const navigation: NavItem[] = [
  { label: 'What We Do', href: '#what-we-do', isAnchor: true },
  { label: 'Labs', href: '#labs', isAnchor: true },
  { label: 'Team', href: '#team', isAnchor: true },
  { label: 'Explore AI', href: '/explore', isAnchor: false },
  { label: 'Join', href: '#join', isAnchor: true, isCta: true },
]
```

- [ ] **Step 2: Create team.ts**

```typescript
export interface TeamMember {
  name: string
  role: string
  email: string
  photo?: string
}

export const team: TeamMember[] = [
  {
    name: 'Ryan Einzig',
    role: 'President',
    email: 'rxe5177@psu.edu',
  },
  {
    name: 'Evan Chappell',
    role: 'Vice-President',
    email: 'evc5667@psu.edu',
  },
  {
    name: 'Andy Salvo',
    role: 'Programming Lead',
    email: 'ajs10845@psu.edu',
  },
  {
    name: 'Brody Bell',
    role: 'Treasurer',
    email: 'bkb5921@psu.edu',
  },
]

export const teamSemester = 'Spring 2026'
```

Note: `photo` field is optional. Headshots will be added later when we have them in `public/images/team/`.

- [ ] **Step 3: Create pillars.ts**

```typescript
export interface Pillar {
  title: string
  description: string
  accent: string
  link?: string
}

export const pillars: Pillar[] = [
  {
    title: 'Events and Programming',
    description:
      'We host guest speakers, run tool walkthroughs, and discuss how AI is changing business and the workplace. Meetings are open to all Penn State students regardless of major or experience.',
    accent: 'border-t-navy',
  },
  {
    title: 'Applied AI Labs',
    description:
      'Labs is the research and development arm of the Applied AI Club. We run experiments, build tools, and give members who want to go deeper a place to work on real projects with real AI systems.',
    accent: 'border-t-beaver-blue',
  },
  {
    title: 'Explore AI',
    description:
      'We maintain a registry of AI tools worth knowing, organized for students at every level. From beginner-friendly assistants to the agentic tools shaping the industry, it is a good place to start.',
    accent: 'border-t-pugh-blue',
    link: '/explore',
  },
]
```

- [ ] **Step 4: Create tools.ts**

```typescript
export interface Tool {
  name: string
  maker: string
  description: string
  capabilities: string[]
  url: string
  category?: string
}

export const tools: Tool[] = [
  {
    name: 'ChatGPT',
    maker: 'OpenAI',
    description: 'The most widely used AI chat assistant.',
    capabilities: [
      'General Q&A and research',
      'Writing and editing help',
      'Code generation and debugging',
      'Image generation with DALL-E',
    ],
    url: 'https://chat.openai.com',
  },
  {
    name: 'Claude',
    maker: 'Anthropic',
    description: 'An AI assistant built for nuanced, trustworthy reasoning and long-form writing.',
    capabilities: [
      'Long document analysis',
      'Careful, nuanced reasoning',
      'Code generation and review',
      'Research synthesis',
    ],
    url: 'https://claude.ai',
  },
  {
    name: 'Perplexity',
    maker: 'Perplexity AI',
    description: 'The search engine built for research. Every answer comes with sources.',
    capabilities: [
      'Source-backed research answers',
      'Academic and news search',
      'Follow-up question threads',
      'Collections for organizing research',
    ],
    url: 'https://perplexity.ai',
  },
  {
    name: 'Openclaw',
    maker: 'Openclaw',
    description: 'Open source AI framework for building agents that connect to real tools.',
    capabilities: [
      'Build custom AI agents',
      'Connect agents to APIs and databases',
      'Chain multiple AI models together',
      'Run agents locally or in the cloud',
    ],
    url: 'https://openclaw.com',
  },
  {
    name: 'Ollama',
    maker: 'Ollama',
    description: 'Run AI models on your own computer. No cloud, no API keys, no cost.',
    capabilities: [
      'Run LLMs locally (Llama, Mistral, Gemma)',
      'Complete privacy for sensitive work',
      'No usage limits or costs',
      'Fine-tune models on your data',
    ],
    url: 'https://ollama.com',
  },
  {
    name: 'Cursor',
    maker: 'Anysphere',
    description: 'An AI-native code editor. Understands your whole codebase.',
    capabilities: [
      'AI-powered code editing and completion',
      'Codebase-aware suggestions',
      'Natural language to code changes',
      'Built-in chat with your code as context',
    ],
    url: 'https://cursor.com',
  },
  {
    name: 'v0',
    maker: 'Vercel',
    description: 'Generate UI components and full pages from text descriptions.',
    capabilities: [
      'Generate React components from prompts',
      'Create full page layouts',
      'Export production-ready code',
      'Iterate on designs conversationally',
    ],
    url: 'https://v0.dev',
  },
  {
    name: 'Codex',
    maker: 'OpenAI',
    description: 'An agentic coding tool by OpenAI that writes, tests, and fixes code.',
    capabilities: [
      'Write entire features from specifications',
      'Run and test code in a sandbox',
      'Fix bugs by reading error messages',
      'Generate pull requests automatically',
    ],
    url: 'https://openai.com/codex',
  },
]
```

- [ ] **Step 5: Commit**

```bash
git add src/data/
git commit -m "feat: content data files (navigation, team, pillars, tools)"
```

---

### Task 8: Header and footer components

**Files:**

- Create: `src/components/header/index.tsx`
- Create: `src/components/footer/index.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create header/index.tsx**

Build the glass blur nav bar. Client component (needs useState for mobile menu toggle). Uses navigation data from `@/data/navigation`. Non-sticky (scrolls with page). Glass blur (bg-white/85 backdrop-blur-xl). Mobile hamburger with slide-in panel. "Join" styled as CTA button (bg-beaver-blue text-white rounded-md px-4 py-2). Anchor links use smooth scroll. Lucide icons for Menu and X.

Key patterns:

- `'use client'`
- Import `Link` from `next/link` for `/explore`
- Anchor links (`#what-we-do`) use `<a>` tags (anchors on same page, not routes)
- `assetPath()` not needed for anchors but needed for any image assets

- [ ] **Step 2: Create footer/index.tsx**

Server component. Navy background. Three-column layout on desktop (brand, quick links, contact), stacked on mobile. Bottom bar with disclaimer and copyright. Dynamic year. External links with `rel="noopener noreferrer"` and `target="_blank"`. Internal links use `<Link>` from `next/link`.

Key text:

- Brand: "Applied AI" (large), "at Penn State" (small, muted)
- Disclaimer: "This is a student organization website and does not represent official Penn State positions."
- Contact: appliedaipsu@gmail.com
- Links: GroupMe, LinkedIn

- [ ] **Step 3: Update layout.tsx to include Header and Footer**

```tsx
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
// ... existing imports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoSlab.variable}`}>
      <body className="font-sans text-text bg-white antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Verify build**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run build
```

- [ ] **Step 5: Verify locally**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run dev
```

Open http://localhost:3000 -- should see glass nav, placeholder content, navy footer.

- [ ] **Step 6: Commit**

```bash
git add src/components/header/ src/components/footer/ src/app/layout.tsx
git commit -m "feat: glass header nav and navy footer with Penn State branding"
```

---

### Task 9: Home page (6 sections)

**Files:**

- Create: `src/app/page.tsx` (replace placeholder)

This is the main page. Build all 6 sections in one file. The page is a server component, but imports client animation wrappers.

- [ ] **Step 1: Build the home page with all 6 sections**

**Section 1 -- Hero:**

- `RevealText` for the "Applied AI" headline (font-display, clamp(3rem, 6vw, 5rem), text-navy, font-bold)
- Tagline in Inter: "Where Penn State students learn to think with AI"
- Subtle gradient blur accents (absolute positioned divs with bg-pugh-blue/10 and bg-navy/5, blur-[80px])
- Animated scroll indicator (chevron-down from lucide, subtle bounce via CSS animation)
- Section: relative overflow-hidden, py-32 to py-40

**Section 2 -- Mission:**

- `FadeIn` wrapper
- "Our Mission" in font-display text-navy
- Mission copy from existing site (see spec line 112-113)
- Left border accent (border-l-4 border-beaver-blue pl-6)
- Max-w-3xl for readable line length

**Section 3 -- What We Do** (id="what-we-do"):

- Surface-alt background
- `StaggerGrid` with 3 `StaggerItem` cards
- Each card: white bg, rounded-xl, 3px top border (accent from pillars.ts), px-8 py-10, shadow-sm
- Hover: shadow-lg shadow-navy/[0.06], -translate-y-1, transition-all 300ms
- Explore AI card links to /explore

**Section 4 -- Labs** (id="labs"):

- `SlideIn` from left for text, `SlideIn` from right for visual
- Two-column layout on desktop (text left, visual right)
- Text: What Labs has built (Student AI Hub), where we are going
- Visual: screenshot/mockup of the Hub or a styled card representing it
- Link to Hub: external link to andysalvo.github.io/smealstudentaihub

**Section 5 -- Team** (id="team"):

- `StaggerGrid` with 4 `StaggerItem` cards (2x2 grid)
- Each card: centered, name (font-display, semibold), role (text-muted), email link
- Photo placeholder (colored circle with initials if no photo yet)
- Intro: "Meet our Spring 2026 executive board."

**Section 6 -- Join** (id="join"):

- Surface-alt background
- "Stay in the loop" heading
- Placeholder for MailingListForm (will be added in Task 10, use a simple div placeholder for now)
- GroupMe link and email contact below
- `FadeIn` wrapper

- [ ] **Step 2: Verify build**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run build
```

- [ ] **Step 3: Screenshot and verify visually**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run dev
```

Use Playwright or browser to check the page looks right.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: home page with hero, mission, pillars, labs, team, join sections"
```

---

### Task 10: Mailing list form and Google Apps Script

**Files:**

- Create: `src/components/MailingListForm.tsx`
- Create: `scripts/google/mailing-list.gs`
- Modify: `src/app/page.tsx` (replace join placeholder)

- [ ] **Step 1: Create MailingListForm.tsx**

```tsx
'use client'

import { useState } from 'react'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function MailingListForm() {
  const [state, setState] = useState<FormState>('idle')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const endpoint = process.env.NEXT_PUBLIC_MAILING_LIST_ENDPOINT

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!email || !firstName) return

    setState('submitting')
    setErrorMsg('')

    try {
      const res = await fetch(endpoint || '', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ firstName, email }),
      })

      const data = await res.json()

      if (data.success) {
        setState('success')
        setFirstName('')
        setEmail('')
      } else {
        setState('error')
        setErrorMsg(data.error || 'Something went wrong.')
      }
    } catch {
      setState('error')
      setErrorMsg('Something went wrong. Try again or email us at appliedaipsu@gmail.com.')
    }
  }

  if (state === 'success') {
    return (
      <div className="text-center py-8">
        <p className="text-lg font-display font-semibold text-navy">
          You&apos;re in. We&apos;ll be in touch.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className="px-4 py-3 rounded-lg border border-border bg-white text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-beaver-blue/30 focus:border-beaver-blue transition-colors"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="px-4 py-3 rounded-lg border border-border bg-white text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-beaver-blue/30 focus:border-beaver-blue transition-colors"
      />
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="px-6 py-3 bg-beaver-blue text-white rounded-lg font-medium hover:bg-navy transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === 'submitting' ? 'Joining...' : 'Join the list'}
      </button>
      {state === 'error' && <p className="text-error text-sm">{errorMsg}</p>}
    </form>
  )
}
```

- [ ] **Step 2: Create scripts/google/mailing-list.gs**

```javascript
/**
 * Google Apps Script -- Mailing List Handler
 *
 * Deployed as: Web App ("Execute as me", "Anyone can access")
 * Sheet structure: Timestamp | First Name | Email | Source
 *
 * The site POSTs with Content-Type: text/plain to avoid CORS preflight.
 * Body is JSON: { firstName: string, email: string }
 *
 * To deploy:
 * 1. Open the Google Sheet
 * 2. Extensions > Apps Script
 * 3. Paste this code
 * 4. Deploy > New deployment > Web app
 * 5. Execute as: Me, Who has access: Anyone
 * 6. Copy the deployment URL to .env.local as NEXT_PUBLIC_MAILING_LIST_ENDPOINT
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents)
    var firstName = (data.firstName || '').trim()
    var email = (data.email || '').trim().toLowerCase()

    // Validate
    if (!firstName || !email) {
      return respond({ success: false, error: 'Name and email are required.' })
    }

    if (!isValidEmail(email)) {
      return respond({ success: false, error: 'Invalid email address.' })
    }

    // Check for duplicates
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
    var emails = sheet
      .getRange('C:C')
      .getValues()
      .flat()
      .map(function (e) {
        return String(e).toLowerCase()
      })

    if (emails.indexOf(email) !== -1) {
      return respond({ success: true }) // Silent success for duplicates
    }

    // Append row
    sheet.appendRow([new Date().toISOString(), firstName, email, 'website'])

    return respond({ success: true })
  } catch (err) {
    return respond({ success: false, error: 'Server error.' })
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function respond(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  )
}
```

- [ ] **Step 3: Update home page to use MailingListForm**

Replace the placeholder div in Section 6 with:

```tsx
import { MailingListForm } from '@/components/MailingListForm'
// ... in the Join section:
;<MailingListForm />
```

- [ ] **Step 4: Create .env.local.example**

```
# Google Apps Script mailing list endpoint
# Deploy the script from scripts/google/mailing-list.gs and paste the URL here
NEXT_PUBLIC_MAILING_LIST_ENDPOINT=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

- [ ] **Step 5: Verify build**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run build
```

- [ ] **Step 6: Commit**

```bash
git add src/components/MailingListForm.tsx scripts/google/ src/app/page.tsx .env.local.example
git commit -m "feat: mailing list form with Google Apps Script integration"
```

---

### Task 11: Explore AI page

**Files:**

- Create: `src/app/explore/page.tsx`

- [ ] **Step 1: Build the Explore AI page**

- Import tools data from `@/data/tools`
- Hero section: "Explore AI" headline (font-display), "A list of essential AI tools worth knowing" tagline
- `StaggerGrid` with tool cards
- Each card: tool name (font-display, large), maker (text-muted, small), description, capabilities as a list, link to tool URL
- Cards: white bg, rounded-xl, border, px-8 py-8, hover lift + shadow
- Export metadata for SEO: `title: 'Explore AI'`

- [ ] **Step 2: Verify build**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run build
```

Expected: Both `/` and `/explore/` in the static output.

- [ ] **Step 3: Commit**

```bash
git add src/app/explore/
git commit -m "feat: Explore AI page with 8-tool registry"
```

---

### Task 12: Custom 404 page

**Files:**

- Create: `src/app/not-found.tsx`

- [ ] **Step 1: Create not-found.tsx**

```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center py-32 px-6">
      <div className="text-center">
        <h1 className="font-display text-navy text-6xl font-bold">404</h1>
        <p className="text-text-muted mt-4 text-lg">Page not found.</p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-beaver-blue text-white rounded-lg font-medium hover:bg-navy transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
```

- [ ] **Step 2: Verify build**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/app/not-found.tsx
git commit -m "feat: custom 404 page with brand styling"
```

---

### Task 13: Voice brief

**Files:**

- Create: `content/VOICE_BRIEF.md`

- [ ] **Step 1: Write the voice brief**

This is NOT a copy of the Hub's voice brief. The club site has different needs:

```markdown
# Voice Brief -- Applied AI Club Website

## Tone

Conversational, honest, student-to-student. Not a marketing page. Not an AI-generated brochure. Describe what the club does like you would to someone at a club fair.

## Rules

1. No em dashes. Ever.
2. No hype words: "revolutionary," "game-changing," "transforming," "cutting-edge."
3. No parallel structure cadences ("Built for X. Designed for Y. Made for Z."). That sounds AI-generated.
4. No selling. Describe what exists. If it is good, people will see that.
5. Use "we" naturally. These are students talking.
6. Hedging is fine. "We run experiments" is better than "We deliver breakthrough results."
7. The word "curated" is banned.

## Examples

Good: "We host guest speakers, run tool walkthroughs, and discuss how AI is changing business and the workplace."
Bad: "Experience transformative learning through our curated series of expert-led workshops."

Good: "Labs is where members build with LangChain, run RAG pipelines, and experiment with vector databases."
Bad: "Our cutting-edge laboratory empowers students with hands-on AI innovation."
```

- [ ] **Step 2: Commit**

```bash
git add content/
git commit -m "docs: voice brief for club site copy"
```

---

### Task 14: CI/CD workflows

**Files:**

- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/deploy.yml`
- Create: `.github/workflows/lighthouse.yml`
- Create: `.github/workflows/codeql.yml`

- [ ] **Step 1: Create ci.yml**

Read sibling: `/Users/andysalvo_1/Documents/GitHub/smealstudentaihub/.github/workflows/ci.yml`

Adapt with these changes:

- Repository name in paths/references: `appliedai` not `smealstudentaihub`
- No MDX-related steps
- Same structure: build+unit job, then 4-shard E2E job
- Node version: 20
- Concurrency: cancel-in-progress for same PR/branch

- [ ] **Step 2: Create deploy.yml**

Read sibling: `/Users/andysalvo_1/Documents/GitHub/smealstudentaihub/.github/workflows/deploy.yml`

Adapt with these changes:

- `NEXT_PUBLIC_BASE_PATH: /appliedai` (NOT `/smealstudentaihub` or `/FFC_Single_Page_Template`)
- Smoke test URLs point to `/appliedai/`
- Trigger: `workflow_run` on ci.yml completion for main branch

- [ ] **Step 3: Create lighthouse.yml**

Read sibling: `/Users/andysalvo_1/Documents/GitHub/smealstudentaihub/.github/workflows/lighthouse.yml`

Adapt with these changes:

- URLs: `/appliedai/` and `/appliedai/explore/`
- `NEXT_PUBLIC_BASE_PATH: /appliedai` (fix the inherited FFC basePath bug)
- Audit only home and explore pages (not cookie-policy or other FFC remnants)

- [ ] **Step 4: Create codeql.yml**

Read sibling: `/Users/andysalvo_1/Documents/GitHub/smealstudentaihub/.github/workflows/codeql.yml`

Copy and adapt repo-specific comments. No structural changes needed.

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/
git commit -m "ci: add CI, deploy, Lighthouse, and CodeQL workflows"
```

---

### Task 15: Git hooks

**Files:**

- Create: `.husky/pre-commit`
- Create: `.husky/commit-msg`

- [ ] **Step 1: Initialize husky**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npx husky init
```

- [ ] **Step 2: Create pre-commit hook**

Note: Husky v9 uses plain shell scripts. No `husky.sh` sourcing.

```bash
#!/bin/sh
set -e

# Format check on staged files
STAGED=$(git diff --cached --name-only --diff-filter=ACMR | grep -E '\.(ts|tsx|js|jsx|json|css|md)$' | tr '\n' ' ')
if [ -n "$STAGED" ]; then
  npx prettier --check $STAGED
fi

# Lint staged JS/TS files
STAGED_CODE=$(git diff --cached --name-only --diff-filter=ACMR | grep -E '\.(ts|tsx|js|jsx)$' | tr '\n' ' ')
if [ -n "$STAGED_CODE" ]; then
  npx eslint $STAGED_CODE
fi
```

- [ ] **Step 3: Create commit-msg hook**

```bash
#!/bin/sh
npx --no-install commitlint --edit "$1"
```

- [ ] **Step 4: Commit**

```bash
git add .husky/
git commit -m "chore: add git hooks (pre-commit format/lint, commit-msg conventional)"
```

---

### Task 16: Playwright config and smoke test

**Files:**

- Create: `playwright.config.ts`
- Create: `tests/home.spec.ts`

- [ ] **Step 1: Create playwright.config.ts**

Adapt from sibling. Key changes:

- `baseURL: 'http://localhost:3000'`
- Projects: chromium + mobile-chrome
- Web server: `npm run preview`

- [ ] **Step 2: Create a basic smoke test**

```typescript
import { test, expect } from '@playwright/test'

test('home page loads', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toContainText('Applied AI')
})

test('explore page loads', async ({ page }) => {
  await page.goto('/explore/')
  await expect(page.locator('h1')).toContainText('Explore AI')
})

test('navigation links work', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Explore AI')
  await expect(page).toHaveURL(/explore/)
})

test('mailing list form renders', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('input[type="email"]')).toBeVisible()
})
```

- [ ] **Step 3: Build and run tests**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run build && npm run test:e2e
```

Expected: All 4 tests pass.

- [ ] **Step 4: Commit**

```bash
git add playwright.config.ts tests/
git commit -m "test: Playwright smoke tests for home, explore, nav, and form"
```

---

### Task 17: Final build verification and GitHub setup

- [ ] **Step 1: Full build + lint + format check**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run format:check && npm run lint && npm run build
```

Expected: All pass.

- [ ] **Step 2: Run full test suite**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npm run test && npm run test:e2e
```

Expected: All pass.

- [ ] **Step 3: Create GitHub repo**

```bash
gh repo create andysalvo/appliedai --public --source=. --remote=origin --push
```

- [ ] **Step 4: Enable GitHub Pages**

```bash
gh api repos/andysalvo/appliedai/pages -X POST -f source.branch=main -f source.path=/ -f build_type=workflow 2>/dev/null || echo "Pages may need manual setup in repo settings"
```

- [ ] **Step 5: Verify deployment**

After the first push triggers CI + deploy, check https://andysalvo.github.io/appliedai/

- [ ] **Step 6: Screenshot final result**

```bash
cd /Users/andysalvo_1/Documents/GitHub/appliedai && npx playwright screenshot http://localhost:3000 home.png --full-page
```

Review the screenshot. This is the moment of truth.
