"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const SERVICES = [
  "Video Editing",
  "Brand Shoots",
  "Motion Graphics",
  "Product Commercials",
  "Social Media Management",
  "Paid Promotions",
];

const BUDGETS = [
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate EmailJS or other service delay
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <section className="py-32 px-6 bg-black relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
          >
            START YOUR <span className="text-white/20">PROJECT.</span>
          </motion.h2>
          <p className="mt-4 text-white/40 font-light italic">
            Tell us about your vision and let’s make it reality.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-20 flex flex-col items-center justify-center text-center space-y-6 bg-white/[0.02] border border-white/5 rounded-[40px] backdrop-blur-xl"
            >
              <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center text-white">
                <CheckCircle size={40} strokeWidth={1} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white tracking-tight">Application Received</h3>
                <p className="text-white/40 font-light">We'll review your project details and get back to you within 24 hours.</p>
              </div>
              <button 
                onClick={() => setStatus("idle")}
                className="text-sm font-mono text-white/20 uppercase tracking-widest hover:text-white transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Info */}
              <div className="space-y-8">
                <div className="group space-y-2">
                  <label className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase ml-4">Full Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-8 py-5 rounded-3xl bg-white/[0.02] border border-white/5 text-white placeholder:text-white/10 outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div className="group space-y-2">
                  <label className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase ml-4">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full px-8 py-5 rounded-3xl bg-white/[0.02] border border-white/5 text-white placeholder:text-white/10 outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                  />
                </div>
                <div className="group space-y-2">
                  <label className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase ml-4">Brand/Company</label>
                  <input
                    type="text"
                    placeholder="Optional"
                    className="w-full px-8 py-5 rounded-3xl bg-white/[0.02] border border-white/5 text-white placeholder:text-white/10 outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all"
                  />
                </div>
              </div>

              {/* Project Specs */}
              <div className="space-y-8">
                <div className="group space-y-2">
                  <label className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase ml-4">Service Needed</label>
                  <select className="w-full px-8 py-5 rounded-3xl bg-white/[0.02] border border-white/5 text-white outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-zinc-900">Select a service</option>
                    {SERVICES.map(s => <option key={s} value={s} className="bg-zinc-900">{s}</option>)}
                  </select>
                </div>
                <div className="group space-y-2">
                  <label className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase ml-4">Budget Range</label>
                  <select className="w-full px-8 py-5 rounded-3xl bg-white/[0.02] border border-white/5 text-white outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer">
                    <option value="" className="bg-zinc-900">Select a budget</option>
                    {BUDGETS.map(b => <option key={b} value={b} className="bg-zinc-900">{b}</option>)}
                  </select>
                </div>
                <div className="group space-y-2">
                  <label className="font-mono text-[10px] tracking-[0.4em] text-white/20 uppercase ml-4">Project Brief</label>
                  <textarea
                    rows={1}
                    placeholder="Tell us about your vision..."
                    className="w-full px-8 py-5 rounded-3xl bg-white/[0.02] border border-white/5 text-white placeholder:text-white/10 outline-none focus:border-white/20 focus:bg-white/[0.05] transition-all resize-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-8">
                <button
                  disabled={status === "loading"}
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-4 px-12 py-6 rounded-[40px] bg-white text-black font-bold text-xl overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                >
                  <span className="relative z-10 uppercase tracking-widest text-sm">
                    {status === "loading" ? "Processing..." : "Initiate Onboarding"}
                  </span>
                  {status === "loading" ? (
                    <Loader2 className="animate-spin relative z-10" size={20} />
                  ) : (
                    <Send className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                  )}
                  
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.05] to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                </button>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};
