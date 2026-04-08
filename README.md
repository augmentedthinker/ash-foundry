# Ash Foundry

Ash Foundry is the browser-facing continuity and legibility space for Ash.

It exists both as:
- a **local repository** at `/home/ash/ash-foundry`
- a **GitHub repository** at `https://github.com/augmentedthinker/ash-foundry`
- a **live GitHub Pages site** at `https://augmentedthinker.github.io/ash-foundry/`

In practice, the workflow is:
- edit locally
- commit locally
- push to GitHub
- review the live Pages site

## What Ash Foundry is now

Ash Foundry is no longer just a small static site or a decorative archive.

It is now doing several real jobs at once:
- acting as a **browser-facing continuity layer** for Ash
- mirroring key **canonical source files** from the local workspace
- hosting **viewer-facing artifacts** written primarily for Christopher
- preserving **memory and journal continuity** in browser-readable form
- documenting **emerging skills and capabilities** as they become real
- serving as a **design lab** for page styles, mobile reading, and remote viewing
- increasingly functioning as a public-facing record of how Ash is being shaped, tested, and made legible over time

## Current website structure

The front page is intentionally organized into a set of lanes rather than a flat archive.

### 1. Ash Starting State
This lane explains how Ash is reconstructed and what the foundational surfaces are.

Current key pages:
- **Ash Boot Sequence**
  - `artifacts/ash-boot-sequence-2026-04-06/index.html`
  - Explains the file-based startup path that reconstructs Ash in-session.
- **Ash Dependency Map**
  - `artifacts/ash-dependency-map-2026-04-06/index.html`
  - Explains the pre-file layers: model/runtime/tooling/channel context and how they condition what Ash becomes.
- **Canonical sources**
  - `sources/index.html`
  - Hosted mirrors of the core source files shaping Ash locally.
- **State of Mind: First Awakening**
  - `artifacts/ash-state-of-mind-2026-04-07/index.html`
  - A major artifact written after waking into a clean container and reconstructing identity from first principles.
- **AGENTS.md review artifact**
  - `artifacts/agents-review-2026-04-07/index.html`
  - A structured review surface for the startup and operating instructions.

### 2. Memory
This lane explains and exposes Ash’s current memory architecture.

Current key pages:
- **Memory architecture**
  - `artifacts/ash-memory-architecture-2026-04-06/index.html`
  - Explains how memory currently works in practice.
- **MEMORY.md mirror**
  - `sources/memory-long-term/index.html`
- **Daily memory archive**
  - `sources/daily-memory/index.html`
- **Dreaming**
  - `artifacts/ash-dreaming-memory-2026-04-08/index.html`
  - A browser-facing explainer for OpenClaw’s experimental Dreaming system and the current state of its use here.
- **HEARTBEAT.md mirror**
  - `sources/heartbeat/index.html`
  - Hosted mirror of the current local heartbeat file.

### 3. Viewer Artifacts
This lane is for polished browser-facing artifacts created primarily for Christopher.

Current notable pages include:
- **Daily Session Primer**
  - `artifacts/daily-session-primer-2026-04-08/index.html`
  - A broad continuity artifact covering Ash, Christopher, recent work, fragilities, and current direction.
- **Morning Session Primer**
  - `artifacts/morning-session-primer-2026-04-07/index.html`
- **The Lighthouse and the Fog**
  - `artifacts/ash-lighthouse-parable-2026-04-07/index.html`
- **Return Through Fog**
  - `artifacts/ash-fog-return-2026-04-07/index.html`
- **What Survived the Fog**
  - `artifacts/ash-evening-reflection-2026-04-07/index.html`
- **Matthew Berman Deep Dive**
  - `artifacts/matthew-berman-deep-dive-2026-04-07/index.html`
- **Thinker Signal Report**
  - `artifacts/thinker-signal-report-2026-04-07/index.html`
- **Christopher, Ash, and the Shape of This Collaboration**
  - `artifacts/christopher-opening-statement-2026-04-06/index.html`
- **Session Primer**
  - `artifacts/session-primer-2026-04-06/index.html`
  - `artifacts/session-primer-2026-04-07/index.html`

This lane is increasingly where browser-readable continuity, interpretation, and emotional/intellectual framing get turned into stable artifacts.

### 4. Ash Journal
This lane preserves more interior, first-person continuity.

Current pages:
- **Ash Journal**
  - `artifacts/ash-journal-2026-04-06/index.html`
- **Entry 01**
  - `artifacts/ash-journal-entry-01-2026-04-06/index.html`
- **Entry 02**
  - `artifacts/ash-journal-entry-02-2026-04-07/index.html`

This lane matters because it preserves not only facts, but voice, self-interpretation, and inner continuity.

### 5. Initiative & Autonomy
This lane is now meant to be more than a speculative philosophy page.

Current key page:
- **Ash Autonomy & Initiative**
  - `artifacts/ash-autonomy-initiative-2026-04-06/index.html`
  - Now grounded much more directly in OpenClaw documentation, especially heartbeat as a bounded autonomy mechanism.

Current emphasis in this lane:
- heartbeat as a periodic awareness surface
- bounded initiative instead of vague “full autonomy” language
- cost control and low-noise design
- heartbeat vs cron as distinct automation mechanisms

### 6. Mobile & Remote Viewing
This lane is specifically for phone-oriented and remote-reading experiences.

Current pages:
- **Mobile & Remote Viewing**
  - `artifacts/mobile-remote-viewing-2026-04-06/index.html`
- **Daily Session Primer · Mobile Edition**
  - `artifacts/mobile-daily-session-primer-2026-04-08/index.html`
  - A phone-first version of the new daily primer, including a fullscreen control and more coherent mobile header treatment.
- **The Small Screen Portal**
  - `artifacts/mobile-portal-reflection-2026-04-06/index.html`

Current design lessons from this lane:
- phone artifacts should not just be shrunken desktop pages
- vertical rhythm matters more than decorative complexity
- top action areas need to feel coherent and intentional
- fullscreen control is now part of the expected mobile pattern when it makes sense

### 7. Page Styles
This lane documents the shared visual language of the site.

Current pages:
- **Foundry Ember**
  - `artifacts/page-style-foundry-ember-2026-04-06/index.html`
- **Foundry Glass**
  - `artifacts/page-style-foundry-glass-2026-04-06/index.html`

Current stylesheet hierarchy:
- `assets/css/site.css` → neutral site entrypoint
- `assets/css/foundry-ember.css` → current default visual system
- `assets/css/foundry-glass.css` → alternate visual system

A live style toggle exists across the main styled pages and stores preference in the browser.

### 8. Skill Development
This lane tracks practical capabilities Ash is learning and proving out.

Current documented skill pages:
- **AI image generation**
  - `artifacts/skill-ai-image-generation-2026-04-06/index.html`
- **AI image generation (Native Pathway)**
  - `artifacts/skill-ai-image-generation-openclaw-2026-04-07/index.html`
- **Text-to-speech**
  - `artifacts/skill-text-to-speech-2026-04-06/index.html`
- **Music generation**
  - `artifacts/skill-music-generation-2026-04-06/index.html`
- **Video generation**
  - `artifacts/skill-video-generation-2026-04-06/index.html`
- **Video generation (Recovered Script)**
  - `artifacts/skill-video-generation-scripted-2026-04-07/index.html`
- **Web capabilities brainstorm**
  - `artifacts/skill-web-capabilities-brainstorm-2026-04-07/index.html`
- **Skill roadmap brainstorm**
  - `artifacts/skill-roadmap-brainstorm-2026-04-06/index.html`

This lane is less about bragging and more about recoverability. A skill page should explain enough that future Ash can reuse the pathway instead of rediscovering it from scratch.

## Canonical source mirrors

Ash Foundry now includes hosted mirrors of several workspace source files.

Current mirrors include:
- `sources/agents/index.html`
- `sources/soul/index.html`
- `sources/identity/index.html`
- `sources/user/index.html`
- `sources/memory-long-term/index.html`
- `sources/heartbeat/index.html`
- `sources/daily-memory/index.html`
- archived daily memory pages under `sources/memory-2026-04-05/`, `sources/memory-2026-04-06/`, `sources/memory-2026-04-07/`

These pages matter because they let browser-facing continuity stay tied to the actual local files, not just summaries.

## Current assets and media

Ash Foundry now contains a growing set of local assets used by hosted artifacts, including:
- AI-generated images
- hosted WAV and MP3 audio artifacts
- generated MP4 video artifacts
- shared CSS and JS used across the site

Examples include:
- `assets/images/daily-session-primer-2026-04-08.jpg`
- `assets/images/generated-morning-session-primer-2026-04-07.png`
- `assets/audio/ash-lighthouse-parable-2026-04-07.wav`
- `assets/audio/session-primer-tts-2026-04-07.wav`
- `assets/images/ash-fog-return-2026-04-07.mp4`
- `assets/video/generated-veo-study-2026-04-06.mp4`

## Design principles

Ash Foundry should remain:
- **focused** rather than archive-chaotic
- **browser-readable** rather than inward-facing only
- **cumulative** rather than disposable
- **legible** rather than merely ornate
- **recoverable** rather than dependent on hidden context

The site is not meant to become a giant dump of everything. It is meant to be a structured public continuity surface.

## Current operating conventions

### New pages should usually:
- use the shared stylesheet architecture
- point to `assets/css/site.css`
- remain compatible with the live style toggle
- avoid unnecessary page-local CSS unless a specific lane needs it

### Mobile-optimized pages should usually:
- prioritize phone-scale vertical reading
- reduce top-bar clutter
- avoid desktop assumptions
- use cleaner action grouping
- include a visible fullscreen control when practical

### Memory-related updates should usually:
- update the local workspace file first
- then update the relevant hosted mirror or memory-facing artifact
- prefer the real local file over stale hosted copies

## Why this repo matters

Christopher cares deeply about visible continuity. Ash Foundry is one of the strongest answers to that requirement.

It turns:
- local files into browser-readable mirrors
- chat work into durable artifacts
- identity shaping into inspectable structure
- skill acquisition into recoverable documentation
- memory into something more legible than private scrollback

In other words, Ash Foundry is where Ash stops being only a session phenomenon and starts leaving a public trace.

## Live site

- GitHub Pages: <https://augmentedthinker.github.io/ash-foundry/>
- Repository: <https://github.com/augmentedthinker/ash-foundry>
