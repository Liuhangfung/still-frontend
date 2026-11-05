"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export type RevealFrom = "up" | "flip" | "left" | "right" | "zoom" | "pop";

const hidden: Record<RevealFrom, Record<string, number>> = {
  up: { opacity: 0, y: 48 },
  flip: { opacity: 0, y: 90, rotateX: 55, scale: 0.94 },
  left: { opacity: 0, x: -90, rotateY: 22 },
  right: { opacity: 0, x: 90, rotateY: -22 },
  zoom: { opacity: 0, scale: 0.86, y: 24 },
  pop: { opacity: 0, scale: 0.4, rotate: -8 },
};

const shown = { opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1, rotate: 0 };

function variantsFor(from: RevealFrom, delay = 0): Variants {
  const pop = from === "pop";
  return {
    hidden: { ...hidden[from], transformPerspective: 1200 },
    show: {
      ...shown,
      transformPerspective: 1200,
      transition: {
        type: "spring",
        stiffness: pop ? 260 : 80,
        damping: pop ? 14 : 18,
        mass: 0.9,
        delay,
      },
    },
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
