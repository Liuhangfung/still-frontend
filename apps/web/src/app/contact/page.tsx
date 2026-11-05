import { Card, Eyebrow, Icon } from "@still/ui";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/contact-form";
import { Footer } from "@/components/landing/footer";
import { Wrap } from "@/components/landing/section";
import { SocialLinks } from "@/components/landing/social-links";
import { SubpageHeader } from "@/components/landing/subpage-header";
import { legalValues } from "@/content/legal/config";

export const metadata: Metadata = {
  title: "Contact · Still",
  description: "Questions about Still, the founder list or your account? Send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <SubpageHeader />
      <main className="bg-gradient-to-b from-white to-tint-2 py-14 lg:py-20">
        <Wrap>
          <div className="mb-10 max-w-[640px]">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="display mt-3 text-[clamp(48px,7vw,80px)]">GET IN TOUCH.</h1>
            <p className="mt-4 text-lg text-muted">
              Questions about Still, the founder list or your account? Send us a message and a real
              person will reply.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[1.5fr_1fr]">
            <Card className="p-6 sm:p-8">
              <ContactForm fallbackEmail={legalValues.contactEmail} />
            </Card>

            <div className="flex flex-col gap-6">
              <Card soft className="p-6">
                <h2 className="text-lg font-extrabold">Other ways to reach us</h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                  <Icon name="email" className="text-teal-dark" />
                  {legalValues.contactEmail}
                </p>
                <div className="mt-5">
                  <SocialLinks />
                </div>
              </Card>

              <Card soft className="p-6">
                <h2 className="text-lg font-extrabold">Quick answers</h2>
                <p className="mt-2 text-sm text-muted">
                  Payments, refunds, the founder price and more are covered in the{" "}
                  <Link href="/#faq" className="font-semibold text-teal-dark underline">
                    FAQ
                  </Link>
                  . For how we handle your data, see the{" "}
                  <Link href="/privacy" className="font-semibold text-teal-dark underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </Card>

              <div className="flex items-start gap-3 rounded-[14px] border-[1.5px] border-l-[5px] border-line border-l-teal bg-white px-5 py-4 text-sm text-ink">
                <Icon name="help-support" className="mt-0.5 text-xl text-teal-dark" />
                <p>
                  <b>Need help right now?</b> We can&apos;t respond to emergencies. If trading is
                  hurting your life, please contact a free, confidential helpline in your country,
                  or your local emergency number if you are in danger.
                </p>
              </div>
            </div>
          </div>
        </Wrap>
      </main>
      <Footer />
    </>
  );
}
