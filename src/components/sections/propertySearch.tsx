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
      className="relative w-full min-h-screen bg-white px-4 sm:px-6 md:px-12 lg:px-20 py-16 lg:py-20 text-neutral-900 overflow-hidden flex items-center"
    >
      <div className="container mx-auto relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 h-full">
          <div className="lg:col-span-7 h-[35vh] sm:h-[45vh] lg:h-screen relative overflow-hidden order-1">
            <div className="absolute inset-0 w-full h-full z-0">
              <motion.div style={{ y }} className="w-full h-full">
                <Image
                  src="/images/find.png"
                  alt="Luxury Estate"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10 pointer-events-none" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute bottom-6 left-6 right-6 md:right-auto hidden md:block z-10"
            >
              <div className="inline-block bg-white/90 backdrop-blur-md px-4 py-3 border border-white/50">
                <p className="text-neutral-400 text-[10px] uppercase tracking-[0.3em] mb-1 font-mono">
                  Featured Collection
                </p>
                <h3 className="font-serif text-xl text-black leading-none">
                  The Ridge Realty Group
                </h3>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:h-screen lg:sticky lg:top-0 flex flex-col justify-center py-12 lg:py-0 px-0 lg:px-8 order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="w-full max-w-xl mx-auto"
            >
              <span className="block text-[10px] uppercase tracking-[0.3em] font-mono text-neutral-500 mb-6">
                Find Your Dream Home
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-[0.95] mb-10">
                Search <br />
                <span className="italic font-light text-neutral-400">
                  Listings
                </span>
              </h2>

              <form className="space-y-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    className="peer w-full bg-transparent border-b border-neutral-300 py-3 text-black focus:outline-none focus:border-black placeholder-transparent font-serif text-base sm:text-lg"
                  />
                  <label className="absolute left-0 top-3 text-neutral-400 text-[10px] uppercase tracking-[0.2em] transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:top-[-18px] peer-focus:text-[10px] peer-focus:text-black cursor-text">
                    Location / City
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3">
                      Type
                    </label>
                    <select className="w-full bg-transparent border-b border-neutral-300 py-2 text-black focus:outline-none focus:border-black font-serif text-base sm:text-lg">
                      <option>Residential</option>
                      <option>Commercial</option>
                      <option>Land</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3">
                      Min Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-0 top-2 text-neutral-400 text-sm">
                        $
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Any"
                        value={minPrice}
                        onChange={(e) => handleNumericChange(e, setMinPrice)}
                        className="w-full bg-transparent border-b border-neutral-300 py-2 pl-4 text-black focus:outline-none focus:border-black font-serif text-base sm:text-lg placeholder:text-neutral-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3">
                      Max Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-0 top-2 text-neutral-400 text-sm">
                        $
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Any"
                        value={maxPrice}
                        onChange={(e) => handleNumericChange(e, setMaxPrice)}
                        className="w-full bg-transparent border-b border-neutral-300 py-2 pl-4 text-black focus:outline-none focus:border-black font-serif text-base sm:text-lg placeholder:text-neutral-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-3">
                      Beds
                    </label>
                    <select className="w-full bg-transparent border-b border-neutral-300 py-2 text-black focus:outline-none focus:border-black font-serif text-base sm:text-lg">
                      <option>Any</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>

                <button className="w-full py-5 border border-black text-black text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-500">
                  Begin Your Search →
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
