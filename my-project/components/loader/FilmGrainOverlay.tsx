"use client";

import React from "react";
import { usePerformance } from "@/hooks/use-performance";

export const FilmGrainOverlay: React.FC = () => {
  const { intensity } = usePerformance();

  if (intensity === "low") return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      <div 
        className="absolute inset-[-100%] opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: `grain ${intensity === "medium" ? "0.8s" : "0.4s"} steps(4) infinite`,
          willChange: "transform",
        }}
      />
      <style jsx>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
      `}</style>
    </div>
  );
};
