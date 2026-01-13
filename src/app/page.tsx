// app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

// ── CONFIGURATION ─────────────────────────────────────────────────────
const THEME = {
  bg: "#FFFFFF",
  dark: "#000000",
  gray: "#888888",
  lightGray: "#F2F2F2",
  accent: "#FFFFFF",
};

// ── UTILITIES & ANIMATIONS ─────────────────────────────────────────────
const textReveal = {
  hidden: { opacity: 0, y: 60, clipPath: "inset(0 0 100% 0)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: { delay: i * 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  }),
};

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 border border-black rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
      style={{
        x: useSpring(mousePosition.x - 16),
        y: useSpring(mousePosition.y - 16),
      }}
    >
      <motion.div
        animate={{ scale: isHovered ? 2 : 1, opacity: isHovered ? 0.8 : 1 }}
        className="w-1 h-1 bg-black rounded-full"
      />
    </motion.div>
  );
};

const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9000] opacity-[0.02] mix-blend-overlay">
    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
  </div>
);

// ── COMPONENTS ─────────────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <a
        href="#home"
        className="text-xl font-serif tracking-tighter font-bold text-black z-50"
      >
        MARCI METZGER
      </a>

      <div className="hidden md:flex items-center gap-12">
        <a
          href="#about"
          className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Agent
        </a>
        <a
          href="#strategy"
          className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Strategy
        </a>
        <a
          href="#services"
          className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Expertise
        </a>
        <a
          href="#gallery"
          className="text-xs uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          Gallery
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-black text-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
        >
          Inquire
        </a>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center"
    >
      {/* Background */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0">
        <div className="relative w-full h-screen">
          <Image
            src="/images/cover.png"
            alt="Pahrump Landscape"
            fill
            className="object-cover contrast-125"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/5 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* ✅ MUST BE motion.div */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-7xl flex flex-col items-center"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          className="overflow-hidden"
        >
          <motion.p
            variants={textReveal}
            className="text-black/60 uppercase tracking-[0.3em] text-xs md:text-sm mb-6 font-bold"
          >
            The Ridge Realty Group
          </motion.p>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          className="font-serif text-7xl md:text-9xl lg:text-[10rem] leading-none text-black mb-8 text-center tracking-tighter"
        >
          <motion.span
            variants={textReveal}
            className="block font-light text-white/70"
          >
            PAHRUMP
          </motion.span>
          <motion.span
            variants={textReveal}
            className="block font-bold text-white/70"
          >
            REALTOR
          </motion.span>
        </motion.h1>

        {/* CTA will now fade correctly */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-block text-md uppercase border-b border-black/50 hover:border-black hover:text-black/70 transition-all bg-white/80 px-8 py-4 font-bold rounded-full"
          >
            Call Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};


const PropertySearch = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  // State for Price inputs
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Helper to allow only numeric input
  const handleNumericChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    // Remove any character that is NOT a number (0-9)
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
            {/* Location */}
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

            {/* Type */}
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

            {/* Sort By */}
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

            {/* Bedrooms */}
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

            {/* Baths */}
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

            {/* Min Price (Number Only) */}
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

            {/* Max Price (Number Only) */}
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

            {/* Search Button */}
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

// ── ABOUT SECTION ─────────────────────────────────────────────────────
const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-white py-40 lg:py-52 overflow-hidden"
    >
      {/* Vertical editorial rule */}
      <div className="absolute left-[8%] top-0 h-full w-px bg-neutral-200 hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24 items-start">
          {/* LEFT — IMAGE */}
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

          {/* RIGHT — CONTENT */}
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
              {/* Index */}
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="block font-mono text-xs tracking-[0.4em] text-neutral-400 mb-10"
              >
                03 / ABOUT
              </motion.span>

              {/* Name */}
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

              {/* Divider */}
              <motion.div
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { scaleX: 1 },
                }}
                className="h-px w-24 bg-neutral-900 origin-left mb-12"
              />

              {/* Copy */}
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

              {/* Contact */}
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
            <span className="text-7xl md:text-9xl font-serif text-white/10 font-bold tracking-tighter">
              90+
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Clients Helped (2021)
            </span>

            <span className="w-[1px] h-12 bg-white/20" />

            <span className="text-7xl md:text-9xl font-serif text-white/10 font-bold tracking-tighter">
              $28.5M
            </span>
            <span className="text-white/40 text-xs uppercase tracking-widest">
              Sales Volume
            </span>

            <span className="w-[1px] h-12 bg-white/20" />

            <span className="text-7xl md:text-9xl font-serif text-white/10 font-bold tracking-tighter">
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

const TheStrategy = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="strategy" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left: The Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center pr-0 lg:pr-20 py-16 lg:py-0 border-r border-black/10"
          >
            <span className="text-gray-400 text-xs uppercase tracking-[0.5em] mb-6">
              The Approach
            </span>

            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-black leading-[0.9] mb-12">
              Don't Just <br />
              <span className="italic text-gray-500">List It.</span> <br />
              <span className="text-black underline decoration-[1px] underline-offset-8">
                Get It SOLD.
              </span>
            </h2>

            <div className="space-y-8 text-gray-600 text-lg font-light max-w-md">
              <p>
                In 2021, we helped nearly{" "}
                <span className="font-bold text-black">90 clients</span>{" "}
                complete over{" "}
                <span className="font-bold text-black">$28.5 million</span> in
                sales.
              </p>
              <p>
                Our "Guide to Buyers" ensures every property is positioned for
                maximum impact, using strategy, not just luck.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all"
            >
              Read Full Strategy <span>→</span>
            </a>
          </motion.div>

          {/* Right: Visual Montage (3 Images Grid) */}
          <div className="relative h-[800px] lg:h-auto overflow-hidden bg-gray-100 grid grid-rows-3 gap-4">
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
              <span className="text-[20rem] font-serif text-black/[0.02] font-bold tracking-tighter select-none">
                2021
              </span>
            </div>

            {/* Image 1: Kitchen (Top) */}
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="relative overflow-hidden z-10 h-full w-full group cursor-pointer"
            >
              <Image
                src="/images/getItSold.png"
                alt="Strategy 1"
                fill
                className="object-cover transition-all duration-700 group-hover:grayscale"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/80 to-transparent p-5 z-20">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight">
                  Top Residential Sales Last 5 Years
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-center text-lg leading-relaxed">
                  Our team works hard everyday to grow and learn, so that we may
                  continue to excel in our market. Our clients deserve our best,
                  & we want to make sure our best is better every year.
                </p>
              </div>
            </motion.div>

            {/* Image 2: Architecture (Middle) */}
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="relative overflow-hidden z-10 h-full w-full group cursor-pointer"
            >
              <Image
                src="/images/cover.png"
                alt="Strategy 2"
                fill
                className="object-cover transition-all duration-700 group-hover:grayscale"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/80 to-transparent p-5 z-20">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight">
                  Don't Just List it...
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-center text-lg leading-relaxed">
                  Get it SOLD! We exhaust every avenue to ensure our listings
                  are at fingertips of every possible buyer, getting you top
                  dollar for your home.
                </p>
              </div>
            </motion.div>

            {/* Image 3: Pool (Bottom) */}
            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative overflow-hidden z-10 h-full w-full group cursor-pointer"
            >
              <Image
                src="/images/justLike.png"
                alt="Strategy 3"
                fill
                className="object-cover transition-all duration-700 group-hover:grayscale"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/80 to-transparent p-5 z-20">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight">
                  Guide to Buyers
                </h3>
              </div>
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center p-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <p className="text-white text-center text-lg leading-relaxed">
                  Nobody knows the market like we do. Enjoy having a pro at your
                  service. Market analysis, upgrades lists, contractors on speed
                  dial, & more!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "/images/cover.png",
      title: "Community View",
      desc: "Central Lake & Greenery",
      span: "col-span-1 md:col-span-2 row-span-2",
    },
    {
      id: 3,
      src: "/images/getItSold.png",
      title: "Kitchen",
      desc: "State of Art",
      span: "col-span-1 row-span-1",
    },
    {
      id: 4,
      src: "/images/justLike.png",
      title: "Poolside",
      desc: "Exterior",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 5,
      src: "/images/cover.png",
      title: "Mountain View",
      desc: "Scenic",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 6,
      src: "/images/account.png",
      title: "Bedroom",
      desc: "Sanctuary",
      span: "col-span-1 row-span-1",
    },
    {
      id: 7,
      src: "/images/getItSold.png",
      title: "Dining Area",
      desc: "Elegant",
      span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      id: 2,
      src: "/images/account.png",
      title: "Interior Space",
      desc: "Modern Comfort",
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
    <section id="gallery" ref={ref} className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[900px]"
        >
          {/* TEXT BLOCK WITH CLICK HERE BUTTON */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => {
              setIsModalOpen(true);
              setCurrentIndex(0);
            }}
            className="relative overflow-hidden col-span-1 row-span-2 flex flex-col items-center justify-center bg-white border-t border-l border-black/10 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 text-center p-6 flex flex-col justify-center items-center h-full">
              <h2 className="font-serif text-4xl md:text-5xl text-black leading-none tracking-tight mb-4">
                PHOTO <br />
                GALLERY
              </h2>
              <button className="text-[10px] uppercase tracking-widest text-black border-b border-black/30 pb-1 hover:border-black transition-colors">
                Click Here to Browse Collection
              </button>
            </div>
          </motion.div>

          {/* IMAGE ITEMS */}
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
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-0 left-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs uppercase tracking-widest mb-1 text-gray-300">
                  {img.desc}
                </p>
                <h3 className="font-serif text-2xl">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* EXQUISITE MODAL */}
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={{ clipPath: "circle(100% at 50% 50%)" }}
              exit={{ clipPath: "circle(0% at 50% 50%)" }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center p-4 md:p-8"
            >
              <div className="relative w-full h-full flex flex-col md:flex-row bg-white shadow-2xl overflow-hidden rounded-xl">
                {/* --- LEFT: IMAGE (3/4 WIDTH) --- */}
                <div className="relative w-full md:w-3/4 h-[55vh] md:h-full bg-black overflow-hidden">
                  <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Grain overlay */}
                  <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
                    <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                  </div>
                </div>

                {/* --- RIGHT: CONTENT (1/4 WIDTH) --- */}
                <div className="relative w-full md:w-1/4 h-full px-6 md:px-8 py-8 md:py-10 flex flex-col justify-between bg-white z-10">
                  {/* Top */}
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">
                      Project
                    </span>
                    <h1 className="font-serif text-2xl md:text-3xl text-black leading-tight">
                      {images[currentIndex].title}
                    </h1>
                  </div>

                  {/* Description */}
                  <div className="my-6">
                    <p className="font-light text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                      {images[currentIndex].desc}
                    </p>
                  </div>

                  {/* Bottom */}
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
                        className="flex-1 py-2 border border-black/20 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                      >
                        Prev
                      </button>
                      <button
                        onClick={nextImage}
                        className="flex-1 py-2 border border-black/20 text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                      >
                        Next
                      </button>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

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
        {/* HEADER */}
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
            Let's Connect
          </h2>
        </motion.div>

        {/* MAIN UNIFIED CONTAINER: FORM + MAP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-stone-100 grid grid-cols-1 lg:grid-cols-2"
        >
          {/* LEFT SIDE: FORM */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
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

                {/* Phone */}
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

              {/* Email */}
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

              {/* Message */}
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

              {/* Button */}
              <button className="w-full bg-stone-900 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-stone-800 transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-[0.99]">
                Send Inquiry
              </button>
            </form>
          </div>

          {/* RIGHT SIDE: MAP */}
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

              {/* Floating Badge on Map */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-md text-stone-900 text-[10px] font-bold uppercase tracking-widest border border-white">
                Pahrump Office
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM DETAILS ROW (Outside Container) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-stone-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Direct Line */}
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

            {/* Location */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-3">
                Location
              </p>
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                3190 HW-160, Suite F<br />
                Pahrump, NV 89048
              </p>
            </div>

            {/* Hours */}
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

          {/* WhatsApp Button */}
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

const ImageMarquee = () => {
  const logos = [
    "/images/realtor.png",
    "/images/equalHousing.png",
    "/images/chamber.png",
    "/images/bigCircle.png",
  ];

  // Duplicate the array to ensure the strip is long enough for a seamless loop
  const scrollItems = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-white border-y border-black/5 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex items-center gap-24"
      >
        {scrollItems.map((src, i) => (
          <div
            key={i}
            className="relative w-32 h-20 md:w-48 md:h-32 px-40 flex-shrink-0 opacity-50transition-all duration-500"
          >
            <Image
              src={src}
              alt="Partner Logo"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-neutral-950 text-white py-12 border-t border-neutral-800 relative">
    <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-7xl">
      {/* MAIN GRID: Brand | Socials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
        {/* LEFT: BRANDING */}
        <div className="text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight leading-none text-white">
            MARCI <span className="italic text-neutral-500">METZGER</span>
          </h2>
          <p className="text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-mono mt-2">
            The Ridge Realty Group
          </p>
        </div>

        {/* RIGHT: SOCIAL ICONS (Compact & Cool) */}
        <div className="flex justify-center md:justify-end items-center gap-3">
          {/* Facebook */}
          <a
            href="#"
            className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5L14.5.5C10.1.5 9.35 3.5 9.35 5.6V7.5H6.5v3.6h2.85V22h5.15V11.1h3.4l.5-3.2h-3.9z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="#"
            className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Yelp */}
          <a
            href="#"
            className="group relative w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:border-white transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.426 4.672c.613-1.664.808-2.568.603-2.835-.192-.258-.754-.332-1.537-.195-.076.015-.139.025-.184.038l-4.758 1.391c-1.635.48-2.335.834-2.647 1.229-.312.394-.426 1.057-.537 2.441l-.258 3.293c-.023.299-.045.549-.045.75 0 4.771 3.775 8.7 8.5 8.7s8.5-3.929 8.5-8.7c0-.201-.022-.451-.045-.75l-.258-3.293c-.111-1.384-.225-2.047-.537-2.441-.312-.395-1.012-.749-2.647-1.229l-4.758-1.391c-.045-.013-.108-.023-.184-.038-.783-.137-1.345-.063-1.537.195-.205.267-.01 1.171.603 2.835l2.3 6.226c.278.753.424 1.073.762 1.073s.484-.32.762-1.073l2.3-6.226zm-.426 14.328c-4.418 0-8-3.49-8-7.8 0-.015 0-.03.002-.045.002-.015.002-.03.002-.045 0-4.31-3.582-7.8-8-7.8-4.418 0-8 3.49-8 7.8s3.582 7.8 8 7.8c4.418 0 8-3.49 8-7.8 0-.015 0-.03-.002-.045-.002-.015-.002-.03-.002-.045 0-4.31-3.582-7.8-8-7.8z" />
            </svg>
          </a>
        </div>
      </div>

      {/* SEPARATOR */}
      <div className="w-full border-t border-neutral-800 mb-6 opacity-50"></div>

      {/* COPYRIGHT */}
      <div className="text-center">
        <p className="text-neutral-600 text-[10px] font-mono uppercase tracking-[0.15em]">
          Copyright © 2023 Marci METZGER Homes - All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
);

// ── MAIN EXPORT ─────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-white text-black selection:bg-black selection:text-white overflow-x-hidden antialiased">
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <StatsMarquee />
      <TheStrategy />
      <PropertySearch />

      <ImageMarquee />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
