"use client";

import { ButtonLink, Eyebrow, Icon, Wordmark, type IconName } from "@still/ui";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { athenaModel } from "@/content/artwork";
import { joinCta, phoneRoutine } from "@/content/site";
import { Wrap } from "./section";
import { Magnetic } from "../motion/scenes";

// three.js loads after the page is interactive and never on the server.
const AthenaBust = dynamic(() => import("../three/athena-bust"), { ssr: false });

const tabs: { icon: IconName; label: string }[] = [
  { icon: "today", label: "Today" },
  { icon: "path", label: "Journey" },
  { icon: "journal", label: "Log" },
  { icon: "inventory", label: "Tools" },
  { icon: "profile", label: "Me" },
];

/**
 * Three depth layers: the fresco sky drifts slowest, the marble Athena sits in
 * the middle, and the app phone floats in front and rises fastest on scroll.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const skyScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.16]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const copyFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  // On phones the app sits under Athena's face, so it only lifts on wider screens.
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setWide(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-4, 6]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden py-[42px] md:py-[67px] 2xl:py-[75px]"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-20 origin-top"
        style={reduce ? undefined : { y: skyY, scale: skyScale }}
      >
        <Image
          src="/images/art/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_top] md:object-top"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(245,242,235,.55),rgba(245,242,235,.86)_45%,#F5F2EB)] md:bg-[linear-gradient(90deg,rgba(245,242,235,.92)_0%,rgba(245,242,235,.7)_43%,rgba(245,242,235,.12)_80%),linear-gradient(0deg,#F5F2EB,transparent_35%)]"
      />
      <Wrap className="flex flex-col items-stretch gap-4 md:grid md:grid-cols-[1.05fr_.95fr] md:items-center md:gap-[15px] lg:gap-9">
        <motion.div
          className="relative z-10 pb-2.5 pt-1.5 md:pb-8"
          style={reduce ? undefined : { y: copyY, opacity: copyFade }}
        >
          <Eyebrow dot className="mb-6 md:mb-7">
            A 56-day practice for retail traders
          </Eyebrow>
          <h1
            id="hero-title"
            className="max-w-[670px] text-[clamp(47px,8.5vw,70px)] tracking-[-0.03em] md:text-[clamp(58px,6.3vw,84px)] 2xl:text-[86px]"
          >
            <Line delay={0.05}>A steadier mind.</Line>
            <Line delay={0.18}>A better</Line>
            <Line delay={0.31} className="text-[#777160]">
              trading routine.
            </Line>
          </h1>
          <div className="fade-up" style={{ animationDelay: "0.55s" }}>
            <p className="mt-6 max-w-[460px] leading-[1.8] text-lead md:mt-7 md:text-[15px]">
              FOMO. Impulsive trades. A plan you don’t follow.
              <br />
              Practise a different response—one useful task at a time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-[18px] md:mt-8 md:gap-6">
              <Magnetic>
                <ButtonLink href={joinCta.href}>
                  {joinCta.label}
                  <Icon name="arrow-right" strokeWidth={1.4} className="text-lg" />
                </ButtonLink>
              </Magnetic>
              <a className="text-link" href="#practice">
                See a daily practice
              </a>
            </div>
            <p className="mt-4 text-xs text-muted">
              iPhone first · Joining is free · No payment today
            </p>
          </div>
        </motion.div>

        <div className="relative md:h-[640px] lg:h-[680px]">
          {/* Middle layer: the marble Athena. */}
          <div className="relative h-[460px] md:absolute md:inset-y-0 md:-left-[18%] md:right-[22%] md:h-auto">
            <AthenaBust className="absolute inset-0" />
          </div>
          {/* Front layer: the app. */}
          <div
            className="fade-up relative z-10 -mt-[110px] flex justify-center md:absolute md:bottom-10 md:right-0 md:mt-0 md:block"
            style={{ animationDelay: "0.4s" }}
          >
            <motion.div style={reduce || !wide ? undefined : { y: phoneY, rotate: phoneRotate }}>
              <div className="[zoom:0.78] md:[zoom:0.6] lg:[zoom:0.66]">
                <PhonePreview />
              </div>
            </motion.div>
          </div>
          <a
            href={athenaModel.source}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute left-0 top-[24px] z-20 max-w-[110px] text-[10px] leading-snug text-muted hover:text-ink md:bottom-10 md:left-[2%] md:top-auto md:max-w-[150px]"
          >
            <i className="font-serif text-xs not-italic text-ink">Athena</i>
            <br />
            Real-time scan of a classical cast · SMK, public domain
          </a>
          <p className="mt-4 text-center text-[10px] uppercase tracking-[1.5px] text-muted md:absolute md:bottom-0 md:right-0 md:mt-0 md:text-right">
            App concept · Still in development
          </p>
        </div>
      </Wrap>
    </section>
  );
}

/** A headline line that rises out of a mask on load (pure CSS, so it plays before hydration). */
function Line({
  delay,
  className,
  children,
}: {
  delay: number;
  className?: string;
  children: string;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <span className={`rise block ${className ?? ""}`} style={{ animationDelay: `${delay}s` }}>
        {children}
      </span>
    </span>
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
