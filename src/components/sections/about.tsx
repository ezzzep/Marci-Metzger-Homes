"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-white py-40 lg:py-52 overflow-hidden"
    >
      <div className="absolute left-[8%] top-0 h-full w-px bg-neutral-200 hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4]">
              <div className="absolute inset-0 border border-neutral-300 translate-x-6 translate-y-6" />

              <div className="absolute inset-0 overflow-hidden bg-neutral-100 shadow-[0_50px_90px_rgba(0,0,0,0.15)]">
                <Image
                  src="/images/meetMarci.png"
                  alt="Marci Metzger"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={95}
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2 } },
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="block font-mono text-xs tracking-[0.4em] text-neutral-400 mb-10"
              >
                03 / ABOUT
              </motion.span>

              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-neutral-900 mb-12"
              >
                Marci
                <span className="block italic font-light text-neutral-400">
                  Metzger
                </span>
              </motion.h2>

              <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 },
                }}
                className="h-px w-24 bg-neutral-900 origin-left mb-12"
              />

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="space-y-8 text-lg md:text-xl text-neutral-600 font-light leading-relaxed max-w-xl"
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
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-20"
              >
                <a href="tel:206-919-6886" className="group inline-block">
                  <span className="block text-xs uppercase tracking-[0.35em] text-neutral-400 mb-2 font-mono">
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
