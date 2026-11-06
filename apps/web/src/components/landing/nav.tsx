"use client";

import { ButtonLink, Wordmark } from "@still/ui";
import { clsx } from "clsx";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";
import { useState } from "react";
import { joinCta, navLinks } from "@/content/site";
import { Wrap } from "./section";
import { Magnetic } from "../motion/scenes";

export function Brand({ href = "#top", className }: { href?: string; className?: string }) {
  return (
    <a href={href} aria-label="Still home">
      <Wordmark className={className ?? "text-[38px] md:text-[43px]"} />
    </a>
  );
}

/** Sticky: slips away while you read downward, returns as soon as you scroll up. */
export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 8);
    setHidden(y > 160 && y > prev + 2 ? true : y < prev - 2 ? false : hidden);
  });

  return (
    <motion.header
      id="top"
      className={clsx(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-[#6f6759]/15 bg-ivory/80 backdrop-blur-md"
          : "border-[#6f6759]/20 bg-ivory/90"
      )}
      animate={{ y: hidden && !open && !reduce ? "-100%" : "0%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Wrap className="flex min-h-[76px] flex-wrap items-center gap-3.5 md:min-h-[90px] md:flex-nowrap md:gap-9">
        <Brand />
        <button
          type="button"
          className="ml-auto flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="nav-links"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.3}
            strokeLinecap="round"
            aria-hidden
          >
            <path d={open ? "M6 6l12 12M18 6 6 18" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
        <nav
          id="nav-links"
          aria-label="Main navigation"
          className={clsx(
            "order-4 w-full flex-col pb-3 md:order-none md:ml-auto md:flex md:w-auto md:flex-row md:items-center md:gap-[17px] md:pb-0 lg:gap-[27px]",
            open ? "flex" : "hidden"
          )}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="group relative border-t border-line py-3 text-[13px] text-[#4e4a43] hover:text-ink md:border-0 md:py-1 md:text-xs"
            >
              {l.label}
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-0.5 hidden h-px origin-left scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100 md:block"
              />
            </a>
          ))}
        </nav>
        <Magnetic strength={0.2}>
          <ButtonLink href={joinCta.href} size="sm" className="max-[360px]:px-3 max-md:text-[11px]">
            {joinCta.label}
          </ButtonLink>
        </Magnetic>
      </Wrap>
    </motion.header>
  );
}
