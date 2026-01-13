"use client";

import React from "react";
import { motion } from "framer-motion";

const StatsMarquee = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden border-y border-white/10">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="flex whitespace-nowrap gap-24"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-7xl md:text-9xl font-serif text-white/50 font-bold tracking-tighter">
              90+
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Clients Helped (2021)
            </span>

            <span className="w-[1px] h-12 bg-white/20" />

            <span className="text-7xl md:text-9xl font-serif text-white/50 font-bold tracking-tighter">
              $28.5M
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Sales Volume
            </span>

            <span className="w-[1px] h-12 bg-white/20" />

            <span className="text-7xl md:text-9xl font-serif text-white/50 font-bold tracking-tighter">
              30
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Years Experience
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default StatsMarquee;
