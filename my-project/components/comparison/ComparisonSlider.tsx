"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
}

export const ComparisonSlider: React.FC<ComparisonSliderProps> = ({ 
  beforeImage, 
  afterImage 
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Percent position of the slider (0 to 100)
  const position = useMotionValue(50);
  const springPosition = useSpring(position, { stiffness: 100, damping: 20 });
  
  // Transform percentage to clip path string
  const clipPath = useTransform(springPosition, (p) => `inset(0 ${100 - p}% 0 0)`);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    
    const relativeX = x - containerRect.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / containerRect.width) * 100));
    
    position.set(percentage);
  };

  const onMouseDown = () => setIsResizing(true);
  const onMouseUp = () => setIsResizing(false);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", onMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isResizing]);

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl cursor-col-resize select-none"
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Before Image (Clipping Layer) */}
      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 z-10 h-full w-full overflow-hidden"
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>

      {/* Slider Line & Handle */}
      <motion.div
        style={{ left: `${springPosition.get()}%` }}
        className="absolute inset-y-0 z-20 w-[2px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-md shadow-2xl">
          <div className="flex gap-1">
            <div className="h-3 w-[1px] bg-white/60" />
            <div className="h-3 w-[1px] bg-white/60" />
          </div>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-30 flex justify-between px-8">
        <div className="rounded-full border border-white/10 bg-black/20 px-4 py-1.5 backdrop-blur-md">
          <span className="font-mono text-[8px] tracking-[0.3em] text-white/60 uppercase">Raw Footage</span>
        </div>
        <div className="rounded-full border border-white/10 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <span className="font-mono text-[8px] tracking-[0.3em] text-white uppercase">Color Graded</span>
        </div>
      </div>

      {/* Hover Instruction */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 z-0 bg-black/10 transition-opacity"
      />
    </div>
  );
};
