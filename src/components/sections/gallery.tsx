"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "/images/carouselOne.png",
      title: "Community Outlook",
      desc: "Peaceful neighborhood views.",
      span: "col-span-1 md:col-span-2 row-span-2",
    },
    {
      id: 3,
      src: "/images/carouselTwo.png",
      title: "Interior Features",
      desc: "Stylish, functional interiors.",
      span: "col-span-1 row-span-1",
    },
    {
      id: 4,
      src: "/images/carouselThree.png",
      title: "Garage Frontage",
      desc: "Spacious, accessible garage.",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 5,
      src: "/images/carouselFour.png",
      title: "Panoramic Mountain View",
      desc: "Breathtaking mountain vistas",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 6,
      src: "/images/carouselFive.png",
      title: "Overhead Property Perspective",
      desc: "Aerial view of the property.",
      span: "col-span-1 row-span-1",
    },
    {
      id: 7,
      src: "/images/carouselSix.png",
      title: "Landscaped Yard ",
      desc: "Beautifully maintained outdoor space.",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 2,
      src: "/images/carouselSeven.png",
      title: "Townhouse street view",
      desc: "Contemporary living with convenience.",
      span: "col-span-1 row-span-1",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 sm:py-32 md:py-36 lg:py-40 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-auto md:h-[900px]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => {
              setIsModalOpen(true);
              setCurrentIndex(0);
            }}
            className="relative overflow-hidden col-span-1 row-span-2 flex flex-col items-center justify-center bg-white border-t border-l border-black/10 group cursor-pointer min-h-[300px] sm:min-h-0"
          >
            <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center p-6 flex flex-col justify-center items-center h-full">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-black leading-none tracking-tight mb-4">
                PHOTO <br /> GALLERY
              </h2>
              <button className="text-[10px] uppercase tracking-widest text-black border-b border-black/30 pb-1 hover:border-black transition-colors cursor-pointer">
                Browse Collection
              </button>
            </div>
          </motion.div>

          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 1) * 0.1 }}
              onClick={() => {
                setIsModalOpen(true);
                setCurrentIndex(idx);
              }}
              className={`relative overflow-hidden group cursor-pointer ${img.span} min-h-[250px] sm:min-h-0`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 text-white transform-none sm:transform sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-500 sm:group-hover:opacity-0  to-transparent sm:bg-transparent">
                <p className="text-[9px] sm:text-xs uppercase tracking-widest mb-1 text-gray-300">
                  {img.desc}
                </p>
                <h3 className="font-serif text-lg sm:text-xl md:text-2xl">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={{ clipPath: "circle(100% at 50% 50%)" }}
              exit={{ clipPath: "circle(0% at 50% 50%)" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full max-w-[95vw] max-h-[95vh] flex flex-col md:flex-row items-center justify-center"
            >
              <div className="relative w-full md:w-3/4 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-full bg-black overflow-hidden rounded-t-xl md:rounded-tr-none md:rounded-tl-xl">
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
                  <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>
              </div>

              <div className="relative w-full md:w-1/4 h-auto md:h-full px-6 py-6 sm:py-8 md:px-8 md:py-10 flex flex-col justify-between bg-white z-10 rounded-b-xl md:rounded-br-none md:rounded-bl-xl">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">
                    Project
                  </span>
                  <h1 className="font-serif text-2xl sm:text-2xl md:text-3xl text-black leading-tight">
                    {images[currentIndex].title}
                  </h1>
                </div>

                <div className="my-6">
                  <p className="font-light text-sm sm:text-base md:text-base text-gray-600 leading-relaxed text-justify">
                    {images[currentIndex].desc}
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold text-black">
                      0{currentIndex + 1}
                    </span>
                    <span className="text-xs text-gray-400 font-mono">
                      / {images.length.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={prevImage}
                      className="flex-1 py-2 text-xs border border-black/20 uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer"
                    >
                      Prev
                    </button>
                    <button
                      onClick={nextImage}
                      className="flex-1 py-2 text-xs border border-black/20 uppercase tracking-widest hover:bg-black hover:text-white transition-all cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
