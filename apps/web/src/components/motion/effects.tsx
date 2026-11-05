"use client";

import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { clsx } from "clsx";
import { useEffect, useRef, type ReactNode } from "react";

/** Gold highlighter that sweeps in behind a word when it scrolls into view. */
export function DrawMark({
  children,
  delay = 0.15,
  onLoad = false,
}: {
  children: ReactNode;
  delay?: number;
  /** Start on page load instead of when scrolled into view (for the hero). */
  onLoad?: boolean;
}) {
  const trigger = onLoad
    ? { animate: { scaleX: 1 } }
    : { whileInView: { scaleX: 1 }, viewport: { once: true, amount: 0.8 } };
  return (
    <span className="relative z-0 inline-block">
      <motion.span
        aria-hidden
        className="absolute -left-1.5 -right-2 bottom-[6%] -z-10 h-[42%] rounded bg-gold"
        style={{ skewX: -10, originX: 0 }}
        initial={{ scaleX: 0 }}
        {...trigger}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1], delay }}
      />
      {children}
    </span>
  );
}

/** Gentle endless bobbing, for phones and badges. */
export function Float({
  className,
  children,
  distance = 12,
  duration = 6,
  delay = 0,
}: {
  className?: string;
  children: ReactNode;
  distance?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

/** Rotates a phone in 3D from tilted to face-on as it scrolls into the middle of the screen. */
export function ScrollTurn({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  const rotateY = useTransform(p, [0, 1], [-38, 0]);
  const rotateX = useTransform(p, [0, 1], [18, 0]);
  const scale = useTransform(p, [0, 1], [0.82, 1]);
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateY, rotateX, scale, transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}

/** A progress bar that fills as its section scrolls past. */
export function ScrollFill({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 40%"] });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 24 });
  return (
    <div ref={ref} className={className}>
      <motion.div className="absolute inset-0 origin-left" style={{ scaleX }}>
        {children}
      </motion.div>
    </div>
  );
}

/** Line illustrations draw themselves in when they scroll into view. */
export function DrawOnView({ className, children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <div ref={ref} className={clsx("draw-svg", inView && "is-drawn", className)}>
      {children}
    </div>
  );
}

/** Counts from one number to another when visible, e.g. the price dropping 79 → 49. */
export function CountTo({ from, to, prefix = "" }: { from: number; to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const value = useSpring(from, { stiffness: 40, damping: 16 });
  const text = useTransform(value, (v) => `${prefix}${Math.round(v)}`);
  useEffect(() => {
    if (inView) value.set(to);
  }, [inView, to, value]);
  return (
    <motion.span ref={ref} aria-label={`${prefix}${to}`}>
      {text}
    </motion.span>
  );
}
