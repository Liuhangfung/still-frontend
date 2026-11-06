import type { IconName } from "@still/ui";

/** Payment happens only in the app (App Store / Google Play). The site collects the founder list. */
export const joinCta = { href: "#join", label: "Join the founder list" };

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3100";

export const price = { founder: "US$49", regular: "US$79", membership: "US$39–49 / year" };

export const navLinks = [
  { href: "#reset", label: "The reset" },
  { href: "#programme", label: "The 56 days" },
  { href: "#how", label: "How it works" },
  { href: "#blog", label: "Blog" },
  { href: "#coaches", label: "Coaches" },
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

export const trust: { icon: IconName; text: string }[] = [
  { icon: "shield-check", text: "No signals, ever" },
  { icon: "lock", text: "No broker connection" },
  { icon: "privacy", text: "Never asks about your money" },
];

export const problems = [
  {
    title: "FOMO",
    text: "A coin jumps 15% and you buy before you think.",
    quote: "I'll just get in before it runs.",
  },
  {
    title: "REVENGE TRADING",
    text: "Two losses in a row, so you size up to win it back.",
    quote: "One more and I'm even.",
  },
  {
    title: "OVERTRADING",
    text: "Trading because you're bored, not because there's a setup.",
    quote: "Nothing's happening. Let's make something happen.",
  },
  {
    title: "NO PLAN",
    text: "No written rules, so every trade is a new guess.",
    quote: "I have a plan. It's in my head.",
  },
];

export const compareRows = [
  {
    label: "Your trades",
    before: "Random entries from tips and green candles",
    after: "One written setup you understand and can explain",
  },
  {
    label: "Before a trade",
    before: "Gut feeling and a racing heart",
    after: "Fit-to-Trade Gate and your own Pre-Trade Checklist",
  },
  {
    label: "After a loss",
    before: "Size up to win it back",
    after: "A stop-for-the-day rule, then a calm review",
  },
  {
    label: "Risk",
    before: "Position size by feel, leverage by mood",
    after: "A sizing rule and a written drawdown protocol",
  },
  {
    label: "Information",
    before: "Social media hype and headlines",
    after: "A research routine that separates fact from guess",
  },
  {
    label: "Review",
    before: "Never looks back",
    after: "A trading journal and a weekly review",
  },
  {
    label: "Daily routine",
    before: "Opens the exchange app first thing",
    after: "A 7-step routine, the way professional traders run their day",
  },
];

export const programme = {
  eyebrow: "Four chapters, two weeks each",
  lead: "Every two weeks you finish a chapter and walk away with something real. You rank up from E to S as you go.",
  daily: "Plus 10 minutes a day to start and end your trading day with a clear head.",
};

export const chapters = [
  {
    chapter: "Chapter 1",
    name: "Know yourself",
    days: "Days 1–14",
    rank: "E → D",
    title: "KNOW WHY YOU LOSE",
    text: "Spot what sets you off and what it really costs you. Honest, and without shame.",
    output: "Your Trigger Map",
  },
  {
    chapter: "Chapter 2",
    name: "Build a method",
    days: "Days 15–28",
    rank: "D → C",
    title: "HAVE A PLAN YOU TRUST",
    text: "Write down when you trade, when you don't, and how much you risk.",
    output: "Your own trading plan",
  },
  {
    chapter: "Chapter 3",
    name: "Practice",
    days: "Days 29–42",
    rank: "C → B",
    title: "PRACTISE WITHOUT THE RISK",
    text: "Test your plan on past charts until it feels natural. Zero real money.",
    output: "A practice journal",
  },
  {
    chapter: "Chapter 4",
    name: "Self-sustain",
    days: "Days 43–56",
    rank: "B → S",
    title: "MAKE IT LAST",
    text: "Shrink it all into one card and a daily routine you keep long after day 56.",
    output: "Your Rules Card",
  },
];

export const dailyRoutine: { icon: IconName; label: string }[] = [
  { icon: "mind-check", label: "Mind Check" },
  { icon: "news-scan", label: "News Scan" },
  { icon: "event-calendar", label: "Event Calendar" },
  { icon: "market-map", label: "Market Map" },
  { icon: "fit-to-trade", label: "Fit-to-Trade Gate" },
  { icon: "session-close", label: "Session Close" },
  { icon: "rule-check", label: "Rule Check" },
];

export const steps: {
  title: string;
  text: string;
  chips: { icon: IconName; label: string }[];
}[] = [
  {
    title: "Take the 4-minute test",
    text: "16 quick questions, almost all one tap: real trading scenarios and a short knowledge check. No account logins, no balances.",
    chips: [
      { icon: "timer", label: "4 min" },
      { icon: "privacy", label: "Never asks about your money" },
    ],
  },
  {
    title: "Get your 56-day path",
    text: "Built around your top two problems, at your level, with the reason for every choice shown. You can change it.",
    chips: [
      { icon: "fomo", label: "FOMO" },
      { icon: "leverage", label: "Leverage" },
      { icon: "after-loss", label: "Revenge" },
    ],
  },
  {
    title: "One quest a day",
    text: "A 5–15 minute main quest plus a short daily routine. Earn XP, level up your stats, rank from E to S.",
    chips: [
      { icon: "quest", label: "Daily quest" },
      { icon: "xp", label: "XP" },
      { icon: "rank", label: "Rank E–S" },
    ],
  },
];

export const tools: { icon: IconName; title: string; text: string; when: string }[] = [
  {
    icon: "gate",
    title: "Trigger Map",
    text: "What sets off your worst trades, in your own words.",
    when: "Chapter 1",
  },
  {
    icon: "checklist",
    title: "Pre-Trade Checklist",
    text: "Up to 7 yes/no questions every trade must pass.",
    when: "Chapter 2",
  },
  {
    icon: "journal",
    title: "Trading journal",
    text: "Planned or impulsive, logged and reviewed weekly.",
    when: "Chapter 3",
  },
  {
    icon: "rules-card",
    title: "Rules Card",
    text: "Your plan shrunk to one screen. Set it as your wallpaper.",
    when: "Chapter 4",
  },
  {
    icon: "fit-to-trade",
    title: "Fit-to-Trade Gate",
    text: "Four taps before you open your exchange.",
    when: "Every day",
  },
  {
    icon: "urge-pause",
    title: "The Pause button",
    text: "Your own Urge Plan, one tap away when the urge hits. Not trading earns XP.",
    when: "Any time",
  },
];

export const posts = [
  {
    href: "#",
    date: "NOV 3, 2026",
    title: "Why you revenge trade after two losses",
    image: "/images/blog/blog-revenge-trading.jpg",
    alt: "Manga illustration of a trader gripping his desk as a chart falls",
  },
  {
    href: "#",
    date: "NOV 1, 2026",
    title: "The 15% candle: how FOMO takes over your thumb",
    image: "/images/blog/blog-fomo.jpg",
    alt: "Manga illustration of a trader staring at a green chart on her phone",
  },
  {
    href: "#",
    date: "OCT 28, 2026",
    title: "Day 1 to Day 56: what a trading reset feels like",
    image: "/images/blog/blog-reset.jpg",
    alt: "Manga illustration of a calm trader at sunrise holding his trading plan",
  },
];

export const coaches = {
  system: {
    name: "THE SYSTEM",
    tag: "DEFAULT",
    desc: "Calm, clear, encouraging.",
    lines: [
      { when: "Feeling FOMO", text: "Check your entry rules first. Does this trade pass?" },
      { when: "Skipped a bad trade", text: "Good discipline. +40 XP." },
    ],
  },
  sergeant: {
    name: "THE SERGEANT",
    tag: "18+ · OPT-IN",
    desc: "Swears, roasts you, tough love.",
    lines: [
      {
        when: "Feeling FOMO",
        text: "Is this in your plan, or did you see a green candle and lose your f*cking mind?",
      },
      {
        when: "Skipped a bad trade",
        text: "You didn't trade. Smartest sh*t you've done all week. +40 XP.",
      },
    ],
  },
};

export const priceIncludes = [
  "Personal 56-day path built from your test",
  "56 main quests + daily 7-step routine",
  "The Pause button and your own Urge Plan",
  "Both coaches: The System and The Sergeant",
  "Tools you keep: checklist, Rules Card, journal",
  "Founder badge + early access to new quests",
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
