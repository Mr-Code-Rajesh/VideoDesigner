"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { HeroButtons } from "./HeroButtons";

import { usePerformance } from "@/hooks/use-performance";

export const HeroContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { intensity } = usePerformance();
  
  useEffect(() => {
    if (!headingRef.current) return;

    // Manual Split Text Animation
    const lines = headingRef.current.querySelectorAll(".split-line");
    
    gsap.fromTo(
      lines,
      { 
        y: 100, 
        opacity: 0, 
        rotateX: intensity === "low" ? 0 : -45 
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.5,
        force3D: true,
      }
    );
  }, [intensity]);

  return (
    <div ref={containerRef} className="relative z-40 max-w-7xl mx-auto px-6 pt-12 pb-20 pointer-events-none">
      <div className="relative z-10 pointer-events-auto">
        <h1 
          ref={headingRef}
          className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter"
        >
          <div className="overflow-hidden py-1">
            <span className="split-line block" style={{ willChange: "transform, opacity" }}>We Don’t Create</span>
          </div>
          <div className="overflow-hidden py-1">
            <span className="split-line block" style={{ willChange: "transform, opacity" }}>Content.</span>
          </div>
          <div className="overflow-hidden py-1 text-white/40">
            <span className="split-line block" style={{ willChange: "transform, opacity" }}>We Create Brand</span>
          </div>
          <div className="overflow-hidden py-1 text-white/40">
            <span className="split-line block" style={{ willChange: "transform, opacity" }}>Presence.</span>
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
