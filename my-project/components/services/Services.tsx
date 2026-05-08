"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Video, 
  Camera, 
  Layers, 
  Share2, 
  TrendingUp, 
  ShoppingBag 
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";

const SERVICES = [
  {
    title: "Video Editing",
    description: "High-end post-production for commercials, narratives, and cinematic content. We blend rhythm with emotion to tell your story.",
    icon: Video
  },
  {
    title: "Brand Shoots",
    description: "Full-scale production for lifestyle, fashion, and corporate branding. Capturing the essence of your identity through our lens.",
    icon: Camera
  },
  {
    title: "Motion Graphics",
    description: "Dynamic 2D/3D animations that bring static ideas to life. Elevate your brand with smooth, high-fidelity visual effects.",
    icon: Layers
  },
  {
    title: "Social Media Management",
    description: "Strategic content creation and community growth. We manage your presence while you focus on your vision.",
    icon: Share2
  },
  {
    title: "Paid Promotions",
    description: "Data-driven advertising campaigns that convert. High-performance cinematic ads designed for maximum ROI.",
    icon: TrendingUp
  },
  {
    title: "Product Commercials",
    description: "Dramatic product showcases that highlight every detail. Transforming items into high-end objects of desire.",
    icon: ShoppingBag
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />

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
              Our Capabilities
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            SERVICES <span className="text-white/20">SPECTRUM.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-white/60 font-light leading-relaxed"
          >
            We provide a comprehensive range of premium cinematic solutions designed to elevate brands 
            from mere visibility to absolute presence.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
