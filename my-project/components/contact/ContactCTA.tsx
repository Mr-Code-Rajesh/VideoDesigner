"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export const ContactCTA: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative py-40 px-6 bg-black overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="font-mono text-[10px] tracking-[0.6em] text-white/40 uppercase">
            Final Step
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-[0.9] mb-12"
        >
          YOUR BRAND DESERVES <br />
          <span className="text-white/20">MORE THAN ORDINARY.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="group relative flex items-center gap-6 px-12 py-6 rounded-full bg-white text-black font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
            <span className="relative z-10">Book A Creative Call</span>
            <div className="relative z-10 p-2 rounded-full bg-black text-white group-hover:rotate-12 transition-transform">
              <Calendar size={20} />
            </div>
            
            {/* Glow */}
            <div className="absolute -inset-1 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 font-mono text-[10px] text-white uppercase tracking-[0.4em]"
        >
          Availability for Q3 2026 is strictly limited.
        </motion.p>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {mounted && Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
            }}
            className="absolute h-[1px] w-[1px] bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};
