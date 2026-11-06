import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

type DivProps = HTMLAttributes<HTMLDivElement>;

/** Paper card: flat, hairline border. `soft` is the quieter stone-tinted variant. */
export function Card({ soft, className, ...rest }: DivProps & { soft?: boolean }) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-line",
        soft ? "bg-stone-deep/60" : "bg-paper",
        className
      )}
      {...rest}
    />
  );
}

/** Small round pill with a hairline border. */
export function Chip({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-xs text-ink",
        className
      )}
      {...rest}
    />
  );
}

/** Small uppercase label; `dot` adds the antique-gold point used before hero eyebrows. */
export function Eyebrow({
  dot,
  className,
  children,
}: {
  dot?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={clsx("text-[11px] font-medium uppercase tracking-[2.3px]", className)}>
      {dot && (
        <span
          aria-hidden
          className="mr-2 inline-block h-[5px] w-[5px] rounded-full bg-gold align-[2px]"
        />
      )}
      {children}
    </p>
  );
}

/** The lowercase serif wordmark; the initial "s" is set slightly smaller. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "block font-serif font-medium leading-none tracking-[-0.035em] first-letter:text-[0.85em]",
        className
      )}
    >
      still
    </span>
  );
}
