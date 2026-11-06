# Still: Frontend & Design

Website and design assets for **Still**, the 56-day programme that resets your trading behaviour.

A pnpm + Turborepo monorepo, set up like `midas-frontend`:

| Path | What it is |
|---|---|
| [`apps/web`](apps/web/) | The landing page (Next.js 16, App Router, Tailwind 3). Deployed on Vercel |
| [`packages/ui`](packages/ui/) | Brand components: Button, Card, Chip, Eyebrow, Wordmark, Icon |
| [`packages/tailwind-config`](packages/tailwind-config/) | v2 classical brand colours and fonts as a Tailwind preset |
| `packages/typescript-config`, `eslint-config`, `prettier-config` | Shared tooling config |

## Run it

```bash
pnpm install
pnpm dev:web        # http://localhost:3100
pnpm build:web      # production build
pnpm lint && pnpm typecheck
pnpm icons          # rebuild packages/ui icons after changing images/icons
```

Copy `apps/web/.env.example` to `apps/web/.env.local` for local settings. Commits follow Conventional Commits (checked by commitlint).

## Deploy (Vercel)

Import the repo in Vercel and set **Root Directory** to `apps/web` (framework: Next.js; Vercel runs the pnpm workspace install). There is no checkout on the site: the programme is sold only as an in-app purchase. Environment variables:

| Name | What |
|---|---|
| `SIGNUP_WEBHOOK_URL` | Email tool webhook for the founder list. Unset: the form says it opens soon |
| `NEXT_PUBLIC_SITE_URL` | The live URL, for social cards |

## Design assets

| Folder | What's inside |
|---|---|
| [`docs/`](docs/) | [Brand colours](docs/brand-colors.md) (v2, classical / Greek mythology): palette, contrast, style rules, code tokens |
| [`images/`](images/) | Logo and app icons (v1 teal Pause pose, to be redrawn for v2), [`icons/`](images/icons/) 106-icon set, [`screens/`](images/screens/) app screenshots, [`blog/`](images/blog/) blog illustrations |
| [`ui-design/`](ui-design/) | **v1 comic direction, superseded by v2 below; kept for reference.** `still-ui-v1.html` (10 app screens), `still-ui-v2.html` (quest art), `still-ui-v3.html` (chapter themes), `still-ui-v4.html` (inventory), `still-ui-v5.html` (day log), `still-ui-v6.html` (day log, JoJo style), `still-ui-v7.html` (bottom bar), `landing-v2.html` (pre-sale landing page) |
| [`docs/ui-design/`](docs/ui-design/) | [`still-ui-v8.html`](docs/ui-design/still-ui-v8.html): classical editorial concept, five editable iPhone screens, embedded artwork/fonts and demo interactions. Open directly in a browser; artwork is concept-only pending production rights clearance. |
| [`ui-design-page/`](ui-design-page/) | [`index.html`](ui-design-page/index.html): searchable gallery of all 46 editable feature-screen HTML pages, with shared classical styling, local demo controls and original-image comparisons. Keep the folder together and open the index directly; no backend or server required. See the [editing guide](ui-design-page/README.md). |

## Design direction

**v2 (current, chosen 2026-11-06): classical editorial, Greek mythology.** Ivory, ink, antique gold and sky; Greek frescoes and statues as art; Cormorant Garamond + Manrope. The source of truth is [`ui-design-page/`](ui-design-page/) (46 screens) with [`docs/ui-design/still-ui-v8.html`](docs/ui-design/still-ui-v8.html) and [`landing-v3.html`](docs/ui-design/landing-v3.html). Rules and tokens: [brand colours](docs/brand-colors.md).

v1 (teal + gold JoJo-style comic, Bangers + Inter) is retired. The live site in `apps/web` and the `packages/ui` / `packages/tailwind-config` presets use v2.

## Landing page design

[`docs/ui-design/landing-v3.html`](docs/ui-design/landing-v3.html) is the design the live site in `apps/web` is built from. Page text lives in `apps/web/src/content/site.ts`; the hero ceiling and app-preview art are in `apps/web/public/images/art/` (concept-only until rights are cleared); the public-domain myth paintings are in `public/images/myth/` and the 3D Athena (SMK scan, public domain, simplified to 100k triangles with meshopt) is `public/models/athena.glb`. Credits: `src/content/artwork.ts` and `/credits`. The app screens in `public/images/app/` are captures of the matching `ui-design-page/screens/*.html` designs at 2x; recapture them when those designs change. `ui-design/landing-v2.html` is the retired comic version. `landing-v1.html` is the earlier dark version, kept for reference.

Paintings run through the page: one per “If this feels familiar” problem
([`images/art/problems/`](apps/web/public/images/art/problems/)), one per programme chapter
([`images/art/programme/`](apps/web/public/images/art/programme/)), one still life per tool
([`images/art/tools/`](apps/web/public/images/art/tools/)) and a dawn scene for Pause
(`images/art/pause-calm.jpg`). Symbolism, the shared style recipe and regeneration notes:
[landing art](docs/art-landing.md).

[`docs/ui-design/landing-v3.html`](docs/ui-design/landing-v3.html) is the classical editorial landing concept matching the v8 app design. It is self-contained and opens offline, with responsive layouts, chapter tabs, FAQ accordions and a clearly non-submitting signup preview. It is the design source for the live site; artwork remains concept-only pending production rights clearance.

Open any `.html` file directly in a browser. The older comic previews use Google Fonts (Bangers, Inter), so an internet connection is needed for their full look. The classical v8 app and v3 landing previews embed their fonts and artwork and work offline.

Backend and product docs: [still-backend](https://github.com/Liuhangfung/still-backend).
