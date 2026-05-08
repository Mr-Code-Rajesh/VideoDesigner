"use client";

import React from "react";
import { motion } from "framer-motion";

const SOCIAL_PLATFORMS = [
  { name: "Instagram", handle: "@creativenex.studio", color: "from-purple-500/10" },
  { name: "Behance", handle: "creativenex", color: "from-blue-500/10" },
  { name: "YouTube", handle: "CreativeNex Studio", color: "from-red-500/10" },
  { name: "LinkedIn", handle: "CreativeNex Agency", color: "from-cyan-500/10" },
];

export const SocialConnect: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_PLATFORMS.map((platform, i) => (
            <motion.a
              key={platform.name}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{platform.name}</h3>
                <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">{platform.handle}</p>
              </div>
              
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              {/* Arrow */}
              <div className="absolute top-10 right-10 text-white/10 group-hover:text-white transition-all duration-500 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
