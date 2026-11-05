import { Card } from "@still/ui";
import { problems } from "@/content/site";
import { DrawMark, DrawOnView } from "../motion/effects";
import { Stagger, StaggerItem } from "../motion/reveal";
import { Tilt } from "../motion/tilt";
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
              IT&apos;S NOT YOUR <DrawMark>SIGNALS.</DrawMark>
            </>
          }
          lead="Most retail traders don't lose because they lack information. They lose because of what they do with it. Still trains the behaviour, not the chart."
        />
        <Stagger className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-4" gap={0.12}>
          {problems.map((p, i) => {
            const Art = arts[i];
            return (
              <StaggerItem key={p.title} from="flip" className="h-full">
                <Tilt className="h-full rounded-[20px]">
                  <Card className="flex h-full flex-col overflow-hidden">
                    <DrawOnView className="border-b-[2.5px] border-ink bg-tint-2 px-2.5 pb-1.5 pt-3.5">
                      <Art />
                    </DrawOnView>
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
                </Tilt>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Wrap>
    </Section>
  );
}
