# ADR-0003: Design System

**Date:** 2026-03-25
**Status:** Accepted
**Deciders:** Andy Salvo

## Context

The Applied AI Club website needs a design system that accomplishes two things simultaneously: comply with Penn State branding requirements (Policy AD07, brand color palette) and project a modern startup visual identity that makes students want to engage.

The smealstudentaihub site proved that Penn State brand colors can look sharp when paired with contemporary layout and animation techniques. This site takes that further with a more intentional design language.

## Decision

### Brand Token Locking via Tailwind v4 @theme

All Penn State brand colors are defined as CSS custom properties in `globals.css` using Tailwind v4's `@theme` directive with `--color-*: initial` declarations. This locks the color palette at the theme level.

```css
@theme {
  --color-navy: #001e44;
  --color-beaver-blue: #1e407c;
  --color-pugh-blue: #96bee6;
  --color-pa-sky: #009cde;
  --color-surface: #f3f4f6;
  --color-surface-alt: #eef3fa;
  --color-text: #1a1f2e;
  --color-muted: #4b5563;
  --color-border: #e2e5ea;
}
```

Agents and contributors use these tokens exclusively. Arbitrary Tailwind values (`bg-[#ff0000]`) are prohibited. This prevents brand drift and ensures every color on the site traces back to an approved value.

### Startup Visual Language

The design draws from Visual Electric, V7 Labs, Flora, and Unagi Games. Key principles:

1. **Generous spacing.** Section padding at py-24 to py-32. Cards use px-6 py-8 to px-8 py-10. Elements breathe. This is the single biggest differentiator from typical student org sites.
2. **Scroll animations on every section.** FadeIn, StaggerGrid, SlideIn, ParallaxText, and RevealText components provide entrance animations. Every section has motion, but animation is applied to entrances only (`once: true`), never to reading content.
3. **Duo-tone typography.** Roboto Slab for display headlines at large scale (clamp(3rem, 6vw, 5rem) for hero, clamp(2rem, 4vw, 3rem) for section headers). Inter for body and secondary text. Strong scale contrast between display and body.
4. **White background.** Sections alternate between white and subtle surface/surface-alt for rhythm. No dark theme, no cream backgrounds, no particle effects.
5. **Subtle polish.** Micro-interactions on hover, smooth transitions (300ms for interactions, 500ms for entrances), cursor-responsive touches. Details that build trust without drawing attention to themselves.

### Motion Implementation

Animation uses framer-motion (Motion), not GSAP. The bundle is optimized with `LazyMotion` + `domAnimation` (~4.6kb initial + 15kb lazy load).

All animation components check `useReducedMotion()` from framer-motion. When `prefers-reduced-motion` is active, animations are skipped entirely. This is an accessibility requirement, not optional.

Standard animation parameters:

- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Entrance duration: 500ms
- Interaction duration: 300ms
- Stagger delay: 80-120ms between items

## Consequences

- Brand colors cannot drift -- the `@theme` lock means any arbitrary value is immediately visible as a violation
- The generous spacing and animation system require more vertical scroll than a dense layout, which is intentional (startup feel, not information density)
- Animation bundle stays small via LazyMotion lazy loading
- Accessibility is maintained via `prefers-reduced-motion` checks on all animation components
- Adding new brand colors requires a deliberate change to `globals.css` `@theme`, which is gated behind the "Ask First" boundary in AGENTS.md
