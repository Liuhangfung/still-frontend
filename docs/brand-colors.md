# Still: Brand Colours

> **Status:** v2, classical editorial (Greek mythology), chosen 2026-11-06. Replaces v1 (teal + gold comic, 2026-11-05), which is in git history.
> **Applies to:** the iOS app (Swift / SwiftUI), the website, store screenshots and marketing
> **Wordmark:** lowercase serif **still**, with a slightly smaller initial **s**
> **UI reference:** [`ui-design-page/`](../ui-design-page/) (46 editable screens; tokens in [`shared/screens.css`](../ui-design-page/shared/screens.css)) · [`docs/ui-design/still-ui-v8.html`](ui-design/still-ui-v8.html) (app) · [`docs/ui-design/landing-v3.html`](ui-design/landing-v3.html) (landing)

---

## 1. The idea in one line

**A quiet museum, not a comic.** Warm ivory paper, charcoal ink, a touch of antique gold and powder-blue sky, with Greek mythological frescoes and statues as the art. The art gives the atmosphere; the practice gives the value. Screens should feel calm, editorial and unhurried: that is the "still" part.

---

## 2. Core palette

| Swatch | Name | Hex | Role |
|---|---|---|---|
| ⬜ | **Ivory** | `#F5F2EB` | Main background, tab bar, text on ink buttons |
| ⬛ | **Ink** | `#20201D` | Text, primary buttons, outlines of selected controls |
| 🟫 | **Antique gold** | `#B69A64` | Progress bars, selected borders, gilded art edges. Decoration and fills, **not small text** |
| 🟦 | **Sky** | `#AABAC4` | Calm accent: selected grade/choice fill, Pause and calm screens |
| ◻️ | **Stone** | `#DAD8D2` | Quiet surfaces, dividers on art pages |

> The emoji squares are only for this document. In the app, use the hex values.

### Surfaces

| Name | Hex | Use |
|---|---|---|
| **Paper** | `#FAF8F2` | Cards and panels on ivory |
| **Field** | `#FAF8F3` | Inputs, choices, selects |
| **Gold wash** | `#EEE8DB` | Highlighted panel (with border `#D8C8AB`) |
| **Sky wash** | `#E7ECEC` | Soft, calm panel (with border `#D3DDDF`) |
| **Selected** | `#EBE4D5` | Checked choice or selected calendar day (border `#AF9568`) |
| **Line** | `#DEDBD3` | Hairline dividers, tab bar top border |
| **Track** | `#DED7CA` | Empty part of a progress bar |

### Text

| Name | Hex | Use |
|---|---|---|
| **Text** | `#20201D` | Main text (Ink) |
| **Lead** | `#59554F` | Intro paragraph under a heading |
| **Muted** | `#656159` | Secondary text, hints |
| **Gold text** | `#76654B` | Eyebrows and small gold labels (use this, never `#B69A64`, for text) |
| **On ink** | `#F5F2EB` | Text on primary (ink) buttons |
| **Focus ring** | `#627784` | 2px keyboard focus outline, 3px offset |

### Status

There are **no status colours** in v2. No coral, no green, no red. Warnings, "Not today" and safety messages are carried by **words, icons and layout** (a calm sky panel, a plain sentence), never by an alarm colour. This keeps the app from ever looking like a P&L screen.

---

## 3. How much of each colour

| Share | Colour | Where |
|---|---|---|
| ~70% | Ivory, paper, stone | Background and cards: the screen should feel *still* |
| ~20% | Ink | Text and the one primary button |
| ~10% | Art, gold, sky | Fresco crops, progress, selected states |

**One ink button per screen**: the thing the user should do next. Everything else is a secondary (outlined) button or a text link. Gold is used for progress and selection, never as a button colour.

---

## 4. Classical style rules

| Element | Rule |
|---|---|
| **Artwork** | Greek mythological frescoes, statues and painted skies, cropped as a single image band on hero screens (Welcome, Today, Journey, Pause). Gilded gold edges on crops are allowed. One artwork per screen at most; form screens have none. On the website, each idea is paired with one myth in a **public-domain painting** (e.g. Icarus for FOMO, Ulysses and the Sirens for Pause), shown with a museum label; sources are in `apps/web/src/content/artwork.ts` and on `/credits` |
| **Headings** | Cormorant Garamond, sentence case, often ending with a full stop ("Judge your day.") |
| **Outline** | 1px hairlines (`#DEDBD3` / `#C9C3B7`). No thick black outlines |
| **Shadow** | Almost none. Cards are flat; only overlays (toast, sheet) get a soft shadow such as `0 5px 24px rgba(0,0,0,.13)` |
| **Corner radius** | Cards ~16px, buttons ~10–12px, chips fully round |
| **Slant** | None. Nothing is skewed |
| **Motion** | App: slow fades only. Website: museum-like depth: a real-time 3D marble Athena in the hero, scroll parallax between painting and text layers, paintings that turn in 3D, gentle tilt toward the cursor. Always slow (≈1 s, ease-out), never bouncy, and everything is still under Reduce Motion |
| **Titles** | Useful title first, mythology second (e.g. "Know your habits", not a god's name). Myth is atmosphere, never required to understand a screen |

**Never use** comic bursts, speed lines, halftone, hard offset shadows or skewed text. Those belong to v1.

---

## 5. Contrast (accessibility)

Checked with the WCAG 2.1 contrast formula. **AA** needs 4.5:1 for normal text and 3:1 for large text (18.66px+ bold, or 24px+).

| Text / icon | On | Ratio | OK for |
|---|---|---|---|
| Ink `#20201D` | Ivory `#F5F2EB` | **14.6** | ✅ All text |
| Ink | Paper `#FAF8F2` | **15.4** | ✅ All text |
| Ivory | Ink (primary button) | **14.6** | ✅ All text |
| Ink | Sky `#AABAC4` | **8.2** | ✅ All text |
| Ink | Antique gold `#B69A64` | **6.1** | ✅ All text |
| Ink | Stone `#DAD8D2` | **11.5** | ✅ All text |
| Muted `#656159` | Ivory | **5.5** | ✅ All text |
| Lead `#59554F` | Ivory | **6.6** | ✅ All text |
| Gold text `#76654B` | Ivory | **5.0** | ✅ All text |
| Focus ring `#627784` | Ivory | **4.2** | ✅ Non-text (needs 3:1) |
| ⚠️ Active tab `#8F743E` | Ivory | **4.0** | Large text and icons **only**. The 9px tab label in the current designs needs a darker gold (e.g. `#76654B`) |
| ❌ Antique gold `#B69A64` | Ivory | **2.4** | **Never for text.** Fills, bars and borders only |
| ❌ Sky `#AABAC4` | Ivory | **1.8** | **Never for text or icons.** Fills only |

**Rules that come from this table:**
1. Text is Ink, Muted, Lead or Gold text. Never Antique gold or Sky.
2. Text on a gold or sky fill is **Ink**.
3. Never put meaning in colour alone: every state also has words or an icon.

---

## 6. Meaning rules (important for a trading app)

Trading apps use green = up/profit and red = down/loss. **Still is not a trading app**, so:

- ❌ No green/red anywhere, and no colour for gains, losses or prices.
- ❌ No celebration that looks like a profit (no rising charts, no money).
- ✅ **Gold = progress you made** (quest done, rule kept, *chose not to trade*), shown as a bar or a gilded edge, not a burst.
- ✅ **Sky = calm and space** (Pause, Calm mode, "you don't have to act right now").
- ✅ Safety screens (big loss, distress, help page, after an E · Tilt day) stay **ivory and sky only**: no artwork drama, no gold, no rewards next to a loss or distress message.

---

## 7. Logo and app icon

| Part | Value |
|---|---|
| Wordmark | Lowercase **still** in Cormorant Garamond, Ink `#20201D` on light, Ivory on dark; the initial **s** is set slightly smaller |
| App icon | **To be redrawn for v2.** The files in [`images/`](../images/) (`still-logo.svg`, `still-logo-on-dark.svg`, `still-app-icon.svg`, `still-app-icon-square.svg`) are still the v1 teal/gold comic Pause pose and must not be used for v2 store assets |

---

## 8. Fonts

| Use | Font | Notes |
|---|---|---|
| Headings, wordmark, big numbers | **Cormorant Garamond** | Serif, sentence case, 300–700 |
| Body, labels, buttons, controls | **Manrope** | Sans, 200–800; buttons 600 |

Both are under the SIL Open Font License 1.1. WOFF2 files and licence notices are in [`ui-design-page/assets/fonts/`](../ui-design-page/assets/fonts/). In the app they are bundled and registered in `Info.plist` (`UIAppFonts`).

---

## 9. Code tokens

### CSS (website, prototypes)

```css
:root {
  /* brand */
  --still-ivory: #F5F2EB;
  --still-ink: #20201D;
  --still-gold: #B69A64;
  --still-sky: #AABAC4;
  --still-stone: #DAD8D2;

  /* surfaces */
  --still-paper: #FAF8F2;
  --still-field: #FAF8F3;
  --still-gold-wash: #EEE8DB;
  --still-sky-wash: #E7ECEC;
  --still-selected: #EBE4D5;
  --still-line: #DEDBD3;
  --still-track: #DED7CA;

  /* text */
  --still-text: #20201D;
  --still-text-lead: #59554F;
  --still-text-muted: #656159;
  --still-text-gold: #76654B;
  --still-focus: #627784;

  /* type */
  --still-serif: "Cormorant Garamond", Georgia, serif;
  --still-sans: "Manrope", system-ui, sans-serif;
}
```

### SwiftUI (iOS app, `DesignSystem/StillColors.swift`)

```swift
import SwiftUI

extension Color {
    /// Builds a colour from a hex value, e.g. Color(hex: 0xF5F2EB).
    init(hex: UInt32) {
        self.init(
            red: Double((hex >> 16) & 0xFF) / 255,
            green: Double((hex >> 8) & 0xFF) / 255,
            blue: Double(hex & 0xFF) / 255
        )
    }
}

enum StillColor {
    // brand
    static let ivory = Color(hex: 0xF5F2EB)
    static let ink = Color(hex: 0x20201D)
    static let gold = Color(hex: 0xB69A64)   // fills and bars only, never text
    static let sky = Color(hex: 0xAABAC4)    // fills only, never text
    static let stone = Color(hex: 0xDAD8D2)

    // surfaces
    static let paper = Color(hex: 0xFAF8F2)
    static let field = Color(hex: 0xFAF8F3)
    static let goldWash = Color(hex: 0xEEE8DB)
    static let skyWash = Color(hex: 0xE7ECEC)
    static let selected = Color(hex: 0xEBE4D5)
    static let line = Color(hex: 0xDEDBD3)
    static let track = Color(hex: 0xDED7CA)

    // text
    static let text = Color(hex: 0x20201D)
    static let textLead = Color(hex: 0x59554F)
    static let textMuted = Color(hex: 0x656159)
    static let textGold = Color(hex: 0x76654B)
    static let focus = Color(hex: 0x627784)
}

enum Classical {
    static let cardRadius: CGFloat = 16
    static let buttonRadius: CGFloat = 12
    static let hairline: CGFloat = 1
}

extension View {
    /// Paper card: flat, hairline border, no shadow.
    func paperCard() -> some View {
        let shape = RoundedRectangle(cornerRadius: Classical.cardRadius)
        return self
            .background(StillColor.paper, in: shape)
            .overlay(shape.stroke(StillColor.line, lineWidth: Classical.hairline))
    }
}
```

---

## 10. Do and don't

| ✅ Do | ❌ Don't |
|---|---|
| One ink call-to-action per screen | Gold or coloured buttons |
| Hairlines and flat cards | Thick outlines, hard offset shadows, gradients on cards |
| One fresco/statue crop on hero screens | Art on form screens, or art that hides the task |
| Useful titles, myth as atmosphere | Titles that need Greek mythology to understand |
| Ink text on gold and sky fills | Gold or sky text on ivory |
| Ivory + sky only on safety screens | Rewards or art drama next to a loss or distress message |
| Gold for discipline and "no trade" progress | Green/red for profit and loss |

---

## 11. Icons

Line icons live in [`images/icons/`](../images/icons/) (106 icons, 24×24, 2px stroke, `currentColor`). See its [README](../images/icons/README.md). Icons take the colour of the text around them:

| Context | Icon colour |
|---|---|
| Default | Ink `#20201D` or Muted `#656159` |
| Bottom bar | See [section 13](#13-bottom-bar) |
| Progress, reward, XP | Gold text `#76654B` |
| On gold or sky fill | Ink `#20201D` |
| Warning, "Not today" | Ink, always with words |

---

## 12. Day Log grades

The Log tab grades each day **A to E** for how the user traded (rules kept or broken), never for money. Product rules: [still-day-log.md](https://github.com/Liuhangfung/still-backend/blob/main/docs/product-concept/still-day-log.md). Design: [`ui-design-page/screens/50-day-log.html`](../ui-design-page/screens/50-day-log.html) (replaces 43 and 44).

Each grade has its own light, warm to cool, "from sun to sea". Kept days look warm, and the light cools as rules slip:

| Grade | Name | Colour | Hex |
|---|---|---|---|
| **A** | Clean | Sun gold | `#F5C451` |
| **B** | Solid | Champagne | `#F6E1A6` |
| **C** | Mixed | Moon silver | `#D3DDE6` |
| **D** | Slipped | Lilac | `#B9A5F0` |
| **E** | Tilt | Aegean | `#74B3E8` |

- The Log tab is dark, on frosted glass over the artwork, so these colours are light. They are for that dark surface: never use them as text on Ivory.
- A grade is always its **serif letter in its colour** (a tinted chip with a hairline in the same colour), never a coloured ball and never colour alone.
- The month is a fresco behind frosted panes. Each judged day clears its pane, whatever the grade. An unjudged day stays frosted and is never coloured as bad.
- No green or red: the scale is about behaviour, not profit and loss.
- **E · Tilt** leads to the calm screen (section 6): ivory and sky, no artwork drama.

---

## 13. Bottom bar

Five labelled tabs: **Today · Journey · Log · Tools · Me**. Design: any screen in [`ui-design-page/`](../ui-design-page/).

| Part | Value |
|---|---|
| Bar | Flat, full width, Ivory `#F5F2EB`, 1px top border Line `#DEDBD3`. No capsule, no blur, no shadow |
| Icons | Thin line icons, 21px, with a small label underneath |
| Inactive | `#756F63` (4.5 : 1) |
| Active | Gold `#8F743E`, label bold (see the contrast note in section 5) |

- **Tools** holds the user's saved work (Trader Code, Urge Plan, rules): the "Inventory" in product docs.
- **Journey** is the chapter path (was "Path" in v1).
