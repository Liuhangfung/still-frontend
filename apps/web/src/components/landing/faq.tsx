import { Icon } from "@still/ui";
import { faqs } from "@/content/site";
import { Stagger, StaggerItem } from "../motion/reveal";
import { Section, SectionHead, Wrap } from "./section";

export function Faq() {
  return (
    <Section id="faq">
      <Wrap>
        <SectionHead eyebrow="Questions" title="FAQ" />
        <Stagger className="mx-auto flex max-w-[820px] flex-col gap-3" gap={0.06}>
          {faqs.map((f, i) => (
            <StaggerItem key={f.q} from="up">
              <details
                open={i === 0}
                className="faq group rounded-2xl border-2 border-line bg-white px-[22px] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 open:border-ink open:shadow-comic-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[17px] font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Icon
                    name="chevron-down"
                    className="text-[22px] text-teal-dark transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="pb-[22px] text-muted">{f.a}</p>
              </details>
            </StaggerItem>
          ))}
        </Stagger>
      </Wrap>
    </Section>
  );
}
