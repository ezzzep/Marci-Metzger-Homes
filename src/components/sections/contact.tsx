"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  const address = "3190 HW-160, Suite F, Pahrump, Nevada 89048, United States";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 bg-stone-50 text-stone-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-stone-400 mb-3 block">
            Get in Touch
          </p>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-stone-900 tracking-tight">
            Let&apos;s Connect
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-stone-100 grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-stone-50 border border-stone-200 py-3 px-4 rounded-xl text-stone-900 placeholder:text-stone-300 focus:outline-none focus:bg-white focus:ring-2 focus:ring-stone-900/5 focus:border-stone-400 transition-all duration-300"
                  />
                </div>

                <div className="group">
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full bg-stone-50 border border-stone-200 py-3 px-4 rounded-xl text-stone-900 placeholder:text-stone-300 focus:outline-none focus:bg-white focus:ring-2 focus:ring-stone-900/5 focus:border-stone-400 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full bg-stone-50 border border-stone-200 py-3 px-4 rounded-xl text-stone-900 placeholder:text-stone-300 focus:outline-none focus:bg-white focus:ring-2 focus:ring-stone-900/5 focus:border-stone-400 transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="I am interested in..."
                  className="w-full bg-stone-50 border border-stone-200 py-3 px-4 rounded-xl text-stone-900 placeholder:text-stone-300 focus:outline-none focus:bg-white focus:ring-2 focus:ring-stone-900/5 focus:border-stone-400 transition-all duration-300 resize-none"
                />
              </div>

              <button className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-stone-800 transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.99]">
                Send Inquiry
              </button>
            </form>
          </div>

          <div className="relative h-[400px] lg:h-auto min-h-[500px]">
            <div className="absolute inset-0  transition-all duration-700">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-md text-stone-900 text-[10px] font-bold uppercase tracking-widest border border-white">
                Pahrump Office
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-stone-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-3">
                Direct Line
              </p>
              <a
                href="tel:206-919-6886"
                className="font-serif text-2xl text-stone-900 hover:text-stone-600 transition-colors"
              >
                (206) 919-6886
              </a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-3">
                Location
              </p>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                3190 HW-160, Suite F<br />
                Pahrump, NV 89048
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-3">
                Availability
              </p>
              <p className="text-lg text-stone-600 font-light">
                Mon-Fri: 08:00 am – 07:00 pm
              </p>
              <p className="text-sm text-stone-400 italic mt-1">
                Weekends by appointment
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-3 border border-stone-300 text-stone-600 text-[10px] uppercase tracking-widest hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-500 rounded-full font-bold"
            >
              Message on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
