"use client";

import React from "react";
import { motion } from "framer-motion";

export const FooterBrand: React.FC = () => {
  return (
    <div className="flex flex-col max-w-sm">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 mb-6"
      >
        <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
          <div className="h-2 w-2 bg-black rounded-full" />
        </div>
        <span className="font-bold text-2xl text-white tracking-tighter uppercase">CreativeNex</span>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-lg text-white font-medium italic mb-6 leading-tight"
      >
        “We create cinematic visuals that make brands unforgettable.”
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 0.4, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-sm text-white font-light leading-relaxed"
      >
        A premium production house dedicated to storytelling, 
        visual excellence, and technical precision.
      </motion.p>
    </div>
  );
};
