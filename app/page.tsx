/**
 * Home page — section order mirrors the reference template:
 * Hero · [01] About · Showreel · [02] Services · [03] Featured Works · [04] How We Work ·
 * [05] Testimonials · [06] Insights · [07] FAQ + Start a Project · Footer
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
import Insights from "@/components/sections/Insights";
import Founders from "@/components/sections/Founders";
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
        <Insights />
        <Founders />
        <FaqContact />
      </main>
      <Footer />
      <Cursor />
    </>
  );
}
