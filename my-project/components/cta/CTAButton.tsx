"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CTAButtonProps {
  text: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ text }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    const distance = { x: e.clientX - center.x, y: e.clientY - center.y };
    x.set(distance.x * 0.4);
    y.set(distance.y * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className="relative group cursor-pointer"
    >
      <div className="relative flex items-center gap-4 px-12 py-6 rounded-full bg-white text-black font-bold text-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
        {/* Fill Layer */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Button Content */}
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {text}
        </span>
        <div className="relative z-10 p-1 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
          <ArrowUpRight size={20} />
        </div>

        {/* Glow Particles */}
        <div className="absolute -inset-2 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};
