"use client";

import { Eyebrow, Icon } from "@still/ui";
import { clsx } from "clsx";
import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { chapters } from "@/content/site";
import { Section, Wrap } from "./section";

const pad = (n: number) => String(n).padStart(2, "0");

/** Four chapters. Practical titles take priority over mythological names. */
export function Programme() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const c = chapters[active];

  function onKeyDown(e: KeyboardEvent, index: number) {
    const last = chapters.length - 1;
    const next =
      e.key === "ArrowRight"
        ? (index + 1) % chapters.length
        : e.key === "ArrowLeft"
          ? (index + last) % chapters.length
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <Section id="programme" labelledBy="programme-title">
      <Wrap>
        <div className="mb-7 md:mb-[42px] md:flex md:items-end md:justify-between md:gap-12">
          <div>
            <Eyebrow className="mb-[18px]">Your 56-day journey</Eyebrow>
            <h2 id="programme-title" className="section-title">
              Small steps.
              <br />
              Something real to keep.
            </h2>
          </div>
          <p className="mt-5 max-w-[420px] text-[13px] leading-[1.9] text-muted md:mb-1.5 md:mt-0 md:max-w-[330px]">
            Four chapters, two weeks each. Every chapter helps you build a practical tool—not just
            finish a lesson.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Programme chapters"
          className="grid grid-cols-2 gap-x-[18px] gap-y-3 md:grid-cols-4 md:border-b md:border-line"
        >
          {chapters.map((ch, i) => (
            <button
              key={ch.name}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`chapter-tab-${i}`}
              aria-selected={i === active}
              aria-controls="chapter-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={clsx(
                "min-h-[110px] border-y border-line py-[17px] text-left md:min-h-[118px] md:border-t-0 md:border-b-2 md:px-0.5 md:pb-6 md:pt-2.5",
                i === active ? "md:border-b-ink" : "md:border-b-transparent"
              )}
            >
              <span
                className={clsx(
                  "font-serif text-[29px] leading-none",
                  i === active ? "text-ink" : "text-[#8a7d66]"
                )}
              >
                {pad(i + 1)}
              </span>
              <strong className="mb-[7px] mt-2.5 block font-serif text-[21px] font-medium leading-[1.1] min-[361px]:text-[23px] md:text-[22px] lg:text-[25px]">
                {ch.name}
              </strong>
              <small className="text-[11px] text-muted">{ch.days}</small>
            </button>
          ))}
        </div>

        <div
          id="chapter-panel"
          role="tabpanel"
          aria-labelledby={`chapter-tab-${active}`}
          tabIndex={0}
          className="grid items-center gap-[25px] pt-7 md:grid-cols-[1.05fr_.95fr] md:gap-[50px] md:pt-9"
        >
          <div className="relative h-[185px] w-full overflow-hidden rounded-[3px] md:h-[285px]">
            {chapters.map((ch, i) => (
              <Image
                key={ch.art}
                src={ch.art}
                alt={i === active ? ch.artAlt : ""}
                aria-hidden={i !== active}
                width={1200}
                height={900}
                sizes="(min-width: 768px) 560px, 100vw"
                style={{ objectPosition: ch.artPosition }}
                className={clsx(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out",
                  i === active ? "opacity-100" : "opacity-0"
                )}
              />
            ))}
          </div>
          <div>
            <Eyebrow className="mb-3.5 text-[10px] text-gold-text">
              Chapter {pad(active + 1)} · {c.days}
            </Eyebrow>
            <h3 className="max-w-[370px] text-[32px] md:text-[35px]">{c.title}</h3>
            <p className="mb-6 mt-4 max-w-[385px] text-[13px] text-muted">{c.text}</p>
            <p className="flex items-center gap-3 border-t border-line pt-4 text-xs">
              <Icon name="check" strokeWidth={1.4} className="text-[19px]" />
              What you build: {c.output}
            </p>
          </div>
        </div>
        <p className="mt-7 text-xs text-muted">
          Miss a day? Return with a manageable step. Your completed work stays with you.
        </p>
      </Wrap>
    </Section>
  );
}
