import { Card, Chip, Icon } from "@still/ui";
import { steps } from "@/content/site";
import { DrawMark, DrawOnView } from "../motion/effects";
import { Stagger, StaggerItem } from "../motion/reveal";
import { Tilt } from "../motion/tilt";
import { PathArt, QuestArt, TestArt } from "./art";
import { Section, SectionHead, Wrap } from "./section";

const arts = [TestArt, PathArt, QuestArt];

export function How() {
  return (
    <Section id="how" className="border-y border-line bg-tint-2">
      <Wrap>
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              START IN <DrawMark>4 MINUTES.</DrawMark>
            </>
          }
        />
        <Stagger className="grid gap-7 lg:grid-cols-3" gap={0.16}>
          {steps.map((s, i) => {
            const Art = arts[i];
            return (
              <StaggerItem key={s.title} from="flip" className="h-full">
                <Tilt className="h-full rounded-[20px]">
                  <Card className="h-full overflow-hidden">
                    <DrawOnView className="relative border-b-[2.5px] border-ink bg-white px-[18px] pb-2 pt-[18px]">
                      <span className="step-num absolute left-4 top-4 flex h-[46px] w-[46px] items-center justify-center rounded-xl border-[2.5px] border-ink bg-teal font-display text-[28px] shadow-comic-sm">
                        {i + 1}
                      </span>
                      <Art />
                    </DrawOnView>
                    <div className="px-6 pb-[26px] pt-[22px]">
                      <h3 className="mb-1.5 text-[21px] font-extrabold">{s.title}</h3>
                      <p className="text-[15px] text-muted">{s.text}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.chips.map((c) => (
                          <Chip key={c.label} className="px-2.5 py-[5px] text-xs">
                            <Icon name={c.icon} />
                            {c.label}
                          </Chip>
                        ))}
                      </div>
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
