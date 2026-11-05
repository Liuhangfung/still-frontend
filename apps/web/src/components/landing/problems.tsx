import { Card, Mark } from "@still/ui";
import { problems } from "@/content/site";
import { FomoArt, NoPlanArt, OvertradingArt, RevengeArt } from "./art";
import { Section, SectionHead, Wrap } from "./section";

const arts = [FomoArt, RevengeArt, OvertradingArt, NoPlanArt];

export function Problems() {
  return (
    <Section>
      <Wrap>
        <SectionHead
          eyebrow="The real problem"
          title={
            <>
              IT&apos;S NOT YOUR <Mark>SIGNALS.</Mark>
            </>
          }
          lead="Most retail traders don't lose because they lack information. They lose because of what they do with it. Still trains the behaviour, not the chart."
        />
        <div className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => {
            const Art = arts[i];
            return (
              <Card key={p.title} className="flex flex-col overflow-hidden">
                <div className="border-b-[2.5px] border-ink bg-tint-2 px-2.5 pb-1.5 pt-3.5">
                  <Art />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-[22px] pb-6 pt-[22px]">
                  <h3 className="font-display text-[30px] font-normal leading-none tracking-[1px]">
                    {p.title}
                  </h3>
                  <p className="text-[15px] text-muted">{p.text}</p>
                  <q className="mt-auto pt-2.5 text-sm font-bold italic text-teal-dark">
                    {p.quote}
                  </q>
                </div>
              </Card>
            );
          })}
        </div>
      </Wrap>
    </Section>
  );
}
