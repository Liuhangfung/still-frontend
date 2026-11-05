import { clsx } from "clsx";
import type { CSSProperties, ReactNode } from "react";

type DeviceProps = {
  /** Phone width in px; every other measurement scales from it. */
  width?: number;
  className?: string;
  style?: CSSProperties;
  /** The screen content, usually a Next.js <Image fill />. */
  children: ReactNode;
};

/** A realistic phone frame (titanium edge, Dynamic Island, glare) around a screenshot. */
export function Device({ width = 290, className, style, children }: DeviceProps) {
  const w = width;
  return (
    <div
      className={clsx("device relative flex-none", className)}
      style={{
        width: w,
        borderRadius: w * 0.165,
        padding: w * 0.032,
        background:
          "linear-gradient(150deg,#55595e 0%,#1d1e20 22%,#2b2d30 55%,#141516 80%,#4b4f53 100%)",
        boxShadow:
          "inset 0 0 0 1.5px rgba(255,255,255,.22), inset 0 0 0 3px rgba(0,0,0,.6), 0 60px 90px -40px rgba(6,78,78,.55), 0 24px 40px -20px rgba(0,0,0,.45)",
        ...style,
      }}
    >
      <span
        aria-hidden
        className="absolute -left-[3px] top-[21%] h-[9%] w-1 rounded-l-[3px] bg-gradient-to-r from-[#3c3f43] to-[#202124]"
        style={{ boxShadow: `0 ${w * 0.2}px 0 #2c2e31` }}
      />
      <span
        aria-hidden
        className="absolute -right-[3px] top-[27%] h-[14%] w-1 rounded-r-[3px] bg-gradient-to-l from-[#3c3f43] to-[#202124]"
      />
      <div
        className="relative aspect-[340/740] overflow-hidden bg-black"
        style={{ borderRadius: w * 0.135, border: `${w * 0.012}px solid #050505` }}
      >
        {children}
      </div>
      <span
        aria-hidden
        className="absolute left-1/2 z-[3] w-[31%] -translate-x-1/2 rounded-full bg-black"
        style={{ top: w * 0.052, height: w * 0.088 }}
      />
      <span
        aria-hidden
        className="absolute left-1/2 z-[3] w-[34%] min-h-1 -translate-x-1/2 rounded-full bg-white/80"
        style={{ bottom: w * 0.052, height: w * 0.014 }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute z-[4]"
        style={{
          inset: w * 0.032,
          borderRadius: w * 0.135,
          background:
            "linear-gradient(118deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,.04) 30%,rgba(255,255,255,0) 42%)",
        }}
      />
    </div>
  );
}
