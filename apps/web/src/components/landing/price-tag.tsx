"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { price } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * The standard price is struck through by a gold line, then the founder price
 * counts down from it, so the saving is felt, not just read.
 */
export function PriceTag() {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  // Server render and reduced motion show the founder price straight away.
  const value = useMotionValue(price.founder);
  const shown = useTransform(value, (v) => Math.round(v));

  useEffect(() => {
    if (!seen || reduce) return;
    value.set(price.regular);
    const controls = animate(value, price.founder, { duration: 1.4, delay: 0.7, ease });
    return () => controls.stop();
  }, [seen, reduce, value]);

  const saving = price.regular - price.founder;

  return (
    <div ref={ref}>
      <p className="mt-5 flex items-center gap-3">
        <span className="relative font-serif text-[30px] leading-none text-muted">
          <span className="sr-only">Standard price </span>
          {price.currency}
          {price.regular}
          <motion.span
            aria-hidden
            className="absolute left-[-4%] right-[-4%] top-1/2 h-[2px] origin-left -rotate-[8deg] bg-gold"
            initial={reduce ? false : { scaleX: 0 }}
            animate={seen ? { scaleX: 1 } : undefined}
            transition={{ duration: 0.7, ease }}
          />
        </span>
        <span className="text-[11px] uppercase tracking-[1.6px] text-muted">at launch</span>
      </p>
      <p className="mt-2 flex items-baseline gap-2.5">
        <span className="sr-only">Founder price </span>
        <span className="font-serif text-[30px] leading-none">{price.currency}</span>
        <motion.span
          className="font-serif text-[78px] leading-[.95] tracking-[-0.025em] tabular-nums md:text-[83px]"
          aria-hidden
        >
          {shown}
        </motion.span>
        <span className="sr-only">{price.founder}</span>
      </p>
      <motion.p
        className="mt-3 inline-flex items-center gap-2 rounded-full bg-gold-wash px-3 py-1.5 text-xs text-ink"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={seen ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.8, delay: 1.9, ease }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
        You save {price.currency}
        {saving} as a founder
      </motion.p>
    </div>
  );
}
