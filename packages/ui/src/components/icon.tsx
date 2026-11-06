import { clsx } from "clsx";
import { icons } from "../icons/icons";
import { extraIcons } from "../icons/extra";

const allIcons = { ...icons, ...extraIcons };

export type IconName = keyof typeof allIcons;

type IconProps = {
  name: IconName;
  className?: string;
  /** Accessible name. Leave empty for decorative icons next to text. */
  label?: string;
  /** Line weight; the classical web pages use a lighter stroke than the app's 2px. */
  strokeWidth?: number;
};

/** Brand line icon (24×24, 2px stroke) that takes the surrounding text colour. */
export function Icon({ name, className, label, strokeWidth = 2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx("inline-block h-[1em] w-[1em] flex-none align-[-0.14em]", className)}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      // Trusted, build-time SVG markup from our own icon set.
      dangerouslySetInnerHTML={{ __html: allIcons[name] }}
    />
  );
}
