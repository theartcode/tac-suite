"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useVelocity, useSpring, useTransform, useAnimationFrame, useMotionValue } from "framer-motion";
import { wrap } from "@motionone/utils";
import {
  Trophy,
  Palette,
  Scissors,
  ArrowRight,
  Star,
  Plus,
  Zap,
  Briefcase,
  Building2,
} from "lucide-react";

const tacathonData = [
  { id: 1, title: "Design Sprint", role: "Visual Mastery", description: "Competitors create brand identities from scratch in high-pressure environments. Speed meets pure creativity.", image: "/tacathon/design.jpg", icon: <Palette size={20} /> },
  { id: 2, title: "Editing Arena", role: "Cinematic Storytelling", description: "Transforming raw footage into compelling narratives. A test of pacing, sound design, and color grading.", image: "/tacathon/edit.jpg", icon: <Scissors size={20} /> },
  { id: 3, title: "Creator Showcase", role: "Personal Branding", description: "Celebrating originality and creative voice. Creators present signature styles that define their brand.", image: "/tacathon/showcase.jpg", icon: <Star size={20} /> },
  { id: 4, title: "Motion Battle", role: "Dynamic Graphics", description: "Bringing static designs to life with timing, easing, and visual impact.", image: "/tacathon/motion.jpg", icon: <Zap size={20} /> },
  { id: 5, title: "The Grand Finale", role: "Winner's Circle", description: "Projects pitched to industry veterans. Recognition, prizes, and mentorship.", image: "/tacathon/win.jpg", icon: <Trophy size={20} /> },
];

const winnersData = [
  { id: 1, name: "Aravind Swamy", company: "Google", role: "Visual Designer", image: "/winners/winner1.jpg" },
  { id: 2, name: "Sneha Kapoor", company: "Netflix", role: "Video Editor", image: "/winners/winner2.jpg" },
  { id: 3, name: "Rohan Das", company: "Adobe", role: "Motion Designer", image: "/winners/winner3.jpg" },
  { id: 4, name: "Megha Rao", company: "Meta", role: "Brand Designer", image: "/winners/winner4.jpg" },
  { id: 5, name: "Vikram Jeet", company: "Amazon", role: "Creative Strategist", image: "/winners/winner5.jpg" },
];

export default function TacathonExperience() {
  const [activeId, setActiveId] = useState(1);

  // Velocity Logic for Winners Marquee
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-50, -25, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 0.8 * (delta / 1000); // Base speed
    
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="relative w-full py-20 bg-[#FFF9E6] overflow-hidden px-[5%]">
      {/* --- HEADER --- */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <span className="block text-[10px] tracking-[0.4em] font-bold text-[#FFC62A] uppercase">
          From the Labs
        </span>
        <h2 className="text-5xl md:text-6xl font-black text-[#212121] tracking-tighter leading-[0.9]">
          Tacathon
        </h2>
        <p className="text-base md:text-lg text-[#2F2F2F]/50 max-w-lg mx-auto leading-relaxed font-light tracking-tight">
          A high-stakes creative arena where top-tier creators battle for 
          <span className="inline-block ml-2 px-3 py-0.5 rounded-full bg-white/40 backdrop-blur-md border border-white shadow-sm text-[#212121] font-semibold text-sm">
            Creative Supremacy
          </span>
        </p>
      </div>

      {/* ACCORDION */}
      <div className="max-w-full mx-auto flex flex-col md:flex-row gap-4 h-[650px] mb-24">
        {tacathonData.map((item) => {
          const isActive = activeId === item.id;
          return (
            <motion.div
              key={item.id}
              layout
              transition={{ layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
              onClick={() => setActiveId(item.id)}
              className={`relative h-full cursor-pointer overflow-hidden rounded-[32px] ${
                isActive ? "bg-white shadow-2xl" : "bg-[#212121]"
              }`}
              style={{ flex: isActive ? 6 : 1 }}
            >
              {!isActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-between py-12">
                  <Plus className="text-white/20" size={18} />
                  <p className="text-white font-bold uppercase tracking-[0.5em] rotate-180 [writing-mode:vertical-lr] text-[10px] opacity-50">
                    {item.title}
                  </p>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC62A]" />
                </div>
              )}

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col lg:flex-row h-full w-full"
                  >
                    <div className="relative w-full lg:w-[48%] h-full p-4">
                      <div className="relative h-full w-full rounded-[24px] overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                        <div className="absolute top-6 left-6 bg-[#212121] text-white p-4 rounded-2xl">
                          {item.icon}
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-[52%] p-8 lg:p-14 flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#365c47] mb-3">
                        {item.role}
                      </span>
                      <h3 className="text-3xl lg:text-5xl font-black text-[#212121] leading-[1]">
                        {item.title}
                      </h3>
                      <p className="text-base text-[#212121]/60 mt-5 max-w-sm">
                        {item.description}
                      </p>
                      <button className="mt-8 flex items-center gap-4 px-8 py-4 bg-[#212121] text-white rounded-2xl font-bold hover:bg-[#FFC62A] hover:text-[#212121] transition-all text-sm">
                        Explore <ArrowRight size={18} />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* --- SECOND HEADER --- */}
      <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-[#212121] tracking-tighter leading-tight">
          Students Got <br />
          <span className="font-serif italic font-light text-[#365c47] lowercase">Placed</span>
        </h2>
        <p className="text-sm md:text-base text-[#2F2F2F]/50 max-w-md mx-auto leading-relaxed font-light tracking-tight">
          From creative enthusiasts to <span className="text-[#212121] font-bold">Industry Leaders</span> at global brands.
        </p>
      </div>

      {/* VELOCITY MARQUEE */}
      <div className="relative flex overflow-hidden">
        <motion.div className="flex gap-8 py-6 px-[5%]" style={{ x }}>
          {[...winnersData, ...winnersData, ...winnersData, ...winnersData].map((winner, i) => (
            <div
              key={i}
              className="w-[280px] h-[380px] bg-white rounded-[28px] shadow-xl p-6 flex flex-col justify-between shrink-0"
            >
              <div className="relative w-full h-[180px] rounded-2xl overflow-hidden">
                <Image src={winner.image} alt={winner.name} fill className="object-cover" />
              </div>

              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-black text-[#212121]">
                  {winner.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#365c47] font-semibold">
                  <Building2 size={14} /> {winner.company}
                </div>
                <div className="flex items-center gap-2 text-xs text-[#212121]/60">
                  <Briefcase size={14} /> {winner.role}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}