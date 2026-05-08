"use client";

import React from "react";
import { motion } from "framer-motion";

interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
  isLeft: boolean;
  index: number;
}

export const WorkflowStep: React.FC<WorkflowStepProps> = ({ 
  number, 
  title, 
  description, 
  isLeft, 
  index 
}) => {
  return (
    <div className={`relative flex w-full mb-24 md:mb-32 ${isLeft ? "justify-start" : "justify-end"}`}>
      {/* Step Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`
          relative w-full md:w-[45%] p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-md
          hover:bg-white/[0.05] hover:border-white/10 transition-colors group
        `}
      >
        <div className="flex flex-col gap-4">
          <span className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase group-hover:text-white/40 transition-colors">
            Phase {number}
          </span>
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {title}
          </h3>
          <p className="text-sm text-white/40 font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* Decorative corner accent */}
        <div className={`
          absolute top-0 ${isLeft ? "right-0" : "left-0"} h-px w-0 bg-white/20 
          transition-all duration-700 group-hover:w-1/4
        `} />
      </motion.div>

      {/* Center Node (Hidden on mobile, handled by parent on mobile) */}
      <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.4 }}
          viewport={{ once: true }}
          className="h-10 w-10 rounded-full bg-black border border-white/20 flex items-center justify-center group"
        >
          <div className="h-2 w-2 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
          
          {/* Active Glow (handled by GSAP parent via class or state) */}
          <div className="step-glow absolute inset-0 rounded-full bg-white opacity-0 blur-md pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};
