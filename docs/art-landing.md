# Landing art: allegories, still lifes and one quiet pause

Paintings for the landing page, in the classical v2 register. Each has one job: make a trading
behaviour legible as a *human* behaviour before the visitor reads the heading.

The trading element is always a painted object — a gilded candlestick staircase, a chart incised into
marble, a chart glowing inside a shadow — never a screenshot, never a phone UI. Charts are gold,
never green or red, so nothing reads as a P&L screen
([brand colours §6](brand-colors.md#6-meaning-rules-important-for-a-trading-app)).

There are three series, with a deliberate division of labour: **figures** for behaviour (problems,
chapters), **objects** for the things you keep (tools), and **one figure with a view** for stepping
away (Pause).

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

Used by `Programme` in `apps/web/src/components/landing/programme.tsx`. The chapter tabs crossfade
between four paintings; before this, all four shared `fresco.jpg`.

| Chapter | File | Painting | Reading |
| --- | --- | --- | --- |
| Know yourself · Days 1–14 | `01-know-yourself.jpg` | A woman kneels at a still marble pool in an empty loggia, gold rings spreading from her fingers, her own tall shadow standing on the wall behind her. | The shadow is the trigger: the part of you acting without your notice. The pool is honest attention. |
| Build a method · Days 15–28 | `02-build-a-method.jpg` | An architect with brass compasses over a ruled marble tablet, faint gold candlestick lines incised into it, half-built columns and a plumb line behind. | A method is drawn before it is used. Structure, not prediction. |
| Practise · Days 29–42 | `03-practise.jpg` | An athlete squares up to his own long shadow; inside the shadow glimmers a chalked gilded chart. Oil flask and strigil on the step. | The only opponent in practice is your own reaction — and nothing is at stake. |
| Make it last · Days 43–56 | `04-make-it-last.jpg` | A weaver at an upright loom, ivory cloth carrying a repeated row of small gold candlestick marks, one gold thread rising from the basket at her feet. A dog asleep. | A routine is repetition: one thread, many rows, kept daily. |

## Series 3 · Tools (`apps/web/public/images/art/tools/`)

Used by `Tools` in `apps/web/src/components/landing/tools.tsx`. These are still lifes rather than
figures, because a tool is an object you keep. Each is the artefact named in the copy, painted in gold
and stone, with at most a hand entering the frame.

| Tool | File | Painting | Reading |
| --- | --- | --- | --- |
| Your Trigger Map | `01-trigger-map.jpg` | An aged contour map on marble, gilded pins joined by one gold thread, a hand about to place another pin. | Mapping the situations that set you off, one marked point at a time. |
| Your preparation checklist | `02-checklist.jpg` | A pale wax tablet ruled with *empty* lines and small gold ticks, a bronze stylus, a clay lamp burning low. | Questions asked before acting; three answered, the rest still open. |
| Your practice journal | `03-journal.jpg` | An open book of blank pages on linen, quill and brass inkwell, one white flower pressed across the page. | Pages you fill yourself. The flower is the review, not the result. |
| Your Rules Card | `04-rules-card.jpg` | A small ivory tablet with a gilded edge set in a plaster niche, a lamp beside it, a hand just leaving its edge. | The plan condensed small enough to return to, kept where you can see it. |

## Pause (`apps/web/public/images/art/pause.jpg` → `pause-calm.jpg`)

`pause-calm.jpg` (portrait, 1000 × 1241) replaces the old washed-out background inside the Pause card.
A figure sits on a marble step before a completely still sea at dawn, an unstrung bow laid down beside
her — the moment of choosing not to trade. It is shown as a visible art band at the top of the card
(`h-[124px]`), which is how the brand spec treats Pause in the app: `pause.jpg` is no longer
referenced by the site.

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

Rules learned by repainting:

1. **Charts are gold, never green or red** — these are behaviour pictures, not P&L pictures.
2. **No lettering, ever.** The image models happily letter a map, a journal page or a tablet. Words
   belong to the HTML around the art: explicitly ask for blank pages and contour lines only.
3. **No green scenery.** A first attempt at “Know yourself” set the scene in a lush grove; the green
   dominated the frame and broke the ivory/sky series. Keep foliage out, or reduce it to one branch.
4. **Keep the lighting pale.** A candlelit gambling interior, and a first checklist under heavy
   chiaroscuro, read as a different series; both were repainted in daylight marble.

## Display and files

- Source generations are ~2400 × 1792; delivered files are downsampled to 1200 px wide (1000 px for
  the Pause portrait), 4:3, progressive JPEG q82 (94–245 KB).
- **Where they are wired in:** each painting is an entry in `studio` in
  `apps/web/src/content/artwork.ts` (file, size, alt text, focal point `focus`, and the myth line it
  is paired with). `site.ts` points `problems`, `chapters` and `tools` at those entries.
- **How they are shown** (animated landing):
  - Problems: the pinned 3D gallery on wide screens (the painting turns to match the problem in
    the middle of the screen); a band above each problem on phones.
  - Chapters: the panel painting turns over like a page when the chapter changes.
  - Tools: a band above each tool, unveiled bottom-up as it scrolls in.
  - Pause: the art band at the top of the Pause card (`h-[124px]`).
- These are Still's own paintings, so they carry **no museum label** (the label only appears for
  public-domain works with a painter and year).
- Alt text describes the scene and its meaning in one sentence. Every image crops the 4:3 frame,
  so update `focus` if a new composition moves the subject.

## Regenerating

Pass the other paintings plus `hero.jpg` as references, keep the 4:3 framing, then resize to
1200 px wide and export progressive JPEG at q82. Add or update the matching `studio` entry in
`apps/web/src/content/artwork.ts`. Don't change the component files to swap a picture: they
carry the animation.
