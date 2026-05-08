"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WorkflowStep } from "./WorkflowStep";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "Strategy",
    description: "We define the creative vision, objectives, and narrative structure. Every frame starts with a purpose.",
  },
  {
    number: "02",
    title: "Shooting",
    description: "High-end production using industry-standard gear. We capture the raw emotion and technical precision needed for post.",
  },
  {
    number: "03",
    title: "Editing",
    description: "The assembly of visual storytelling. We craft rhythm, pacing, and flow to maintain maximum viewer engagement.",
  },
  {
    number: "04",
    title: "Motion Graphics",
    description: "Enhancing the narrative with 2D/3D elements, typography, and visual effects that add a layer of sophistication.",
  },
  {
    number: "05",
    title: "Delivery",
    description: "Final color grading, sound design, and optimization for all platforms. We ensure your brand presence is impactful.",
  },
];

export const Workflow: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the progress line height based on scroll
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      // Animate glows for each step as they hit the center
      const steps = gsap.utils.toArray(".step-glow");
      steps.forEach((glow: any) => {
        gsap.to(glow, {
          opacity: 0.3,
          duration: 0.5,
          scrollTrigger: {
            trigger: glow,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative py-32 px-6 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
              Production Journey
            </span>
            <div className="h-[1px] w-8 bg-white/20" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            OUR <span className="text-white/20">PROCESS.</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Central Progress Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/5 hidden md:block">
            <div 
              ref={lineRef} 
              className="absolute top-0 w-full bg-gradient-to-b from-transparent via-white/40 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.3)] h-0"
            />
          </div>

          {/* Mobile Left-aligned Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 md:hidden" />

          {/* Steps */}
          <div className="relative space-y-12">
            {STEPS.map((step, index) => (
              <WorkflowStep
                key={step.number}
                {...step}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
