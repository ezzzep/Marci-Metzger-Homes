"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "Real Estate Done Right",
      desc: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      img: "/images/realEstateDone.png",
    },
    {
      title: "Commercial & Residential",
      desc: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
      img: "/images/commercial.png",
    },
    {
      title: "Rely on Expertise",
      desc: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
      img: "/images/relyExpertise.png",
    },
  ];

  return (
    <section id="services" className="relative bg-white py-40">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-32">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            Your Property Journey Starts Here
          </h2>
          <p className="text-lg text-gray-600">
            Real estate doesn’t have to feel complicated. We guide you down a
            clear, proven path—step by step.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200" />
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 top-2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </div>
                  <div className="w-px h-24 bg-gray-300 mt-2" />
                </div>
                <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
