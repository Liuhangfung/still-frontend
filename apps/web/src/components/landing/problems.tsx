import { Eyebrow } from "@still/ui";
import { markets, problems } from "@/content/site";
import { Stagger, StaggerItem } from "../motion/reveal";
import { Section, Wrap } from "./section";

/** All markets, not a signal list. */
export function Markets() {
  return (
    <div className="border-y border-line py-[19px]">
      <Wrap className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-[22px]">
        <p className="flex-none text-[10px] uppercase tracking-[1.8px] text-muted md:max-w-[145px]">
          One practice. <br className="hidden md:inline" />
          Across all markets.
        </p>
        <ul
          aria-label="Supported trading markets"
          className="flex flex-1 flex-wrap items-center gap-x-6 gap-y-4 font-serif text-[21px] leading-none md:flex-nowrap md:justify-between md:gap-4 md:text-[19px] lg:gap-7 lg:text-[22px]"
        >
          {markets.map((m) => (
            <li key={m} className="whitespace-nowrap">
              {m}
            </li>
          ))}
        </ul>
      </Wrap>
    </div>
  );
}

export function Problems() {
  return (
    <Section labelledBy="problem-title">
      <Wrap className="grid gap-9 md:grid-cols-2 md:gap-[45px] lg:gap-[90px]">
        <div>
          <Eyebrow className="mb-[22px]">If this feels familiar</Eyebrow>
          <h2 id="problem-title" className="section-title max-w-[460px]">
            The hard part isn’t finding another signal. It’s following your own plan.
          </h2>
          <p className="mt-5 max-w-[450px] text-[13px] leading-[1.9] text-muted md:mt-6">
            You can understand a chart and still act on an impulse. Still focuses on the habits
            around a decision: how you prepare, pause, practise and review.
          </p>
        </div>
        <Stagger className="md:pt-1.5">
          {problems.map((p, i) => (
            <StaggerItem key={p.title}>
              <article className="grid grid-cols-[37px_1fr] gap-3 border-t border-line py-5 [&:last-child]:border-b">
                <span className="pt-1 font-serif text-[22px] leading-none text-[#857a68]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[26px] tracking-[-0.01em]">{p.title}</h3>
                  <p className="mt-2 max-w-[340px] text-[13px] text-muted">{p.text}</p>
                  {p.quote && (
                    <blockquote className="mt-3 font-serif text-lg italic leading-[1.3] text-gold-text">
                      “{p.quote}”
                    </blockquote>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Wrap>
    </Section>
  );
}
