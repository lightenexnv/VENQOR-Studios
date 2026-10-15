/**
 * Home page — section order mirrors the reference template:
 * Hero · [01] About · Showreel · [02] Services · [03] Featured Works · [04] How We Work ·
 * [05] Testimonials · [06] Before & After · [07] Insights · [08] FAQ + Start a Project · Footer
 * All copy/assets live in content/site.ts.
 */
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Cursor from "@/components/cursor/Cursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Showreel from "@/components/sections/Showreel";
import Services from "@/components/sections/Services";
import Works from "@/components/sections/Works";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CaseStudy from "@/components/sections/CaseStudy";
import Insights from "@/components/sections/Insights";
import FaqContact from "@/components/sections/FaqContact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Showreel />
        <Services />
        <Works />
        <Process />
        <Testimonials />
        <CaseStudy />
        <Insights />
        <FaqContact />
      </main>
      <Footer />
      <Cursor />
    </>
  );
}
