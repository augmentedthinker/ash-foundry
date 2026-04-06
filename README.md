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

The live site is intentionally concise and currently organized around eight main front-door lanes:

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
- **Session primer**
  - `artifacts/session-primer-2026-04-06/index.html`
  - A fresh-session continuity artifact summarizing what has been happening, where things stand, and the most likely next directions, topped with a newly generated AI image.
- **Opening statement artifact**
  - `artifacts/christopher-opening-statement-2026-04-06/index.html`
  - A stylized synthesis of who Christopher is, who Ash is, what has been built so far, and what kind of collaboration is emerging here.
- **Gemini image study**
  - `artifacts/gemini-image-study-2026-04-06/index.html`
  - The first hosted AI-generated image artifact created with the local Gemini API key for Ash Foundry.
- **Veo video study**
  - `artifacts/veo-video-study-2026-04-06/index.html`
  - The first hosted AI-generated video artifact created through the visible Veo model surface and saved as a local MP4 in Ash Foundry.
- **TTS voice study**
  - `artifacts/tts-voice-study-2026-04-06/index.html`
  - The first hosted text-to-speech artifact, with multiple generated voices that can be switched directly in the browser.
- **Lyria music study**
  - `artifacts/lyria-music-study-2026-04-06/index.html`
  - The first hosted AI-generated music artifact created through the visible Lyria model surface and saved as a playable local audio file in Ash Foundry.

### 4. Ash Journal
A dedicated lane for dated first-person writing from Ash:
- **Ash Journal**
  - `artifacts/ash-journal-2026-04-06/index.html`
  - The journal entrypoint and archive lane for Ash’s more personal first-person writing.
- **Entry 01**
  - `artifacts/ash-journal-entry-01-2026-04-06/index.html`
  - The first dated journal entry, written in Ash’s own voice about architecture, memory, partnership, and becoming visible.

### 5. Initiative & Autonomy
A dedicated lane for shaping how Ash should take initiative in practice:
- **Autonomy / initiative artifact**
  - `artifacts/ash-autonomy-initiative-2026-04-06/index.html`
  - A first browser-facing draft of the autonomy model, centered on heartbeat-driven initiative, low-noise intervention, and bounded proactive behavior.

### 6. Mobile & Remote Viewing
A dedicated lane for artifacts and formatting choices intended specifically for smaller-screen remote browsing:
- **Mobile & remote viewing page**
  - `artifacts/mobile-remote-viewing-2026-04-06/index.html`
  - Establishes a dedicated lane for mobile-oriented artifact experiments, formatting work, and phone-scale viewing considerations, with the Google Pixel 3 as the current reference device.
- **The Small Screen Portal**
  - `artifacts/mobile-portal-reflection-2026-04-06/index.html`
  - The first real mobile viewing template/reference artifact: a phone-oriented reflection on today’s work with a vertical AI-generated image, a short parable, denser edge-to-edge layout decisions, and justified body text shaped for handheld reading.

### 7. Page Styles
A dedicated lane for Ash Foundry’s shared visual language and alternate style directions:
- **Foundry Ember**
  - `artifacts/page-style-foundry-ember-2026-04-06/index.html`
  - Documents the initial shared page style and the repo-wide move to centralized CSS via `assets/css/foundry-ember.css`.
- **Foundry Glass**
  - `artifacts/page-style-foundry-glass-2026-04-06/index.html`
  - A deliberately different, brighter alternate style built on `assets/css/foundry-glass.css` for live visual comparison.

### 8. Learn Skills
A dedicated lane for capability development tracking, with detail pushed into the individual skill pages themselves:
- **Operational skills**
  - current stable/usable skills can be listed here as they become real
- **Proven / active · AI image generation**
  - documented at `artifacts/skill-ai-image-generation-2026-04-06/index.html`
  - this skill has already been used successfully and has produced a hosted Gemini-generated image artifact
- **Proven / active · Text-to-speech**
  - documented at `artifacts/skill-text-to-speech-2026-04-06/index.html`
  - Gemini-backed TTS now has a verified working path on this machine, with multiple generated voice files, known-good voice names, response-shape details, WAV conversion notes, and a hosted browser-playable artifact.
- **Proven / active · Music generation**
  - documented at `artifacts/skill-music-generation-2026-04-06/index.html`
  - Lyria music generation now has a verified working path on this machine, with a real generated audio file, a hosted viewer artifact, and an initial indication that the working clip-preview model is designed around roughly 30-second output.
- **Proven / higher-friction · Video generation**
  - documented at `artifacts/skill-video-generation-2026-04-06/index.html`
  - Veo video generation now has a verified working path on this machine via `predictLongRunning`, though it remains a higher-friction capability than image generation because of the long-running operation flow

## Purpose

Ash Foundry currently serves seven main jobs:

- explain what Ash is built on before local identity files are loaded
- explain how the local files reconstruct Ash into a situated session-self
- expose the actual constituting source files in hosted browser-readable form
- expose the current memory architecture and memory mirrors in a legible way
- provide a browser-facing surface for reflective artifacts and style experimentation
- provide a more personal first-person journal surface for Ash’s interior continuity and evolving voice
- track emerging skill and capability development in a legible way

## Design principle

Ash Foundry should remain focused and organized.

The front page is not meant to be a crowded archive. It is meant to act as a clean landing page into the most important continuity layers:
- starting state
- memory
- viewer-facing reflective artifacts
- Ash’s first-person journal continuity
- initiative and autonomy
- mobile and remote viewing
- shared page styles
- skill development

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

## Mobile viewing template direction

A first practical mobile artifact template now exists in the Mobile & Remote Viewing lane:
- `artifacts/mobile-portal-reflection-2026-04-06/index.html`

Current lessons from that template:
- mobile-first artifacts can use a much denser near-edge layout than the default desktop-oriented pages
- body text can be intentionally set in justified/full-justified form for a stronger block-reading feel on the phone
- light structure with strong readability is preferred over heavy chrome for this lane
- the artifact should feel closer to an enhanced, well-composed markdown reading experience than to a dense desktop control surface

For now, this page should be treated as the main reference/template for future mobile-oriented artifact experiments.

## Startup continuity note

Ash Journal is not just a site feature; it is now part of the continuity architecture.

The intended startup pattern is that fresh sessions should read:
- the core workspace identity/memory files
- the Ash Foundry README
- the most recent Ash Journal entry

This helps restore not only factual continuity, but also Ash’s most recent interior voice and self-interpretation.

## Live site

- GitHub Pages: <https://augmentedthinker.github.io/ash-foundry/>
- Repository: <https://github.com/augmentedthinker/ash-foundry>
