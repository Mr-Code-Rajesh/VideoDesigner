"use client";

import React from "react";
import { motion } from "framer-motion";
import { GearCard } from "./GearCard";

const GEAR_ITEMS = [
  {
    name: "RED V-RAPTOR",
    model: "8K VV / 6K S35",
    category: "Main Camera",
    imageUrl: "https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder
    specs: ["8K Resolution", "120FPS", "Dynamic Range 17+"]
  },
  {
    name: "DJI INSPIRE 3",
    model: "X9-8K Air",
    category: "Aerial",
    imageUrl: "https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder
    specs: ["Full-Frame 8K", "RTK Precision", "Omni-Sensing"]
  },
  {
    name: "ZEISS SUPREME",
    model: "T1.5 / PL Mount",
    category: "Optics",
    imageUrl: "https://images.pexels.com/photos/3405234/pexels-photo-3405234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder
    specs: ["Sharp Contrast", "Velvet Bokeh", "Cinematic Falloff"]
  },
  {
    name: "MAC STUDIO",
    model: "M2 Ultra / 192GB",
    category: "Post-Production",
    imageUrl: "https://images.pexels.com/photos/38568/apple-imac-ipad-iphone-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Placeholder
    specs: ["Real-time 8K", "ProRes RAW", "Neural Engine"]
  }
];

export const GearSection: React.FC = () => {
  return (
    <section id="gear" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
              The Arsenal
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            PRODUCTION <span className="text-white/20">GEAR.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-white/60 font-light leading-relaxed"
          >
            We utilize world-class production equipment to ensure every project meets the highest industry 
            standards. From 8K RAW capture to elite post-production setups.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {GEAR_ITEMS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GearCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
