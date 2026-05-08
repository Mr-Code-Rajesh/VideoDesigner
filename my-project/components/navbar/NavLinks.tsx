"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LINKS = [
  { name: "Home", href: "/#home" },
  { name: "Works", href: "/#works" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Behind The Scenes", href: "/#bts" },
  { name: "Contact", href: "/contact" },
];

export const NavLinks: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    LINKS.forEach((link) => {
      if (link.href.startsWith("/#")) {
        const element = document.getElementById(link.href.replace("/#", ""));
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {LINKS.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="group relative py-2"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 transition-colors uppercase group-hover:text-white">
            {link.name}
          </span>
          
          {/* Hover Underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-[1px] w-full bg-white origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          />
          
          {/* Active Indicator */}
          {activeSection === link.href.replace("/#", "") && (
            <motion.div
              layoutId="active-nav"
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-white"
            />
          )}
        </Link>
      ))}
    </nav>
  );
};
