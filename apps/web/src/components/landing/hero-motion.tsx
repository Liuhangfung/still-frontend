"use client";

import { Device, Icon } from "@still/ui";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, type ReactNode } from "react";
import { DrawMark } from "../motion/effects";

const lineIn = {
  hidden: { y: "110%", rotate: 6 },
  show: (i: number) => ({
    y: "0%",
    rotate: 0,
    transition: { type: "spring" as const, stiffness: 70, damping: 16, delay: 0.1 + i * 0.12 },
  }),
};

function Line({ i, children }: { i: number; children: ReactNode }) {
  return (
    <span className="block overflow-hidden pb-[.08em]">
      <motion.span className="block origin-bottom-left" custom={i} variants={lineIn}>
        {children}
      </motion.span>
    </span>
  );
}

/** "LOST MONEY? RESET HOW YOU TRADE." rising line by line, then the highlighter sweeps in. */
export function HeroHeadline() {
  return (
    <motion.h1
      className="display mb-6 mt-5 text-[clamp(54px,7.4vw,98px)]"
      initial="hidden"
      animate="show"
    >
      <Line i={0}>LOST MONEY?</Line>
      <Line i={1}>
        <DrawMark onLoad delay={0.75}>
          RESET HOW
        </DrawMark>
      </Line>
      <Line i={2}>
        <DrawMark onLoad delay={0.9}>
          YOU TRADE.
        </DrawMark>
      </Line>
    </motion.h1>
  );
}

/** Entrance for the hero copy below the headline. */
export function FadeUp({
  delay,
  children,
  className,
}: {
  delay: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18, delay }}
    >
      {children}
    </motion.div>
  );
}

function Screen({ src, alt, priority }: { src: string; alt: string; priority?: boolean }) {
  return (
    <Device width={290}>
      <Image src={src} alt={alt} fill sizes="290px" className="object-cover" priority={priority} />
    </Device>
  );
}

/**
 * The two phones as a small 3D scene: they lean toward the cursor, bob gently,
 * and turn away and drift apart as the page scrolls.
 */
export function HeroArt() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 60, damping: 14, mass: 0.6 };
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    function onMove(e: PointerEvent) {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, mx, my]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });

  const frontRotY = useTransform([sx, p], ([m, s]: number[]) => m * 22 - s * 28);
  const frontRotX = useTransform([sy, p], ([m, s]: number[]) => -m * 16 + s * 14);
  const frontY = useTransform(p, [0, 1], [0, 140]);

  const backRotY = useTransform([sx, p], ([m, s]: number[]) => 18 + m * 30 + s * 20);
  const backX = useTransform([sx, p], ([m, s]: number[]) => m * -26 - s * 90);
  const backY = useTransform(p, [0, 1], [0, 60]);
  const backOpacity = useTransform(p, [0, 0.8], [1, 0.25]);

  const badgeX = useTransform(sx, (m) => m * -40);
  const notifX = useTransform(sx, (m) => m * 34);

  return (
    <div
      ref={ref}
      className="relative flex h-[640px] items-end justify-center pb-5 sm:items-center sm:pb-0"
      style={{ perspective: 1400 }}
    >
      {/* soft moving colour behind the phones */}
      <div
        aria-hidden
        className="hero-orb absolute left-[18%] top-[16%] h-72 w-72 rounded-full bg-teal/25 blur-3xl"
      />
      <div
        aria-hidden
        className="hero-orb hero-orb-2 absolute bottom-[14%] right-[6%] h-56 w-56 rounded-full bg-gold/30 blur-3xl"
      />

      <motion.div
        className="absolute left-[4%] top-[70px] hidden sm:block"
        style={{ rotateY: backRotY, rotateZ: -7, x: backX, y: backY, opacity: backOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, x: -80, rotateY: 50 }}
          animate={{ opacity: 0.97, x: 0, rotateY: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 16, delay: 0.35 }}
        >
          <Device width={250}>
            <Image
              src="/images/screens/path.png"
              alt="Your Path: one illustrated card for each of the 56 days"
              fill
              sizes="250px"
              className="object-cover"
            />
          </Device>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-[2] origin-bottom max-sm:scale-[.862] sm:left-[12%]"
        style={{ rotateY: frontRotY, rotateX: frontRotX, y: frontY }}
      >
        <motion.div
          initial={{ opacity: 0, y: 120, rotateX: 40 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ type: "spring", stiffness: 45, damping: 14, delay: 0.15 }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Screen
              src="/images/screens/today.png"
              alt="Still Today screen with the daily quest and training checklist"
              priority
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute left-1/2 top-0 z-[5] w-[250px] -translate-x-1/2 sm:-right-[70px] sm:-top-7 sm:left-auto sm:w-[300px] sm:translate-x-0">
        <motion.div style={{ x: notifX }}>
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 160, damping: 16, delay: 1.1 }}
            className="flex items-start gap-[11px] rounded-[22px] border border-black/5 bg-white/95 px-3.5 py-3 shadow-[0_18px_40px_-12px_rgba(0,0,0,.28)] backdrop-blur-md"
          >
            <Image
              src="/images/still-app-icon.svg"
              alt=""
              width={40}
              height={40}
              className="rounded-[10px]"
            />
            <div className="flex-1">
              <div className="flex justify-between text-xs font-semibold text-[#6B7B7D]">
                <span>STILL</span>
                <span>now</span>
              </div>
              <b className="block text-sm leading-snug">Daily Quest has arrived</b>
              <p className="text-[13px] leading-snug text-[#3E4C4E]">
                Separate Fact &amp; Guess · about 8 min
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[50px] left-0 z-[5] sm:-left-1 sm:bottom-[90px]"
        style={{ x: badgeX }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 12, delay: 1.5 }}
          className="flex items-center gap-2.5 rounded-[14px] border-[2.5px] border-ink bg-gold px-3.5 py-2.5 text-sm font-extrabold shadow-comic-md"
        >
          <Icon name="rank" className="text-[22px]" />
          <span>Rank up · E → D · Chapter 1 complete</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
