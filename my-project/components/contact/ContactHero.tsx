"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ContactHero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-32 px-6 overflow-hidden bg-black">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
            Onboarding Experience
          </span>
          <div className="h-[1px] w-8 bg-white/20" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white tracking-tighter leading-[0.85]"
        >
          LET’S BUILD <br />
          <span className="text-white/20">UNFORGETTABLE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-lg md:text-2xl text-white font-light tracking-tight max-w-2xl mx-auto leading-relaxed"
        >
          We create cinematic visuals, premium branding experiences, and high-impact content for modern brands ready to lead their industry.
        </motion.p>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {mounted && Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
            }}
            className="absolute h-1 w-1 bg-white rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};
