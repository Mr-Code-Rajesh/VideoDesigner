"use client";

import React from "react";
import { motion } from "framer-motion";
import { VideoPreview } from "./VideoPreview";
import { TimelineUI } from "./TimelineUI";
import { Waveform } from "./Waveform";
import { 
  FolderOpen, 
  Search, 
  Layers, 
  Scissors, 
  MousePointer2, 
  Type, 
  Music 
} from "lucide-react";

import { usePerformance } from "@/hooks/use-performance";

export const EditingDesk: React.FC = () => {
  const { intensity, isMobile, isHydrated } = usePerformance();

  return (
    <section id="desk" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
              Production Environment
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            THE EDITING <span className="text-white/20">DESK.</span>
          </motion.h2>
        </div>

        {/* Main Interface Layout */}
        <div className={`flex flex-col gap-4 p-2 bg-zinc-900/50 border border-white/5 rounded-3xl shadow-2xl ${intensity !== "low" ? "backdrop-blur-xl" : ""}`}>
          {/* Top Row: Browser + Preview + Scopes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[500px]">
            {/* Project Browser */}
            {isHydrated && !isMobile && (
              <div className="lg:col-span-3 bg-zinc-950/50 rounded-2xl border border-white/5 p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                  <span className="font-mono text-[10px] text-white/40 uppercase">Media Pool</span>
                  <Search size={14} className="text-white/20" />
                </div>
                <div className="space-y-4 flex-grow overflow-y-auto no-scrollbar">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3 group cursor-pointer">
                      <div className="h-10 w-16 bg-zinc-800 rounded border border-white/5 flex items-center justify-center overflow-hidden">
                         <div className="h-full w-full bg-white/5 group-hover:bg-white/10 transition-colors" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white/60">Clip_00{i+1}.mp4</span>
                        <span className="text-[8px] font-mono text-white/20 uppercase">4K RAW</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Video Preview */}
            <div className={`${isHydrated && isMobile ? "col-span-1" : "lg:col-span-6"}`}>
              <VideoPreview />
            </div>

            {/* Audio Scopes / Waveform */}
            {isHydrated && !isMobile && (
              <div className="lg:col-span-3 bg-zinc-950/50 rounded-2xl border border-white/5 p-6 flex flex-col items-center justify-center">
                <span className="font-mono text-[10px] text-white/40 uppercase mb-4 self-start">Audio Meter</span>
                <Waveform />
              </div>
            )}
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-center gap-6 py-2 px-6 bg-zinc-950/50 rounded-xl border border-white/5 overflow-x-auto no-scrollbar">
            <MousePointer2 size={16} className="text-blue-500 flex-shrink-0" />
            <Scissors size={16} className="text-white/20 hover:text-white transition-colors flex-shrink-0" />
            <Type size={16} className="text-white/20 hover:text-white transition-colors flex-shrink-0" />
            <Layers size={16} className="text-white/20 hover:text-white transition-colors flex-shrink-0" />
            <div className="h-4 w-[1px] bg-white/10 flex-shrink-0" />
            <Music size={16} className="text-white/20 hover:text-white transition-colors flex-shrink-0" />
          </div>

          {/* Bottom Row: Timeline */}
          <div className="h-[200px] md:h-[300px]">
            <TimelineUI />
          </div>
        </div>
      </div>
    </section>
  );
};
