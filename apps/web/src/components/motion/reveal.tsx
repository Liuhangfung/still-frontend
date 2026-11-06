"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type RevealFrom = "up" | "fade";

const hidden: Record<RevealFrom, Record<string, number>> = {
  up: { opacity: 0, y: 24 },
  fade: { opacity: 0 },
};

const shown = { opacity: 1, y: 0 };

/** Slow, quiet fades only: the classical design has no springs or pops. */
function variantsFor(from: RevealFrom, delay = 0): Variants {
  return {
    hidden: hidden[from],
    show: { ...shown, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay } },
  };
}

type Common = { from?: RevealFrom; className?: string; children: ReactNode };

/** Animates its children in once when scrolled into view. */
export function Reveal({
  from = "up",
  delay = 0,
  className,
  children,
}: Common & { delay?: number }) {
  return (
    <motion.div
      className={className}
      variants={variantsFor(from, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

/** A container whose StaggerItem children animate in one after another. */
export function Stagger({
  className,
  children,
  gap = 0.09,
  delay = 0,
}: {
  className?: string;
  children: ReactNode;
  gap?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ from = "up", className, children }: Common) {
  return (
    <motion.div className={className} variants={variantsFor(from)}>
      {children}
    </motion.div>
  );
}
