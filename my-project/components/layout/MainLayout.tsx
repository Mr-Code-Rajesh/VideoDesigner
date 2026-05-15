"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { usePerformance } from "@/hooks/use-performance";

// Dynamic imports to prevent SSR crashes and hydration mismatches
const FilmLoader = dynamic(() => import("../loader/FilmLoader").then(mod => mod.FilmLoader), { ssr: false });
const Navbar = dynamic(() => import("../navbar/Navbar").then(mod => mod.Navbar), { ssr: false });

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMobile, intensity, isHydrated } = usePerformance();
  const [isLoading, setIsLoading] = useState(true);

  // Failsafe: Force hide loader after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        console.warn("Loader failsafe triggered");
        setIsLoading(false);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  // Lenis Smooth Scroll Setup
  useEffect(() => {
    // Wait for hydration and check if mobile
    if (!isHydrated || isMobile) return;

    let lenisInstance: any;
    let rafId: number;

    const initLenis = async () => {
      const { default: Lenis } = await import("lenis");
      
      lenisInstance = new Lenis({
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
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    };

    initLenis();
    
    return () => {
      if (lenisInstance) lenisInstance.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isMobile, isHydrated]);

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

      {isHydrated && !isLoading && (
        <Navbar />
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
