"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "Works", href: "/#works" },
  { name: "Services", href: "/#services" },
  { name: "Process", href: "/#process" },
  { name: "Behind The Scenes", href: "/#bts" },
  { name: "Contact", href: "/contact" },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-2xl lg:hidden"
        >
          {/* Close Button */}
          <div className="flex h-20 items-center justify-end px-6">
            <button
              onClick={onClose}
              className="p-2 text-white/60 transition-colors hover:text-white"
            >
              <X size={32} strokeWidth={1} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-1 flex-col items-center justify-center gap-12 overflow-y-auto pb-20">
            {MENU_LINKS.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="group relative block text-center"
                >
                  <span className="font-mono text-xs tracking-[0.5em] text-white/40 uppercase transition-colors group-hover:text-white">
                    0{i + 1}
                  </span>
                  <h2 className="mt-2 text-4xl font-bold tracking-tighter text-white uppercase sm:text-5xl">
                    {link.name}
                  </h2>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Decoration */}
          <div className="absolute bottom-10 left-10 h-[1px] w-1/3 bg-white/10" />
          <div className="absolute top-1/2 left-0 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-white/5 blur-[100px]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
