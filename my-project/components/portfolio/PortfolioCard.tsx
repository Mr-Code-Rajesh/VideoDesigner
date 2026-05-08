"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  imageUrl: string;
  videoUrl: string;
  span?: string; // Tailwind grid span classes
}

interface PortfolioCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => onClick(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        relative group cursor-pointer overflow-hidden rounded-3xl bg-zinc-900
        ${project.span || "col-span-1 row-span-1"}
      `}
    >
      {/* Static Image / Background */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Video Preview (Overlay) */}
      <video
        ref={videoRef}
        src={project.videoUrl}
        muted
        loop
        playsInline
        className={`
          absolute inset-0 h-full w-full object-cover transition-opacity duration-500
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
      
      {/* Label / Metadata */}
      <div className="absolute inset-x-0 bottom-0 p-8 flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[8px] tracking-[0.3em] text-white/60 uppercase">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tighter">
            {project.title}
          </h3>
        </div>
        
        <motion.div
          animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20"
        >
          <Play size={16} fill="white" className="text-white ml-0.5" />
        </motion.div>
      </div>

      {/* Glassmorphism Border */}
      <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none group-hover:border-white/20 transition-colors duration-500" />
    </motion.div>
  );
};
