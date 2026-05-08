"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface GearCardProps {
  name: string;
  model: string;
  category: string;
  imageUrl: string;
  specs: string[];
}

export const GearCard: React.FC<GearCardProps> = ({ 
  name, 
  model, 
  category, 
  imageUrl, 
  specs 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-[450px] w-full cursor-none rounded-[40px] bg-zinc-900 p-8 border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/10 hover:bg-zinc-800/50"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      {/* Spotlight Effect */}
      <motion.div
        style={{
          left: useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]),
          top: useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]),
        }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/[0.05] rounded-full blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
      />

      <div className="relative z-20 flex h-full flex-col justify-between" style={{ transform: "translateZ(50px)" }}>
        <div>
          <span className="font-mono text-[8px] tracking-[0.4em] text-white/40 uppercase">
            {category}
          </span>
          <h3 className="mt-2 text-3xl font-bold text-white tracking-tighter">
            {name}
          </h3>
          <p className="text-sm font-mono text-white/20 mt-1">{model}</p>
        </div>

        {/* Gear Image Placeholder (since we don't have local assets) */}
        <div className="flex-grow flex items-center justify-center p-4">
          <img 
            src={imageUrl} 
            alt={name}
            className="max-h-[200px] w-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Specs Overlay */}
        <div className="space-y-2 opacity-0 transition-all duration-500 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-[10px] font-mono text-white/60 tracking-wider uppercase">{spec}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Luxury Border Accent */}
      <div className="absolute inset-x-8 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
};
