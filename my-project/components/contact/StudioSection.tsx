"use client";

import React from "react";
import { motion } from "framer-motion";

const STUDIO_IMAGES = [
  {
    url: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "lg:col-span-2 lg:row-span-2",
    label: "Main Editing Suite"
  },
  {
    url: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "lg:col-span-1 lg:row-span-1",
    label: "Camera Rig Setup"
  },
  {
    url: "https://images.pexels.com/photos/7063763/pexels-photo-7063763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "lg:col-span-1 lg:row-span-1",
    label: "Audio Grading"
  },
  {
    url: "https://images.pexels.com/photos/6613865/pexels-photo-6613865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    size: "lg:col-span-2 lg:row-span-1",
    label: "Creative Collaboration"
  }
];

export const StudioSection: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-8 bg-white/20" />
              <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
                The Environment
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
              WHERE THE MAGIC <span className="text-white/20">HAPPENS.</span>
            </motion.h2>
          </div>
          <p className="text-white/40 font-light max-w-sm text-right">
            Our studio is engineered for creative flow, featuring state-of-the-art 
            editing suites and high-performance production gear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 h-[1000px] lg:h-[700px]">
          {STUDIO_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-[2rem] border border-white/5 group cursor-pointer ${img.size}`}
            >
              <img
                src={img.url}
                alt={img.label}
                className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div>
                  <span className="font-mono text-[8px] text-white/40 uppercase tracking-[0.4em] mb-2 block">
                    Workspace Visual
                  </span>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {img.label}
                  </h3>
                </div>
              </div>

              {/* HUD Frame */}
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/10 transition-all duration-700 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
