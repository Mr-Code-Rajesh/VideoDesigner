"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Works", href: "#works" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Behind The Scenes", href: "#bts" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const SERVICES = [
  "Video Editing",
  "Brand Shoots",
  "Motion Graphics",
  "Product Commercials",
  "Social Media Management",
  "Paid Promotions",
];

export const FooterLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-12 lg:gap-24">
      {/* Navigation */}
      <div>
        <h4 className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase mb-8">Navigation</h4>
        <ul className="space-y-4">
          {NAV_LINKS.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link 
                href={link.href}
                className="text-white/60 hover:text-white transition-colors text-sm font-light relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase mb-8">Services</h4>
        <ul className="space-y-4">
          {SERVICES.map((service, i) => (
            <motion.li
              key={service}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <span className="text-white/40 text-sm font-light hover:text-white/80 transition-colors cursor-default">
                {service}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};
