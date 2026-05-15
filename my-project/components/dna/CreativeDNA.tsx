"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { usePerformance } from "@/hooks/use-performance";

const ALL_KEYWORDS = [
  { text: "Storytelling", size: "text-4xl md:text-6xl", top: "15%", left: "10%", speed: 0.05 },
  { text: "Cinematic", size: "text-5xl md:text-8xl", top: "40%", left: "30%", speed: 0.08 },
  { text: "Viral", size: "text-3xl md:text-5xl", top: "20%", left: "70%", speed: 0.04 },
  { text: "Branding", size: "text-4xl md:text-7xl", top: "70%", left: "15%", speed: 0.06 },
  { text: "Emotion", size: "text-5xl md:text-9xl", top: "60%", left: "55%", speed: 0.1 },
  { text: "Motion", size: "text-4xl md:text-6xl", top: "80%", left: "75%", speed: 0.05 },
  { text: "Luxury", size: "text-3xl md:text-4xl", top: "10%", left: "45%", speed: 0.03 },
];

interface FloatingWordProps {
  word: typeof ALL_KEYWORDS[0];
  springX: any;
  springY: any;
  scrollYProgress: any;
}

const FloatingWord: React.FC<FloatingWordProps> = ({ 
  word, 
  springX, 
  springY, 
  scrollYProgress 
}) => {
  const x = useTransform(springX, (val: number) => val * word.speed * 5);
  const y = useTransform(springY, (val: number) => val * word.speed * 5);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]);

  return (
    <motion.div
      style={{
        top: word.top,
        left: word.left,
        x,
        y,
        opacity,
        willChange: "transform, opacity",
      }}
      className={`absolute font-bold tracking-tighter text-white select-none whitespace-nowrap ${word.size}`}
    >
      {word.text}
    </motion.div>
  );
};

export const CreativeDNA: React.FC = () => {
  const { isMobile, intensity, isHydrated } = usePerformance();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Define keywords logic - keep it stable to avoid unnecessary re-renders
  const KEYWORDS = isHydrated && isMobile ? ALL_KEYWORDS.slice(0, 4) : ALL_KEYWORDS;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x * 100);
    mouseY.set(y * 100);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen py-32 bg-black overflow-hidden flex items-center justify-center cursor-none"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />

      {/* Floating Keywords - Refactored to sub-component to follow hook rules */}
      {KEYWORDS.map((word, i) => (
        <FloatingWord 
          key={word.text} // Using word.text as key is more stable than index
          word={word}
          springX={springX}
          springY={springY}
          scrollYProgress={scrollYProgress}
        />
      ))}

      {/* Central Statement */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
            Our Core Identity
          </span>
          <div className="h-[1px] w-8 bg-white/20" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-[12rem] font-bold text-white leading-[0.8] tracking-tighter"
        >
          CREATIVE <br />
          <span className="text-white/10 outline-text">DNA.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-lg md:text-2xl text-white font-light tracking-tight max-w-2xl mx-auto leading-relaxed"
        >
          We don't just edit videos. We engineer emotional connections through 
          high-production cinematic storytelling and data-driven visual presence.
        </motion.p>
      </div>

      {/* Mouse Glow Follower */}
      {isHydrated && !isMobile && (
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            left: "50%",
            top: "50%",
          }}
          className="fixed top-0 left-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none mix-blend-overlay z-0"
        />
      )}

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.2);
          color: transparent;
        }
      `}</style>
    </section>
  );
};

