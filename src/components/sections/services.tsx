"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Real Estate Done Right",
      desc: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about markets, our team ensures you get the best experience possible!",
      img: "/images/cover.png",
    },
    {
      title: "Commercial & Residential",
      desc: "Large or small, condo or mansion, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
      img: "/images/getItSold.png",
    },
    {
      title: "Rely on Expertise",
      desc: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      img: "/images/justLike.png",
    },
  ];

  return (
    <section id="services" className="py-32 bg-white border-b border-black/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-12 md:mb-0">
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">
              Our Services
            </h2>
            <p className="text-gray-500 text-sm uppercase tracking-widest">
              Comprehensive Solutions
            </p>
          </div>

          <div className="md:w-2/3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden border-t border-black/10 py-12 cursor-pointer bg-white"
              >
                <div className="absolute inset-0 z-0 w-full h-full">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full transition-all duration-700 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative z-10 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
                    <h3 className="pl-6 text-2xl md:text-3xl font-serif text-black group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="pl-6 text-gray-500 leading-relaxed max-w-2xl group-hover:text-gray-200 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
