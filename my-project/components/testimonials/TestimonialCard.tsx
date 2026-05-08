"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  name, 
  role, 
  company, 
  image, 
  quote, 
  rating 
}) => {
  return (
    <div className="w-[450px] mx-4 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 backdrop-blur-md group hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500">
      <div className="flex flex-col h-full">
        {/* Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < rating ? "text-white fill-white" : "text-white/10"} 
              />
            ))}
          </div>
          <Quote size={20} className="text-white/10 group-hover:text-white/20 transition-colors" />
        </div>

        {/* Quote Content */}
        <p className="text-lg text-white/70 font-light leading-relaxed mb-10 italic">
          "{quote}"
        </p>

        {/* Client Info */}
        <div className="flex items-center gap-4 mt-auto">
          <div className="h-12 w-12 rounded-full overflow-hidden border border-white/10">
            <img src={image} alt={name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-tight">{name}</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{role}</span>
              <div className="h-1 w-1 rounded-full bg-white/10" />
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
