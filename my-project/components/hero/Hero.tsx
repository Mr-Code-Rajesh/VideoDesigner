"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-black pt-20">
      <HeroBackground />
      
      <HeroContent />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-white/40 uppercase">
          Scroll to explore
        </span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/80"
          />
        </div>
      </motion.div>

      {/* Bottom Vignette for Content Transition */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30" />
    </section>
  );
};
