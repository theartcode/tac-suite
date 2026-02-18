"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function DesignHero() {
  // Light Background: #FBF8E4
  // Font/Dark Color: #1D1D1D
  // Accent Yellow: #FFC62A

  return (
    <section className="relative overflow-hidden bg-[#FBF8E4] pt-24 pb-20 md:pt-32 md:pb-28 min-h-[90vh] flex items-center">
      
      {/* Reduced & Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Top Right Glow - Lower Opacity */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#FFC62A] opacity-[0.08] rounded-full blur-[100px]" />
        
        {/* Very Faint Bottom Left Glow */}
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#1D1D1D] opacity-[0.03] rounded-full blur-[80px]" />

        {/* Textured Grid Overlay - Keep it very light */}
        <div className="absolute inset-0 opacity-[0.04]" 
             style={{ backgroundImage: 'radial-gradient(#1D1D1D 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Eyebrow Badge - No Glow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1D1D1D] mb-8">
            <Sparkles className="w-3 h-3 text-[#FFC62A]" />
            <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-white">
              TAC – The Art Code
            </span>
          </div>

          {/* Main Heading - Clean Text, No Effects */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#1D1D1D] mb-8">
            Build Your Career <br />
            <span className="italic font-serif text-[#FFC62A] relative">
              Like a System,
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FFC62A]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none"/>
              </svg>
            </span>{" "}
            <span className="opacity-25">Not a Shortcut</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-[#1D1D1D]/70 max-w-2xl mx-auto leading-relaxed mb-12">
            An 8-course execution ecosystem designed to transform you into a 
            <span className="text-[#1D1D1D] font-semibold"> revenue operator</span> and 
            <span className="text-[#1D1D1D] font-semibold"> high-performance contributor</span>.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <Link
              href="/apply"
              className="group w-full sm:w-auto px-10 py-4 rounded-full bg-[#FFC62A] text-[#1D1D1D] font-extrabold text-base transition-all hover:bg-[#e6b225] flex items-center justify-center gap-3"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/curriculum"
              className="w-full sm:w-auto px-10 py-4 rounded-full border-2 border-[#1D1D1D] text-[#1D1D1D] font-bold text-base hover:bg-[#1D1D1D] hover:text-[#FBF8E4] transition-all"
            >
              Learn More
            </Link>
          </div>

          {/* Clean Glassy Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Integrated Courses", value: "8" },
              { label: "Structured Journey", value: "4 Months" },
              { label: "Execution Framework", value: "Live" },
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-white/40 backdrop-blur-md p-10 rounded-[2rem] border border-white/60 shadow-sm transition-all duration-300"
              >
                <p className="text-4xl font-black text-[#1D1D1D] mb-2">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#1D1D1D]/40">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}