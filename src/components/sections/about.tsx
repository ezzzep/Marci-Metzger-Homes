"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-white py-32 lg:py-48 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute left-[8%] top-0 h-full w-px bg-neutral-300 hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-8xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-y-0 items-start">
          <div className="lg:col-span-5 relative order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] group"
            >
              <div className="absolute inset-0 border border-neutral-300 translate-x-5 translate-y-5 transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-3" />

              <div className="absolute inset-0 overflow-hidden bg-neutral-100 shadow-[0_30px_60px_rgba(0,0,0,0.12)]">
                <Image
                  src="/images/meetMarci.png"
                  alt="Marci Metzger"
                  fill
                  priority
                  className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 bg-white px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-neutral-100 z-20"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-1 font-mono">
                  Owner
                </p>
                <p className="font-serif text-2xl text-neutral-900">
                  Pahrump, NV
                </p>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 order-2 lg:order-2 pt-12 lg:pt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="block font-mono text-xl uppercase tracking-[0.4em] text-neutral-400 mb-6 flex items-center gap-3"
              >
                <span className="h-px bg-neutral-400"></span>
                Meet
              </motion.span>

              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="font-serif text-6xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tight text-neutral-900 mb-4"
              >
                Marci
                <span className="block italic font-light text-neutral-400">
                  Metzger
                </span>
              </motion.h2>

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                className="mb-10 inline-flex items-center gap-3"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white text-[10px]">
                  ★
                </span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-neutral-800 border-b border-neutral-300 pb-0.5 pt-4">
                  Realtor for nearly 3 decades!
                </span>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="space-y-6 text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-xl border-l-2 border-neutral-200 pl-6"
              >
                <p>
                  With decades of experience rooted in Pahrump, Marci Metzger
                  offers clarity and composure in every transaction.
                </p>
                <p>
                  Her approach balances market intelligence with genuine care,
                  guiding buyers and sellers through luxury real estate with
                  confidence and discretion.
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 },
                }}
                className="h-px w-full bg-neutral-200 my-12"
              />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
              >
                <a href="tel:206-919-6886" className="group">
                  <span className="block text-[10px] uppercase tracking-[0.35em] text-neutral-400 mb-2 font-mono group-hover:text-neutral-900 transition-colors">
                    Direct Line
                  </span>
                  <span className="font-serif text-3xl md:text-4xl text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    (206) 919-6886
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
