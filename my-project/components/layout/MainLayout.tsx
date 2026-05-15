"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { usePerformance } from "@/hooks/use-performance";

// Dynamic imports to prevent SSR crashes and hydration mismatches
const FilmLoader = dynamic(() => import("../loader/FilmLoader").then(mod => mod.FilmLoader), { ssr: false });
const Navbar = dynamic(() => import("../navbar/Navbar").then(mod => mod.Navbar), { ssr: false });

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isMobile, isHydrated } = usePerformance();
  const [isLoading, setIsLoading] = useState(true);

  // Failsafe: Force hide loader after 5 seconds if hydration finishes but loader hangs
  useEffect(() => {
    if (isHydrated) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isHydrated]);

  // Lenis Smooth Scroll Setup
  useEffect(() => {
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

  // Handle body overflow
  useEffect(() => {
    if (isHydrated) {
      document.body.style.overflow = isLoading ? "hidden" : "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading, isHydrated]);

  return (
    <>
      {/* Navbar only shows after hydration and loading */}
      <AnimatePresence mode="wait">
        {isHydrated && !isLoading && (
          <Navbar key="site-navbar-active" />
        )}
      </AnimatePresence>

      <main 
        className={`grow transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </main>

      {/* Loader Overlay - Using key to ensure clean mount/unmount */}
      <AnimatePresence>
        {isLoading && isHydrated && (
          <FilmLoader key="global-loader-active" onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
    </>
  );
};
