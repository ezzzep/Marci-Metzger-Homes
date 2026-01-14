"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Strategy = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="strategy" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center pr-0 lg:pr-20 py-16 lg:py-0 border-r border-black/10"
          >
            <span className="text-gray-400 text-xs uppercase tracking-[0.5em] mb-6">
              The Approach
            </span>

            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-black leading-[0.9] mb-12">
              Don&apos;t Just <br />
              <span className="italic text-gray-500">List It.</span> <br />
              <span className="text-black underline decoration-[1px] underline-offset-8">
                Get It SOLD.
              </span>
            </h2>

            <div className="space-y-8 text-gray-600 text-lg font-light max-w-md">
              <p>
                In 2021, we helped nearly{" "}
                <span className="font-bold text-black">90 clients</span>{" "}
                complete over{" "}
                <span className="font-bold text-black">$28.5 million</span> in
                sales.
              </p>
              <p>
                Our &quot;Guide to Buyers&quot; ensures every property is
                positioned for maximum impact, using strategy, not just luck.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
            >
              Read Full Strategy <span>→</span>
            </a>
          </motion.div>

          <div className="relative h-[800px] lg:h-auto overflow-hidden bg-gray-100 grid grid-rows-3 gap-4">
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <span className="text-[20rem] font-serif text-black/[0.02] font-bold tracking-tighter select-none">
                2021
              </span>
            </div>

            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="relative overflow-hidden z-10 h-full w-full group cursor-pointer"
            >
              <Image
                src="/images/getItSold.png"
                alt="Strategy 1"
                fill
                className="object-cover transition-all duration-700 group-hover:grayscale"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/80 to-transparent p-5 z-20">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight">
                  Top Residential Sales Last 5 Years
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-center text-lg leading-relaxed">
                  Our team works hard everyday to grow and learn, so that we may
                  continue to excel in our market. Our clients deserve our best,
                  & we want to make sure our best is better every year.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative overflow-hidden z-10 h-full w-full group cursor-pointer"
            >
              <Image
                src="/images/justLike.png"
                alt="Strategy 2"
                fill
                className="object-cover transition-all duration-700 group-hover:grayscale"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/80 to-transparent p-5 z-20">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight">
                  Don&apos;t Just List it...
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-center text-lg leading-relaxed">
                  Get it SOLD! We exhaust every avenue to ensure our listings
                  are at fingertips of every possible buyer, getting you top
                  dollar for your home.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative overflow-hidden z-10 h-full w-full group cursor-pointer"
            >
              <Image
                src="/images/guide.png"
                alt="Strategy 3"
                fill
                className="object-cover transition-all duration-700 group-hover:grayscale"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/80 to-transparent p-5 z-20">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight">
                  Guide to Buyers
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-center text-lg leading-relaxed">
                  Nobody knows the market like we do. Enjoy having a pro at your
                  service. Market analysis, upgrades lists, contractors on speed
                  dial, & more!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strategy;
