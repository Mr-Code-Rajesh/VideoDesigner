"use client";

import { useState, useEffect } from "react";

export interface PerformanceLevel {
  isLowEnd: boolean;
  isMobile: boolean;
  reducedMotion: boolean;
  intensity: "low" | "medium" | "high";
  isHydrated: boolean;
}

export const usePerformance = (): PerformanceLevel => {
  const [perf, setPerf] = useState<PerformanceLevel>({
    isLowEnd: false,
    isMobile: false,
    reducedMotion: false,
    intensity: "high",
    isHydrated: false,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const checkPerformance = () => {
      // Check for mobile
      const isMobile = window.innerWidth < 768;
      
      // Check for reduced motion preference
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      // Simple heuristic for low-end: mobile + old hardware
      const isLowEnd = isMobile || (typeof navigator !== 'undefined' && (navigator as any).deviceMemory < 4);

      let intensity: "low" | "medium" | "high" = "high";
      if (isLowEnd || reducedMotion) {
        intensity = "low";
      } else if (isMobile) {
        intensity = "medium";
      }

      setPerf({
        isLowEnd,
        isMobile,
        reducedMotion,
        intensity,
        isHydrated: true,
      });
    };

    // Immediate check
    checkPerformance();

    // Debounced resize
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkPerformance, 250);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return perf;
};

