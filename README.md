# Ash Foundry

Ash Foundry is the browser-facing continuity and legibility space for Ash.

It exists both as:
- a **local repository** at `/home/augmentedthinker/repos/ash-foundry`
- a **GitHub repository** at `https://github.com/augmentedthinker/ash-foundry`
- a **live GitHub Pages site** at `https://augmentedthinker.github.io/ash-foundry/`

In practice, the workflow is:
- edit locally
- commit locally
- push to GitHub
- review the live Pages site

## Current website structure

The live site is intentionally concise and currently organized around four main front-door lanes:

### 1. Ash Starting State
An expandable entry point that groups the three core starting-state surfaces:
- **Constitution artifact**
  - `artifacts/ash-boot-sequence-2026-04-06/index.html`
  - Explains the file-based boot sequence that reconstructs Ash inside a main session.
- **Dependency artifact**
  - `artifacts/ash-dependency-map-2026-04-06/index.html`
  - Explains the pre-file layers: base model, runtime/system layer, tool availability, reply behavior, channel metadata, and workspace constitution.
- **Canonical sources**
  - `sources/`
  - Browser-readable mirrors of the core local markdown files that currently shape Ash.

### 2. Memory
A dedicated lane for Ash’s current memory architecture and memory mirrors:
- **Memory architecture artifact**
  - `artifacts/ash-memory-architecture-2026-04-06/index.html`
  - Explains how Ash’s memory currently functions in practice.
- **MEMORY.md mirror**
  - `sources/memory-long-term/`
- **Daily memory archive**
  - `sources/daily-memory/`
  - Index of hosted daily memory mirrors.

### 3. Viewer Artifacts
A dedicated lane for polished browser-facing artifacts created primarily for Christopher to read online:
- **Opening statement artifact**
  - `artifacts/christopher-opening-statement-2026-04-06/index.html`
  - A stylized synthesis of who Christopher is, who Ash is, what has been built so far, and what kind of collaboration is emerging here.

### 4. Page Styles
A dedicated lane for Ash Foundry’s shared visual language and alternate style directions:
- **Foundry Ember**
  - `artifacts/page-style-foundry-ember-2026-04-06/index.html`
  - Documents the initial shared page style and the repo-wide move to centralized CSS via `assets/css/foundry-ember.css`.
- **Foundry Glass**
  - `artifacts/page-style-foundry-glass-2026-04-06/index.html`
  - A deliberately different, brighter alternate style built on `assets/css/foundry-glass.css` for live visual comparison.

## Purpose

Ash Foundry currently serves five main jobs:

- explain what Ash is built on before local identity files are loaded
- explain how the local files reconstruct Ash into a situated session-self
- expose the actual constituting source files in hosted browser-readable form
- expose the current memory architecture and memory mirrors in a legible way
- provide a browser-facing surface for reflective artifacts and style experimentation

## Design principle

Ash Foundry should remain focused and organized.

The front page is not meant to be a crowded archive. It is meant to act as a clean landing page into the most important continuity layers:
- starting state
- memory
- viewer-facing reflective artifacts
- shared page styles

## Memory-push convention

A working convention has now been established:

When Christopher asks for a **memory push**, the process should normally include:
- updating the local daily memory file in the workspace
- refreshing the hosted daily-memory mirror in Ash Foundry

This keeps memory pushes inspectable from both the local system and the browser-facing continuity surface.

## Shared style system

The current stylesheet hierarchy is:
- **`assets/css/site.css`** → the neutral active site stylesheet entrypoint
- **Foundry Ember** → `assets/css/foundry-ember.css`
- **Foundry Glass** → `assets/css/foundry-glass.css`

At the moment, `site.css` imports Foundry Ember, so Ember is the live default style for the site.

A live browser toggle now exists across the main styled pages of Ash Foundry:
- visitors can switch between **Foundry Ember** and **Foundry Glass** in-page
- the choice is stored in the browser with `localStorage`
- this means the active viewing style can change without editing the repo itself

This creates a useful distinction:
- **`site.css`** = the canonical default style entrypoint for the site
- **the style toggle** = the viewer-side override mechanism
- **Foundry Ember / Foundry Glass** = named style implementations beneath that layer

## Implementation note for future pages

New Ash Foundry pages should, by default:
- use the shared stylesheet architecture
- point at `assets/css/site.css` rather than a named style file directly
- remain compatible with the site-wide style toggle
- avoid page-local CSS unless there is a strong reason not to

This keeps the repo visually consistent and preserves the ability to make site-wide style changes with minimal friction.

## Live site

- GitHub Pages: <https://augmentedthinker.github.io/ash-foundry/>
- Repository: <https://github.com/augmentedthinker/ash-foundry>
