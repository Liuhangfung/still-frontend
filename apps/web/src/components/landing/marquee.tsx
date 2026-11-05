const words = [
  "NO SIGNALS",
  "NO HYPE",
  "NO BROKER LOGIN",
  "ONE QUEST A DAY",
  "56 DAYS",
  "RANK E → S",
];

function Band({ className, reverse }: { className: string; reverse?: boolean }) {
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
      <Band className="top-[44px] rotate-[2.5deg] bg-teal text-ink" reverse />
      <Band className="top-[44px] -rotate-[2.5deg] bg-ink text-gold shadow-[0_8px_0_rgba(0,0,0,.12)]" />
    </div>
  );
}
