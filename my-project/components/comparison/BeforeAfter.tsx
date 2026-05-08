"use client";

import React from "react";
import { motion } from "framer-motion";
import { ComparisonSlider } from "./ComparisonSlider";

export const BeforeAfter: React.FC = () => {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-8 bg-white/20" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
                Color Grading Mastery
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
              RAW TO <span className="text-white/20">REFINED.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-white/60 font-light leading-relaxed"
            >
              Experience the transformative power of professional color grading and cinematic post-production. 
              We take flat, raw data and breathe life into every frame, creating atmosphere and emotional depth.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden lg:block pb-4"
          >
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Process</p>
                <p className="text-sm text-white/60">DaVinci Resolve Studio</p>
              </div>
              <div className="h-12 w-[1px] bg-white/10" />
              <div className="text-right">
                <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Format</p>
                <p className="text-sm text-white/60">12-bit RAW / 4K</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Comparison Slider Implementation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >
          <ComparisonSlider 
            beforeImage="https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            afterImage="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 -z-10 bg-white/5 blur-[100px] opacity-0 transition-opacity duration-1000 group-hover:opacity-100" />
        </motion.div>
      </div>
    </section>
  );
};
