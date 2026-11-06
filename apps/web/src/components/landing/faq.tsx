import { Eyebrow } from "@still/ui";
import { faqs } from "@/content/site";
import { Section, Wrap } from "./section";

export function Faq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <Wrap className="grid gap-9 md:grid-cols-[.7fr_1.3fr] md:gap-[45px] lg:gap-[100px]">
        <div>
          <Eyebrow className="mb-5">Before you begin</Eyebrow>
          <h2 id="faq-title" className="text-[43px] tracking-[-0.02em] md:text-[51px]">
            A few things
            <br />
            worth knowing.
          </h2>
          <p className="mt-[18px] text-[13px] text-muted md:mt-6 md:max-w-[230px]">
            No signals. No broker connection. No promise of trading profits.
          </p>
        </div>
        <div>
          {faqs.map((f) => (
            <details key={f.q} className="faq group border-t border-line last:border-b">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-[22px] py-5 text-sm leading-normal [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  aria-hidden
                  className="flex-none font-serif text-[26px] leading-none text-[#8a7d66] after:content-['+'] group-open:after:content-['−']"
                />
              </summary>
              <p className="pb-6 pr-7 text-[13px] leading-[1.9] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}
