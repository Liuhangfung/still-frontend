import { Icon } from "@still/ui";
import Image from "next/image";
import { posts } from "@/content/site";
import { Reveal, Stagger, StaggerItem } from "../motion/reveal";
import { Tilt } from "../motion/tilt";
import { Section, Wrap } from "./section";

export function Blog() {
  return (
    <Section id="blog" className="relative overflow-hidden bg-[#0D0D0D] text-white">
      <div aria-hidden className="speed-lines pointer-events-none absolute inset-0 opacity-40" />
      <Wrap className="relative">
        <div className="mb-10 flex items-end justify-between gap-5">
          <Reveal from="left">
            <h2 className="display text-[clamp(44px,6vw,68px)] text-white">FROM THE BLOG</h2>
          </Reveal>
          <Reveal from="right">
            <a
              href="#blog"
              className="group inline-flex items-center gap-2 font-bold text-white opacity-80 hover:opacity-100"
            >
              All posts{" "}
              <Icon name="arrow-right" className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
        <Stagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3" gap={0.15}>
          {posts.map((p) => (
            <StaggerItem key={p.title} from="flip">
              <Tilt className="rounded-[26px] sm:rounded-[32px]" max={10}>
                <a
                  href={p.href}
                  className="group/post relative block aspect-[4/5] overflow-hidden rounded-[26px] bg-[#1a1a1a] sm:rounded-[32px]"
                >
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover/post:scale-[1.08]"
                  />
                  <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,.78)_0%,rgba(0,0,0,.35)_32%,rgba(0,0,0,0)_55%)]" />
                  <div className="absolute inset-x-0 top-0 z-[2] px-[26px] pt-[26px]">
                    <span className="mb-2 block text-xs font-bold tracking-[1px] opacity-90">
                      {p.date}
                    </span>
                    <h3 className="max-w-[90%] text-2xl font-extrabold leading-tight tracking-[-.2px]">
                      {p.title}
                    </h3>
                  </div>
                </a>
              </Tilt>
            </StaggerItem>
          ))}
        </Stagger>
      </Wrap>
    </Section>
  );
}
