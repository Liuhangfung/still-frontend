"use client";

import { Icon } from "@still/ui";
import { useState, type FormEvent } from "react";

type State = "idle" | "sending" | "done" | "closed" | "error";

const messages: Record<Exclude<State, "idle" | "sending">, string> = {
  done: "You’re on the founder list. Check your inbox for the Day 1 quest.",
  closed: "The founder list opens very soon. Check back in a few days.",
  error: "Something went wrong. Please try again.",
};

export function SignupForm() {
  const [state, setState] = useState<State>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    setState("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "done" : res.status === 503 ? "closed" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="signup-email" className="mb-2.5 block text-xs">
        Your email address
      </label>
      <div className="flex gap-2.5 border-b border-[#a8997f] pb-2">
        <input
          id="signup-email"
          type="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="you@example.com"
          className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-ink outline-offset-0 placeholder:text-[#8a7d66]"
        />
        <button
          type="submit"
          disabled={state === "sending" || state === "done"}
          className="flex min-h-[43px] items-center gap-2.5 whitespace-nowrap rounded-full bg-ink px-3 text-[11px] text-ivory hover:bg-ink-soft disabled:opacity-60 min-[361px]:px-[18px]"
        >
          {state === "sending" ? "Joining…" : "Join the founder list"}
          <Icon name="arrow-right" strokeWidth={1.4} className="text-base" />
        </button>
      </div>
      <label className="mt-4 flex max-w-[415px] items-start gap-2 text-[11px] leading-[1.7] text-muted">
        <input type="checkbox" required className="mt-[3px] h-3.5 w-3.5 flex-none accent-ink" />
        <span>I’d like launch updates about Still. I can unsubscribe at any time.</span>
      </label>
      <p
        className="mt-4 min-h-[35px] text-xs leading-[1.7] text-lead"
        role="status"
        aria-live="polite"
      >
        {state === "idle" || state === "sending"
          ? "No spam. Your email is used only for Still launch news."
          : messages[state]}
      </p>
    </form>
  );
}
