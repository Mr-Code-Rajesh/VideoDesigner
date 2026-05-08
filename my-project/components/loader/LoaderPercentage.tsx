"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useTransform, animate } from "framer-motion";

export const LoaderPercentage: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 2.2,
      ease: [0.76, 0, 0.24, 1],
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return () => controls.stop();
  }, []);

  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="relative overflow-hidden font-mono text-sm tracking-[0.3em] text-white/40 uppercase">
        <motion.span
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="block"
        >
          {count < 10 ? `00${count}` : count < 100 ? `0${count}` : count}%
        </motion.span>
      </div>
      
      {/* Cinematic Progress Bar (Subtle) */}
      <div className="mt-4 h-[1px] w-48 overflow-hidden bg-white/5">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: count / 100 }}
          style={{ originX: 0 }}
          className="h-full w-full bg-white/30"
        />
      </div>
    </div>
  );
};
