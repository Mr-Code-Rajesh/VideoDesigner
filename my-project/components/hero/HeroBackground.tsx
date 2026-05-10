"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FilmGrainOverlay } from "../loader/FilmGrainOverlay";

export const HeroBackground: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Subtle Parallax Effect
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const scale = useTransform(scrollY, [0, 500], [1.02, 1.1]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      {/* Cinematic Video with Parallax */}
      <motion.video
        style={{ y, scale, willChange: "transform" }}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="https://res.cloudinary.com/dl7h2uexp/video/upload/q_auto:eco,f_auto,w_1280/v1778164130/10253173-uhd_4096_2160_25fps_zv1m1b.jpg"
        className="h-full w-full object-cover opacity-70"
        src="https://res.cloudinary.com/dl7h2uexp/video/upload/q_auto:eco,f_auto,w_1280/v1778164130/10253173-uhd_4096_2160_25fps_zv1m1b.mp4"
      />

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent z-10" />
      
      {/* Light Streaks */}
      <motion.div
        animate={{
          opacity: [0.05, 0.15, 0.05],
          x: ["-10%", "10%", "-10%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-[120px]"
      />

      {/* Film Grain Integration */}
      <div className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay opacity-20">
        <FilmGrainOverlay />
      </div>

      {/* Vignette */}
      <div className="absolute inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-70 pointer-events-none" />
    </div>
  );
};
