"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Smooth springs for the ring
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Focus Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 60 : 32,
          height: isHovered ? 60 : 32,
          borderWidth: isHovered ? "1px" : "1.5px",
          opacity: 1,
        }}
        className="absolute rounded-full border-white/40 flex items-center justify-center mix-blend-difference"
      >
        {/* Reticle Lines (Cinematic Touch) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-white/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1 bg-white/20" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-1 bg-white/20" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-1 bg-white/20" />
      </motion.div>

      {/* Center Dot (Precise) */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,1)",
        }}
        className="absolute w-1.5 h-1.5 rounded-full mix-blend-difference"
      />

      {/* Subtle Glow (Highly Optimized) */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 100 : 60,
          height: isHovered ? 100 : 60,
          opacity: isHovered ? 0.4 : 0.2,
        }}
        className="absolute bg-white/10 rounded-full blur-xl pointer-events-none"
      />
    </div>
  );
};
