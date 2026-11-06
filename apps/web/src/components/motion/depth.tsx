"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { clsx } from "clsx";
import { useRef, type PointerEvent, type ReactNode } from "react";

/** 0 → 1 as the element travels from entering the bottom of the screen to leaving the top. */
function useTravel() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return { ref, progress: scrollYProgress };
}

/**
 * Moves its child against the scroll so it sits on a deeper layer.
 * `depth` is the total travel in px (positive = slower than the page).
 */
export function Parallax({
  depth = 80,
  className,
  children,
}: {
  depth?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const { ref, progress } = useTravel();
  const y = useTransform(progress, [0, 1], [-depth / 2, depth / 2]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/** Starts slightly zoomed and settles to 1 as it scrolls through, like a camera pulling back. */
export function ScrollZoom({
  from = 1.18,
  className,
  children,
}: {
  from?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const { ref, progress } = useTravel();
  const scale = useTransform(progress, [0, 0.6], [from, 1]);
  return (
    <div ref={ref} className={clsx("overflow-hidden", className)}>
      <motion.div style={reduce ? undefined : { scale }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

/** Leans toward the pointer in 3D (mouse and pen only; touch stays flat). */
export function Tilt({
  max = 8,
  className,
  children,
}: {
  max?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 120, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-max, max]), spring);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [max, -max]), spring);

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function reset() {
    px.set(0);
    py.set(0);
  }

  return (
    <div
      className={clsx("[perspective:1100px]", className)}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <motion.div
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
