"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import { ReelCard } from "./ReelCard";
import { ReelFilters } from "./ReelFilters";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const REEL_DATA = [
  {
    id: "1",
    title: "Urban Nocturne",
    category: "Commercial",
    views: "24.5K",
    videoUrl: "https://res.cloudinary.com/dl7h2uexp/video/upload/q_auto,f_auto,w_720/v1778164130/10253173-uhd_4096_2160_25fps_zv1m1b.mp4"
  },
  {
    id: "2",
    title: "Mountain Whisper",
    category: "Narrative",
    views: "12.2K",
    videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=72ad57a584cfc134096a39c843020cc473551ee6&profile_id=164&oauth2_token_id=57447761"
  },
  {
    id: "3",
    title: "Neon Pulse",
    category: "Music Videos",
    views: "45.8K",
    videoUrl: "https://res.cloudinary.com/dl7h2uexp/video/upload/q_auto,f_auto,w_720/v1778164130/10253173-uhd_4096_2160_25fps_zv1m1b.mp4"
  },
  {
    id: "4",
    title: "Golden Hour",
    category: "Wedding",
    views: "8.9K",
    videoUrl: "https://cdn.pixabay.com/video/2023/10/24/186315-877741639_tiny.mp4"
  },
  {
    id: "5",
    title: "The Silent Peak",
    category: "Narrative",
    views: "31.2K",
    videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=72ad57a584cfc134096a39c843020cc473551ee6&profile_id=164&oauth2_token_id=57447761"
  }
];

export const ReelSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredReels = activeCategory === "All" 
    ? REEL_DATA 
    : REEL_DATA.filter(reel => reel.category === activeCategory);

  return (
    <section id="works" className="relative py-32 px-6 overflow-hidden bg-black">
      {/* Floating Section Heading */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-4"
        >
          <div className="h-[1px] w-8 bg-white/20" />
          <span className="font-mono text-[10px] tracking-[0.4em] text-white/40 uppercase">
            Work Showcase
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
        >
          CINEMATIC <span className="text-white/20">REELS.</span>
        </motion.h2>

        <div className="mt-12">
          <ReelFilters 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
        </div>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-[100vw] lg:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
        <Swiper
          modules={[FreeMode, Mousewheel]}
          spaceBetween={24}
          slidesPerView={1.2}
          freeMode={true}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 4.2 },
          }}
          className="reel-swiper overflow-visible!"
        >
          {filteredReels.map((reel) => (
            <SwiperSlide key={reel.id}>
              <ReelCard {...reel} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};
