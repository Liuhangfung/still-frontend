/**
 * Public-domain paintings used on the site, one myth per idea. All files come
 * from Wikimedia Commons, marked public domain (the painters died long ago),
 * so they are free for commercial use. Credits are shown as museum labels and
 * on /credits.
 */
export type Artwork = {
  src: string;
  width: number;
  height: number;
  title: string;
  artist: string;
  year: string;
  alt: string;
  /** One line tying the myth to the idea it illustrates. */
  myth?: string;
  /** CSS object-position for crops. */
  focus?: string;
  source: string;
};

const commons = (file: string) => `https://commons.wikimedia.org/wiki/File:${file}`;

export const art = {
  icarus: {
    src: "/images/myth/icarus.jpg",
    width: 1352,
    height: 1600,
    title: "The Lament for Icarus",
    artist: "Herbert James Draper",
    year: "1898",
    alt: "Nymphs mourning the fallen Icarus, his great wings spread across the rocks",
    myth: "Icarus flew higher because he could, not because he should.",
    focus: "50% 35%",
    source: commons("Herbert_Draper_-_The_Lament_for_Icarus_-_Google_Art_Project.jpg"),
  },
  sisyphus: {
    src: "/images/myth/sisyphus.jpg",
    width: 1381,
    height: 1600,
    title: "Sisyphus",
    artist: "Titian",
    year: "1548–49",
    alt: "Sisyphus straining to carry an enormous boulder uphill",
    myth: "Sisyphus pushed the same stone back up, forever. Winning it back works the same way.",
    focus: "50% 30%",
    source: commons("Titian_-_Sisyphus_-_Madrid_-_Prado.jpg"),
  },
  pandora: {
    src: "/images/myth/pandora.jpg",
    width: 937,
    height: 1600,
    title: "Pandora",
    artist: "John William Waterhouse",
    year: "1896",
    alt: "Pandora kneeling by a stream, lifting the lid of a golden box",
    myth: "Pandora opened the box because it was there.",
    focus: "50% 30%",
    source: commons("John_William_Waterhouse_-_Pandora,_1896.jpg"),
  },
  ariadne: {
    src: "/images/myth/ariadne.jpg",
    width: 876,
    height: 1024,
    title: "Ariadne Helping Theseus by Giving him a Ball of Thread",
    artist: "Johann Heinrich Tischbein",
    year: "1779",
    alt: "Ariadne handing Theseus a ball of thread before he enters the labyrinth",
    myth: "Theseus only found his way out because the thread was real, not remembered.",
    focus: "50% 40%",
    source: commons(
      "Johann_Heinrich_Tischbein_-_Ariadne_Helping_Theseus_by_Giving_him_a_Ball_of_Thread,_1779.jpg"
    ),
  },
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
  narcissus: {
    src: "/images/myth/narcissus.jpg",
    width: 1600,
    height: 912,
    title: "Echo and Narcissus",
    artist: "John William Waterhouse",
    year: "1903",
    alt: "Narcissus lying by a pool, staring at his reflection while Echo watches",
    myth: "Know yourself, but look honestly, not admiringly.",
    focus: "60% 50%",
    source: commons("John_William_Waterhouse_-_Echo_and_Narcissus_-_Google_Art_Project.jpg"),
  },
  athena: {
    src: "/images/myth/athena.jpg",
    width: 1600,
    height: 1583,
    title: "Pallas Athene",
    artist: "Gustav Klimt",
    year: "1898",
    alt: "Athena in a golden helmet and scaled armour, holding a spear",
    myth: "Athena, goddess of strategy: a plan made before the battle.",
    focus: "50% 30%",
    source: commons("Klimt_-_Pallas_Athene.jpeg"),
  },
  heracles: {
    src: "/images/myth/heracles.jpg",
    width: 1600,
    height: 1137,
    title: "The Choice of Heracles",
    artist: "Annibale Carracci",
    year: "1596",
    alt: "Heracles seated between Virtue and Pleasure, choosing his path",
    myth: "Heracles practised the hard choice before it mattered.",
    focus: "50% 40%",
    source: commons("Annibale_Carracci_-_The_Choice_of_Heracles_-_WGA4416.jpg"),
  },
  penelope: {
    src: "/images/myth/penelope.jpg",
    width: 900,
    height: 612,
    title: "Penelope and the Suitors",
    artist: "John William Waterhouse",
    year: "1912",
    alt: "Penelope at her loom, keeping to her work while suitors crowd the window",
    myth: "Penelope kept her routine for years while everyone pushed her to decide.",
    focus: "40% 50%",
    source: commons("JohnWilliamWaterhouse-PenelopeandtheSuitors(1912).jpg"),
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
  vulcan: {
    src: "/images/myth/vulcan.jpg",
    width: 1600,
    height: 1242,
    title: "Apollo in the Forge of Vulcan",
    artist: "Diego Velázquez",
    year: "1630",
    alt: "Apollo visiting Vulcan's forge, where smiths shape armour at the anvil",
    myth: "In Vulcan’s forge, every tool was made by hand.",
    focus: "50% 45%",
    source: commons("Vel%C3%A1zquez_-_La_Fragua_de_Vulcano_(Museo_del_Prado,_1630).jpg"),
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

export const athenaModel = {
  title: "Head from the statue Athena Hope",
  artist: "Plaster cast, Royal Cast Collection",
  year: "3D scan by SMK, Statens Museum for Kunst",
  source: commons(
    "Ubekendt,_Hoved_fra_statuen_Athena_Hope_med_hjelm_med_sfinks_og_griffe,_,_KAS275,_Statens_Museum_for_Kunst,_3D_model.stl"
  ),
};
