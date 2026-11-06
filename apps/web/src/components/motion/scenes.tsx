"use client";

import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { clsx } from "clsx";
import { useRef, type PointerEvent, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const once = { once: true, amount: 0.4 } as const;

/**
 * Heading lines that rise out of a mask, one after another, when scrolled into view.
 * Put it inside the <h2>; each string is one line.
 */
export function Lines({ lines, className }: { lines: string[]; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className={clsx("block", className)}
      initial={reduce ? false : "hidden"}
      whileInView="shown"
      viewport={once}
      transition={{ staggerChildren: 0.12 }}
    >
      {lines.map((line) => (
        <span key={line} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className="block"
            variants={{ hidden: { y: "105%" }, shown: { y: "0%" } }}
            transition={{ duration: 1.1, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/**
 * A painting is unveiled from the bottom up, like a curtain rising, while the
 * image inside settles from a slight zoom. The in-view trigger sits on an
 * unclipped wrapper: a fully clipped element never counts as visible.
 */
export function Unveil({ className, children }: { className?: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.2 });
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div ref={ref} className={className}>
      <motion.div
        className="h-full w-full overflow-hidden rounded-[inherit]"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        animate={seen ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
        transition={{ duration: 1.4, ease }}
      >
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.18 }}
          animate={seen ? { scale: 1 } : undefined}
          transition={{ duration: 1.8, ease }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

/** A hairline that draws itself from left to right. */
export function Rule({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className={clsx("block h-px origin-left bg-line", className)}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1.3, ease }}
    />
  );
}

/** Leans gently toward the pointer while it is near (mouse and pen only). */
export function Magnetic({
  strength = 0.25,
  className,
  children,
}: {
  strength?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 160, damping: 15, mass: 0.4 };
  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className={clsx("inline-flex", className)}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/** An oversized wordmark that rises out of the bottom edge as the page ends. */
export function GiantMark({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className={clsx("overflow-hidden", className)}>
      <motion.p
        className="select-none text-center font-serif font-medium leading-[0.78] tracking-[-0.05em] first-letter:text-[0.85em]"
        initial={reduce ? false : { y: "60%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.6, ease }}
      >
        still
      </motion.p>
    </div>
  );
}
