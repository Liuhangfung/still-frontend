import { ButtonLink, Eyebrow, Icon, Wordmark, type IconName } from "@still/ui";
import Image from "next/image";
import { joinCta, phoneRoutine } from "@/content/site";
import { Reveal } from "../motion/reveal";
import { Wrap } from "./section";

const tabs: { icon: IconName; label: string }[] = [
  { icon: "today", label: "Today" },
  { icon: "path", label: "Journey" },
  { icon: "journal", label: "Log" },
  { icon: "inventory", label: "Tools" },
  { icon: "profile", label: "Me" },
];

/** The artwork frames the product; the headline leads. */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden py-[42px] md:py-[67px] 2xl:py-[75px]"
    >
      <Image
        src="/images/art/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[68%_top] md:object-top"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(245,242,235,.55),rgba(245,242,235,.86)_45%,#F5F2EB)] md:bg-[linear-gradient(90deg,rgba(245,242,235,.92)_0%,rgba(245,242,235,.7)_43%,rgba(245,242,235,.12)_80%),linear-gradient(0deg,#F5F2EB,transparent_35%)]"
      />
      <Wrap className="flex flex-col items-stretch gap-4 md:grid md:grid-cols-[1.15fr_.85fr] md:items-center md:gap-[15px] lg:gap-9">
        <div className="pb-2.5 pt-1.5 md:pb-8">
          <Eyebrow dot className="mb-6 md:mb-7">
            A 56-day practice for retail traders
          </Eyebrow>
          <h1
            id="hero-title"
            className="max-w-[670px] text-[clamp(47px,8.5vw,70px)] tracking-[-0.03em] md:text-[clamp(58px,6.3vw,84px)] 2xl:text-[86px]"
          >
            A steadier mind.
            <br />A better
            <br />
            <span className="text-[#777160]">trading routine.</span>
          </h1>
          <p className="mt-6 max-w-[460px] leading-[1.8] text-lead md:mt-7 md:text-[15px]">
            FOMO. Impulsive trades. A plan you don’t follow.
            <br />
            Practise a different response—one useful task at a time.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-[18px] md:mt-8 md:gap-6">
            <ButtonLink href={joinCta.href}>
              {joinCta.label}
              <Icon name="arrow-right" strokeWidth={1.4} className="text-lg" />
            </ButtonLink>
            <a className="text-link" href="#practice">
              See a daily practice
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">
            iPhone first · Joining is free · No payment today
          </p>
        </div>

        <Reveal
          delay={0.25}
          className="relative flex justify-center pb-7 pt-3.5 md:justify-end md:pt-1.5 lg:justify-center"
        >
          <PhonePreview />
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[1.5px] text-muted md:left-auto md:right-0 md:translate-x-0">
            App concept · Still in development
          </p>
        </Reveal>
      </Wrap>
    </section>
  );
}

/** A small, static rendering of the v2 Today screen. Decorative except for its label. */
function PhonePreview() {
  return (
    <div
      role="img"
      aria-label="Concept preview of Still’s Today screen: Day 12 of 56, today’s practice “Separate fact from guess”, and a short daily routine"
      className="w-[270px] flex-none overflow-hidden rounded-[39px] border-[5px] border-[#292723] bg-ivory shadow-phone min-[361px]:w-[280px] md:w-[295px]"
    >
      <div aria-hidden className="px-[15px] pt-[9px]">
        <div className="flex justify-between px-[7px] pb-2.5 pt-[7px] text-[10px] font-bold leading-none">
          <span>9:41</span>
          <span className="tracking-[2px]">•••</span>
        </div>
        <div className="relative pb-3 pt-1 text-center">
          <Wordmark className="text-[28px]" />
          <span className="absolute right-0.5 top-[7px] grid h-[23px] w-[23px] place-items-center rounded-full border border-[#878075]">
            <Icon name="profile" strokeWidth={1.4} className="text-[15px]" />
          </span>
        </div>
        <div className="mb-3 text-center">
          <p className="mb-1.5 text-[7px] uppercase tracking-[2px]">Day 12 of 56</p>
          <h3 className="text-[27px] tracking-[-0.02em]">Clarity before action.</h3>
          <p className="mt-1.5 text-[9px] text-muted">A little practice. A more deliberate day.</p>
        </div>
        <Image
          src="/images/art/today.jpg"
          alt=""
          width={900}
          height={570}
          sizes="270px"
          className="my-3 h-[149px] w-full rounded-[9px] object-cover"
        />
        <p className="mb-2 text-[7px] uppercase tracking-[2px]">Today’s practice</p>
        <h3 className="text-[23px] tracking-[-0.01em]">Separate fact from guess</h3>
        <p className="mt-1.5 text-[9px] text-muted">Sort three claims before your next decision.</p>
        <div className="my-2 flex items-center gap-2.5 text-[8px] text-muted">
          <Icon name="timer" strokeWidth={1.4} className="text-xs" />
          <span>8 min</span>
          <span>Step 1 of 3</span>
        </div>
        <div className="flex min-h-[38px] items-center justify-center gap-3 rounded-[7px] bg-ink text-[9px] text-ivory">
          Continue task <Icon name="arrow-right" strokeWidth={1.4} className="text-xs" />
        </div>
        <div className="mt-3.5 border-t border-line pt-2">
          <p className="text-[7px] uppercase tracking-[2px]">Daily routine</p>
          {phoneRoutine.map((r) => (
            <div
              key={r.label}
              className="flex items-center gap-[7px] border-b border-line py-2 text-[9px]"
            >
              <Icon name={r.icon} strokeWidth={1.4} className="text-[15px]" />
              <span>{r.label}</span>
              <small className="ml-auto text-[8px] text-muted">{r.time}</small>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-1.5 py-2 text-[8px] tracking-[1px]">
          <Icon name="pause" strokeWidth={1.4} className="text-[11px]" />
          Pause
        </div>
      </div>
      <div aria-hidden className="flex justify-around border-t border-line px-1 pb-1 pt-2">
        {tabs.map((t, i) => (
          <span
            key={t.label}
            className={
              i === 0
                ? "flex flex-col items-center gap-0.5 text-[7px] font-bold text-ink"
                : "flex flex-col items-center gap-0.5 text-[7px] text-[#746d62]"
            }
          >
            <Icon name={t.icon} strokeWidth={1.4} className="text-base" />
            {t.label}
          </span>
        ))}
      </div>
      <div aria-hidden className="mx-auto mb-[7px] mt-2 h-1 w-[95px] rounded-full bg-ink" />
    </div>
  );
}
