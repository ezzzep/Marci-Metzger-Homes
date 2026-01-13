"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PropertySearch = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });
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
      className="py-20 px-6 bg-white border-b border-black/5 relative"
    >
      <h1 className="text-3xl md:text-4xl font-serif text-black text-center mb-12">
        Find Your Dream Home
      </h1>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-8 border-t border-black pt-8">
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">
                Location
              </label>
              <input
                type="text"
                placeholder="City, Neighborhood, Zip"
                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors text-lg placeholder:text-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">
                Type
              </label>
              <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors text-lg appearance-none cursor-pointer">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Land</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">
                Sort By
              </label>
              <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors text-lg appearance-none cursor-pointer">
                <option>Newest</option>
                <option>Price (Low-High)</option>
                <option>Price (High-Low)</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">
                Bedrooms
              </label>
              <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors text-lg appearance-none cursor-pointer">
                <option>Any Number</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">
                Baths
              </label>
              <select className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors text-lg appearance-none cursor-pointer">
                <option>Any Number</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
                <option>5+</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">
                Min Price
              </label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="No Min"
                value={minPrice}
                onChange={(e) => handleNumericChange(e, setMinPrice)}
                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors text-lg placeholder:text-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-gray-500 block mb-2">
                Max Price
              </label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="No Max"
                value={maxPrice}
                onChange={(e) => handleNumericChange(e, setMaxPrice)}
                className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors text-lg placeholder:text-gray-300"
              />
            </div>

            <div className="flex items-end">
              <button className="w-full bg-black text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Search
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertySearch;
