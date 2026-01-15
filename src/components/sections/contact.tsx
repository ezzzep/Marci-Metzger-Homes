"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const address = "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-white text-neutral-900 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-black/5 to-transparent blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12 lg:px-24 py-36">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          <p className="text-[11px] uppercase tracking-[0.35em] text-neutral-500 mb-4">
            The Ridge Realty Group
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight">
            Let&apos;s Connect!
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-[3rem] overflow-hidden bg-white shadow-[0_60px_120px_-40px_rgba(0,0,0,0.08)]"
        >
          <div className="p-10 md:p-16 lg:p-20">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-lg placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border-b border-neutral-300 bg-transparent py-4 text-lg placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-b border-neutral-300 bg-transparent py-4 text-lg placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition"
              />

              <select className="w-full border-b border-neutral-300 bg-transparent py-4 text-lg text-neutral-600 focus:outline-none focus:border-neutral-900 transition">
                <option>Inquiry Type</option>
                <option>Buying a Home</option>
                <option>Selling a Property</option>
                <option>Investment Opportunities</option>
                <option>Private Consultation</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell us about your goals"
                className="w-full border-b border-neutral-300 bg-transparent py-4 text-lg placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition resize-none"
              />

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full rounded-full bg-neutral-900 text-white py-5 text-[11px] uppercase tracking-[0.4em] font-semibold hover:bg-neutral-800 transition shadow-lg"
              >
                Request Consultation
              </motion.button>
            </form>
          </div>

          <div className="relative min-h-[520px]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-10 left-10 right-10 rounded-2xl bg-white/90 backdrop-blur-md px-6 py-5 shadow-xl pointer-events-none">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Office Location
              </p>
              <p className="font-serif text-xl mt-1">Pahrump, Nevada</p>
              <p className="text-sm text-neutral-600 mt-1">
                3190 HW-160, Suite F
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
              Direct Line
            </p>
            <p className="font-serif text-2xl">(206) 919-6886</p>
          </div>

          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
              Address
            </p>
            <p className="text-neutral-600 font-light leading-relaxed">
              3190 HW-160, Suite F
              <br />
              Pahrump, NV 89048
            </p>
          </div>

          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-3">
              Availability
            </p>
            <p className="text-neutral-600 font-light">Mon–Fri · 08:00–19:00</p>
            <p className="text-sm text-neutral-400 italic mt-1">
              Weekends by appointment
            </p>
          </div>
        </motion.div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://wa.me/14259412560"
            className="flex items-center gap-3 rounded-full border border-neutral-300 px-10 py-4 text-[11px] uppercase tracking-[0.4em] font-semibold text-neutral-700 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-500"
          >
            Message via WhatsApp
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.004 2C6.486 2 2 6.486 2 12.005c0 1.989.521 3.846 1.424 5.449L2 22l4.694-1.43A9.958 9.958 0 0012.004 22C17.522 22 22 17.514 22 12.005S17.522 2 12.004 2zm0 18c-1.86 0-3.594-.63-4.974-1.688l-.35-.27-2.787.849.928-2.71-.235-.36A8.005 8.005 0 1112.004 20zm4.31-5.98c-.215-.108-1.273-.63-1.47-.702-.196-.073-.338-.108-.48.107-.143.215-.553.702-.677.846-.123.144-.246.161-.46.054-.215-.108-.905-.333-1.725-1.063-.637-.568-1.067-1.273-1.193-1.487-.123-.215-.013-.33.095-.438.098-.097.215-.246.323-.369.108-.123.144-.215.215-.36.072-.144.036-.27-.018-.378-.054-.108-.48-1.155-.657-1.585-.173-.416-.35-.36-.48-.366-.123-.006-.264-.007-.404-.007s-.378.054-.576.27c-.196.215-.75.732-.75 1.785 0 1.053.768 2.067.874 2.21.107.144 1.51 2.32 3.658 3.253.512.22.91.35 1.22.448.513.157.977.135 1.344.082.41-.057 1.273-.52 1.454-1.022.18-.504.18-.937.126-1.022-.054-.086-.196-.144-.41-.252z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
