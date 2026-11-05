import { clsx } from "clsx";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "outline";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-[14px] border-[2.5px] border-ink font-extrabold text-ink transition-[transform,box-shadow] duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-teal-dark disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  gold: "bg-gold",
  outline: "bg-white",
};

const sizes: Record<Size, string> = {
  md: "px-[26px] py-[15px] text-[17px] shadow-comic-md hover:shadow-[6px_6px_0_#111] active:shadow-[2px_2px_0_#111]",
  sm: "px-[18px] py-2.5 text-[15px] shadow-comic-sm hover:shadow-[5px_5px_0_#111] active:shadow-[1px_1px_0_#111]",
};

type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode };

export function buttonClasses({
  variant = "gold",
  size = "md",
  className,
}: Omit<Common, "children">) {
  return clsx(base, variants[variant], sizes[size], className);
}

/** Comic button rendered as a link. */
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

/** Comic button rendered as a <button>. */
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
