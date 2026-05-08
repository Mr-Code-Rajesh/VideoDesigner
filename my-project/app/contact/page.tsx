"use client";

import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { StudioSection } from "@/components/contact/StudioSection";
import { FAQSection } from "@/components/contact/FAQSection";
import { SocialConnect } from "@/components/contact/SocialConnect";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { FilmGrainOverlay } from "@/components/loader/FilmGrainOverlay";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <FilmGrainOverlay />
      <Navbar />
      
      <div className="flex flex-col">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
        <StudioSection />
        <FAQSection />
        <SocialConnect />
        <ContactCTA />
      </div>

      <Footer />
    </main>
  );
}
