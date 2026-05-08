"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { TestimonialCard } from "./TestimonialCard";

const TESTIMONIALS = [
  {
    name: "Alexander Vance",
    role: "Marketing Director",
    company: "Luxe Dynamics",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The level of cinematic detail CreativeNex brings to our brand shoots is unmatched. They don't just edit; they engineer emotions.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "Prisma Tech",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Working with them transformed our social presence. Our engagement skyrocketed by 300% after the first campaign.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    role: "Creative Lead",
    company: "Neon Agency",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Their technical precision in 8K RAW editing and motion graphics is state-of-the-art. Highly recommended for premium brands.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Aura Interiors",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "The storytelling aspect of their work is what sets them apart. They found the 'soul' of our brand in every frame.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-32 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
              Client Consensus
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            TRUSTED BY <span className="text-white/20">THE BEST.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-white/60 font-light leading-relaxed"
          >
            Don't just take our word for it. Explore the experiences of luxury brands and industry leaders who have partnered with us to elevate their visual identity.
          </motion.p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative py-10">
        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={true}
          gradientColor="black"
          gradientWidth={200}
          className="overflow-hidden"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
          {/* Repeat for seamless loop if needed, Marquee handles this but more cards help */}
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={`repeat-${index}`} {...testimonial} />
          ))}
        </Marquee>

        {/* Cinematic Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-10 bg-[length:100%_4px,3px_100%]" />
      </div>

      <div className="mt-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center gap-8 border border-white/5 bg-white/[0.02] p-8 rounded-full backdrop-blur-md"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-white tabular-nums">4.9</p>
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-1">Avg Rating</p>
          </div>
          <div className="h-10 w-[1px] bg-white/10" />
          <div className="text-center">
            <p className="text-3xl font-bold text-white tabular-nums">100%</p>
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-1">Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
