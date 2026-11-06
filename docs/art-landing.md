# Landing art: allegories for problems and chapters

Two series of paintings for the landing page, in the classical v2 register. Each has one job: make a
trading behaviour legible as a *human* behaviour before the visitor reads the heading.

The trading element is always a painted object — a gilded candlestick staircase, a chart incised into
marble, a chart glowing inside a shadow — never a screenshot, never a phone UI. Charts are gold,
never green or red, so nothing reads as a P&L screen
([brand colours §6](brand-colors.md#6-meaning-rules-important-for-a-trading-app)).

## Series 1 · Problems (`apps/web/public/images/art/problems/`)

Used by `Problems` in `apps/web/src/components/landing/problems.tsx`, one per item under
“If this feels familiar”.

| Problem | File | Painting | Trading reading |
| --- | --- | --- | --- |
| Fear of missing out | `fomo.jpg` | A figure lunges from a marble balcony toward a staircase of gilded candlestick bars rising into cloud; a scroll of rules slips from the other hand. | Chasing a move you did not plan. The plan literally drops away while price climbs. |
| Trying to win it back | `revenge.jpg` | A trader leans over a marble table, jaw clenched, throwing a second fistful of gold onto coins already spilled; his reflection splits in a cracked mirror; a falling chart is carved into the table edge. | Doubling down to get even. The mirror is the part of him that knows better. |
| Trading to feel something | `boredom.jpg` | A figure reclines on clouds, chin in hand, eyes elsewhere, holding a dark pane showing one flat gold line. Dice spilled. A butterfly passes, ignored. | Trading for stimulation, not for a setup. Flat price, flat mood. |
| A plan that stays in your head | `unwritten.jpg` | A marble bust holds a blank ivory tablet; gilded chart smoke curls out of its temple and evaporates. An unused stylus on the plinth. | A plan that only exists in your head: unwritten, unreadable, gone under pressure. |

## Series 2 · Chapters (`apps/web/public/images/art/programme/`)

Used by `Programme` in `apps/web/src/components/landing/programme.tsx`. The chapter tabs now crossfade
between four paintings; before this, all four chapters shared `fresco.jpg`.

| Chapter | File | Painting | Reading |
| --- | --- | --- | --- |
| Know yourself · Days 1–14 | `01-know-yourself.jpg` | A woman kneels at a still marble pool in an empty loggia, gold rings spreading from her fingers, her own tall shadow standing on the wall behind her. | The shadow is the trigger: the part of you acting without your notice. The pool is honest attention. |
| Build a method · Days 15–28 | `02-build-a-method.jpg` | An architect with brass compasses over a ruled marble tablet, faint gold candlestick lines incised into it, half-built columns and a plumb line behind. | A method is drawn before it is used. Structure, not prediction. |
| Practise · Days 29–42 | `03-practise.jpg` | An athlete squares up to his own long shadow; inside the shadow glimmers a chalked gilded chart. Oil flask and strigil on the step. | The only opponent in practice is your own reaction — and nothing is at stake. |
| Make it last · Days 43–56 | `04-make-it-last.jpg` | A weaver at an upright loom, ivory cloth carrying a repeated row of small gold candlestick marks, one gold thread rising from the basket at her feet. A dog asleep. | A routine is repetition: one thread, many rows, kept daily. |

## Shared style recipe

Use this block verbatim for any further painting, so new images sit with these. It was derived from
`hero.jpg`, `task.jpg`, `pause.jpg`, `fresco.jpg` and `today.jpg`, which were passed as visual
references alongside the new images.

> Antique oil painting / fresco study for a museum-quality editorial series. 18th-century French
> Rococo and Neoclassical oil on canvas in the manner of Boucher and Tiepolo. Muted ivory, cream,
> pale ochre and stone palette with powder-blue sky and antique gold leaf accents. Soft diffused
> daylight, delicate feathery brushwork, sfumato edges, visible canvas weave, fine craquelure, faint
> aged varnish, low contrast, slightly faded like a photographed fresco detail. Landscape, generous
> empty sky and calm negative space, no painted frame, no border.
> Avoid: green or red chart colours, green foliage or forest settings, neon, modern app interface,
> text, letters, numbers, signature, watermark, harsh contrast, cartoon, 3D render.

Three rules learned by repainting:

1. **Charts are gold, never green or red** — these are behaviour pictures, not P&L pictures.
2. **No green scenery.** A first attempt at “Know yourself” set the scene in a lush grove; the green
   dominated the frame and broke the ivory/sky series. Keep foliage out or reduce it to a single
   branch.
3. **Keep the lighting pale.** A candlelit gambling interior reads as a different series; the first
   “Trying to win it back” was repainted in daylight marble for exactly that reason.

## Display and files

- Source generations are ~2176 × 1632; delivered files are downsampled to 1200 px wide, 4:3,
  progressive JPEG q82 (lightest 108 KB, heaviest 245 KB).
- Problems render as bands `h-[124px] md:h-[150px] lg:h-[176px]`; programme panels render at
  `h-[185px] md:h-[285px]`. Both crop the 4:3 frame, so every item carries an `artPosition` focal
  point in `site.ts`; update it if a new composition moves the face.
- Alt text describes the scene and its meaning in one sentence; inactive chapter images are
  `aria-hidden` with empty alt.
- Copy, alt text and focal points all live in `apps/web/src/content/site.ts`.

## Regenerating

Pass the other paintings plus `hero.jpg` and `task.jpg` as references, keep the 4:3 framing, then
resize to 1200 × 900 and export progressive JPEG at q82. Add `art`, `artAlt` and `artPosition` to the
matching entry in `site.ts`.
