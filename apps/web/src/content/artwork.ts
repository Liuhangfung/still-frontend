/**
 * Public-domain paintings used on the site, one myth per idea. All files come
 * from Wikimedia Commons, marked public domain (the painters died long ago),
 * so they are free for commercial use. Credits are shown as museum labels and
 * on /credits.
 */
/**
 * A painting on the site. Public-domain works carry `artist`, `year` and
 * `source` and get a museum label; Still's own commissioned paintings
 * (docs/art-landing.md) leave them out and show no label.
 */
export type Artwork = {
  src: string;
  width: number;
  height: number;
  title: string;
  artist?: string;
  year?: string;
  alt: string;
  /** One line tying the myth to the idea it illustrates. */
  myth?: string;
  /** CSS object-position for crops. */
  focus?: string;
  source?: string;
};

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;

export const art = {
  delphi: {
    src: "/images/myth/delphi.jpg",
    width: 757,
    height: 1600,
    title: "Priestess of Delphi",
    artist: "John Collier",
    year: "1891",
    alt: "The oracle of Delphi seated on her tripod above rising vapour",
    myth: "Even the oracle spoke in riddles. Confidence is not evidence.",
    focus: "50% 22%",
    source: commons("John_Collier_-_Priestess_of_Delphi_-_Google_Art_Project.jpg"),
  },
  sirens: {
    src: "/images/myth/sirens.jpg",
    width: 1600,
    height: 785,
    title: "Ulysses and the Sirens",
    artist: "John William Waterhouse",
    year: "1891",
    alt: "Ulysses bound to his ship's mast as sirens circle the boat",
    myth: "Ulysses tied himself to the mast before he heard the sirens.",
    focus: "50% 45%",
    source: commons("John_William_Waterhouse_-_Ulysses_and_the_Sirens_-_Google_Art_Project.jpg"),
  },
  olympus: {
    src: "/images/myth/olympus.jpg",
    width: 1112,
    height: 1600,
    title: "Olympus, or the Triumph of Venus",
    artist: "Giovanni Battista Tiepolo",
    year: "c. 1761–64",
    alt: "",
    focus: "50% 30%",
    source: commons("El_Olimpo_(Triunfo_de_Venus).jpg"),
  },
} satisfies Record<string, Artwork>;

/**
 * Still's own paintings by the design team (docs/art-landing.md): problems,
 * chapters, tools and the Pause plate. Each keeps the myth line it is paired
 * with on the page.
 */
const studioArt = (
  file: string,
  title: string,
  alt: string,
  focus: string,
  myth?: string,
  size: [number, number] = [1200, 900]
): Artwork => ({
  src: `/images/art/${file}`,
  width: size[0],
  height: size[1],
  title,
  alt,
  focus,
  myth,
});

export const studio = {
  fomo: studioArt(
    "problems/fomo.jpg",
    "Fear of missing out",
    "Rococo painting: a young figure lunges from a marble balcony toward a golden staircase of candlestick-chart bars rising into the clouds, a scroll of rules slipping from one hand.",
    "center 33%",
    "Icarus flew higher because he could, not because he should."
  ),
  revenge: studioArt(
    "problems/revenge.jpg",
    "Trying to win it back",
    "Neoclassical painting: a trader throws a second fistful of gold coins across a marble table, his reflection split in a cracked mirror, a falling candlestick chart carved into the stone.",
    "center 26%",
    "Sisyphus pushed the same stone back up, forever. Winning it back works the same way."
  ),
  boredom: studioArt(
    "problems/boredom.jpg",
    "Trading to feel something",
    "Fresco painting: a figure reclines on clouds with a chin in one hand, holding a dark tablet that shows a single flat gold line, dice spilled beside them.",
    "center 46%",
    "Pandora opened the box because it was there."
  ),
  unwritten: studioArt(
    "problems/unwritten.jpg",
    "A plan that stays in your head",
    "A marble bust holds a blank ivory tablet while a gilded candlestick chart dissolves into smoke above its head, an unused stylus on the plinth.",
    "center 32%",
    "Theseus only found his way out because the thread was real, not remembered."
  ),
  knowYourself: studioArt(
    "programme/01-know-yourself.jpg",
    "Know yourself",
    "Classical painting: a woman kneels at the edge of a still marble pool, gold rings spreading from her fingers, her own shadow standing tall on the wall behind her.",
    "center 46%",
    "Know yourself, but look honestly, not admiringly.",
    [1200, 896]
  ),
  buildMethod: studioArt(
    "programme/02-build-a-method.jpg",
    "Build a method",
    "Neoclassical painting: an architect bends over a marble drafting table with brass compasses, a ruled tablet marked with faint gold candlestick lines, half-built columns behind him.",
    "center 44%",
    "Athena, goddess of strategy: a plan made before the battle."
  ),
  practise: studioArt(
    "programme/03-practise.jpg",
    "Practise",
    "Neoclassical painting: an athlete in a marble hall squares up to his own long shadow, a gilded candlestick chart glowing inside it.",
    "center 42%",
    "Heracles practised the hard choice before it mattered."
  ),
  makeItLast: studioArt(
    "programme/04-make-it-last.jpg",
    "Make it last",
    "Classical painting: a weaver at an upright loom, ivory cloth carrying a repeated row of small gold candlestick marks, a gold thread running from the basket at her feet.",
    "center 45%",
    "Penelope kept her routine for years while everyone pushed her to decide."
  ),
  triggerMap: studioArt(
    "tools/01-trigger-map.jpg",
    "Your Trigger Map",
    "Still life: an aged map of ink contour lines on a marble table, gilded pins joined by one gold thread, a hand about to place another pin.",
    "center 46%",
    undefined,
    [1200, 896]
  ),
  checklist: studioArt(
    "tools/02-checklist.jpg",
    "Your preparation checklist",
    "Still life: a pale wax tablet ruled with empty lines and small gold ticks, a bronze stylus resting across it, a clay oil lamp burning low.",
    "center 52%",
    undefined,
    [1200, 896]
  ),
  journal: studioArt(
    "tools/03-journal.jpg",
    "Your practice journal",
    "Still life: an open book of blank ivory pages on white linen, a quill and brass inkwell, a single white flower pressed across the page.",
    "center 54%",
    undefined,
    [1200, 896]
  ),
  rulesCard: studioArt(
    "tools/04-rules-card.jpg",
    "Your Rules Card",
    "Still life: a small ivory tablet with a gilded edge set in a plaster niche, lit by a tiny oil lamp, a laurel sprig on the shelf, a hand just leaving it.",
    "center 48%",
    undefined,
    [1200, 896]
  ),
  pauseCalm: studioArt(
    "pause-calm.jpg",
    "Pause",
    "Classical painting: a figure sits on a marble step before a still sea at dawn, a bow laid down beside them.",
    "center 44%",
    undefined,
    [1000, 1241]
  ),
};

export const athenaModel = {
  title: "Head from the statue Athena Hope",
  artist: "Plaster cast, Royal Cast Collection",
  year: "3D scan by SMK, Statens Museum for Kunst",
  source: commons(
    "Ubekendt,_Hoved_fra_statuen_Athena_Hope_med_hjelm_med_sfinks_og_griffe,_,_KAS275,_Statens_Museum_for_Kunst,_3D_model.stl"
  ),
};
