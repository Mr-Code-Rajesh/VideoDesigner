"use client";

import React from "react";
import { motion } from "framer-motion";

export const TimelineUI: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-zinc-950/50 rounded-xl border border-white/5 overflow-hidden p-4">
      {/* Time Ruler */}
      <div className="absolute top-0 left-0 w-full h-6 border-b border-white/5 bg-zinc-950 flex items-center px-4 gap-12">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="font-mono text-[8px] text-white/20 tabular-nums">
            00:0{i}:00:00
          </span>
        ))}
      </div>

      <div className="mt-8 space-y-4 h-full relative">
        {/* Video Tracks */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-[8px] text-white/20 w-4">V3</span>
          <div className="h-8 w-64 bg-purple-500/20 border border-purple-500/40 rounded-md flex items-center px-3">
            <span className="font-mono text-[8px] text-purple-200">Graphics_Layer</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[8px] text-white/20 w-4">V2</span>
          <div className="h-8 w-full flex gap-2">
            <div className="h-full w-48 bg-blue-500/20 border border-blue-500/40 rounded-md flex items-center px-3">
              <span className="font-mono text-[8px] text-blue-200">Overlay_01</span>
            </div>
            <div className="h-full w-32 bg-blue-500/20 border border-blue-500/40 rounded-md" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[8px] text-white/20 w-4">V1</span>
          <div className="h-12 w-full flex gap-1">
            <div className="h-full w-full bg-zinc-800/40 border border-white/10 rounded-md flex items-center px-3">
              <span className="font-mono text-[8px] text-white/40 italic">Main_Footage_RAW</span>
            </div>
          </div>
        </div>

        {/* Audio Tracks */}
        <div className="pt-4 border-t border-white/5 space-y-2">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[8px] text-white/20 w-4">A1</span>
            <div className="h-6 w-full bg-green-500/10 border border-green-500/20 rounded-md relative overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_50%,rgba(0,255,0,0.2)_50%)] bg-[length:4px_100%]" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[8px] text-white/20 w-4">A2</span>
            <div className="h-6 w-[70%] bg-green-500/10 border border-green-500/20 rounded-md" />
          </div>
        </div>

        {/* Moving Playhead */}
        <motion.div
          animate={{
            left: ["0%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 bottom-0 w-[2px] bg-red-500 z-10 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-4 bg-red-500 rounded-b-sm" />
        </motion.div>
      </div>
    </div>
  );
};
