"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

import { usePerformance } from "@/hooks/use-performance";

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { intensity, isMobile } = usePerformance();

  // Mouse Follow Glow Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`group relative min-h-[350px] cursor-none overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] ${intensity !== "low" ? "backdrop-blur-sm shadow-xl" : ""}`}
    >
      {/* Mouse Follow Glow - Only on Desktop */}
      {!isMobile && (
        <motion.div
          style={{
            left: springX,
            top: springY,
          }}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-[80px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}

      <div className="relative z-10 flex h-full flex-col">
        {/* Icon Container */}
        <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
          <Icon size={24} strokeWidth={1.5} />
        </div>

        {/* Content */}
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-white transition-colors duration-500 group-hover:text-white/90">
          {title}
        </h3>
        
        <motion.p
          animate={{ opacity: isHovered || isMobile ? 0.8 : 0.4 }}
          className="text-sm leading-relaxed text-white/40 font-light"
        >
          {description}
        </motion.p>

        {/* Expand Indicator */}
        <div className="mt-auto pt-8">
          <div className="h-[1px] w-full bg-white/5 overflow-hidden">
            <motion.div
              animate={{ x: isHovered || isMobile ? "0%" : "-100%" }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-mono text-[8px] tracking-[0.3em] text-white/20 uppercase group-hover:text-white/40 transition-colors">
              Exploration 0{index + 1}
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
          </div>
        </div>
      </div>

      {/* Decorative Gradient Edge */}
      {intensity !== "low" && (
        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      )}
    </motion.div>
  );
};
