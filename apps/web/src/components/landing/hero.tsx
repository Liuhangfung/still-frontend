"use client";

import { ButtonLink, Eyebrow, Icon, type IconName } from "@still/ui";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { athenaModel } from "@/content/artwork";
import { joinCta } from "@/content/site";
import { Wrap } from "./section";
import { StoreBadges } from "./store-badges";
import { Magnetic } from "../motion/scenes";

// three.js loads after the page is interactive and never on the server.
const AthenaBust = dynamic(() => import("../three/athena-bust"), { ssr: false });

/** The app's core tools, named right under the call to action. */
const features: { icon: IconName; label: string }[] = [
  { icon: "quest", label: "Daily quest" },
  { icon: "fit-to-trade", label: "Fit-to-Trade Gate" },
  { icon: "urge-pause", label: "Pause button" },
  { icon: "journal", label: "Day Log A–E" },
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
            56 days to reset how you trade
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
              <a className="text-link" href="#app">
                See how it works
              </a>
            </div>
            <StoreBadges className="mt-6" />
            <p className="mt-4 text-xs text-muted">
              iPhone first, then Android · Joining is free · No payment today
            </p>
            <ul aria-label="Inside the app" className="mt-8 flex flex-wrap gap-2 md:mt-10">
              {features.map((f, i) => (
                <li
                  key={f.label}
                  className="fade-up flex items-center gap-2 rounded-full border border-line bg-paper/80 px-3.5 py-2 text-xs text-ink backdrop-blur"
                  style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                >
                  <Icon name={f.icon} strokeWidth={1.5} className="text-[15px] text-gold-text" />
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="relative md:h-[640px] lg:h-[680px]">
          {/* Middle layer: the marble Athena. */}
          <div className="relative h-[400px] md:absolute md:inset-y-0 md:-left-[24%] md:right-[34%] md:h-auto">
            <AthenaBust className="absolute inset-0" />
          </div>
          {/* Front layer: the app. */}
          <div
            className="fade-up relative z-10 -mt-[90px] flex justify-center md:absolute md:bottom-8 md:right-[2%] md:mt-0 md:block"
            style={{ animationDelay: "0.4s" }}
          >
            <motion.div style={reduce || !wide ? undefined : { y: phoneY, rotate: phoneRotate }}>
              <Image
                src="/images/app/today.webp"
                alt="Still’s Today screen: one main quest, Inside the Urge, two of five objectives done, and a short daily routine"
                width={780}
                height={1690}
                priority
                sizes="(min-width: 1024px) 285px, 260px"
                className="h-auto w-[260px] drop-shadow-[0_34px_50px_rgba(48,42,34,.25)] lg:w-[285px]"
              />
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
            Real app design · Still in development
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
