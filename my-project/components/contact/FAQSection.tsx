"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What is your typical delivery timeline?",
    a: "Standard video projects are typically delivered within 7-14 business days. High-production brand shoots and complex motion graphics sequences may require 3-4 weeks depending on the scope."
  },
  {
    q: "How does the pricing process work?",
    a: "We provide custom quotes based on project complexity, equipment requirements, and editing time. We offer fixed-price packages for standard social media content and brand stories."
  },
  {
    q: "What is your revision policy?",
    a: "Every project includes two rounds of creative revisions. We work closely with you during the drafting phase to ensure the final product aligns perfectly with your vision."
  },
  {
    q: "Which platforms do you support?",
    a: "We deliver content optimized for all major platforms including YouTube (4K), Instagram Reels/TikTok (9:16), LinkedIn, and high-resolution digital billboards."
  },
  {
    q: "How do I book a production shoot?",
    a: "After the initial onboarding call, we'll send a production contract and 50% deposit request. Once confirmed, we'll lock in the dates and begin the pre-production strategy."
  }
];

export const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="font-mono text-[10px] tracking-[0.6em] text-white/40 uppercase">
              Quick Answers
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tighter"
          >
            COMMON <span className="text-white/20">QUERIES.</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className={`w-full p-8 rounded-[2rem] border transition-all duration-500 flex items-center justify-between text-left ${
                  activeIndex === i 
                  ? "bg-white/[0.05] border-white/20" 
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
                }`}
              >
                <span className="text-lg md:text-xl font-medium text-white tracking-tight">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-white/20 transition-transform duration-500 ${activeIndex === i ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-2 text-white/40 font-light leading-relaxed max-w-3xl">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
