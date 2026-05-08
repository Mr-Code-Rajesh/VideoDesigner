"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Waveform: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const bars = Array.from({ length: 40 });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-64 w-full bg-zinc-950/20 rounded-xl animate-pulse" />;
  }

  return (
    <div className="flex flex-col gap-2 h-full w-full justify-center">
      <div className="flex items-center justify-between gap-1 h-32">
        {bars.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: [
                `${Math.random() * 40 + 20}%`,
                `${Math.random() * 80 + 20}%`,
                `${Math.random() * 40 + 20}%`,
              ],
            }}
            transition={{
              duration: Math.random() * 1 + 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full bg-white/20 rounded-full"
            style={{
              opacity: 0.2 + (i / bars.length) * 0.4,
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between gap-1 h-32 scale-y-[-1] opacity-30">
        {bars.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: [
                `${Math.random() * 20 + 10}%`,
                `${Math.random() * 40 + 10}%`,
                `${Math.random() * 20 + 10}%`,
              ],
            }}
            transition={{
              duration: Math.random() * 1 + 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full bg-white/10 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};
