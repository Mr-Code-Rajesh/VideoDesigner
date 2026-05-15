"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePerformance } from "@/hooks/use-performance";
import { useInView } from "react-intersection-observer";

export const Waveform: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { intensity, isMobile } = usePerformance();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const barCount = isMobile ? 20 : 40;
  const bars = Array.from({ length: barCount });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-64 w-full bg-zinc-950/20 rounded-xl animate-pulse" />;
  }

  return (
    <div ref={ref} className="flex flex-col gap-2 h-full w-full justify-center">
      <div className="flex items-center justify-between gap-1 h-32">
        {inView && bars.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [
                0.2 + Math.random() * 0.4,
                0.2 + Math.random() * 0.8,
                0.2 + Math.random() * 0.4,
              ],
            }}
            transition={{
              duration: Math.random() * 1 + 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full bg-white/20 rounded-full origin-bottom"
            style={{
              opacity: 0.2 + (i / bars.length) * 0.4,
              willChange: "transform",
            }}
          />
        ))}
        {!inView && bars.map((_, i) => (
          <div 
            key={i} 
            className="w-full bg-white/20 rounded-full h-[30%]" 
            style={{ opacity: 0.2 + (i / bars.length) * 0.4 }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between gap-1 h-32 scale-y-[-1] opacity-30">
        {inView && bars.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scaleY: [
                0.1 + Math.random() * 0.2,
                0.1 + Math.random() * 0.4,
                0.1 + Math.random() * 0.2,
              ],
            }}
            transition={{
              duration: Math.random() * 1 + 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full bg-white/10 rounded-full origin-bottom"
            style={{ willChange: "transform" }}
          />
        ))}
        {!inView && bars.map((_, i) => (
          <div key={i} className="w-full bg-white/10 rounded-full h-[20%]" />
        ))}
      </div>
    </div>
  );
};
