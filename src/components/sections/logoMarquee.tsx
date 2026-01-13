"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LogoMarquee = () => {
  const logos = [
    "/images/realtor.png",
    "/images/equalHousing.png",
    "/images/chamber.png",
    "/images/bigCircle.png",
  ];

  const scrollItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-white border-y border-black/5 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex items-center gap-24"
      >
        {scrollItems.map((src, i) => (
          <div
            key={i}
            className="relative w-32 h-20 md:w-48 md:h-32 px-40 flex-shrink-0 opacity-50transition-all duration-500"
          >
            <Image
              src={src}
              alt="Partner Logo"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default LogoMarquee;
