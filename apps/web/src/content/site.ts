import { art, type Artwork } from "./artwork";

/** Payment happens only in the app (App Store / Google Play). The site collects the founder list. */
export const joinCta = { href: "#join", label: "Join the founder list" };

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3100";

/**
 * Planned prices (still-backend docs/product-concept/still-pricing.md). The
 * founder discount is shown off the standard launch price, and it ends at a
 * real, stated number of buyers: no countdowns or fake urgency.
 */
export const price = {
  currency: "US$",
  founder: 49,
  regular: 79,
  /** Pricing doc: "50 or 100" is still open. Change here once decided. */
  founderSpots: 100,
};

export const navLinks = [
  { href: "#app", label: "The app" },
  { href: "#practice", label: "The practice" },
  { href: "#programme", label: "The 56 days" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

/**
 * Social accounts shown in the footer. Add each URL when the account exists;
 * an icon with an empty URL is shown but not clickable yet.
 */
export const socials = [
  { network: "x", label: "Still on X", url: "" },
  { network: "instagram", label: "Still on Instagram", url: "" },
  { network: "tiktok", label: "Still on TikTok", url: "" },
  { network: "youtube", label: "Still on YouTube", url: "" },
  { network: "discord", label: "Still's Discord community", url: "" },
] as const;

/**
 * App store listings. While a URL is empty the badge shows "Coming soon" and is
 * not clickable; add the listing URL at launch to turn it into a link.
 */
export const stores = [
  { id: "apple", store: "App Store", url: "" },
  { id: "google", store: "Google Play", url: "" },
] as const;

export const markets = ["Stocks", "Forex", "Crypto", "Futures", "Options", "Commodities"];

export const problems: { title: string; text: string; quote?: string; art: Artwork }[] = [
  {
    title: "Fear of missing out",
    art: art.icarus,
    text: "A price moves. The plan disappears. You enter before checking why.",
    quote: "I’ll just get in before it runs.",
  },
  {
    title: "Trying to win it back",
    art: art.sisyphus,
    text: "A loss turns into a reason to take another trade—or make it bigger.",
    quote: "One more and I’m even.",
  },
  {
    title: "Trading to feel something",
    art: art.pandora,
    text: "You open a position because you’re bored, not because it fits a setup.",
  },
  {
    title: "A plan that stays in your head",
    art: art.ariadne,
    text: "No written boundaries to return to when the pressure arrives.",
  },
];

/** "Inside the app": the daily loop, one real screen per step. */
export const appTour: {
  when: string;
  title: string;
  text: string;
  points: string[];
  screen: string;
  alt: string;
}[] = [
  {
    when: "Day 1 · 4 minutes",
    title: "An honest starting point.",
    text: "Answer 16 quick questions about how you really trade. Still shows your starting level, your two focus areas and a routine that fits your day.",
    points: ["Real trading scenarios, mostly one tap", "No account logins, no balances"],
    screen: "/images/app/profile.webp",
    alt: "Hunter Profile screen: starting level Developing, focus areas FOMO and Leverage, and a 10-minute daily routine",
  },
  {
    when: "Every day · 10–15 minutes",
    title: "One quest a day.",
    text: "Today shows one main quest built around your focus areas, plus a short daily routine. Save a draft and come back later.",
    points: ["XP for doing the work, never for trading", "A shorter version for busy days"],
    screen: "/images/app/today.webp",
    alt: "Today screen: main quest “Inside the Urge”, two of five objectives done, and the daily routine",
  },
  {
    when: "Before you trade · 1 minute",
    title: "A gate, not a signal.",
    text: "The Fit-to-Trade Gate checks your own best-self conditions: sleep, setting, a written idea. If one isn’t true, “Not today” is a valid result.",
    points: ["Your conditions, in your words", "Choosing not to trade earns XP too"],
    screen: "/images/app/fit-gate.webp",
    alt: "Fit-to-Trade Gate screen: three of four best-self conditions ticked, with the result “Not today”",
  },
  {
    when: "When the urge hits",
    title: "Your plan, one tap away.",
    text: "Write your Urge Plan in your own words. When a loss turns into an urge, Pause brings it back before the next trade, not after.",
    points: ["Pause is always one tap away", "Skipping a trade counts as progress"],
    screen: "/images/app/urge-plan.webp",
    alt: "My Urge Plan screen: the story “I’ll win it back quickly” and the first written step",
  },
  {
    when: "Every evening · 30 seconds",
    title: "Judge your day, not your P&L.",
    text: "A quick Rule Check, then grade the day A to E for how you followed your rules. Choosing not to trade can be an A.",
    points: ["Never graded on money", "Patterns show up on your Day Log"],
    screen: "/images/app/day-grade.webp",
    alt: "Judge your day screen: Rule Check partly kept, suggested grade C · Mixed, with grades A to E",
  },
  {
    when: "Every two weeks",
    title: "Rank up. Keep what you build.",
    text: "Finish a chapter and rank from E toward S. Every tool you made, from your Trigger Map to your Rules Card, stays in your Tools tab.",
    points: ["Ranks mean practice, not trading skill", "Your tools stay with you"],
    screen: "/images/app/rank-up.webp",
    alt: "Chapter complete screen: rank E to D and an XP receipt of plus 80",
  },
];

/** The sample "Separate fact from guess" task in the daily-practice section. */
export const sampleTask = {
  claim: "Popularity proves the price will keep rising.",
  answers: [
    { id: "fact", label: "Fact" },
    { id: "assumption", label: "Assumption" },
    { id: "unknown", label: "Unknown" },
  ],
  right: "assumption",
  feedback: {
    right: "A prediction is not a fact. What evidence would you need?",
    wrong:
      "The claim predicts a future price based on popularity. That makes it an assumption, not established evidence.",
  },
};

export const practiceSteps = [
  { title: "Prepare", text: "Check in with yourself." },
  { title: "Practise", text: "Work through one task." },
  { title: "Reflect", text: "Notice what to keep." },
];

export const chapters = [
  {
    name: "Know yourself",
    art: art.narcissus,
    days: "Days 1–14",
    title: "Understand what sets you off.",
    text: "Look at the moments behind your impulsive trades. Name the triggers and write a more deliberate response, without shame.",
    output: "Your Trigger Map",
  },
  {
    name: "Build a method",
    art: art.athena,
    days: "Days 15–28",
    title: "Put your method into words.",
    text: "Define when you trade, when you do not, and the risk boundaries you intend to follow. Build a checklist around your own plan.",
    output: "Your own trading plan",
  },
  {
    name: "Practise",
    art: art.heracles,
    days: "Days 29–42",
    title: "Practise without risking money.",
    text: "Use historical charts and paper exercises to work through decisions. Reflect on the process, not just an outcome.",
    output: "A practice journal",
  },
  {
    name: "Make it last",
    art: art.penelope,
    days: "Days 43–56",
    title: "Make the routine your own.",
    text: "Bring your rules into one card and a manageable daily routine. Prepare for the days when old habits return.",
    output: "Your Rules Card",
  },
];

export const tools = [
  {
    title: "Your Trigger Map",
    text: "The situations that set you off—and what you intend to do instead.",
  },
  {
    title: "Your preparation checklist",
    text: "A written set of questions to ask before acting. Not a guarantee that a trade is safe.",
  },
  {
    title: "Your practice journal",
    text: "A simple way to reflect on your process and bring patterns into a weekly review.",
  },
  {
    title: "Your Rules Card",
    text: "Your plan, condensed into something you can actually return to.",
  },
];

export const priceIncludes = [
  "A path selected around your starting habits",
  "Daily practice and a preparation/review routine",
  "Pause and practical tools you build yourself",
];

export const faqs = [
  {
    q: "How is Still different from a trading course or journal?",
    a: "Still is built around daily practice, not just watching lessons or recording past trades. You get a clear task, work through it, and build something you can use again—such as a preparation checklist, a research routine or your own Rules Card. The programme connects these steps into a guided 56-day journey.",
  },
  {
    q: "Who is Still for?",
    a: "Still is for adult retail traders who want a more deliberate way to prepare, research, practise and review. It is especially relevant if you understand the basics but struggle with FOMO, impulsive trades or following your own plan. You do not need to be a professional trader, but Still is not a complete beginner-to-expert course in how to trade.",
  },
  {
    q: "Which trading markets does Still support?",
    a: "Still is for traders across all markets—including stocks, forex, crypto, futures, options and commodities. The programme focuses on how you prepare, make decisions and review your process, rather than recommending particular assets. You apply the exercises to the market you trade; Still does not provide live market feeds, trade signals or a strategy for every instrument.",
  },
  {
    q: "What will I actually do each day?",
    a: "Each day combines a main quest with a short preparation and review routine. You might map an impulse trigger, check a claim against its source, practise with a historical chart, or write a rule for a situation you find difficult. Every quest explains the action and what finishing it means. Optional life habits include movement, sleep awareness and stepping away from screens.",
  },
  {
    q: "How is my programme personalised?",
    a: "Your starting questionnaire helps identify your experience and the habits you want to work on. Still uses those answers to select a path from its task library, combining shared foundations with relevant focus tasks. Personalisation means choosing useful exercises—not generating trading signals or assessing whether your strategy will be profitable.",
  },
  {
    q: "Do I need to make real trades—or trade every day?",
    a: "No. No quest requires a real-money trade. You can practise using historical examples, paper trading and reflection. The programme also works on days when your market is closed or you choose not to trade. Progress comes from completing the practice, not from placing more trades.",
  },
  {
    q: "How much time should I set aside?",
    a: "Plan for around 20–25 minutes for the main quest and daily routine on a typical day. Some exercises take longer, and optional life habits add time. Shorter versions are planned for busy days, with an estimated time shown for each quest so you know what to expect.",
  },
  {
    q: "What happens if I miss a day?",
    a: "You do not lose the work you have already completed or have to start the programme again. Still is designed to help you return with a manageable recovery task and continue your path. The aim is to build a routine you can return to—not punish you for an imperfect streak.",
  },
  {
    q: "Does Still give signals or guarantee trading results?",
    a: "No. Still is habit training, not personalised investment advice. It does not tell you what to buy or sell, predict prices or promise profits. XP and ranks reflect programme participation, not verified trading skill. Completing a checklist is not approval that a trade is safe; trading still carries financial risk.",
  },
  {
    q: "Are The System and The Sergeant real coaches?",
    a: "They are coaching styles inside the app, not human coaches or an AI trading adviser. The System is calm and encouraging. The Sergeant is an optional, more direct style with strong language. They guide the same training; there is no live monitoring or one-to-one coaching included.",
  },
  {
    q: "Do I need to connect my trading account?",
    a: "No. Still does not connect to your broker or exchange, place orders, or require your trading-account password or API keys. When an exercise involves your market or trading history, you can review it yourself without importing it into Still. Progress is based on what you choose to record, not automatic verification of your trades.",
  },
  {
    q: "What happens after day 56?",
    a: "The goal is to finish with a routine and personal tools you can keep using beyond the programme. Under the planned pricing model, viewing your saved tools and history will not require a new programme purchase. Any optional ongoing membership will be explained before you buy; completing the programme will not automatically subscribe you.",
  },
  {
    q: "When can I start, and how do I pay?",
    a: "Still is being built for iPhone first. Join the founder list for launch updates and details of the founder offer. Joining is free. At launch, the 56-day programme is planned as a one-time in-app purchase, with the price shown before you pay. There is no payment on this website.",
  },
];
