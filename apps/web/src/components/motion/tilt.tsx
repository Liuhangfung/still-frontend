"use client";

import { clsx } from "clsx";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useSyncExternalStore, type PointerEvent, type ReactNode } from "react";

const FINE = "(pointer: fine)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(FINE);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/** True on devices with a mouse or trackpad; false on touch screens and during SSR. */
function usePointerFine() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(FINE).matches,
    () => false
  );
}

/** Tilts its content in 3D toward the cursor, with a soft glare. Off on touch screens. */
export function Tilt({
  max = 9,
  glare = true,
  className,
  children,
}: {
  max?: number;
  glare?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const fine = usePointerFine();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 180, damping: 18, mass: 0.5 };
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,.35), rgba(255,255,255,0) 55%)`
  );

  if (reduce || !fine) return <div className={className}>{children}</div>;

  function onMove(e: PointerEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      className={clsx("group", className)}
      style={{ rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-full">
        {children}
        {glare && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glareBg }}
          />
        )}
      </div>
    </motion.div>
  );
}
