"use client";

import React, { useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, variant = "primary" }) => {
  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative px-8 py-4 rounded-full text-xs font-mono tracking-[0.2em] uppercase transition-colors duration-500
        ${variant === "primary" 
          ? "bg-white text-black hover:bg-white/90" 
          : "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5"}
      `}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white blur-md opacity-0 group-hover:opacity-20 transition-opacity"
          layoutId="button-glow"
        />
      )}
    </motion.button>
  );
};

export const HeroButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-6 mt-12 justify-center md:justify-start">
      <MagneticButton variant="primary">View Works</MagneticButton>
      <MagneticButton variant="secondary">Book A Shoot</MagneticButton>
    </div>
  );
};
