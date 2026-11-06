"use client";

import { ButtonLink, Eyebrow, Icon } from "@still/ui";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { appTour, joinCta } from "@/content/site";
import { Tilt } from "../motion/depth";
import { Lines, Magnetic, Unveil } from "../motion/scenes";
import { Section, Wrap } from "./section";

const pad = (n: number) => String(n).padStart(2, "0");
const ease = [0.22, 1, 0.36, 1] as const;

/**
 * The solution, shown with real app screens. On wide screens the phone is
 * pinned inside a classical arch and its screen changes with the step in the
 * middle of the viewport; on phones every step carries its own screen.
 */
export function AppTour() {
  const [active, setActive] = useState(0);
  const steps = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    steps.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section id="app" labelledBy="app-title" className="bg-paper">
      <Wrap>
        <div className="grid gap-5 md:grid-cols-2 md:items-end md:gap-[45px] lg:gap-[90px]">
          <div>
            <Eyebrow dot className="mb-[22px]">
              Inside the app
            </Eyebrow>
            <h2 id="app-title" className="section-title max-w-[540px]">
              <Lines lines={["Not another course.", "A daily practice in your pocket."]} />
            </h2>
          </div>
          <p className="max-w-[430px] text-[15px] leading-[1.8] text-lead md:mb-2">
            Still is an iPhone app. Every day it gives you one small, useful thing to do, and the
            tools to stop before a trade you’ll regret. Here is a day with Still.
          </p>
        </div>

        <div className="mt-12 grid md:mt-16 md:grid-cols-2 md:gap-[45px] lg:gap-[90px]">
          <div>
            {appTour.map((s, i) => (
              <article
                key={s.title}
                ref={(el) => {
                  steps.current[i] = el;
                }}
                data-index={i}
                className="border-t border-line py-10 last:border-b md:flex md:min-h-[78vh] md:flex-col md:justify-center md:border-0 md:py-12"
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={clsx(
                      "font-serif text-[22px] leading-none transition-colors duration-700",
                      i === active ? "text-gold-text" : "text-[#8a7d66]"
                    )}
                  >
                    {pad(i + 1)}
                  </span>
                  <Eyebrow className="text-[10px] text-muted">{s.when}</Eyebrow>
                </div>
                <h3 className="mt-4 text-[34px] leading-[1.05] tracking-[-0.015em] md:text-[44px]">
                  {s.title}
                </h3>
                <p className="mt-4 max-w-[430px] text-[15px] leading-[1.75] text-lead">{s.text}</p>
                <ul className="mt-5 flex flex-col gap-2.5 md:hidden">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 text-[13px] text-ink">
                      <Icon name="check" strokeWidth={1.6} className="text-base text-gold-text" />
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Phones: the screen sits under its step. */}
                <Unveil className="mx-auto mt-9 w-[250px] rounded-[34px] md:hidden">
                  <Image
                    src={s.screen}
                    alt={s.alt}
                    width={780}
                    height={1690}
                    sizes="250px"
                    className="h-auto w-full drop-shadow-[0_24px_40px_rgba(48,42,34,.18)]"
                  />
                </Unveil>
              </article>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="sticky top-[11vh] flex h-[78vh] items-center justify-center">
              <Stage active={active} />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-3 text-center md:mt-16">
          <Magnetic>
            <ButtonLink href={joinCta.href}>
              Get Still first
              <Icon name="arrow-right" strokeWidth={1.4} className="text-lg" />
            </ButtonLink>
          </Magnetic>
          <p className="text-xs text-muted">Founder list · iPhone first · No payment today</p>
        </div>
      </Wrap>
    </Section>
  );
}

/** The pinned arch, phone and floating feature chips. */
function Stage({ active }: { active: number }) {
  const reduce = useReducedMotion();
  const step = appTour[active];

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* A classical arch behind the phone, with a gold hairline. */}
      <div
        aria-hidden
        className="absolute bottom-[4%] top-[2%] w-[78%] max-w-[420px] rounded-t-full border border-[#d8c8ab] bg-[radial-gradient(120%_80%_at_50%_0%,#E7ECEC_0%,#F5F2EB_70%)]"
      />

      <Tilt max={6} className="relative z-10 h-[min(68vh,640px)] aspect-[780/1690]">
        <div className="relative h-full w-full drop-shadow-[0_34px_50px_rgba(48,42,34,.22)]">
          {appTour.map((s, i) => {
            const state = i === active ? "on" : i < active ? "past" : "next";
            return (
              <motion.div
                key={s.screen}
                className="absolute inset-0"
                initial={false}
                animate={
                  reduce
                    ? { opacity: state === "on" ? 1 : 0 }
                    : {
                        opacity: state === "on" ? 1 : 0,
                        y: state === "on" ? 0 : state === "past" ? -50 : 70,
                        scale: state === "on" ? 1 : 0.95,
                        rotateX: state === "on" ? 0 : state === "past" ? 8 : -8,
                      }
                }
                transition={{ duration: 0.9, ease }}
                style={{ zIndex: state === "on" ? 2 : 1 }}
                aria-hidden={state !== "on"}
              >
                <Image
                  src={s.screen}
                  alt={s.alt}
                  width={780}
                  height={1690}
                  sizes="(min-width: 768px) 320px, 0px"
                  priority={i === 0}
                  className="h-full w-full"
                />
              </motion.div>
            );
          })}
        </div>
      </Tilt>

      {/* The step's two key points float beside the phone. */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={active} className="pointer-events-none absolute inset-0 z-20">
          {step.points.map((pt, i) => (
            <motion.p
              key={pt}
              className={clsx(
                "absolute flex max-w-[210px] items-center gap-2 rounded-full border border-line bg-paper/95 px-3.5 py-2 text-xs text-ink shadow-card backdrop-blur",
                i === 0 ? "left-0 top-[22%] lg:left-[2%]" : "bottom-[18%] right-0 lg:right-[2%]"
              )}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: i === 0 ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.25 + i * 0.12, ease }}
            >
              <Icon name="check" strokeWidth={1.6} className="flex-none text-sm text-gold-text" />
              {pt}
            </motion.p>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Progress: one mark per step. */}
      <div aria-hidden className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
        {appTour.map((s, i) => (
          <span
            key={s.title}
            className={clsx(
              "h-[3px] rounded-full transition-all duration-700",
              i === active ? "w-8 bg-ink" : "w-3 bg-line"
            )}
          />
        ))}
      </div>
    </div>
  );
}
