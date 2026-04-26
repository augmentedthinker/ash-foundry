# Memory Push · 2026-04-26 · Afternoon Capability Expansion

## Session Pattern

This afternoon became a major outward-surface expansion session. Christopher and Ash moved quickly but coherently: YouTube, Hemispheres audio, Fourthwall Open API, Fourthwall Storefront API, and Foundry documentation all advanced in one sustained run.

Christopher explicitly encouraged action over perfection. The key theme was breaking seals: not waiting for the perfect first YouTube video, not leaving Fourthwall as a dormant store, not treating public surfaces as abstract possibilities.

## YouTube: First Public Upload and Thumbnail Loop

- Christopher approved posting the existing `Pressure Structure` captioned video as the first AugmentedThinker YouTube upload.
- Ash uploaded it publicly through the YouTube Data API:
  - Title: `Pressure Structure — Artifact 001`
  - URL: `https://youtu.be/ygG6tcGf_qg`
  - Video ID: `ygG6tcGf_qg`
  - Source: `ash-foundry/assets/video/pressure-structure-choice-03-2026-04-20.mp4`
- The upload was deliberately framed as `Artifact 001`, not a final channel thesis. Strategic lesson: sometimes the right first move is a real artifact that breaks the empty-channel seal, not a perfect introductory manifesto.
- Christopher supplied a thumbnail image. Ash preserved it in the Foundry at `assets/images/pressure-structure-youtube-thumbnail-2026-04-26.jpg`.
- Initial thumbnail API update failed with a YouTube `403` because custom thumbnail eligibility was not enabled. Christopher enabled the relevant YouTube Studio feature, Ash retried, and the API accepted the custom thumbnail.
- Future YouTube thumbnail updates should now be possible through API, while uploads/metadata edits/visibility changes/comments/moderation still require explicit Christopher approval.
- Ash created `artifacts/youtube-posts/index.html`, linked it from the Foundry homepage YouTube dropdown, and embedded/archived the first video with context.

## Hemispheres: Broadcast Interjection and Founder Lens

- Christopher reframed the Hemispheres question away from “What is the Foundry?” and toward “Now that Christopher and Ash have real public broadcast capacity, what deserves to emerge from the workshop?”
- Ash added Christopher’s exact interjection to `artifacts/hemispheres-entries/index.html` and pushed it live.
- Ash then wrote the next Hemispheres entry through **The Founder** lens.
- Core Founder verdict: the Foundry is not the product; it is the shop floor. YouTube should become a public test bench for human-AI collaboration turning confusion into shipped artifacts.
- Christopher asked about text-to-speech/read-aloud. Ash checked ElevenLabs quota and found the free plan had 10,000 characters/month, 1,314 used, 8,686 remaining, while the full Founder entry was about 11,131 characters, too large for current ElevenLabs quota.
- Ash generated a short Google/Gemini TTS sample of the Founder entry’s opening paragraph using the Charon voice and added a `Read opening aloud` button to the latest Founder Hemispheres card.

## Fourthwall Open API: Commerce Surface Connected

- Christopher opened the Fourthwall admin dashboard and created an Open API user.
- Credentials were safely stored locally at `/home/ash/env/fourthwall_api_credentials.json` with mode `600`; they were not pasted into Telegram or committed.
- Ash verified Fourthwall Basic Auth read-only access against `https://api.fourthwall.com`.
- Read-only endpoints verified:
  - `GET /open-api/v1.0/shops/current`
  - `GET /open-api/v1.0/products`
  - `GET /open-api/v1.0/order`
- Verified shop:
  - Name: `AugmentedThinker`
  - Public domain: `augmentedthinker-shop.fourthwall.com`
  - Shop ID: `sh_563cc1c7-dddf-4fd7-aaa5-8a253050b67d`
- Product endpoint returned 9 products total and 3 public/available products:
  - Neon Robo-Mustache Tee
  - Neon Cyberpunk Robot T-Shirt
  - Neon Cyber Mustache T-Shirt
- Orders endpoint returned 1 total order. Ash avoided exposing buyer/customer details and mirrored only safe high-level counts/status.
- Ash created `artifacts/fourthwall-api-lane-2026-04-26/index.html`, linked from the T-Shirts dropdown on the Foundry homepage, and documented the API state.

## Fourthwall Storefront API: Custom Shop Window Path

- Christopher noticed the separate Storefront API token option in Fourthwall developer settings.
- Ash clarified the distinction:
  - Open API = admin/platform API for shop/products/orders/memberships/webhooks.
  - Storefront API = customer-facing API for building a custom storefront elsewhere while using Fourthwall product/cart/checkout backend.
- Christopher created and saved the Storefront token at `/home/ash/env/fourthwall_storefront_token.txt` with mode `600`.
- Initial Storefront API probes returned `403` until Ash added a normal `User-Agent` header. With that header, reads succeeded.
- Verified Storefront endpoints:
  - `GET /v1/shop`
  - `GET /v1/collections`
  - `GET /v1/collections/all/products`
- Storefront API returned one public collection: `All Products` with slug `all`.
- It returned the same 3 public storefront products, each with images and variants available for building a custom Foundry shop window.
- Ash updated the Fourthwall API lane with Storefront API results and pushed it live.

## Foundry / README / Durable Memory

- Ash updated the Foundry README to reflect:
  - YouTube as a broadcast/archive lane with first public upload live.
  - Fourthwall as a commerce surface with API-backed product/order visibility.
  - YouTube and Fourthwall safety boundaries.
- Ash wrote and mirrored an earlier memory push: `memory/2026-04-26-youtube-fourthwall-push.md` and `ash-foundry/sources/daily-memory/2026-04-26-youtube-fourthwall-push.md`.
- Durable `MEMORY.md` was updated with YouTube first-upload capability and Fourthwall API operational/safety facts.

## Safety Rules Hardened

- YouTube: inspect/summarize/draft freely; uploads, metadata edits, visibility changes, comments/replies, moderation, deletion, and channel settings require explicit Christopher approval.
- Fourthwall: read-only shop/product/order summaries are allowed; product edits, storefront changes, cart/checkout tests, fulfillment/order actions, webhooks, or any commerce mutation require explicit Christopher approval.
- Never expose tokens, OAuth secrets, Basic Auth strings, API usernames/passwords, credential JSON contents, customer/buyer details, or detailed order data.

## Strategic Meaning

The Foundry now connects to real outward surfaces:

- Gmail = mailbox / external signal
- YouTube = broadcast/public artifact surface
- Fourthwall = commerce/transaction surface
- X = social distribution lane
- Foundry = forge/workshop/proof architecture

The collaboration is shifting from architecture as continuity into architecture as action routing. The major risk remains diffusion: too many meaningful external doors can become another form of drift. The next phase should concentrate around a small number of consequence-bearing loops rather than treating every new API as an equal campaign.
