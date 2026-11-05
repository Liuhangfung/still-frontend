import { Blog } from "@/components/landing/blog";
import { Coaches } from "@/components/landing/coaches";
import { Faq } from "@/components/landing/faq";
import { Final } from "@/components/landing/final";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { How } from "@/components/landing/how";
import { Marquee } from "@/components/landing/marquee";
import { Nav } from "@/components/landing/nav";
import { Pricing } from "@/components/landing/pricing";
import { Problems } from "@/components/landing/problems";
import { Programme } from "@/components/landing/programme";
import { Reset } from "@/components/landing/reset";
import { Toolkit } from "@/components/landing/toolkit";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Marquee />
        <Problems />
        <Reset />
        <Programme />
        <How />
        <Toolkit />
        <Blog />
        <Coaches />
        <Pricing />
        <Faq />
        <Final />
      </main>
      <Footer />
    </>
  );
}
