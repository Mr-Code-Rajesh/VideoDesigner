"use client";

import React, { useRef, useState, useEffect } from "react";
import { FilmGrainOverlay } from "./FilmGrainOverlay";
import { LoaderLogo } from "./LoaderLogo";
import { LoaderPercentage } from "./LoaderPercentage";
import { useLoaderTimeline } from "../../hooks/useLoaderTimeline";
import { motion, AnimatePresence } from "framer-motion";

interface FilmLoaderProps {
  onLoadingComplete?: () => void;
}

export const FilmLoader: React.FC<FilmLoaderProps> = ({ onLoadingComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useLoaderTimeline(containerRef, () => {
    setIsVisible(false);
    onLoadingComplete?.();
  });

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      <FilmGrainOverlay />

      {/* Main Content Area */}
      <div className="loader-content relative z-20 flex flex-col items-center">
        <LoaderLogo />
        
        <div className="mt-12 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 0.6, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-mono text-[10px] tracking-[0.2em] text-white uppercase"
          >
            Entering Production Mode...
          </motion.p>
          <LoaderPercentage />
        </div>
      </div>

      {/* Shutter Animation Parts */}
      <div className="pointer-events-none absolute inset-0 z-30 flex flex-col">
        <div className="shutter-part h-1/2 w-full origin-top bg-black" />
        <div className="shutter-part h-1/2 w-full origin-bottom bg-black" />
      </div>

      {/* Cinematic Flash Overlay */}
      <div className="flash-overlay pointer-events-none absolute inset-0 z-40 bg-white opacity-0" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-60" />

      {/* Floating Particles (Render only on client to avoid hydration mismatch) */}
      {isMounted && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%` 
              }}
              animate={{ 
                opacity: [0, 0.2, 0],
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
              }}
              transition={{ 
                duration: 5 + Math.random() * 10, 
                repeat: Infinity,
                ease: "linear" 
              }}
              className="absolute h-[1px] w-[1px] bg-white rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};
