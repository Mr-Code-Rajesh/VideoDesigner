"use client";

import React from "react";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Commercial", "Music Videos", "Narrative", "Wedding"];

interface ReelFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const ReelFilters: React.FC<ReelFiltersProps> = ({ 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className="group relative px-6 py-2 transition-colors"
        >
          <span className={`
            font-mono text-[10px] tracking-[0.2em] uppercase transition-colors duration-500
            ${activeCategory === category ? "text-white" : "text-white/40 group-hover:text-white/80"}
          `}>
            {category}
          </span>
          
          {activeCategory === category && (
            <motion.div
              layoutId="active-filter"
              className="absolute bottom-0 left-0 h-[1px] w-full bg-white"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};
