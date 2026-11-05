import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions · Still",
  description: "The terms for using the Still app and website.",
};

export default function TermsPage() {
  return <LegalPage slug="terms" />;
}
