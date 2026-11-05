import { Card, Chip, Icon } from "@still/ui";
import { chapters, dailyRoutine } from "@/content/site";
import { DrawMark, ScrollFill } from "../motion/effects";
import { Reveal, Stagger, StaggerItem } from "../motion/reveal";
import { Tilt } from "../motion/tilt";
import { Section, SectionHead, Wrap } from "./section";

export function Programme() {
  return (
    <Section id="programme">
      <Wrap>
        <SectionHead
          eyebrow="The 56-day programme"
          title={
            <>
              ONE PROGRAMME. <DrawMark>FOUR CHAPTERS.</DrawMark>
            </>
          }
          lead="Each chapter rebuilds one layer of how you trade, and ends with a boss challenge that leaves you with a tool you keep. You rank up from E to S as you go."
        />
        <ScrollFill className="relative mb-[30px] h-3.5 overflow-hidden rounded-[10px] border-2 border-ink bg-white">
          <i className="absolute inset-0 bg-[linear-gradient(90deg,#0FA3A3_0_24%,#3AB7B7_24%_49%,#7DCFCF_49%_74%,#FFC300_74%_100%)]" />
        </ScrollFill>
        <Stagger className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-4" gap={0.14}>
          {chapters.map((c) => (
            <StaggerItem key={c.title} from="flip" className="h-full">
              <Tilt className="h-full rounded-[20px]" max={7}>
                <Card soft className="flex h-full flex-col gap-2.5 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-[1.5px] text-teal-dark">
                      {c.days}
                    </span>
                    <b className="rank-badge rounded-[10px] border-2 border-ink bg-gold px-2.5 py-0.5 font-display text-[40px] font-normal leading-none text-ink">
                      {c.rank}
                    </b>
                  </div>
                  <h3 className="mt-1.5 font-display text-[30px] font-normal leading-none tracking-[1px]">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted">{c.text}</p>
                  <div className="mt-auto flex items-center gap-2 border-t-[1.5px] border-dashed border-line pt-3.5 text-[13px] font-bold">
                    <Icon name="inventory" className="text-[17px] text-teal" />
                    {c.output}
                  </div>
                </Card>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
        <Stagger className="mt-10 flex flex-wrap justify-center gap-3" gap={0.06}>
          {dailyRoutine.map((d) => (
            <StaggerItem key={d.label} from="pop">
              <Chip className="transition-transform hover:-translate-y-1 hover:rotate-[-2deg]">
                <Icon name={d.icon} className="text-teal" />
                {d.label}
              </Chip>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal delay={0.3}>
          <p className="mt-4 text-center text-sm text-muted">
            Your 7-step daily routine, the way real traders start and end their day. About 10
            minutes.
          </p>
        </Reveal>
      </Wrap>
    </Section>
  );
}
