"use client";

import React from "react";
import { Globe, MapPin, Clock, Layers, Plus, ChevronRight, MonitorPlay, Users } from "lucide-react";

const courses = [
  { name: "Client Management", focus: "Mastering high-stakes communication, professional retention systems, and account scaling architecture." },
  { name: "Design Architecture", focus: "Conversion-focused UI/UX design, visual brand identity systems, and aesthetic fundamentals." },
  { name: "Content Editing", focus: "Advanced narrative-driven storytelling, psychological pacing, and audience retention tactics." },
  { name: "Premiere Pro", focus: "Industry-standard video assembly, proxy management, and professional editing workflows." },
  { name: "DaVinci Resolve", focus: "Cinematic color science, advanced grading nodes, and high-end technical finishing." },
  { name: "After Effects", focus: "Complex motion graphics, VFX integration, and dynamic visual asset generation." },
  { name: "Revenue Ops", focus: "Integrating creative output with business ROI, growth engineering, and data tracking." },
  { name: "System Execution", focus: "Comprehensive final portfolio build and live pitching to industry veteran clients." },
];

export default function CourseEcosystem() {
  // Brand Palette: #FBF8E4 (BG), #1D1D1D (Text), #FFC62A (Accent)

  return (
    <section className="relative overflow-hidden bg-[#FBF8E4] py-24 md:py-32">
      
      {/* Background Subtle Radiance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC62A]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#1D1D1D]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full px-[5%]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D1D1D]/5 border border-[#1D1D1D]/10">
                <Layers className="w-4 h-4 text-[#1D1D1D]" />
                <span className="text-[11px] tracking-[0.2em] uppercase font-bold text-[#1D1D1D]">System Logistics</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#1D1D1D] leading-[1.1]">
                8 Integrated Modules. <br />
                <span className="italic font-serif text-[#FFC62A]">Built for Execution.</span>
              </h2>
            </div>

            {/* Top Glassy Info Boxes (Including Offline Classes) */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <MonitorPlay />, label: "Live", value: "Interactive" },
                { icon: <MapPin />, label: "Location", value: "Madhapur, HYD" },
                { icon: <Users />, label: "Offline Classes", value: "In-Person Hub" },
                { icon: <Clock />, label: "Duration", value: "16 Weeks" }
              ].map((item, i) => (
                <div key={i} className="bg-white/40 backdrop-blur-md border border-white/60 p-5 rounded-[2rem] shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#FFC62A] w-3.5 h-3.5">{item.icon}</span>
                    <span className="text-[#1D1D1D]/40 text-[9px] uppercase tracking-widest font-bold">{item.label}</span>
                  </div>
                  <p className="text-[#1D1D1D] font-bold text-xs md:text-sm leading-tight">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Large Fixed-Size Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div 
                key={index}
                className="group relative bg-white/50 backdrop-blur-sm border border-[#1D1D1D]/5 rounded-[2.5rem] p-10 h-[340px] transition-all duration-500 hover:bg-white/90 hover:shadow-2xl hover:border-[#FFC62A]/20 cursor-default flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#1D1D1D] flex items-center justify-center text-[#FFC62A] shadow-lg">
                      <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                    </div>
                    <span className="text-3xl font-black text-[#1D1D1D]/5 group-hover:text-[#FFC62A]/10 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#1D1D1D] leading-tight mb-4 group-hover:text-[#FFC62A] transition-colors">
                    {course.name}
                  </h3>
                </div>

                {/* Data Area */}
                <div className="space-y-4">
                  <p className="text-[#1D1D1D]/60 text-sm md:text-base leading-relaxed group-hover:text-[#1D1D1D] transition-colors duration-500">
                    {course.focus}
                  </p>
                  <div className="flex items-center gap-2 text-[#FFC62A] font-black text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>Explore Module</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}