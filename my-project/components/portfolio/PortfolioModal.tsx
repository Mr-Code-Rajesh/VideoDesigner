"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Tag } from "lucide-react";
import { Project } from "./PortfolioCard";

interface PortfolioModalProps {
  project: Project | null;
  onClose: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Content Container */}
        <motion.div
          layoutId={`card-${project.id}`}
          className="relative w-full max-w-6xl max-h-full overflow-y-auto rounded-[40px] bg-zinc-950 border border-white/10 shadow-2xl no-scrollbar"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-50 h-12 w-12 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white transition-transform hover:scale-110 active:scale-95"
          >
            <X size={24} />
          </button>

          {/* Full Screen Video / Main Media */}
          <div className="relative aspect-video w-full">
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          </div>

          {/* Project Details */}
          <div className="p-8 md:p-16">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-grow">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.4, y: 0 }}
                  className="font-mono text-xs tracking-[0.4em] text-white uppercase"
                >
                  {project.category}
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mt-4 text-4xl md:text-7xl font-bold text-white tracking-tighter"
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.6, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 text-lg text-white font-light leading-relaxed max-w-2xl"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </motion.p>
              </div>

              <div className="lg:w-72 shrink-0 space-y-8">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-white/20">
                    <Calendar size={14} />
                    <span className="font-mono text-[10px] uppercase tracking-widest">Year</span>
                  </div>
                  <p className="text-white font-medium">{project.year}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-white/20">
                    <MapPin size={14} />
                    <span className="font-mono text-[10px] uppercase tracking-widest">Location</span>
                  </div>
                  <p className="text-white font-medium">New York, NY</p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-white/20">
                    <Tag size={14} />
                    <span className="font-mono text-[10px] uppercase tracking-widest">Role</span>
                  </div>
                  <p className="text-white font-medium">Direction / Post-Production</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
