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
    q: "Is this financial advice?",
    a: "No. Still is habit training. It never gives signals, price targets or tips, and never tells you what to buy or sell.",
  },
  {
    q: "Do I have to trade to use it?",
    a: 'No. No quest ever requires a real-money trade. "Not trading today" is always a valid answer and earns the same XP. Week 1 is a no-trade week.',
  },
  {
    q: "Which markets is it for?",
    a: "Crypto first, and the habits apply to any market. US stocks content is coming next.",
  },
  {
    q: "What if I miss a day?",
    a: "You get an easy Recovery Quest. Progress is never wiped and you are never shamed.",
  },
  {
    q: "How much time does it take?",
    a: "About 10 minutes for the daily routine and 5–15 minutes for the main quest. Every quest has a 5-minute short version for busy days.",
  },
  {
    q: "When can I use the app?",
    a: "When it launches on iPhone and Android. People on the founder list hear first and get the founder price. We'll email you the day it's ready.",
  },
  {
    q: "What happens after day 56?",
    a: "You keep your rank, tools and history. If you want to keep going, an optional yearly membership is offered at day 56.",
  },
  {
    q: "How do I pay?",
    a: "Inside the app, as a one-time in-app purchase on the App Store or Google Play. There is nothing to pay on this website. Refunds go through Apple or Google under their usual rules.",
  },
];
