# Still: Frontend & Design

Design assets and UI prototypes for **Still**, the 56-day programme that resets your trading behaviour.

| Folder | What's inside |
|---|---|
| [`docs/`](docs/) | [Brand colours](docs/brand-colors.md): palette, contrast, comic style rules, code tokens |
| [`images/`](images/) | Logo and app icons (teal Pause pose), [`icons/`](images/icons/) 106-icon set, [`screens/`](images/screens/) app screenshots, [`blog/`](images/blog/) blog illustrations |
| [`ui-design/`](ui-design/) | `still-ui-v1.html` (10 app screens), `still-ui-v2.html` (quest art), `still-ui-v3.html` (chapter themes), `still-ui-v4.html` (inventory), `still-ui-v5.html` (day log), `still-ui-v6.html` (day log, JoJo style), `still-ui-v7.html` (bottom bar), `landing-v2.html` (pre-sale landing page) |

## Editing the landing page

Edit `ui-design/landing-v2.src.html`, which uses `{{icon-name}}` placeholders for icons from `images/icons/`. `landing-v2.html` is the built page with the icons inlined. `landing-v1.html` is the earlier dark version, kept for reference.

Open any `.html` file directly in a browser. The headings use Google Fonts (Bangers, Inter), so an internet connection is needed for the full look.

Backend and product docs: [still-backend](https://github.com/Liuhangfung/still-backend).
