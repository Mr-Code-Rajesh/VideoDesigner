"use client";

import React from "react";
import { motion } from "framer-motion";
import { PortfolioGrid } from "./PortfolioGrid";

export const Portfolio: React.FC = () => {
  return (
    <section id="works" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
              Curated Portfolio
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            SELECTED <span className="text-white/20">WORKS.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-white/60 font-light leading-relaxed"
          >
            A showcase of our most impactful cinematic projects. From commercial high-production 
            to intimate narrative storytelling, we push the boundaries of visual excellence.
          </motion.p>
        </div>

        <PortfolioGrid />
      </div>
    </section>
  );
};
