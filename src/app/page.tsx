"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CustomCursor from "@/components/effects/customCursor";
import NoiseOverlay from "@/components/effects/noiseOverlay";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import StatsMarquee from "@/components/sections/statsMarquee";
import Strategy from "@/components/sections/strategy";
import PropertySearch from "@/components/sections/propertySearch";
import LogoMarquee from "@/components/sections/logoMarquee";
import Gallery from "@/components/sections/gallery";
import Services from "@/components/sections/services";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="bg-white text-black selection:bg-black selection:text-white overflow-x-hidden antialiased">
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <StatsMarquee />
      <Strategy />
      <PropertySearch />
      <LogoMarquee />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
