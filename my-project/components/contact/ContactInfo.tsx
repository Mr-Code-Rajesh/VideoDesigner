"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, MapPin } from "lucide-react";
const INFO_CARDS = [
  {
    icon: <Mail size={24} strokeWidth={1.5} />,
    label: "Email",
    value: "hello@creativenex.studio",
    href: "mailto:hello@creativenex.studio",
  },
  {
    icon: <Phone size={24} strokeWidth={1.5} />,
    label: "Phone",
    value: "+1 (555) 0123 4567",
    href: "tel:+155501234567",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    label: "Instagram",
    value: "@creativenex",
    href: "https://instagram.com/creativenex",
  },
  {
    icon: <Send size={24} strokeWidth={1.5} />,
    label: "WhatsApp",
    value: "+1 (555) 9876 5432",
    href: "https://wa.me/155598765432",
  },
  {
    icon: <MapPin size={24} strokeWidth={1.5} />,
    label: "Studio",
    value: "Los Angeles, CA",
    href: "#",
  },
];

export const ContactInfo: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {INFO_CARDS.map((card, i) => (
          <motion.a
            key={card.label}
            href={card.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 overflow-hidden"
          >
            <div className="relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-500 mb-6">
                {card.icon}
              </div>
              <p className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase mb-2">
                {card.label}
              </p>
              <p className="text-white font-medium tracking-tight break-words">
                {card.value}
              </p>
            </div>

            {/* Hover Glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};
