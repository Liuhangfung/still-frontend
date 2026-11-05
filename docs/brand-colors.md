# Still: Brand Colours

> **Status:** v1, chosen 2026-11-05
> **Applies to:** the mobile app, the website, store screenshots and marketing
> **Logo:** the teal "Pause pose" (see [`images/`](../images/))
> **UI reference:** [`ui-design/still-ui-v1.html`](../ui-design/still-ui-v1.html)

---

## 1. The idea in one line

**Calm teal + bold gold, drawn like a comic.** Teal is the "still" part: calm, steady, in control. Gold is the energy: action, reward, the pause button. Thick black outlines and offset shadows give it the JoJo-style comic feel.

---

## 2. Core palette

| Swatch | Name | Hex | Role |
|---|---|---|---|
| 🟦 | **Teal** | `#0FA3A3` | Brand colour. App icon background, progress, selected states, links |
| 🟨 | **Gold** | `#FFC300` | Main action. Primary buttons, the Pause button, XP, rewards, key headings |
| ⬛ | **Ink** | `#111111` | Outlines, comic shadows, text on gold, cream and teal |
| 🟩 | **Dark teal** | `#064E4E` | The logo's shadow colour. Card shadows, small teal text on light backgrounds |
| 🟫 | **Cream** | `#FFF6DC` | Comic "paper" cards on the dark app background |

> The emoji squares are only for this document. In the app, use the hex values.

### App surfaces (dark theme)

| Name | Hex | Use |
|---|---|---|
| **Background** | `#072B2F` | Main app background |
| **Panel** | `#0D3B40` | Dark cards, sheets, input areas |
| **Panel raised** | `#11494F` | Pressed state, nested cards |
| **Tab bar** | `#05201F` | Bottom navigation |
| **Deep shadow** | `#021416` | Shadow under dark cards |

### Text

| Name | Hex | Use |
|---|---|---|
| **Text** | `#FFFFFF` | Main text on dark backgrounds |
| **Text muted** | `#8FB9BB` | Secondary text and hints on dark backgrounds |
| **Text on light** | `#111111` | Main text on cream, gold, teal and white |
| **Text muted on light** | `#55605F` | Secondary text on cream |

### Status colours (use sparingly)

| Name | Hex | Use |
|---|---|---|
| **Coral** | `#FF5A4E` | Warnings and "Not today" only. Never for losses or prices. |
| **Green** | `#2BD67B` | Success ticks. Never for "profit". |
| **Info** | `#0FA3A3` | Same as Teal |

---

## 3. How much of each colour

Use roughly **60 / 30 / 10** on a typical screen:

| Share | Colour | Where |
|---|---|---|
| ~60% | Background and panel (dark teals) | Calm base: the screen should feel *still* |
| ~30% | Cream cards and white text | Content |
| ~10% | **Gold** + Teal accents | Actions and rewards only |

**Gold is precious.** If everything is gold, nothing stands out. Aim for **one gold button per screen**, the thing the user should do next.

---

## 4. Comic style rules

These make the colours feel like the logo:

| Element | Rule |
|---|---|
| **Outline** | `3px solid #111111` on cards, buttons, chips and inputs (`2px` on small items) |
| **Shadow (cards on dark)** | Hard offset, no blur: `5px 5px 0 #064E4E` |
| **Shadow (buttons)** | `4px 4px 0 #111111` |
| **Shadow (dark cards)** | `5px 5px 0 #021416` |
| **Corner radius** | Cards 14px · Buttons 12px · Chips: fully round |
| **Slant** | Big headings and primary buttons are skewed **-6° to -8°**, like the logo |
| **Speed lines** | 3 short teal lines before a heading (decoration only, max one per screen) |
| **Halftone** | Teal dots at 18% opacity on hero screens only (welcome, rewards) |

**Never use soft, blurry drop shadows.** Comic shadows are always hard-edged.

---

## 5. Contrast (accessibility)

Checked with the WCAG 2.1 contrast formula. **AA** needs 4.5:1 for normal text and 3:1 for large text (18.66px+ bold, or 24px+).

| Text / icon | On | Ratio | OK for |
|---|---|---|---|
| White `#FFFFFF` | Background `#072B2F` | **15.0** | ✅ All text |
| Muted `#8FB9BB` | Background `#072B2F` | **7.0** | ✅ All text |
| Gold `#FFC300` | Background `#072B2F` | **9.4** | ✅ All text |
| Teal `#0FA3A3` | Background `#072B2F` | **4.9** | ✅ All text |
| White | Panel `#0D3B40` | **12.2** | ✅ All text |
| Muted | Panel `#0D3B40` | **5.7** | ✅ All text |
| Ink `#111111` | Gold `#FFC300` | **11.7** | ✅ All text |
| Ink | Cream `#FFF6DC` | **17.5** | ✅ All text |
| Dark teal `#064E4E` | Cream | **8.8** | ✅ All text |
| Ink | Teal `#0FA3A3` | **6.1** | ✅ All text |
| Ink | Coral `#FF5A4E` | **6.1** | ✅ All text |
| ⚠️ White | Teal `#0FA3A3` | **3.1** | Large / bold text and icons **only** |
| ⚠️ White | Coral `#FF5A4E` | **3.1** | Large / bold text and icons **only** |
| ⚠️ Teal | White `#FFFFFF` | **3.1** | Large text and icons **only**. Use Dark teal for small text. |

**Rules that come from this table:**
1. Small text on a **teal or coral** background is **Ink**, not white.
2. Small teal text on a **light** background is **Dark teal** `#064E4E`.
3. Never put meaning in colour alone: "Not today" also has the icon and the words.

---

## 6. Meaning rules (important for a trading app)

Trading apps use green = up/profit and red = down/loss. **Still is not a trading app**, so:

- ❌ Don't use green/red to show gains, losses or prices.
- ❌ Don't make a "win" state look like a profit (no green money, no rising-chart celebrations).
- ✅ **Gold = you did the right thing** (finished a quest, kept a rule, *chose not to trade*).
- ✅ **Coral = stop and think** (urge too high, "Not today", safety messages).
- ✅ Safety screens (big loss, distress, help page) switch to **calm mode**: teal and white only, no gold rewards, no comic bursts, no slant.

---

## 7. Logo colours

| Part | Hex |
|---|---|
| Pause bars | Gold `#FFC300` |
| Bar outline | Ink `#111111` |
| Bar shadow | Dark teal `#064E4E` |
| Speed lines | Teal `#0FA3A3` on light backgrounds · White `#FFFFFF` on dark backgrounds |
| App icon background | Teal `#0FA3A3` |

Files are in [`images/`](../images/): `still-logo.svg` (light backgrounds), `still-logo-on-dark.svg`, `still-app-icon.svg` and `still-app-icon-square.svg` (for the stores).

---

## 8. Fonts

| Use | Font | Notes |
|---|---|---|
| Headings, buttons, rewards | **Bangers** | Comic, all caps, skewed. Short words only, never paragraphs. |
| Body, labels, numbers | **Inter** | 400 / 600 / 800 |

Both are free on Google Fonts (Open Font License).

---

## 9. Code tokens

### CSS (website, prototypes)

```css
:root {
  /* brand */
  --still-teal: #0FA3A3;
  --still-gold: #FFC300;
  --still-ink: #111111;
  --still-teal-dark: #064E4E;
  --still-cream: #FFF6DC;

  /* surfaces */
  --still-bg: #072B2F;
  --still-panel: #0D3B40;
  --still-panel-raised: #11494F;
  --still-tabbar: #05201F;
  --still-shadow-deep: #021416;

  /* text */
  --still-text: #FFFFFF;
  --still-text-muted: #8FB9BB;
  --still-text-on-light: #111111;
  --still-text-muted-on-light: #55605F;

  /* status */
  --still-coral: #FF5A4E;
  --still-green: #2BD67B;

  /* comic */
  --still-outline: 3px solid var(--still-ink);
  --still-shadow-card: 5px 5px 0 var(--still-teal-dark);
  --still-shadow-button: 4px 4px 0 var(--still-ink);
}
```

### React Native / Expo (`src/theme/colors.ts`)

```ts
export const colors = {
  teal: '#0FA3A3',
  gold: '#FFC300',
  ink: '#111111',
  tealDark: '#064E4E',
  cream: '#FFF6DC',

  bg: '#072B2F',
  panel: '#0D3B40',
  panelRaised: '#11494F',
  tabBar: '#05201F',
  shadowDeep: '#021416',

  text: '#FFFFFF',
  textMuted: '#8FB9BB',
  textOnLight: '#111111',
  textMutedOnLight: '#55605F',

  coral: '#FF5A4E',
  green: '#2BD67B',
} as const;

// Hard comic shadow. React Native has no "box-shadow: x y 0" on Android,
// so draw it as a second View offset by (4, 4) behind the card or button.
export const comic = {
  outlineWidth: 3,
  cardShadowOffset: 5,
  buttonShadowOffset: 4,
  radius: { card: 14, button: 12, chip: 999 },
  skewDeg: -6,
} as const;
```

---

## 10. Do and don't

| ✅ Do | ❌ Don't |
|---|---|
| One gold call-to-action per screen | Gold buttons everywhere |
| Hard black outlines and offset shadows | Soft blurry shadows or gradients on cards |
| Dark teal base so the screen feels calm | Bright full-screen colours except on reward moments |
| Ink text on gold, teal and coral | White small text on teal or coral |
| Calm mode (teal + white, no slant) on safety screens | Comic bursts or rewards next to a loss or distress message |
| Gold for discipline and "no trade" rewards | Green/red for profit and loss |

---

## 11. Icons

Line icons live in [`images/icons/`](../images/icons/) (106 icons, 24×24, 2px stroke, `currentColor`). See its [README](../images/icons/README.md). Icons take the colour of the text around them:

| Context | Icon colour |
|---|---|
| Default on dark | White `#FFFFFF` or Muted `#8FB9BB` |
| Active tab, reward, XP | Gold `#FFC300` |
| Selected, progress, info | Teal `#0FA3A3` |
| On gold, cream or teal | Ink `#111111` |
| Warning, "Not today" | Coral `#FF5A4E` (with text, never alone) |
