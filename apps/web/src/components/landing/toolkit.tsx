import { Card, Device, Eyebrow, Icon, Mark } from "@still/ui";
import Image from "next/image";
import { tools } from "@/content/site";
import { Section, Wrap } from "./section";

export function Toolkit() {
  return (
    <Section id="tools">
      <Wrap className="grid items-center gap-[72px] lg:grid-cols-2">
        <div className="relative flex justify-center py-[30px]">
          <div className="absolute inset-[6%] rounded-[44%_56%_52%_48%/50%_44%_56%_50%] bg-tint" />
          <Device width={300} className="z-[1]">
            <Image
              src="/images/screens/fit-to-trade.png"
              alt="Fit-to-Trade Gate screen"
              fill
              sizes="300px"
              className="object-cover"
            />
          </Device>
        </div>
        <div>
          <Eyebrow>Tools you build along the way</Eyebrow>
          <h2 className="display my-4 mb-5 text-[clamp(46px,6vw,76px)]">
            YOUR OWN <Mark>TRADING TOOLKIT.</Mark>
          </h2>
          <p className="mb-7 text-lg text-muted">
            By day 56 you don&apos;t just have new habits. You have tools you built yourself, and
            they keep working after the programme ends.
          </p>
          <div className="grid gap-[18px] sm:grid-cols-2">
            {tools.map((t) => (
              <Card key={t.title} soft className="flex items-start gap-3.5 p-5">
                <span className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-xl border-2 border-ink bg-gold text-[22px]">
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
            ))}
          </div>
        </div>
      </Wrap>
    </Section>
  );
}
