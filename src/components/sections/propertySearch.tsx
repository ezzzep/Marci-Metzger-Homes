"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const PropertySearch = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleNumericChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setter(value);
  };

  return (
    <section
      id="search"
      ref={ref}
      className="relative w-full min-h-screen bg-white px-20 py-20 text-neutral-900 overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-0 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
          <div className="lg:col-span-7 h-[40vh] lg:h-screen relative overflow-hidden order-1 lg:order-1">
            <div className="absolute inset-0 w-full h-full z-0">
              <motion.div
                style={{ y }}
                className="w-full h-full transition-all duration-[1.5s] ease-in-out"
              >
                <Image
                  src="/images/find.png"
                  alt="Luxury Estate"
                  fill
                  className="object-cover w-full h-full"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-50/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-50/10 pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute bottom-12 left-12 right-12 md:right-auto text-left hidden md:block z-10"
            >
              <div className="inline-block bg-white/90 backdrop-blur-md px-6 py-4 border border-white/50">
                <p className="text-neutral-400 text-[10px] uppercase tracking-[0.3em] mb-1 font-mono">
                  Featured Collection
                </p>
                <h3 className="font-serif text-2xl text-black leading-none">
                  The Ridge Realty Group
                </h3>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-24 lg:py-0 pl-0 lg:pl-8 pr-0 lg:pr-12 order-2 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-neutral-500">
                  Find Your Dream Home
                </span>
              </div>

              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-black leading-[0.9] mb-10">
                Search <br />
                <span className="italic font-light text-neutral-400">
                  Listings
                </span>
              </h2>

              <form className="space-y-8 relative">
                <div className="group/input">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-black transition-colors placeholder-transparent font-serif text-lg"
                  />
                  <label className="absolute left-0 top-3 text-neutral-400 text-[10px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-neutral-300 peer-placeholder-shown:top-3 peer-focus:top-[-20px] peer-focus:text-[10px] peer-focus:text-black peer-focus:tracking-[0.2em] cursor-text font-sans">
                    Location / City
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3 font-sans">
                      Type
                    </label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-neutral-300 py-2 text-black focus:outline-none focus:border-black appearance-none cursor-pointer font-serif text-lg">
                        <option className="text-black">Residential</option>
                        <option className="text-black">Commercial</option>
                        <option className="text-black">Land</option>
                      </select>
                      <div className="absolute right-0 bottom-3 pointer-events-none text-neutral-400">
                        <span className="text-xs">▼</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3 font-sans">
                      Min Price
                    </label>
                    <div className="relative flex items-baseline">
                      <span className="absolute left-0 text-neutral-400 text-sm">
                        ${" "}
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Any"
                        value={minPrice}
                        onChange={(e) => handleNumericChange(e, setMinPrice)}
                        className="w-full bg-transparent border-b border-neutral-300 py-2 pl-4 text-black focus:outline-none focus:border-black appearance-none font-serif text-lg placeholder:text-neutral-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="relative">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3 font-sans">
                      Max Price
                    </label>
                    <div className="relative flex items-baseline">
                      <span className="absolute left-0 text-neutral-400 text-sm">
                        ${" "}
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Any"
                        value={maxPrice}
                        onChange={(e) => handleNumericChange(e, setMaxPrice)}
                        className="w-full bg-transparent border-b border-neutral-300 py-2 pl-4 text-black focus:outline-none focus:border-black appearance-none font-serif text-lg placeholder:text-neutral-200"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3 font-sans">
                      Beds
                    </label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-neutral-300 py-2 text-black focus:outline-none focus:border-black appearance-none cursor-pointer font-serif text-lg">
                        <option className="text-black">Any</option>
                        <option className="text-black">2+</option>
                        <option className="text-black">3+</option>
                        <option className="text-black">4+</option>
                      </select>
                      <div className="absolute right-0 bottom-3 pointer-events-none text-neutral-400">
                        <span className="text-xs">▼</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button className="group relative w-full py-5 border border-black text-black text-[10px] uppercase tracking-[0.3em] transition-all hover:bg-black hover:text-white overflow-hidden shadow-sm hover:shadow-lg duration-500">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Begin Your Search
                      <span className="block transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
