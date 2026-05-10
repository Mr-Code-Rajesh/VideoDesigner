"use client";

import React from "react";
import { BTSCard } from "./BTSCard";

const BTS_ITEMS = [
  {
    type: "video" as const,
    url: "https://res.cloudinary.com/dl7h2uexp/video/upload/q_auto,f_auto,w_720/v1778164130/10253173-uhd_4096_2160_25fps_zv1m1b.mp4",
    caption: "Midnight Grading Session",
    location: "Studio A",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    type: "image" as const,
    url: "https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "RED V-Raptor Config",
    location: "On Set",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    type: "video" as const,
    url: "https://player.vimeo.com/external/494252666.sd.mp4?s=72ad57a584cfc134096a39c843020cc473551ee6&profile_id=164&oauth2_token_id=57447761",
    caption: "Narrative Pacing Check",
    location: "Edit Suite",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    type: "image" as const,
    url: "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    caption: "Lenses & Atmosphere",
    location: "Studio",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    type: "video" as const,
    url: "https://cdn.pixabay.com/video/2023/10/24/186315-877741639_tiny.mp4",
    caption: "Cinematic Drone Prep",
    location: "Base Camp",
    span: "md:col-span-2 md:row-span-1"
  }
];

export const BTSGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-[1400px] md:h-[900px]">
      {BTS_ITEMS.map((item, index) => (
        <BTSCard key={index} {...item} />
      ))}
    </div>
  );
};
