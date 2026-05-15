"use client";

import React, { useState, useEffect } from "react";
import { FilmLoader } from "../loader/FilmLoader";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { Navbar } from "../navbar/Navbar";
import { CustomCursor } from "./CustomCursor";
import { usePerformance } from "@/hooks/use-performance";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMobile, intensity } = usePerformance();
  const [isLoading, setIsLoading] = useState(true);

  // Lenis Smooth Scroll Setup
  useEffect(() => {
    // Disable smooth scroll on touch devices to improve performance
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
    };
  }, [isMobile]);

  // Prevent scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <FilmLoader key="loader" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          {!isMobile && <CustomCursor />}
        </>
      )}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grow"
      >
        {children}
      </motion.main>
    </>
  );
};
