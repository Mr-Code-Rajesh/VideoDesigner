"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
  index: number;
}

import { usePerformance } from "@/hooks/use-performance";

export const StatCard: React.FC<StatCardProps> = ({ 
  label, 
  value, 
  suffix, 
  prefix, 
  description,
  index 
}) => {
  const { intensity, isMobile } = usePerformance();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col items-center justify-center p-12 text-center rounded-[40px] border border-white/5 bg-white/[0.02] shadow-xl overflow-hidden group ${intensity !== "low" ? "backdrop-blur-md" : ""}`}
    >
      {/* Background Pulse Glow - Reduced intensity for performance */}
      <motion.div
        animate={intensity === "low" ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute inset-0 bg-white rounded-full pointer-events-none ${intensity === "low" ? "opacity-[0.03] blur-[40px]" : "blur-[100px]"}`}
      />

      <div className="relative z-10">
        <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase mb-4 block">
          {label}
        </span>
        
        <div className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4 flex items-center justify-center">
          {prefix && <span className="text-3xl md:text-5xl mr-1 text-white/40">{prefix}</span>}
          {inView ? (
            <CountUp 
              end={value} 
              duration={2.5} 
              separator="," 
              suffix={suffix}
              decimals={value % 1 !== 0 ? 1 : 0}
            />
          ) : (
            <span>0</span>
          )}
        </div>

        <p className="text-sm text-white/40 font-light max-w-[180px] mx-auto leading-relaxed uppercase tracking-widest text-[10px]">
          {description}
        </p>
      </div>

      {/* Decorative Border Glow - Only on higher intensity */}
      {intensity !== "low" && (
        <div className="absolute inset-0 border border-white/10 rounded-[40px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      )}
    </motion.div>
  );
};
