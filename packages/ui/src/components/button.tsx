import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-ink font-medium transition-[background-color,transform] duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-ink-soft",
  outline: "bg-transparent text-ink hover:bg-ink/5",
};

const sizes: Record<Size, string> = {
  md: "min-h-[50px] px-6 py-3.5 text-[13px]",
  sm: "min-h-[42px] px-5 py-2.5 text-xs",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: Omit<Common, "children">) {
  return clsx(base, variants[variant], sizes[size], className);
}

/** Pill button rendered as a link. One primary (ink) button per screen. */
export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: Common & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </a>
  );
}

/** Pill button rendered as a <button>. */
export function Button({
  variant,
  size,
  className,
  children,
  type = "button",
  ...rest
}: Common & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </button>
  );
}
