import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * "Send me Day 1 free" sign-ups. Forwards the address to the email tool's
 * webhook (SIGNUP_WEBHOOK_URL). Emails are personal data: never log them.
 */
export async function POST(request: Request) {
  const webhook = process.env.SIGNUP_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json({ error: "signups_closed" }, { status: 503 });
  }

  const body = await request.text();
  if (body.length > 1024) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }

  let email: unknown;
  try {
    email = (JSON.parse(body) as { email?: unknown }).email;
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  if (typeof email !== "string" || email.length > 254 || !EMAIL.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.trim().toLowerCase(), source: "landing" }),
    signal: AbortSignal.timeout(8000),
  }).catch(() => null);

  if (!res?.ok) {
    return NextResponse.json({ error: "upstream_failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
