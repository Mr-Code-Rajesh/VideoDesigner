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
    const checkPerformance = () => {
      // Check for mobile
      const isMobile = window.innerWidth < 768;
      
      // Check for reduced motion preference
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      // Simple heuristic for low-end: mobile + old hardware (rough check)
      // In a real app, you might check navigator.deviceMemory or hardwareConcurrency
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

    checkPerformance();
    window.addEventListener("resize", checkPerformance);
    
    return () => window.removeEventListener("resize", checkPerformance);
  }, []);

  return perf;
};
