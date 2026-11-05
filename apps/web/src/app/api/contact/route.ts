import { NextResponse } from "next/server";
import { contactLimits, contactTopics } from "@/content/contact";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TOPICS = new Set<string>(contactTopics.map((t) => t.id));

/**
 * Contact form. Validates the message; storing it is not connected yet.
 * Messages are personal data: never log the name, email or message.
 */
export async function POST(request: Request) {
  const body = await request.text();
  if (body.length > 8 * 1024) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }

  let data: Record<string, unknown>;
  try {
    data = JSON.parse(body) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const topic = typeof data.topic === "string" ? data.topic : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  const valid =
    name.length <= contactLimits.name &&
    email.length <= contactLimits.email &&
    EMAIL.test(email) &&
    TOPICS.has(topic) &&
    message.length >= contactLimits.messageMin &&
    message.length <= contactLimits.message;
  if (!valid) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Not connected yet: save { name, email, topic, message } to the database here,
  // then return { ok: true }.
  return NextResponse.json({ error: "not_connected" }, { status: 503 });
}
