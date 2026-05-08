"use client";

import React from "react";
import { motion } from "framer-motion";

const SOCIALS = [
  { 
    label: "Instagram", 
    href: "#", 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    )
  },
  { 
    label: "YouTube", 
    href: "#", 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z"></path>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
      </svg>
    )
  },
  { 
    label: "Behance", 
    href: "#", 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M9.13 14.5c.2.3.4.5.7.5.4 0 .8-.4.8-1.1h-1.5c0 .4.1.7.2.9zM18.8 12c-.2-.3-.5-.4-.9-.4-.4 0-.8.2-1 .5-.2.3-.3.8-.3 1.3h2.6c0-.5-.1-.9-.3-1.3z"/>
        <path d="M21.5 1h-19c-1.4 0-2.5 1.1-2.5 2.5v17c0 1.4 1.1 2.5 2.5 2.5h19c1.4 0 2.5-1.1 2.5-2.5v-17c0-1.4-1.1-2.5-2.5-2.5zm-13.6 14.2c-.3.4-.8.6-1.3.6h-2.1v-5.9h2.1c.5 0 .9.2 1.2.5.3.3.4.7.4 1.2 0 .6-.1 1.1-.5 1.4.3.1.5.4.6.7.1.3.2.7.2 1.1 0 .6-.2 1-.6 1.4zm6.6 0c-.3.4-.9.6-1.5.6-1.1 0-1.9-.8-1.9-2.2 0-1.4.8-2.2 1.9-2.2.6 0 1.1.2 1.5.6.3.4.5 1 .5 1.6v.5h-3.4c0 .8.4 1.1.9 1.1.3 0 .6-.1.8-.3l.2.9zm3.5-.1c-.4.4-1 .6-1.7.6-.7 0-1.2-.2-1.6-.6-.4-.4-.6-1-.6-1.7 0-.7.2-1.3.6-1.7.4-.4 1-.6 1.6-.6.7 0 1.3.2 1.7.6.4.4.6 1 .6 1.7 0 .7-.2 1.3-.6 1.7z"/>
      </svg>
    )
  },
  { 
    label: "LinkedIn", 
    href: "#", 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    )
  },
  { 
    label: "WhatsApp", 
    href: "#", 
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.2 8.38 8.38 0 0 1 3.8.9L21 3.2z"></path>
      </svg>
    )
  },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      {SOCIALS.map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          className="h-10 w-10 flex items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
          aria-label={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};
