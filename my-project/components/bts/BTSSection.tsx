"use client";

import React from "react";
import { motion } from "framer-motion";
import { BTSGrid } from "./BTSGrid";

export const BTSSection: React.FC = () => {
  return (
    <section id="bts" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Decor - Timeline Film Strip */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/[0.05] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white/[0.05] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-8 bg-white/20" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
                Documentary Access
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
              BEHIND THE <span className="text-white/20">SCENES.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-white/60 font-light leading-relaxed"
            >
              Real moments from our production house. A raw look at the gear, the grind, 
              and the technical precision that goes into every frame we deliver.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-8 border border-white/5 bg-white/[0.02] p-6 rounded-2xl backdrop-blur-md"
          >
            <div className="text-center">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <p className="text-sm text-white/60 font-mono">LIVE_SET</p>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="text-center">
              <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Capture</p>
              <p className="text-sm text-white/60 font-mono">12G-SDI</p>
            </div>
          </motion.div>
        </div>

        <BTSGrid />
      </div>
    </section>
  );
};
