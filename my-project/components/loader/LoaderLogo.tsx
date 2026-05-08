"use client";

import React from "react";
import { motion } from "framer-motion";

export const LoaderLogo: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Animated Logo Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          <motion.path
            d="M20 20L80 50L20 80V20Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.path
            d="M50 20L50 80"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8 }}
          />
        </svg>
      </motion.div>

      {/* Cinematic Glow Behind Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 z-0 h-32 w-32 rounded-full bg-white/5 blur-[40px]"
      />
      
      {/* Reflection Streaks */}
      <motion.div
        initial={{ x: "-150%", opacity: 0 }}
        animate={{ x: "150%", opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </div>
  );
};
