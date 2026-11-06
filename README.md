# Still: Frontend & Design

Website and design assets for **Still**, the 56-day programme that resets your trading behaviour.

A pnpm + Turborepo monorepo, set up like `midas-frontend`:

| Path | What it is |
|---|---|
| [`apps/web`](apps/web/) | The landing page (Next.js 16, App Router, Tailwind 3). Deployed on Vercel |
| [`packages/ui`](packages/ui/) | Brand components: Button, Card, Chip, Eyebrow, Mark, Device, Icon |
| [`packages/tailwind-config`](packages/tailwind-config/) | Brand colours, fonts and comic shadows as a Tailwind preset |
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
| [`docs/`](docs/) | [Brand colours](docs/brand-colors.md): palette, contrast, comic style rules, code tokens |
| [`images/`](images/) | Logo and app icons (teal Pause pose), [`icons/`](images/icons/) 106-icon set, [`screens/`](images/screens/) app screenshots, [`blog/`](images/blog/) blog illustrations |
| [`ui-design/`](ui-design/) | `still-ui-v1.html` (10 app screens), `still-ui-v2.html` (quest art), `still-ui-v3.html` (chapter themes), `still-ui-v4.html` (inventory), `still-ui-v5.html` (day log), `still-ui-v6.html` (day log, JoJo style), `still-ui-v7.html` (bottom bar), `landing-v2.html` (pre-sale landing page) |
| [`docs/ui-design/`](docs/ui-design/) | [`still-ui-v8.html`](docs/ui-design/still-ui-v8.html): classical editorial concept, five editable iPhone screens, embedded artwork/fonts and demo interactions. Open directly in a browser; artwork is concept-only pending production rights clearance. |

## Landing page design

`ui-design/landing-v2.html` is the design the live site in `apps/web` is built from. Page text lives in `apps/web/src/content/site.ts`. `landing-v1.html` is the earlier dark version, kept for reference.

[`docs/ui-design/landing-v3.html`](docs/ui-design/landing-v3.html) is the classical editorial landing concept matching the v8 app design. It is self-contained and opens offline, with responsive layouts, chapter tabs, FAQ accordions and a clearly non-submitting signup preview. It does not replace the live landing; artwork remains concept-only pending production rights clearance.

Open any `.html` file directly in a browser. The older comic previews use Google Fonts (Bangers, Inter), so an internet connection is needed for their full look. The classical v8 app and v3 landing previews embed their fonts and artwork and work offline.

Backend and product docs: [still-backend](https://github.com/Liuhangfung/still-backend).
