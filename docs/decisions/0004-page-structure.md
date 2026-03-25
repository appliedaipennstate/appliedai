# ADR-0004: Page Structure

**Date:** 2026-03-25
**Status:** Accepted
**Deciders:** Andy Salvo

## Context

Club websites serve a specific function: they are a first impression. A prospective member lands on the site, scrolls through, and decides whether this looks like something worth joining. The visit lasts 30-90 seconds. The site needs to tell the full story in that window.

The previous Wix site at appliedaipsu.com had multiple pages (Home, About, Labs, Explore AI, Contact), which fragmented the story across clicks. Analytics showed most visitors only saw the home page.

## Decision

### Single-Page Scroll with Anchor Navigation

The home page is a single continuous scroll with six sections:

1. **Hero** -- headline, tagline, scroll indicator
2. **Mission** -- what the club is about, in the club's own words
3. **What We Do** (#what-we-do) -- three pillars (Events, Labs, Explore AI) as a bento grid
4. **Labs Spotlight** (#labs) -- what Labs has built, where it is heading
5. **Our Team** (#team) -- Spring 2026 executive board with headshots
6. **Join** (#join) -- mailing list form, GroupMe link, contact email

Navigation uses anchor links (#what-we-do, #labs, #team, #join) that scroll to sections on the same page. This keeps the full story in one scroll.

### Why Single-Page

- **Club sites are first impressions.** One scroll tells the entire story. No clicks required, no dead ends.
- **Scroll animations reward continuous scrolling.** Each section has an entrance animation that creates momentum. Breaking this into separate pages breaks the rhythm.
- **Mobile behavior.** On mobile, scrolling is the primary interaction. A single-page scroll is the most natural UX.
- **Conversion funnel.** The scroll naturally leads to the Join section at the bottom. Every visitor who reaches the footer has seen the full pitch.

### Explore AI as Standalone Page

The Explore AI tool registry lives at `/explore` as a separate page, not as a section in the scroll. Reasons:

- **Most content on the site.** Eight tool cards with names, makers, descriptions, and capabilities. This is too much content to embed in a scroll section without breaking the pacing.
- **Different purpose.** The home page scroll is a pitch. Explore AI is a reference. Different use patterns warrant different pages.
- **Direct linking.** Officers and members share the Explore AI page independently ("check out our tool list"). A standalone URL makes this easy.
- **Expandable.** The tool registry will grow. A standalone page can scale without affecting home page load or scroll length.

The What We Do section includes an Explore AI card that links to `/explore`, so discovery is built into the scroll.

### Navigation Design

The nav bar uses glass blur styling (bg-white/85 backdrop-blur-xl) and is non-sticky. It sits at the top and scrolls away with the page. This is intentional:

- The glass blur serves the hero section where gradient accents sit behind it
- Once the nav leaves the viewport, users are in a full-bleed content scroll experience
- This is a single-page site, not a utility app that needs persistent nav
- On mobile, the hamburger menu with a slide-in panel provides access when needed

### Footer as Grounding Element

The footer is a navy (#001E44) full-width block that serves as the visual endpoint of the scroll. It contains:

- Brand name and secondary text
- Quick links (What We Do, Labs, Team, Explore AI, Join)
- Contact information (email, GroupMe, LinkedIn)
- Required student organization disclaimer
- Copyright

The dark footer against the white/surface content creates a clear visual stop. It signals "you have reached the end" and provides all the practical links a visitor might need.

## Consequences

- The entire club story is accessible in one scroll with no navigation friction
- Explore AI can grow independently without affecting home page performance
- Anchor navigation means the URL does not change as users scroll (no shareable deep links to sections), but this is acceptable for a single-page site
- Adding new home page sections requires careful consideration of scroll length and pacing
- The non-sticky nav means users cannot jump between sections mid-scroll without scrolling back to the top. This is a deliberate tradeoff: the scroll experience takes priority over utility navigation.
