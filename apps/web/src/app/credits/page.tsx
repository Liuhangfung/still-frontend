import { Eyebrow } from "@still/ui";
import type { Metadata } from "next";
import { Footer } from "@/components/landing/footer";
import { Wrap } from "@/components/landing/section";
import { SubpageHeader } from "@/components/landing/subpage-header";
import { art, athenaModel } from "@/content/artwork";

export const metadata: Metadata = {
  title: "Art credits · Still",
  description: "The public-domain paintings and 3D scan used on the Still website.",
};

const works = [...Object.values(art), athenaModel];

export default function CreditsPage() {
  return (
    <>
      <SubpageHeader />
      <main className="py-14 lg:py-20">
        <Wrap className="max-w-[820px]">
          <Eyebrow>Art credits</Eyebrow>
          <h1 className="mt-4 text-[clamp(44px,6vw,64px)] tracking-[-0.025em]">
            The myths on this page.
          </h1>
          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-lead">
            The museum paintings and the 3D Athena on the Still website are public-domain works,
            shared by the museums and archives below through Wikimedia Commons. The paintings for
            the problems, chapters, tools and Pause, the hero ceiling and the app preview are
            original Still artwork.
          </p>
          <ul className="mt-10">
            {works.map((w) => (
              <li
                key={w.source}
                className="flex flex-col gap-1 border-t border-line py-4 last:border-b md:flex-row md:items-baseline md:justify-between md:gap-6"
              >
                <span>
                  <span className="font-serif text-xl">{w.title}</span>
                  <span className="block text-[13px] text-muted">
                    {w.artist}, {w.year}
                  </span>
                </span>
                <a
                  href={w.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link flex-none self-start text-muted hover:text-ink md:self-auto"
                >
                  Source · public domain
                </a>
              </li>
            ))}
          </ul>
        </Wrap>
      </main>
      <Footer />
    </>
  );
}
