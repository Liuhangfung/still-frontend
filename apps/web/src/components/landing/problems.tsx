"use client";

import { Eyebrow } from "@still/ui";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { markets, problems } from "@/content/site";
import { ScrollZoom, Tilt } from "../motion/depth";
import { Label, Painting } from "./painting";
import { Section, Wrap } from "./section";

/** All markets, not a signal list. */
export function Markets() {
  return (
    <div className="border-y border-line py-[19px]">
      <Wrap className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between md:gap-[22px]">
        <p className="flex-none text-[10px] uppercase tracking-[1.8px] text-muted md:max-w-[145px]">
          One practice. <br className="hidden md:inline" />
          Across all markets.
        </p>
        <ul
          aria-label="Supported trading markets"
          className="flex flex-1 flex-wrap items-center gap-x-6 gap-y-4 font-serif text-[21px] leading-none md:flex-nowrap md:justify-between md:gap-4 md:text-[19px] lg:gap-7 lg:text-[22px]"
        >
          {markets.map((m) => (
            <li key={m} className="whitespace-nowrap">
              {m}
            </li>
          ))}
        </ul>
      </Wrap>
    </div>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Each problem has a myth. On wide screens the paintings are pinned and turn in
 * 3D to match the problem in the middle of the screen; on phones each problem
 * carries its own painting.
 */
export function Problems() {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section labelledBy="problem-title">
      <Wrap>
        <div className="grid gap-5 md:grid-cols-2 md:items-end md:gap-[45px] lg:gap-[90px]">
          <div>
            <Eyebrow className="mb-[22px]">If this feels familiar</Eyebrow>
            <h2 id="problem-title" className="section-title max-w-[520px]">
              The hard part isn’t finding another signal. It’s following your own plan.
            </h2>
          </div>
          <p className="max-w-[450px] text-[13px] leading-[1.9] text-muted md:mb-2">
            You can understand a chart and still act on an impulse. Still focuses on the habits
            around a decision: how you prepare, pause, practise and review. The Greeks knew these
            moments well.
          </p>
        </div>

        <div className="mt-10 grid md:mt-16 md:grid-cols-2 md:gap-[45px] lg:gap-[90px]">
          <div className="hidden md:block">
            <div className="sticky top-[10vh] h-[80vh]">
              <Gallery active={active} />
            </div>
          </div>

          <div>
            {problems.map((p, i) => (
              <article
                key={p.title}
                ref={(el) => {
                  items.current[i] = el;
                }}
                data-index={i}
                className="border-t border-line py-8 last:border-b md:flex md:min-h-[72vh] md:flex-col md:justify-center md:py-12"
              >
                <ScrollZoom className="mb-6 aspect-[4/3] rounded-[3px] md:hidden">
                  <Painting art={p.art} sizes="100vw" />
                </ScrollZoom>
                <span className="font-serif text-[22px] leading-none text-[#857a68]">
                  {pad(i + 1)}
                </span>
                <h3 className="mt-3 text-[30px] tracking-[-0.01em] md:text-[38px]">{p.title}</h3>
                <p className="mt-3 max-w-[380px] text-[14px] text-muted">{p.text}</p>
                {p.quote && (
                  <blockquote className="mt-4 font-serif text-xl italic leading-[1.3] text-gold-text">
                    “{p.quote}”
                  </blockquote>
                )}
                <p className="mt-6 max-w-[380px] border-l border-gold pl-4 font-serif text-[19px] leading-[1.35] text-ink">
                  {p.art.myth}
                </p>
                <Label art={p.art} className="mt-3 md:hidden" />
              </article>
            ))}
          </div>
        </div>
      </Wrap>
    </Section>
  );
}

/** The four paintings stacked in depth; the active one turns to face the viewer. */
function Gallery({ active }: { active: number }) {
  const reduce = useReducedMotion();
  const current = problems[active].art;

  return (
    <div className="flex h-full flex-col">
      <Tilt max={5} className="relative min-h-0 flex-1">
        <div className="relative h-full w-full [perspective:1400px] [transform-style:preserve-3d]">
          {problems.map((p, i) => {
            const state = i === active ? "on" : i < active ? "past" : "next";
            return (
              <motion.div
                key={p.title}
                className="absolute inset-0 overflow-hidden rounded-[3px] shadow-phone"
                initial={false}
                animate={
                  reduce
                    ? { opacity: state === "on" ? 1 : 0 }
                    : {
                        opacity: state === "on" ? 1 : 0,
                        rotateY: state === "on" ? 0 : state === "past" ? -18 : 18,
                        rotateX: state === "on" ? 0 : state === "past" ? 6 : -6,
                        scale: state === "on" ? 1 : state === "past" ? 0.9 : 1.08,
                        z: state === "on" ? 0 : -120,
                      }
                }
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ zIndex: state === "on" ? 2 : 1 }}
                aria-hidden={state !== "on"}
              >
                <Painting art={p.art} sizes="(min-width: 768px) 45vw, 100vw" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(32,32,29,.25)]"
                />
              </motion.div>
            );
          })}
        </div>
      </Tilt>
      <div className="mt-4 flex items-start justify-between gap-6">
        <Label art={current} />
        <span className="flex-none font-serif text-sm text-muted">
          {pad(active + 1)} / {pad(problems.length)}
        </span>
      </div>
    </div>
  );
}
