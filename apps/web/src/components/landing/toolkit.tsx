import { Card, Device, Eyebrow, Icon } from "@still/ui";
import Image from "next/image";
import { tools } from "@/content/site";
import { DrawMark, Float, ScrollTurn } from "../motion/effects";
import { Reveal, Stagger, StaggerItem } from "../motion/reveal";
import { Tilt } from "../motion/tilt";
import { Section, Wrap } from "./section";

export function Toolkit() {
  return (
    <Section id="tools" className="overflow-hidden">
      <Wrap className="grid items-center gap-[72px] lg:grid-cols-2">
        <div className="relative flex justify-center py-[30px]">
          <div className="blob-morph absolute inset-[6%] bg-tint" />
          <ScrollTurn className="z-[1]">
            <Float distance={10} duration={7}>
              <Device width={300}>
                <Image
                  src="/images/screens/fit-to-trade.png"
                  alt="Fit-to-Trade Gate screen"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </Device>
            </Float>
          </ScrollTurn>
        </div>
        <div>
          <Reveal from="right">
            <Eyebrow>Tools you build along the way</Eyebrow>
            <h2 className="display my-4 mb-5 text-[clamp(46px,6vw,76px)]">
              YOUR OWN <DrawMark>TRADING TOOLKIT.</DrawMark>
            </h2>
            <p className="mb-7 text-lg text-muted">
              By day 56 you don&apos;t just have new habits. You have tools you built yourself, and
              they keep working long after day 56.
            </p>
          </Reveal>
          <Stagger className="grid gap-[18px] sm:grid-cols-2" gap={0.08}>
            {tools.map((t) => (
              <StaggerItem key={t.title} from="zoom" className="h-full">
                <Tilt className="h-full rounded-[20px]" max={8} glare={false}>
                  <Card soft className="group/tool flex h-full items-start gap-3.5 p-5">
                    <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-xl border-2 border-ink bg-gold text-[22px] transition-transform duration-300 group-hover/tool:-rotate-12 group-hover/tool:scale-110">
                      <Icon name={t.icon} />
                    </span>
                    <div>
                      <b className="block text-base">{t.title}</b>
                      <p className="mt-0.5 text-sm text-muted">{t.text}</p>
                      <span className="mt-2 inline-block rounded-md bg-tint px-2 py-[3px] text-[11px] font-extrabold uppercase tracking-[1px] text-teal-dark">
                        {t.when}
                      </span>
                    </div>
                  </Card>
                </Tilt>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Wrap>
    </Section>
  );
}
