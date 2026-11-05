import { Eyebrow } from "@still/ui";
import { Stagger, StaggerItem } from "../motion/reveal";
import { clsx } from "clsx";
import type { ReactNode } from "react";

export function Wrap({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={clsx("mx-auto w-full max-w-site px-4 sm:px-6", className)}>{children}</div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={clsx("scroll-mt-20 py-[76px] lg:py-[104px]", className)}>
      {children}
    </section>
  );
}

/** Centred eyebrow, display heading and lead paragraph above a section. */
export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <Stagger className="mx-auto mb-[60px] flex max-w-[760px] flex-col items-center gap-4 text-center">
      <StaggerItem>
        <Eyebrow>{eyebrow}</Eyebrow>
      </StaggerItem>
      <StaggerItem from="zoom">
        <h2 className="display text-[clamp(44px,6vw,68px)]">{title}</h2>
      </StaggerItem>
      {lead && (
        <StaggerItem>
          <p className="max-w-[600px] text-[19px] text-muted">{lead}</p>
        </StaggerItem>
      )}
    </Stagger>
  );
}
