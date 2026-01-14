"use client";

import React from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";

const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    clipPath: "inset(0 0 100% 0)",
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      delay: i * 0.1,
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center"
    >
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
        <div className="relative w-full h-screen">
          <Image
            src="/images/cover.png"
            alt="Pahrump Landscape"
            fill
            className="object-cover contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/5 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-7xl flex flex-col items-center"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          <motion.p
            variants={textReveal}
            className="text-black/60 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-bold"
          >
            The Ridge Realty Group
          </motion.p>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          className="font-serif text-7xl md:text-9xl lg:text-[10rem] leading-none text-black mb-8 text-center tracking-tighter"
        >
          <motion.span
            variants={textReveal}
            className="block font-light text-white/70"
          >
            PAHRUMP
          </motion.span>
          <motion.span
            variants={textReveal}
            className="block font-bold text-white/70"
          >
            REALTOR
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-block text-md uppercase border-b border-black/50 hover:border-black hover:text-black/70 transition-all bg-white/80 px-8 py-4 font-bold rounded-full"
          >
            Call Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
