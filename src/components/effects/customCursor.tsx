"use client";

import React, { useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

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

export default CustomCursor;
