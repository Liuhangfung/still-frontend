import { Card, Device, Icon, Mark } from "@still/ui";
import { clsx } from "clsx";
import Image from "next/image";
import { coaches } from "@/content/site";
import { Section, SectionHead, Wrap } from "./section";

function Bubble({ when, text }: { when: string; text: string }) {
  return (
    <div className="relative mb-6 rounded-2xl border-[2.5px] border-ink bg-white px-[15px] py-3 text-[15px] font-semibold text-ink last:mb-3 after:absolute after:-bottom-[11px] after:left-6 after:h-4 after:w-4 after:rotate-45 after:border-b-[2.5px] after:border-r-[2.5px] after:border-ink after:bg-white after:content-['']">
      <small className="mb-[3px] block text-[11px] font-extrabold uppercase tracking-[1.5px] text-teal-dark">
        {when}
      </small>
      &ldquo;{text}&rdquo;
    </div>
  );
}

function CoachCard({ kind }: { kind: "system" | "sergeant" }) {
  const c = coaches[kind];
  return (
    <Card className={clsx("p-7", kind === "system" ? "bg-teal" : "bg-cream")}>
      <header className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2.5 font-display text-4xl font-normal leading-none tracking-[1px]">
          <Icon name={kind === "system" ? "coach-system" : "coach-sergeant"} />
          {c.name}
        </h3>
        <span
          className={clsx(
            "whitespace-nowrap rounded-md px-2.5 py-1 text-xs font-extrabold",
            kind === "system" ? "bg-ink text-gold" : "bg-coral text-ink"
          )}
        >
          {c.tag}
        </span>
      </header>
      <div className="mb-5 font-semibold">{c.desc}</div>
      {c.lines.map((l) => (
        <Bubble key={l.when} when={l.when} text={l.text} />
      ))}
    </Card>
  );
}

export function Coaches() {
  return (
    <Section id="coaches" className="border-y border-line bg-tint-2">
      <Wrap>
        <SectionHead
          eyebrow="Pick your coach"
          title={
            <>
              CALM OR <Mark>BRUTAL?</Mark>
            </>
          }
        />
        <div className="grid items-center gap-7 md:grid-cols-2 xl:grid-cols-[1fr_1fr_auto]">
          <CoachCard kind="system" />
          <CoachCard kind="sergeant" />
          <div className="flex justify-center md:col-span-2 xl:col-span-1">
            <Device width={240}>
              <Image
                src="/images/screens/coach.png"
                alt="Pick your coach screen"
                fill
                sizes="240px"
                className="object-cover"
              />
            </Device>
          </div>
        </div>
        <p className="mt-[34px] text-center text-[15px] text-muted">
          Same quests, different voice. Switch any time. The Sergeant pushes discipline, never risk.
        </p>
      </Wrap>
    </Section>
  );
}
