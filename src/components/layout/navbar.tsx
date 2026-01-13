"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <a href="#home" className="relative z-50 block w-[150px] h-[50px]">
        <Image
          src="/images/marciMetzgerHomesBlack.png"
          alt="Marci Metzger Homes"
          fill
          className="object-contain"
        />
      </a>

      <div className="hidden md:flex items-center gap-12">
        <a
          href="#about"
          className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Agent
        </a>
        <a
          href="#strategy"
          className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Strategy
        </a>
        <a
          href="#services"
          className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Expertise
        </a>
        <a
          href="#gallery"
          className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Gallery
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-black text-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
        >
          Inquire
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
