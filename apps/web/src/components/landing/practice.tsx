"use client";

import { Eyebrow } from "@still/ui";
import { clsx } from "clsx";
import { useState } from "react";
import { practiceSteps, sampleTask } from "@/content/site";
import { art } from "@/content/artwork";
import { Parallax, Tilt } from "../motion/depth";
import { Reveal } from "../motion/reveal";
import { Label, Painting } from "./painting";
import { Section, Wrap } from "./section";
import { Lines, Unveil } from "../motion/scenes";

export function Practice() {
  const [answer, setAnswer] = useState(sampleTask.right);

  return (
    <Section id="practice" labelledBy="daily-title" className="bg-stone-deep">
      <Wrap className="flex flex-col-reverse gap-9 md:grid md:grid-cols-[.85fr_1.15fr] md:items-center md:gap-[45px] lg:gap-20">
        <Reveal className="relative w-full md:pb-28 md:pt-10">
          {/* Back layer: the oracle of Delphi, drifting slower than the card. */}
          <div aria-hidden className="absolute bottom-20 right-0 top-0 hidden w-[62%] md:block">
            <Parallax depth={140} className="h-full">
              <Unveil className="h-full rounded-[3px] opacity-90 shadow-phone">
                <Painting art={art.delphi} sizes="30vw" />
              </Unveil>
            </Parallax>
          </div>
          <Tilt max={7} className="relative z-10 mx-auto max-w-[356px] md:mx-0 md:mr-auto">
            <div className="mt-2 rounded-[5px] border border-[#d8d2c6] bg-paper p-[22px] shadow-float md:mt-0 md:-rotate-[1.5deg]">
              <Eyebrow className="text-[9px] tracking-[2px] text-gold-text">
                A sample daily practice · 8 min
              </Eyebrow>
              <div className="mb-5 mt-4 h-[145px] overflow-hidden rounded-[3px]">
                <Painting art={art.delphi} sizes="356px" className="!object-[50%_14%]" />
              </div>
              <h3 className="text-[31px] tracking-[-0.02em]">
                Separate fact
                <br />
                from guess
              </h3>
              <p className="mb-4 mt-2 text-xs text-muted">
                Confidence is not the same as evidence.
              </p>
              <p className="my-4 border-y border-line py-4 font-serif text-2xl leading-[1.13]">
                “{sampleTask.claim}”
              </p>
              <div role="group" aria-label="Label the sample claim" className="mb-3 flex gap-1.5">
                {sampleTask.answers.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    aria-pressed={answer === a.id}
                    onClick={() => setAnswer(a.id)}
                    className={clsx(
                      "min-h-10 flex-1 rounded border px-1 py-2 text-[11px] transition-colors",
                      answer === a.id
                        ? "border-ink bg-ink text-ivory"
                        : "border-line hover:bg-ink/5"
                    )}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
              <p className="min-h-[38px] text-xs text-muted" aria-live="polite">
                {answer === sampleTask.right
                  ? sampleTask.feedback.right
                  : sampleTask.feedback.wrong}
              </p>
              <p className="mt-3.5 border-t border-line pt-3 text-[10px] text-muted">
                Illustrative exercise. Not a live market claim or trading recommendation.
              </p>
            </div>
          </Tilt>
          <div className="relative z-10 mx-auto mt-5 max-w-[356px] md:absolute md:bottom-0 md:right-0 md:mt-0 md:w-[62%] md:max-w-none">
            <p className="font-serif text-[17px] leading-snug">{art.delphi.myth}</p>
            <Label art={art.delphi} className="mt-1.5" />
          </div>
        </Reveal>

        <div>
          <Eyebrow className="mb-5">More than watching lessons</Eyebrow>
          <h2 id="daily-title" className="section-title max-w-[460px]">
            <Lines lines={["One useful task.", "A little more clarity."]} />
          </h2>
          <p className="mt-5 max-w-[440px] text-[13px] leading-[1.9] text-muted md:mt-6">
            Open Still and know what to work on today. Map a trigger. Check a source. Practise with
            a historical chart. Turn a difficult moment into a rule you can use again.
          </p>
          <p className="mt-5 max-w-[440px] text-[13px] leading-[1.9] text-muted md:mt-6">
            The starting questionnaire selects a path from a task library around your experience and
            habits—not around what you should buy or sell.
          </p>
          <ol className="mt-6 flex gap-3 border-y border-[#cfc6b5] py-5 min-[361px]:gap-4 md:mt-9 md:gap-7">
            {practiceSteps.map((s, i) => (
              <li key={s.title} className="flex-1">
                <span className="text-[10px] tracking-[1px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-[20px] min-[361px]:text-[22px] md:text-[23px]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[11px] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-[18px] text-xs text-muted">
            Around 20–25 minutes for the main practice and daily routine. No real-money trade
            required.
          </p>
        </div>
      </Wrap>
    </Section>
  );
}
