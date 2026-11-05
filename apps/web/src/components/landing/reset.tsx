import { Card, Icon, Mark } from "@still/ui";
import { compareRows } from "@/content/site";
import { Section, SectionHead, Wrap } from "./section";

export function Reset() {
  return (
    <Section id="reset" className="border-y border-line bg-tint-2">
      <Wrap>
        <SectionHead
          eyebrow="The reset"
          title={
            <>
              FROM DAY 1 <Mark>TO DAY 56.</Mark>
            </>
          }
          lead="Still doesn't patch one bad habit. It rebuilds the whole way you trade, layer by layer: how you think, how you plan, how you practise and how you review."
        />
        <Card className="mx-auto max-w-[1000px] overflow-hidden">
          <div className="grid grid-cols-2 border-b-[2.5px] border-ink sm:grid-cols-[170px_1fr_1fr]">
            <div className="hidden bg-white sm:block" />
            <div className="bg-footer p-3.5 font-display text-2xl leading-none tracking-[1px] text-muted sm:px-[22px] sm:py-[18px] sm:text-[30px]">
              DAY 1
            </div>
            <div className="bg-gold p-3.5 font-display text-2xl leading-none tracking-[1px] sm:px-[22px] sm:py-[18px] sm:text-[30px]">
              DAY 56
            </div>
          </div>
          {compareRows.map((r) => (
            <div
              key={r.label}
              className="grid grid-cols-2 border-b-[1.5px] border-line text-sm last:border-b-0 sm:grid-cols-[170px_1fr_1fr] sm:text-[15px]"
            >
              <div className="col-span-2 flex items-center bg-white px-3.5 pb-0 pt-3 text-[13px] font-extrabold uppercase tracking-[1px] text-teal-dark sm:col-span-1 sm:px-[22px] sm:py-4">
                {r.label}
              </div>
              <div className="flex items-start gap-2.5 bg-[#FAFCFC] px-3.5 py-3 text-muted sm:px-[22px] sm:py-4">
                <Icon name="close" className="mt-0.5 text-lg text-coral" />
                {r.before}
              </div>
              <div className="flex items-start gap-2.5 bg-gold-paper px-3.5 py-3 font-semibold sm:px-[22px] sm:py-4">
                <Icon name="check" className="mt-0.5 text-lg text-teal" />
                {r.after}
              </div>
            </div>
          ))}
        </Card>
        <p className="mt-[22px] text-center text-sm text-muted">
          Still trains the process. It never promises profit, and your results depend on what you do
          with it.
        </p>
      </Wrap>
    </Section>
  );
}
