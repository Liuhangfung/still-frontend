import { AppTour } from "@/components/landing/app-tour";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Join } from "@/components/landing/join";
import { Nav } from "@/components/landing/nav";
import { Pause } from "@/components/landing/pause";
import { Practice } from "@/components/landing/practice";
import { Markets, Problems } from "@/components/landing/problems";
import { Programme } from "@/components/landing/programme";
import { Pricing, Tools } from "@/components/landing/tools";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-2.5 top-2.5 z-[99] -translate-y-[160%] bg-ink p-3 text-ivory focus:translate-y-0"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Markets />
        <Problems />
        <AppTour />
        <Practice />
        <Programme />
        <Pause />
        <Tools />
        <Pricing />
        <Faq />
        <Join />
      </main>
      <Footer />
    </>
  );
}
