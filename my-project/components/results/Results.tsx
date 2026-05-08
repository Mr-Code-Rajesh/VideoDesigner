"use client";

import React from "react";
import { motion } from "framer-motion";
import { StatCard } from "./StatCard";

const STATS = [
  {
    label: "Global Reach",
    value: 20,
    suffix: "M+",
    description: "Views Generated Across Platforms"
  },
  {
    label: "Production Vol",
    value: 500,
    suffix: "+",
    description: "Premium Videos Edited & Delivered"
  },
  {
    label: "Partnerships",
    value: 120,
    suffix: "+",
    description: "Global Clients & Luxury Brands"
  },
  {
    label: "Impact",
    value: 240,
    suffix: "%",
    description: "Avg Engagement Growth for Clients"
  }
];

export const Results: React.FC = () => {
  return (
    <section id="results" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Floating Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
              The Data
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            PROVEN <span className="text-white/20">RESULTS.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StatCard 
              key={stat.label}
              {...stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
