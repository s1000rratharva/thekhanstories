import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Showreel } from "@/components/Showreel";
import { Marquee } from "@/components/Marquee";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Showreel />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </>
  );
}