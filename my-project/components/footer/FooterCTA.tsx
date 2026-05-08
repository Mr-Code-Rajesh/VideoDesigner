"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const FooterCTA: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl lg:text-6xl font-bold text-white tracking-tighter leading-[0.9]"
      >
        LET’S CREATE SOMETHING <br />
        <span className="text-white/20">IMPOSSIBLE TO IGNORE.</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button className="group relative flex items-center gap-6 px-10 py-5 rounded-full border border-white/10 hover:border-white/40 transition-all duration-500 overflow-hidden">
          <span className="text-white font-bold tracking-tight z-10">Start Your Project</span>
          <div className="relative z-10 p-2 rounded-full bg-white text-black transition-transform duration-500 group-hover:rotate-45">
            <ArrowRight size={18} />
          </div>
          
          {/* Animated Background Fill */}
          <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </motion.div>
    </div>
  );
};
