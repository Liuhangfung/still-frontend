# Problem paintings

Four allegories for the landing page section **“If this feels familiar”** (`Problems` in
`apps/web/src/components/landing/problems.tsx`). One painting per problem, so a visitor recognises
the behaviour before reading the heading.

The art has to do one job: make a trading problem legible as a *human* problem. So each scene is a
classical figure in a mythological or Baroque setting, and the trading element is smuggled in as a
painted object — a gilded candlestick staircase, a carved chart, a black glass pane. Nothing looks
like a live trading screen.

## Files

| Problem | File |
| --- | --- |
| Fear of missing out | `apps/web/public/images/art/problems/fomo.jpg` |
| Trying to win it back | `apps/web/public/images/art/problems/revenge.jpg` |
| Trading to feel something | `apps/web/public/images/art/problems/boredom.jpg` |
| A plan that stays in your head | `apps/web/public/images/art/problems/unwritten.jpg` |

All four are 1200 × 900 (4:3), progressive JPEG, q82, 135–245 KB. They are displayed as a cropped
band (`h-[124px] md:h-[150px] lg:h-[176px]`) with a per-item `artPosition` focal point, so faces are
never cut by the crop. Copy and alt text live in `apps/web/src/content/site.ts`.

## What each painting says

| # | Painting | Trading reading |
| --- | --- | --- |
| 01 | A figure lunges from a marble balcony toward a staircase of gilded candlestick bars rising into the clouds. A scroll of rules slips from one hand and falls. | Chasing a move you did not plan for. The plan is literally dropping away while the price climbs. |
| 02 | A trader leans over a marble table, jaw clenched, throwing a second fistful of gold onto coins already spilled. His reflection is split in a cracked mirror. A falling candlestick chart is carved into the table edge. | Doubling down to get even. The mirror is the part of him that knows better; the carved chart slopes down. |
| 03 | A figure reclines on clouds, chin in hand, eyes elsewhere, holding a dark glass pane that shows a single flat gold line. Dice spilled beside. A butterfly passes, ignored. | Trading for stimulation, not for a setup. Flat price, flat mood, and nothing worth looking at. |
| 04 | A marble bust holds a blank ivory tablet. Gold candlestick smoke curls out of its temple, half-formed, and evaporates into the plaster. An unused stylus sits on the plinth. | A plan that exists only in your head: unwritten, unreadable, gone when the pressure arrives. |

## Shared style recipe

Use this block verbatim for any further painting in the series, so new images sit together with
these. It was derived from `hero.jpg`, `task.jpg`, `pause.jpg`, `fresco.jpg` and `today.jpg` and
passed those files as visual references.

> Antique oil painting / fresco study for a museum-quality editorial series. 18th-century
> French Rococo and Neoclassical oil on canvas in the manner of Boucher and Tiepolo. Muted ivory,
> cream, pale ochre and stone palette with powder-blue sky and antique gold leaf accents. Soft
> diffused daylight, delicate feathery brushwork, sfumato edges, visible canvas weave, fine
> craquelure, faint aged varnish, low contrast, slightly faded like a photographed fresco detail.
> Landscape, generous empty sky and calm negative space, no painted frame, no border.
> Avoid: green or red chart colours, neon, modern app interface, text, letters, numbers, signature,
> watermark, harsh contrast, cartoon, 3D render.

Two rules that came out of the brand doc and matter more than any prompt wording:

1. **Charts are gold, never green or red.** These are behaviour pictures, not P&L pictures
   ([brand colours §6](brand-colors.md#6-meaning-rules-important-for-a-trading-app)).
2. **Keep the lighting pale.** A literal candlelit gambling den reads as a different series; the
   first attempt at painting 02 was repainted in daylight marble for exactly this reason.

## Regenerating

Prompts were run through the Manus image generator at 2176 × 1632 and downsampled to 1200 px wide.
If you re-run one, pass the other three paintings plus `hero.jpg` and `task.jpg` as references, keep
the 4:3 framing, then resize to 1200 × 900 and export progressive JPEG at q82. Update `artPosition`
if the new composition moves the face.
