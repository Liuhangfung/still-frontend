import { Icon } from "@still/ui";
import { faqs } from "@/content/site";
import { Section, SectionHead, Wrap } from "./section";

export function Faq() {
  return (
    <Section id="faq">
      <Wrap>
        <SectionHead eyebrow="Questions" title="FAQ" />
        <div className="mx-auto flex max-w-[820px] flex-col gap-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-2xl border-2 border-line bg-white px-[22px] transition-colors open:border-ink open:shadow-comic-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[17px] font-bold [&::-webkit-details-marker]:hidden">
                {f.q}
                <Icon
                  name="chevron-down"
                  className="text-[22px] text-teal-dark transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pb-[22px] text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}
