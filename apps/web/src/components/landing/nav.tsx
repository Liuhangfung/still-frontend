import { ButtonLink } from "@still/ui";
import Image from "next/image";
import { joinCta, navLinks } from "@/content/site";
import { Wrap } from "./section";

export function Brand() {
  return (
    <a href="#" className="flex items-center gap-2.5" aria-label="Still home">
      <Image src="/images/still-app-icon.svg" alt="" width={38} height={38} priority />
      <b className="font-display text-[30px] font-normal tracking-[1.5px] text-ink">STILL</b>
    </a>
  );
}

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md backdrop-saturate-150">
      <Wrap className="flex h-[72px] items-center justify-between gap-5">
        <Brand />
        <div className="hidden gap-[30px] text-[15px] font-semibold text-muted lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>
        <ButtonLink href={joinCta.href} size="sm" className="hidden sm:inline-flex">
          {joinCta.label}
        </ButtonLink>
      </Wrap>
    </nav>
  );
}
