"use client";

import React from "react";
import { motion } from "framer-motion";
import { Maximize2, Settings, Volume2 } from "lucide-react";

export const VideoPreview: React.FC = () => {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black border border-white/10 group">
      {/* Main Video Source */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        src="https://res.cloudinary.com/dl7h2uexp/video/upload/v1778164130/10253173-uhd_4096_2160_25fps_zv1m1b.mp4"
      />

      {/* Technical HUD Overlays */}
      <div className="absolute top-4 left-4 flex gap-4 pointer-events-none">
        <div className="flex flex-col">
          <span className="font-mono text-[8px] text-white/40 uppercase">Timecode</span>
          <span className="font-mono text-[10px] text-white tabular-nums">00:04:12:15</span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[8px] text-white/40 uppercase">Format</span>
          <span className="font-mono text-[10px] text-white uppercase">4K RAW 24FPS</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none">
        <div className="px-2 py-0.5 rounded-md bg-red-500/20 border border-red-500/40">
          <span className="font-mono text-[8px] text-red-500 font-bold uppercase animate-pulse">Rec</span>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white/60">
            <Volume2 size={16} />
            <div className="h-1 w-24 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[80%] bg-white" />
            </div>
          </div>
          <div className="flex items-center gap-4 text-white/60">
            <Settings size={16} />
            <Maximize2 size={16} />
          </div>
        </div>
      </div>

      {/* Focus Corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-white/20" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-white/20" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-white/20" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-white/20" />
    </div>
  );
};
