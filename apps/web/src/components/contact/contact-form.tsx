"use client";

import { Button } from "@still/ui";
import { useState, type FormEvent } from "react";
import { contactLimits, contactTopics } from "@/content/contact";

type State = "idle" | "sending" | "sent" | "not_connected" | "invalid" | "error";

const field =
  "w-full rounded-xl border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/70 focus:border-ink";
const label = "mb-1.5 block text-sm font-semibold text-ink";

export function ContactForm({ fallbackEmail }: { fallbackEmail: string }) {
  const [state, setState] = useState<State>("idle");
  const [messageLength, setMessageLength] = useState(0);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) setState("sent");
      else if (res.status === 503) setState("not_connected");
      else if (res.status === 400) setState("invalid");
      else setState("error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-gold-wash p-8">
        <h2 className="text-[40px] tracking-[-0.02em]">Message sent.</h2>
        <p className="mt-3 text-muted">
          Thanks for reaching out. We usually reply within 2 working days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name <span className="font-medium text-muted">(optional)</span>
          </label>
          <input
            id="name"
            name="name"
            maxLength={contactLimits.name}
            autoComplete="name"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={contactLimits.email}
            autoComplete="email"
            placeholder="you@email.com"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className={label}>
          What is it about?
        </label>
        <select id="topic" name="topic" required defaultValue="general" className={field}>
          {contactTopics.map((t) => (
            <option key={t.id} value={t.id}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={contactLimits.messageMin}
          maxLength={contactLimits.message}
          rows={6}
          onChange={(e) => setMessageLength(e.currentTarget.value.length)}
          placeholder="How can we help?"
          className={`${field} resize-y`}
        />
        <p className="mt-1 text-right text-xs text-muted">
          {messageLength} / {contactLimits.message}
        </p>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        Please don&apos;t include passwords, card details or exchange account information. We use
        your message only to reply to you. See our{" "}
        <a href="/privacy" className="text-ink underline underline-offset-2">
          Privacy Policy
        </a>
        .
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : "Send message"}
        </Button>
        <p role="status" aria-live="polite" className="text-sm text-ink">
          {state === "not_connected" &&
            `The contact form isn't connected yet. For now, please email us at ${fallbackEmail}.`}
          {state === "invalid" &&
            "Please check your email address and write at least a short message."}
          {state === "error" && "Something went wrong. Please try again."}
        </p>
      </div>
    </form>
  );
}
