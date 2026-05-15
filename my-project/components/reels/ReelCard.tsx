"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, Pause, Eye } from "lucide-react";

interface ReelCardProps {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  views: string;
}

import { usePerformance } from "@/hooks/use-performance";

export const ReelCard: React.FC<ReelCardProps> = ({ 
  title, 
  category, 
  videoUrl, 
  views 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { intensity, isMobile, isHydrated } = usePerformance();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // Auto-play/pause based on viewport
  useEffect(() => {
    if (!videoRef.current) return;
    if (inView && (isHovered || (isHydrated && isMobile))) { // Auto-play on mobile when in view
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [inView, isHovered, isMobile]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl"
    >
      {/* Video Content */}
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        muted
        playsInline
        preload="none"
        style={{ willChange: "transform" }}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Glassmorphism Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
      
      {/* Hover Overlay - Simplified for hydration stability */}
      <AnimatePresence>
        {!isHovered && (!isHydrated || !isMobile) && (
          <motion.div
            key="play-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/20"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <Play fill="white" className="ml-1 text-white" size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* Metadata Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <motion.div
          animate={{ y: isHovered ? 0 : 5 }}
          className="flex flex-col gap-1"
        >
          <span className="font-mono text-[8px] tracking-[0.3em] text-white/60 uppercase">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white tracking-tight">
            {title}
          </h3>
          
          <div className={`flex items-center gap-4 mt-4 transition-opacity duration-500 ${isHovered || (isHydrated && isMobile) ? "opacity-100" : "opacity-0"}`}>
            <div className="flex items-center gap-1">
              <Eye size={12} className="text-white/60" />
              <span className="font-mono text-[8px] text-white/60">{views}</span>
            </div>
            <div className="h-4 w-[1px] bg-white/20" />
            <button className="font-mono text-[8px] text-white tracking-widest uppercase hover:text-white/60">
              View Case Study
            </button>
          </div>
        </motion.div>
      </div>

      {/* Glow Edge Effect on Hover - Only on High Intensity */}
      {intensity === "high" && (
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-[-1px] rounded-2xl border border-white/20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent" />
        </div>
      )}
    </motion.div>
  );
};
