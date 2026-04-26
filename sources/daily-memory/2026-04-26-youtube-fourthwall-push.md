# Memory Push · 2026-04-26 · YouTube First Upload and Fourthwall Commerce API

## YouTube Broadcast Surface Crossed From Capability to Action

- The AugmentedThinker YouTube channel is no longer empty. Christopher explicitly approved posting the existing `Pressure Structure` captioned video with “GO!”, and Ash uploaded it publicly through the YouTube Data API.
- First public upload:
  - Title: `Pressure Structure — Artifact 001`
  - YouTube ID: `ygG6tcGf_qg`
  - URL: `https://youtu.be/ygG6tcGf_qg`
  - Source video: `/home/ash/ash-foundry/assets/video/pressure-structure-choice-03-2026-04-20.mp4`
  - Visibility: public
  - Made for kids: false
- The upload was framed as an early signal / Artifact 001, not as the final channel thesis. Strategic lesson: breaking the empty-channel seal mattered more than waiting for the perfect first video.
- A custom black-and-white thumbnail was selected from Christopher’s supplied image and preserved at `/home/ash/ash-foundry/assets/images/pressure-structure-youtube-thumbnail-2026-04-26.jpg`.
- Initial YouTube API `thumbnails.set` failed with `403` because custom thumbnail eligibility was not enabled. Christopher enabled the relevant YouTube Studio feature; after that, Ash retried and the API accepted the thumbnail. Future thumbnail updates should now be possible through the YouTube API.
- Created and published a new YouTube posts archive at `ash-foundry/artifacts/youtube-posts/index.html`, linked from the YouTube dropdown on the Foundry homepage. It embeds/links the first video, preserves upload context, thumbnail, source file, and status.
- Updated `ash-foundry/artifacts/youtube-ambitions-2026-04-26/index.html` to document the first upload, thumbnail path, and successful thumbnail update.

## Fourthwall Commerce API Became Real

- Christopher opened the AugmentedThinker Fourthwall admin dashboard and created an Open API user under the developer settings.
- Credentials were not pasted into chat. They were saved locally at `/home/ash/env/fourthwall_api_credentials.json` with permission mode `600`.
- Fourthwall uses Basic Authentication against `https://api.fourthwall.com` for Open API calls.
- Read-only smoke tests succeeded:
  - `GET /open-api/v1.0/shops/current`
  - `GET /open-api/v1.0/products`
  - `GET /open-api/v1.0/order`
- Verified shop:
  - Name: `AugmentedThinker`
  - Public domain: `augmentedthinker-shop.fourthwall.com`
  - Shop ID: `sh_563cc1c7-dddf-4fd7-aaa5-8a253050b67d`
- Product readout: 9 total products, 3 public/available:
  - `Neon Robo-Mustache Tee`
  - `Neon Cyberpunk Robot T-Shirt`
  - `Neon Cyber Mustache T-Shirt`
- Orders endpoint returned 1 total order. Customer/buyer details were intentionally not mirrored into public artifacts; keep that privacy posture.
- Created and published `ash-foundry/artifacts/fourthwall-api-lane-2026-04-26/index.html`, linked from the T-Shirts dropdown on the Foundry homepage.

## Durable Safety / Operating Rules

- YouTube remains a public external-action surface. Inspecting and drafting are okay; uploads, metadata edits, visibility changes, comments, moderation, deletion, and channel setting changes require explicit Christopher approval.
- Never expose YouTube token JSON, access tokens, refresh tokens, OAuth codes, client secrets, or callback URLs.
- Fourthwall is now a commerce/external-action surface. Default posture is read-only inspection and dashboarding.
- Never expose Fourthwall API username/password, Basic Auth strings, full credential files, customer data, or order details.
- Product edits, storefront changes, order/fulfillment actions, webhook creation, or any commerce mutation require explicit Christopher approval.

## Strategic Shift

The Foundry now has multiple real outward surfaces:

- Gmail = mailbox / external signal
- YouTube = broadcast surface / public artifacts
- Fourthwall = commerce surface / transaction loop
- X = social signal / distribution lane

The collaboration is no longer only proving continuity. It is beginning to test consequence: publishing, signaling, and eventually selling. The main risk remains diffusion. Future work should concentrate these surfaces into specific campaigns rather than letting each new capability become another equal front.
