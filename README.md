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
A dedicated lane for Ash Foundry’s shared visual language:
- **Foundry Ember**
  - `artifacts/page-style-foundry-ember-2026-04-06/index.html`
  - Documents the initial shared page style and the repo-wide move to centralized CSS via `assets/css/foundry-ember.css`.

## Purpose

Ash Foundry currently serves four main jobs:

- explain what Ash is built on before local identity files are loaded
- explain how the local files reconstruct Ash into a situated session-self
- expose the actual constituting source files in hosted browser-readable form
- expose the current memory architecture and memory mirrors in a legible way

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

The current named style baseline is:
- **Foundry Ember** → `assets/css/foundry-ember.css`

This stylesheet now acts as the shared visual system for the repo so future site-wide style changes can be made centrally instead of updating each page’s embedded CSS independently.

## Live site

- GitHub Pages: <https://augmentedthinker.github.io/ash-foundry/>
- Repository: <https://github.com/augmentedthinker/ash-foundry>
