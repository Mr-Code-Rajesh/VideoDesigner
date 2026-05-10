"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FilmGrainOverlay } from "../loader/FilmGrainOverlay";

export const HeroBackground: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax + Ken Burns combined
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {/* Cinematic Static Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ 
          scale: [1.1, 1.18, 1.1],
          x: ["-1%", "1%", "-1%"],
        }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ y }}
        className="absolute inset-[-10%] z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
          alt="Cinematic Background"
          className="w-full h-full object-cover opacity-80 brightness-[0.9]"
        />
      </motion.div>

      {/* Cinematic Light Leaks (Subtle Blobs) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 -left-[10%] w-[50%] h-[50%] bg-amber-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-[10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px]"
        />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-20 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-20" />
      
      {/* Light Streaks */}
      <motion.div
        animate={{
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-30 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-[80px]"
      />

      {/* Film Grain Integration */}
      <div className="absolute inset-0 z-40 pointer-events-none mix-blend-overlay opacity-30">
        <FilmGrainOverlay />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 z-50 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60 pointer-events-none" />
    </div>
  );
};
