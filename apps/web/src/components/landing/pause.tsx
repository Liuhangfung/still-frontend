"use client";

import { Eyebrow, Icon } from "@still/ui";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "../motion/reveal";
import { Wrap } from "./section";

/** A pause is a useful outcome, not a game reward. */
export function Pause() {
  const [stepped, setStepped] = useState(false);

  return (
    <section
      id="pause"
      aria-labelledby="pause-title"
      className="relative overflow-hidden bg-night py-[58px] text-ivory md:py-[78px]"
    >
      <Wrap className="grid items-center gap-9 md:grid-cols-[1.08fr_.92fr] md:gap-[45px] lg:gap-[90px]">
        <div>
          <Eyebrow className="mb-[22px] text-[#b9b09c]">A different kind of progress</Eyebrow>
          <h2
            id="pause-title"
            className="max-w-[470px] text-[46px] tracking-[-0.025em] md:text-[49px] lg:text-[58px]"
          >
            You don’t have to
            <br />
            win it back today.
          </h2>
          <p className="mt-5 max-w-[380px] text-[13px] leading-[1.9] text-[#bfbdb3] md:mt-6">
            When a loss becomes an urge, Pause gives you a moment to check in and return to your own
            rules. Sometimes the useful next step is not another trade.
          </p>
          <a className="text-link mt-6 border-[#827c6f] text-[#dfd8c9]" href="#join">
            Build a routine you can return to
            <Icon name="arrow-right" strokeWidth={1.4} className="text-lg" />
          </a>
        </div>

        <Reveal className="w-full">
          <div className="mx-auto w-full max-w-[310px] overflow-hidden rounded-2xl bg-ivory text-center text-ink shadow-float">
            <Image
              src="/images/art/pause-calm.jpg"
              alt="Classical painting: a figure sits on a marble step before a still sea at dawn, a bow laid down beside them."
              width={1000}
              height={1241}
              sizes="310px"
              style={{ objectPosition: "center 44%" }}
              className="h-[124px] w-full object-cover"
            />
            <div className="px-[26px] pb-8 pt-6">
              <Eyebrow className="mb-[22px] text-[9px] tracking-[2px]">Pause</Eyebrow>
              <h3 className="text-[32px] tracking-[-0.015em]">
                You don’t have to
                <br />
                act right now.
              </h3>
              <div
                aria-hidden
                className="breathe mx-auto mb-4 mt-6 grid h-[61px] w-[61px] place-items-center rounded-full border border-[#91948d]"
              >
                <Icon name="pause" strokeWidth={1.4} className="text-2xl" />
              </div>
              <p className="mb-8 text-xs text-muted">Take one slow breath.</p>
              <p className="mb-6 font-serif text-[21px] leading-[1.16]">
                What are you hoping
                <br />
                the next trade will fix?
              </p>
              <p className="mb-3 mt-4 text-[11px] text-muted">
                Skipping a trade is a valid choice.
              </p>
              <button
                type="button"
                onClick={() => setStepped(true)}
                className="min-h-10 w-full rounded-full border border-ink bg-ink px-2 py-2 font-serif text-[17px] text-ivory hover:bg-ink-soft"
              >
                Step away for now
              </button>
              <p className="mt-3 min-h-[2.4em] text-[10px] text-muted" aria-live="polite">
                {stepped
                  ? "You can step away. No trade is required. This is a preview of the app."
                  : "This screen does not approve a trade."}
              </p>
            </div>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
