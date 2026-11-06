import { clsx } from "clsx";
import type { ReactNode } from "react";

export function Wrap({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={clsx("mx-auto w-full max-w-site px-4 min-[361px]:px-[22px] md:px-9", className)}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  className,
  labelledBy,
  children,
}: {
  id?: string;
  className?: string;
  labelledBy?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={clsx("py-[62px] md:py-[85px] lg:py-[110px]", className)}
    >
      {children}
    </section>
  );
}
