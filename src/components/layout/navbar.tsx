"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const menuVariants: Variants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: {
    y: "100%",
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-8 py-5 flex justify-between items-center transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <a href="#home" className="relative block w-[150px] h-[50px]">
          <Image
            src="/images/marciMetzgerHomesBlack.png"
            alt="Marci Metzger Homes"
            fill
            className="object-contain"
            priority
          />
        </a>
        <div className="hidden md:flex items-center gap-12">
          <a
            href="#about"
            className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
          >
            Meet Marci
          </a>
          <a
            href="#strategy"
            className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
          >
            Strategy
          </a>
          <a
            href="#gallery"
            className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
          >
            Gallery
          </a>
          <a
            href="#services"
            className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
          >
            Expertise
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-black text-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
          >
            Inquire
          </a>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-black"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[60] bg-white flex flex-col justify-center items-center gap-10"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-black"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-2xl uppercase tracking-widest text-black hover:opacity-60 transition"
            >
              Meet Marci
            </a>
            <a
              href="#strategy"
              onClick={() => setOpen(false)}
              className="text-2xl uppercase tracking-widest text-black hover:opacity-60 transition"
            >
              Strategy
            </a>
            <a
              href="#gallery"
              onClick={() => setOpen(false)}
              className="text-2xl uppercase tracking-widest text-black hover:opacity-60 transition"
            >
              Gallery
            </a>
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="text-2xl uppercase tracking-widest text-black hover:opacity-60 transition"
            >
              Expertise
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-4 border border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
            >
              Inquire
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
