"use client";

import { motion } from "framer-motion";
import {
  Video,
  Palette,
  Sparkles,
  Wand2,
  PenTool,
  Camera,
  Handshake,
  Megaphone,
} from "lucide-react";

const skills = [
  {
    id: "01",
    title: "Video Editing",
    desc: "Premiere Pro, narrative cuts, reels.",
    icon: Video,
    tags: ["Premiere", "Reels", "Cuts"],
    stat: "Short-form mastery"
  },
  {
    id: "02",
    title: "Graphic Design",
    desc: "Photoshop, Illustrator, branding.",
    icon: Palette,
    tags: ["Photoshop", "Branding", "Logos"],
    stat: "Visual identity"
  },
  {
    id: "03",
    title: "After Effects",
    desc: "Motion graphics, animations, VFX.",
    icon: Sparkles,
    tags: ["Motion", "VFX", "Animation"],
    stat: "High-end visuals"
  },
  {
    id: "04",
    title: "DaVinci Resolve",
    desc: "Colour grading, cinema outputs.",
    icon: Wand2,
    tags: ["Color", "Cinematic", "LUTs"],
    stat: "Pro grading"
  },
  {
    id: "05",
    title: "Content Writing",
    desc: "Scripts, captions, SEO articles.",
    icon: PenTool,
    tags: ["Scripts", "SEO", "Copy"],
    stat: "Engaging storytelling"
  },
  {
    id: "06",
    title: "Content Shoot",
    desc: "Camera, lighting, direction.",
    icon: Camera,
    tags: ["Camera", "Lighting", "Angles"],
    stat: "Production skills"
  },
  {
    id: "07",
    title: "Client Management",
    desc: "Briefing, revisions, retention.",
    icon: Handshake,
    tags: ["Clients", "Deals", "Retention"],
    stat: "Professional workflow"
  },
  {
    id: "08",
    title: "Digital Marketing",
    desc: "Ads, SEO, analytics, growth.",
    icon: Megaphone,
    tags: ["Ads", "SEO", "Growth"],
    stat: "Revenue focus"
  },
];

export function SkillsSection() {
  return (
    <section className="relative min-h-screen bg-[#FBF8E4] text-[#1D1D1D] px-[6%] py-24 overflow-hidden">

      {/* BACKGROUND TAC TEXT - INCREASED VISIBILITY WITH SHADOW */}
      <div className="absolute right-[6%] top-[90px] pointer-events-none z-0 text-right">
        <h1 
          className="font-bebas text-[220px] leading-none select-none"
          style={{
            color: "#1D1D1D",
            opacity: 0.12,
            textShadow: `
              0 4px 8px rgba(31, 31, 31, 0.15),
              0 8px 16px rgba(31, 31, 31, 0.1),
              0 12px 24px rgba(255, 198, 42, 0.08)
            `,
            fontWeight: 700,
          }}
        >
          TAC
        </h1>

<p className="font-mono text-[16px] tracking-[3px] uppercase text-[#1D1D1D]/80 -mt-8 font-bold">
  Creative. Practical. Industry Ready.
</p>
      </div>

      {/* HEADER */}
      <div className="relative z-10 mb-16">

        <div className="flex items-center gap-3 mb-5">
          <span className="w-10 h-[1.5px] bg-[#FFC62A]" />
         <p className="font-mono text-[16px] tracking-[3px] uppercase text-[#1D1D1D] -mt-8 font-bold">
          </p>
        </div>

        <h2
          className="font-bebas tracking-[0.5px] uppercase"
          style={{
            fontSize: "76px",
            lineHeight: "72.2px",
            fontWeight: "700",
            fontFamily: "'Bebas Neue', sans-serif",
          }}
        >
          8 SKILLS.<br />
          <span className="text-[#FFC62A]">ZERO GAPS.</span>
        </h2>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 relative z-10 mt-6">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative bg-white p-8 rounded-3xl border border-[#1D1D1D]/5 shadow-md hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden"
          >

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC62A]/25 via-transparent to-transparent blur-2xl" />
            </div>

            {/* DARK HOVER */}
            <div className="absolute inset-0 bg-[#1D1D1D] opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl -z-10" />

            {/* ICON */}
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-[#FFC62A]/10 text-[#FFC62A] group-hover:bg-[#FFC62A] group-hover:text-[#1D1D1D] transition-all duration-300">
              <skill.icon size={22} strokeWidth={2.5} />
            </div>

            {/* CONTENT */}
            <div className="relative z-10">
              <p className="text-[10px] font-mono font-bold text-[#FFC62A] mb-2 tracking-[2px]">
                {skill.id}
              </p>

              <h3 className="text-lg font-black uppercase tracking-tight group-hover:text-white transition-colors duration-300 mb-2">
                {skill.title}
              </h3>

              <p className="text-[12px] text-[#1D1D1D]/60 leading-relaxed group-hover:text-white/60 transition-colors duration-300 mb-4">
                {skill.desc}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {skill.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono tracking-[1.5px] px-2 py-1 border border-[#1D1D1D]/10 rounded-md text-[#1D1D1D]/60 group-hover:text-white/70 group-hover:border-white/20 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BOTTOM STAT */}
              <p className="text-[10px] font-mono tracking-[2px] uppercase text-[#1D1D1D]/40 group-hover:text-white/40 transition">
                {skill.stat}
              </p>
            </div>

          </motion.div>
        ))}

      </div>

      {/* FONT */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </section>
  );
}
