"use client";

import React, { useState } from "react";
import { PortfolioCard, Project } from "./PortfolioCard";
import { PortfolioModal } from "./PortfolioModal";

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Urban Nocturne",
    category: "Commercial",
    year: "2024",
    imageUrl: "https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoUrl: "https://res.cloudinary.com/dl7h2uexp/video/upload/q_auto,f_auto,w_720/v1778164130/10253173-uhd_4096_2160_25fps_zv1m1b.mp4",
    span: "md:col-span-2 md:row-span-2"
  },
  {
    id: "2",
    title: "Mountain Whisper",
    category: "Narrative",
    year: "2023",
    imageUrl: "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=72ad57a584cfc134096a39c843020cc473551ee6&profile_id=164&oauth2_token_id=57447761",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "3",
    title: "Neon Pulse",
    category: "Music Videos",
    year: "2024",
    imageUrl: "https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoUrl: "https://res.cloudinary.com/dl7h2uexp/video/upload/q_auto,f_auto,w_720/v1778164130/10253173-uhd_4096_2160_25fps_zv1m1b.mp4",
    span: "md:col-span-1 md:row-span-2"
  },
  {
    id: "4",
    title: "Golden Hour",
    category: "Wedding",
    year: "2023",
    imageUrl: "https://images.pexels.com/photos/3532545/pexels-photo-3532545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoUrl: "https://cdn.pixabay.com/video/2023/10/24/186315-877741639_tiny.mp4",
    span: "md:col-span-1 md:row-span-1"
  },
  {
    id: "5",
    title: "The Silent Peak",
    category: "Narrative",
    year: "2024",
    imageUrl: "https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=72ad57a584cfc134096a39c843020cc473551ee6&profile_id=164&oauth2_token_id=57447761",
    span: "md:col-span-2 md:row-span-1"
  }
];

export const PortfolioGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 h-[1200px] md:h-[800px]">
        {PROJECTS.map((project) => (
          <PortfolioCard 
            key={project.id} 
            project={project} 
            onClick={setSelectedProject} 
          />
        ))}
      </div>

      <PortfolioModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
};
