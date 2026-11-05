"use client";

import { Button } from "@still/ui";
import { useState, type FormEvent } from "react";

type State = "idle" | "sending" | "done" | "closed" | "error";

const messages: Record<Exclude<State, "idle" | "sending">, string> = {
  done: "You're on the founder list. Check your inbox for the Day 1 quest.",
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
    <>
      <form onSubmit={onSubmit} className="mt-9 flex flex-wrap justify-center gap-3">
        <input
          type="email"
          name="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="you@email.com"
          aria-label="Email"
          className="w-full rounded-[14px] border-[2.5px] border-ink bg-white px-4 py-3.5 text-base text-ink sm:w-[340px]"
        />
        <Button type="submit" variant="outline" disabled={state === "sending" || state === "done"}>
          {state === "sending" ? "Joining…" : "Join the founder list"}
        </Button>
      </form>
      <p className="mt-3.5 text-sm text-ink opacity-85" role="status" aria-live="polite">
        {state === "idle" || state === "sending"
          ? "Get the Day 1 quest by email now, and the founder price when the app launches. No spam, unsubscribe any time."
          : messages[state]}
      </p>
    </>
  );
}
