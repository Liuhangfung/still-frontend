# Still — editable feature UI pages

This folder contains **46 independently editable app-screen designs** and `index.html`, a searchable HTML gallery. It follows Still's approved classical editorial direction: warm ivory, charcoal, restrained antique gold and powder blue, classical artwork, Cormorant Garamond headings and Manrope controls. The lowercase wordmark retains a subtly smaller initial **s**.

## Open the designs

Download or clone the whole folder, then open **`index.html` directly in a browser**. Keep the folder structure intact; no npm install, API key, database or server is required. The gallery loads HTML phone previews as they come into view. Search by screen name or filter by category, scroll inside a phone for longer forms, or use **Open editable HTML** to inspect an individual page and its original visual reference.

These are real HTML/CSS interfaces, not screenshots wrapped in an HTML page. They preserve the feature concepts and normalize their typography, fields and navigation; they are not pixel-for-pixel copies of the generated PNGs. The optimized original references are included for comparison.

## Editing structure

| Path | Purpose |
|---|---|
| `index.html` | Gallery and category/search navigation |
| `screens/*.html` | One editable page per existing screen ID, 01–46 |
| `shared/screens.css` | Shared app tokens, typography, form controls, phone shell and responsive rules |
| `shared/preview.js` | Local choices, selection caps, steppers, ordering and preview notices |
| `shared/gallery.css`, `shared/gallery.js` | Gallery layout, filtering, lazy loading and preview scaling |
| `shared/screen-index.json` | Screen titles, groups, primary labels and implementation boundaries |
| `assets/art/` | Artwork-only classical crops used by the HTML interfaces |
| `assets/references/` | Optimized original screen images for comparison |
| `assets/fonts/` | Local WOFF2 fonts and both original SIL Open Font License notices |

The HTML files contain their own editable labels and controls. Changing a screen does not automatically change `screen-index.json` or the gallery titles; update those together if renaming a feature. The shared CSS applies consistently to every screen.

## Preview behavior and scope

Native radios, checkboxes, text fields, selects and disclosures are editable locally. Selection caps, number steppers and rule ordering have lightweight JavaScript demonstrations. Save, start, hold-to-accept, sign-in and pause actions show a **preview notice**, not a successful backend operation. Navigation links move between sample pages, not actual account states. Each screen is an independent illustration; values do not represent one continuous user journey.

**Nothing is sent or persistently saved.** There are no API requests, credentials, analytics, purchases, tracking or browser-storage writes. Text and selections reset on reload. The preview does not supply secure native note storage, real authentication, validation flows, offline synchronization or a working iOS app. Hold-to-accept is shown as an ordinary clickable preview control; a production gesture is not implemented.

The source baseline for the feature concepts is `still-backend` commit `43ca35d925edc0b614b30cc8999d6704df11a973`, reviewed on 6 November 2026. **Only Chapter 1 / Days 1–14 is playable in that source.** The 56-day intention is not a claim that later chapters are implemented. Market-neutral language supports the intended all-market audience, but some existing questionnaire keys and authored content remain crypto-first. No market feeds, exchange/broker connections, in-app AI, automatic trading, push delivery, IAP or account-deletion capability is implied.

Habit practice, personal readiness checks, XP, ranks and grades are not financial advice, trading clearance or evidence of profit. No real-money trade is needed to complete the illustrated activities. Draft save, whole-quest finish, routine completion and Day Log grading remain distinct implementation boundaries.

## Artwork and fonts

Artwork crops and original-screen references are **concept-only pending production-rights clearance**. They originate from the earlier AI-generated classical concepts based on supplied visual references. Do not assume ancient subject matter or AI generation clears rights to a modern photograph, artwork adaptation or reference image. Verify or replace production imagery before commercial publication.

Cormorant Garamond and Manrope are included under the SIL Open Font License 1.1, with original notices in `assets/fonts/`. WOFF2 conversion does not alter the typeface design. Original font sources: [Cormorant Garamond](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond) and [Manrope](https://github.com/google/fonts/tree/main/ofl/manrope).

This folder does not replace the live landing in `apps/web` or the earlier UI design versions.
