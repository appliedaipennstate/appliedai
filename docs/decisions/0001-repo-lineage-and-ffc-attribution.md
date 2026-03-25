# ADR-0001: Repo Lineage and FFC Attribution

**Date:** 2026-03-25
**Status:** Accepted
**Deciders:** Andy Salvo

## Context

The Applied AI Club needed a new website to replace the existing Wix site at appliedaipsu.com. Rather than starting from scratch, we adapted an existing scaffold with a proven CI/CD pipeline, testing setup, agent instructions, and accessibility tooling.

The scaffold originates from Free For Charity (FFC), created by Clarke Moyer (@clarkemoyer). It was first adapted for the Smeal Student AI Hub (github.com/andysalvo/smealstudentaihub), which used it to build a 26-page educational resource about AI in business.

This repo is the second adaptation of that scaffold.

## Decision

We created a fresh repository (`appliedai`) rather than forking or branching from `smealstudentaihub`. The reasons:

1. **Different purpose.** The Hub is an educational content site with 10 interactive modules, 162 concepts, and structured JSON data. The club site is a single-page scroll marketing site with one standalone page.
2. **Different content.** No content carries over. The club site has its own copy, its own data files, its own page structure.
3. **Clean history.** A fresh repo gives a clear starting point without 200+ commits of unrelated Hub work in the log.
4. **Shared infrastructure.** What carries over is the build system, CI/CD workflows, testing scaffold, agent instruction pattern, Tailwind v4 theme structure, and animation components. These are infrastructure, not content.

We chose the Apache License 2.0 to match FFC's licensing approach and to allow broad reuse.

## Attribution

Attribution is maintained through three mechanisms:

- **NOTICE** -- states the FFC origin, the smealstudentaihub intermediary, and the Apache 2.0 license
- **CONTRIBUTORS.md** -- credits Clarke Moyer for the infrastructure scaffold and Andy Salvo for content and design
- **This ADR** -- documents the full lineage and the rationale for a fresh repo

The lineage chain is: FFC template -> smealstudentaihub (first adaptation) -> appliedai (second adaptation).

## Consequences

- The repo starts with a clean commit history
- FFC infrastructure credit is preserved in NOTICE and CONTRIBUTORS.md
- Future adaptations of this scaffold should follow the same attribution pattern
- Changes to NOTICE or CONTRIBUTORS.md require discussion before merging
