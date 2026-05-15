"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const NavbarLogo: React.FC = () => {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/20 bg-white/5 p-1.5 transition-colors group-hover:border-white/40">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M30 20L80 50L30 80V20Z"
            fill="currentColor"
            className="transition-transform duration-500 group-hover:scale-110"
          />
        </svg>
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
        />
      </div>
      <span className="font-mono text-xs tracking-[0.3em] text-white uppercase font-bold transition-opacity group-hover:opacity-80">
        CR7<span className="text-white/40 font-light ml-1">STUDIO</span>
      </span>
    </Link>
  );
};
