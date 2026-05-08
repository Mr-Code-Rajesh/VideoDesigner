"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { HeroButtons } from "./HeroButtons";

export const HeroContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  // Mouse Follow Glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Offset by half glow size
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!headingRef.current) return;

    // Manual Split Text Animation
    const lines = headingRef.current.querySelectorAll(".split-line");
    
    gsap.fromTo(
      lines,
      { y: 100, opacity: 0, rotateX: -45 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative z-40 max-w-7xl mx-auto px-6 pt-12 pb-20 pointer-events-none">
      {/* Mouse Glow */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none z-0"
      />

      <div className="relative z-10 pointer-events-auto">
        <h1 
          ref={headingRef}
          className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter"
        >
          <div className="overflow-hidden py-1">
            <span className="split-line block">We Don’t Create</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="split-line block">Content.</span>
          </div>
          <div className="overflow-hidden py-1 text-white/40">
            <span className="split-line block">We Create Brand</span>
          </div>
          <div className="overflow-hidden py-1 text-white/40">
            <span className="split-line block">Presence.</span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 max-w-lg text-sm md:text-base text-white/80 leading-relaxed font-light"
        >
          Premium cinematic visuals, brand storytelling, social media growth, 
          and high-end video production.
        </motion.p>

        <HeroButtons />
      </div>
    </div>
  );
};
