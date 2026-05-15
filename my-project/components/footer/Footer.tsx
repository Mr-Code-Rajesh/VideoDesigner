"use client";

import React from "react";
import { motion } from "framer-motion";
import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterCTA } from "./FooterCTA";
import { SocialLinks } from "./SocialLinks";
import { BackToTopButton } from "./BackToTopButton";

import { usePerformance } from "@/hooks/use-performance";

export const Footer: React.FC = () => {
  const { intensity } = usePerformance();

  return (
    <footer className="relative bg-black pt-32 pb-12 overflow-hidden">
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-10" />

      {/* Background Floating Glows */}
      <div className={`absolute -top-24 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full pointer-events-none ${intensity === "low" ? "blur-[80px]" : "blur-[150px]"}`} />
      {intensity !== "low" && (
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
      )}

      {/* Noise Texture (Overlay) */}
      {intensity !== "low" && (
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-30">
        {/* Top Footer Section: CTA + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 pb-24 border-b border-white/5">
          <div className="space-y-20">
            <FooterBrand />
            <FooterCTA />
          </div>
          <div className="flex flex-col justify-between py-4">
            <FooterLinks />
            <div className="mt-20">
              <h4 className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase mb-6">Contact</h4>
              <p className="text-white/60 font-light hover:text-white transition-colors cursor-pointer mb-2">hello@creativenex.studio</p>
              <p className="text-white/60 font-light hover:text-white transition-colors cursor-pointer">+1 (555) 0123 4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section: Socials + Copyright */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-center md:text-left">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              © 2026 CR7 Studio. All Rights Reserved.
            </p>
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              Built with passion for cinematic excellence.
            </p>
          </div>

          <SocialLinks />
        </div>
      </div>

      {/* Floating Back To Top */}
      <BackToTopButton />

      {/* Subtle Divider Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
};
