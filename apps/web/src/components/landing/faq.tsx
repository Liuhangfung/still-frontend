import { Eyebrow } from "@still/ui";
import { faqs } from "@/content/site";
import { Section, Wrap } from "./section";
import { Lines } from "../motion/scenes";

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <Wrap className="grid gap-9 md:grid-cols-[.7fr_1.3fr] md:gap-[45px] lg:gap-[100px]">
        <div>
          <Eyebrow className="mb-5">Before you begin</Eyebrow>
          <h2 id="faq-title" className="text-[43px] tracking-[-0.02em] md:text-[51px]">
            <Lines lines={["A few things", "worth knowing."]} />
          </h2>
          <p className="mt-[18px] text-[13px] text-muted md:mt-6 md:max-w-[230px]">
            No signals. No broker connection. No promise of trading profits.
          </p>
        </div>
        <div>
          {faqs.map((f) => (
            <details key={f.q} className="faq group border-t border-line last:border-b">
              <summary className="flex min-h-16 cursor-pointer list-none items-center transition-colors duration-300 hover:text-gold-text justify-between gap-[22px] py-5 text-sm leading-normal [&::-webkit-details-marker]:hidden">
                {f.q}
                {/* A plus whose upright bar folds away into a minus. */}
                <span aria-hidden className="relative h-3.5 w-3.5 flex-none">
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#8a7d66]" />
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#8a7d66] transition-transform duration-500 ease-out group-open:rotate-90 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="pb-6 pr-7 text-[13px] leading-[1.9] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}
