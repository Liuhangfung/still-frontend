import { Icon } from "@still/ui";
import Link from "next/link";
import { Brand } from "./nav";
import { Wrap } from "./section";
import { SocialLinks } from "./social-links";

const links = [
  { href: "/#programme", label: "The programme" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#join", label: "Founder list" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-line pb-6 pt-[34px]">
      <Wrap>
        <div className="flex flex-wrap items-center justify-between gap-[22px] md:gap-8">
          <Brand href="/" className="text-[40px]" />
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted"
          >
            {links.map((l) =>
              l.href.startsWith("/#") ? (
                <a key={l.href} href={l.href} className="hover:text-ink">
                  {l.label}
                </a>
              ) : (
                <Link key={l.href} href={l.href} className="hover:text-ink">
                  {l.label}
                </Link>
              )
            )}
          </nav>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-5">
          <p className="text-xs text-muted">By traders, for traders.</p>
          <SocialLinks />
        </div>

        <div className="mt-7 flex items-start gap-3.5 border-y border-line bg-sky-wash/60 px-4 py-4 text-[13px] text-ink md:px-5">
          <Icon name="help-support" strokeWidth={1.4} className="mt-0.5 text-xl" />
          <p>
            <b className="font-semibold">If trading is hurting your life,</b> you are not alone. If
            you’re trading with money you need, borrowed money, or you can’t stop even when you want
            to, please talk to someone. Find free, confidential support through a gambling or
            financial-distress helpline in your country.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-between gap-x-5 gap-y-2 text-[11px] leading-[1.9] text-muted">
          <p>Designed for adult retail traders across all markets. iPhone first.</p>
          <p>Habit practice, not investment advice. Trading involves financial risk.</p>
        </div>
        <p className="mt-4 border-t border-line pt-4 text-[11px] leading-relaxed text-muted">
          Still is an educational habit-training app. It does not provide financial, investment or
          trading advice, signals or recommendations, and does not connect to any broker or
          exchange. Trading involves substantial risk of loss. Practice results do not guarantee
          future results. For users aged 18 and over. © 2026 Still.
        </p>
      </Wrap>
    </footer>
  );
}
