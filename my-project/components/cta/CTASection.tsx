"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { CTAButton } from "./CTAButton";

export const CTASection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const streaksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    if (!streaksRef.current) return;

    const ctx = gsap.context(() => {
      const streaks = gsap.utils.toArray(".light-streak");
      streaks.forEach((streak: any, i: number) => {
        gsap.to(streak, {
          x: "200vw",
          duration: 3 + i,
          repeat: -1,
          ease: "none",
          delay: i * 2,
        });
      });
    }, streaksRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 bg-black overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Animated Light Streaks */}
      <div ref={streaksRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="light-streak absolute h-[1px] w-[500px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm"
            style={{
              top: `${20 * (i + 1)}%`,
              left: "-100vw",
              transform: "rotate(-5deg)",
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              x: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 bg-white rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] tracking-[0.6em] text-white/40 uppercase">
            Final Act
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-16"
        >
          READY TO MAKE YOUR BRAND <br />
          <span className="text-white/20">IMPOSSIBLE TO IGNORE?</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <CTAButton text="Let's Build Your Brand" />
        </motion.div>
      </div>

      {/* Large Soft Glow Background */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white rounded-full blur-[150px] pointer-events-none"
      />
    </section>
  );
};
