"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { NavbarLogo } from "./NavbarLogo";
import { NavLinks } from "./NavLinks";
import { CTAButton } from "./CTAButton";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";

import { usePerformance } from "@/hooks/use-performance";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { intensity } = usePerformance();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Transparent at top logic
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ 
          y: isHidden ? -100 : 0,
          backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled && intensity !== "low" ? "blur(12px)" : "blur(0px)",
          borderBottomColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
          height: isScrolled ? "70px" : "90px"
        }}
        transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 z-50 flex w-full items-center border-b px-6 lg:px-12"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
          <NavbarLogo />
          
          <NavLinks />

          <div className="flex items-center gap-6">
            <CTAButton className="hidden md:block">Book A Shoot</CTAButton>
            
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-white/60 transition-colors hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};
