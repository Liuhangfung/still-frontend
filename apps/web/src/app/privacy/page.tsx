import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy · Still",
  description: "What personal data Still collects, why, and what you can do about it.",
};

export default function PrivacyPage() {
  return <LegalPage slug="privacy" />;
}
