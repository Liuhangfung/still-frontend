// Encouragement, not selling. Kept free of profit talk, per the brand rules.
const front = [
  "PAUSE. BREATHE. DECIDE.",
  "PATIENCE IS A POSITION",
  "PROGRESS, NOT PERFECTION",
  "YOU ARE MORE THAN YOUR P&L",
  "ONE CALM DECISION AT A TIME",
  "DISCIPLINE IS FREEDOM",
];

const back = [
  "NO TRADE IS ALSO A CHOICE",
  "EVERY SETBACK IS DATA",
  "SLOW IS SMOOTH",
  "TOMORROW IS A FRESH START",
  "PROTECT YOUR PEACE",
  "YOU'VE GOT THIS",
];

function Band({
  words,
  className,
  reverse,
}: {
  words: string[];
  className: string;
  reverse?: boolean;
}) {
  const row = [...words, ...words];
  return (
    <div
      className={`absolute inset-x-[-5%] flex overflow-hidden border-y-[2.5px] border-ink py-3 ${className}`}
    >
      {[0, 1].map((n) => (
        <div
          key={n}
          aria-hidden={n === 1}
          className={`marquee flex shrink-0 items-center gap-8 pr-8 ${reverse ? "marquee-reverse" : ""}`}
        >
          {row.map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap font-display text-[28px] tracking-[1.5px]"
            >
              {w}
              <span className="text-[22px]">★</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/** Two crossing comic banners that scroll in opposite directions. */
export function Marquee() {
  return (
    <div className="relative h-[150px] overflow-hidden" role="presentation">
      <Band words={back} className="top-[44px] rotate-[2.5deg] bg-teal text-ink" reverse />
      <Band
        words={front}
        className="top-[44px] -rotate-[2.5deg] bg-ink text-gold shadow-[0_8px_0_rgba(0,0,0,.12)]"
      />
    </div>
  );
}
