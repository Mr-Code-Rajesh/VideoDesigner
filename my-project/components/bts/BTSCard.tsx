"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BTSCardProps {
  type: "image" | "video";
  url: string;
  caption: string;
  location: string;
  span?: string;
}

export const BTSCard: React.FC<BTSCardProps> = ({ 
  type, 
  url, 
  caption, 
  location, 
  span 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (type === "video") videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (type === "video") {
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`
        relative group overflow-hidden rounded-2xl bg-zinc-900 border border-white/5
        ${span || "col-span-1 row-span-1"}
      `}
    >
      {/* Media Layer */}
      {type === "image" ? (
        <img
          src={url}
          alt={caption}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      ) : (
        <video
          ref={videoRef}
          src={url}
          muted
          loop
          playsInline
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      )}

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      
      {/* Caption Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px w-4 bg-white/40" />
          <span className="font-mono text-[8px] tracking-[0.4em] text-white/60 uppercase">
            {location}
          </span>
        </div>
        <p className="text-sm font-medium text-white tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
          {caption}
        </p>
      </div>

      {/* Viewport Frame (Documentary Style) */}
      <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 transition-colors pointer-events-none" />
      <div className="absolute top-6 left-6 h-2 w-2 border-t border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-6 right-6 h-2 w-2 border-t border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-6 left-6 h-2 w-2 border-b border-l border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-6 right-6 h-2 w-2 border-b border-r border-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};
