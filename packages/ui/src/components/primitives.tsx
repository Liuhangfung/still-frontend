import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

type DivProps = HTMLAttributes<HTMLDivElement>;

/** Comic card: ink outline and a hard offset shadow. `soft` is the quiet variant. */
export function Card({ soft, className, ...rest }: DivProps & { soft?: boolean }) {
  return (
    <div
      className={clsx(
        "rounded-[20px] bg-white",
        soft ? "border-[2.5px] border-line shadow-soft" : "border-[2.5px] border-ink shadow-comic",
        className
      )}
      {...rest}
    />
  );
}

/** Small pill with an ink outline. */
export function Chip({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-[7px] rounded-full border-2 border-ink bg-white px-[13px] py-[7px] text-[13px] font-bold text-ink",
        className
      )}
      {...rest}
    />
  );
}

/** Uppercase label with a short teal rule before it. */
export function Eyebrow({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 text-[13px] font-extrabold uppercase tracking-[2px] text-teal-dark before:h-[3px] before:w-[22px] before:rounded-sm before:bg-teal before:content-['']",
        className
      )}
    >
      {children}
    </div>
  );
}

/** Gold highlighter stroke behind a word, skewed like the logo. */
export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="relative z-0 inline-block after:absolute after:-left-1.5 after:-right-2 after:bottom-[6%] after:-z-10 after:h-[42%] after:-skew-x-[10deg] after:rounded after:bg-gold after:content-['']">
      {children}
    </span>
  );
}
