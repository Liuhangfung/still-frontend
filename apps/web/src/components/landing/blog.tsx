import { Icon } from "@still/ui";
import Image from "next/image";
import { posts } from "@/content/site";
import { Section, Wrap } from "./section";

export function Blog() {
  return (
    <Section id="blog" className="bg-[#0D0D0D] text-white">
      <Wrap>
        <div className="mb-10 flex items-end justify-between gap-5">
          <h2 className="display text-[clamp(44px,6vw,68px)] text-white">FROM THE BLOG</h2>
          <a
            href="#blog"
            className="inline-flex items-center gap-2 font-bold text-white opacity-80 hover:opacity-100"
          >
            All posts <Icon name="arrow-right" />
          </a>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group relative block aspect-[4/5] overflow-hidden rounded-[26px] bg-[#1a1a1a] sm:rounded-[32px]"
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
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
          ))}
        </div>
      </Wrap>
    </Section>
  );
}
