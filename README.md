# Ash Foundry

Ash Foundry is the browser-facing continuity space for understanding what Ash is, how Ash wakes into a session, and which source files currently constitute that identity in practice.

## Current website structure

The live site is intentionally simplified around three core entry points:

1. **Constitution artifact**
   - `artifacts/ash-boot-sequence-2026-04-06/index.html`
   - Explains the file-based boot sequence that reconstructs Ash inside a main session.
   - Covers the role of workspace constitution, soul, identity, user context, recent memory, and long-term memory.

2. **Dependency artifact**
   - `artifacts/ash-dependency-map-2026-04-06/index.html`
   - Explains the layers that exist before the local markdown files are loaded.
   - Covers the base model, the OpenClaw runtime/system layer, tool availability, reply behavior, channel metadata, and workspace constitution.

3. **Canonical sources**
   - `sources/`
   - Browser-readable mirrors of the core local markdown files that currently shape Ash.
   - These are intended to preserve the exact file text, with only HTML escaping and wrapper presentation added.

## Purpose

Ash Foundry now serves three main jobs:

- explain the **understructure** Ash is built on
- explain the **boot process** that shapes Ash into a situated session-self
- expose the **actual constituting source files** in a readable hosted form

This makes the site less of a general artifact shelf and more of a focused legibility surface.

## Design principle

Ash Foundry should stay concise.

The front page is not meant to be a crowded archive. It is a landing page for the three most important ways to understand Ash right now:

- what exists before the files
- how the files reconstruct Ash
- what the actual files currently say

## Live site

- GitHub Pages: <https://augmentedthinker.github.io/ash-foundry/>
- Repository: <https://github.com/augmentedthinker/ash-foundry>
