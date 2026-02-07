"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const works = [
  {
    title: "FMCG Recoded",
    category: "MARKETING",
    student: "Sarah Chen, Visual Designer",
    image: "/work1.jpg", 
  },
  {
    title: "Cinematic Brand Reveal",
    category: "MOTION GRAPHICS",
    student: "Sarah Chen, Visual Designer",
    image: "/work2.jpg",
  },
  {
    title: "E-commerce Platform",
    category: "STRATEGY",
    student: "Ben Carter, Growth Strategist",
    image: "/work3.jpg",
  },
];

export default function StudentWorks() {
  const [active, setActive] = useState(1);

  const handleNext = () => setActive((prev) => (prev + 1) % works.length);
  const handlePrev = () => setActive((prev) => (prev - 1 + works.length) % works.length);

  return (
    <section className="relative w-full py-24 bg-[#FFF9E6] overflow-hidden px-[5%]">
      <div className="relative z-10 flex flex-col items-center w-full">
        
        {/* HEADER AREA */}
        <span className="mb-4 text-[#FFC62A] font-bold tracking-[0.3em] uppercase text-[10px]">
          From the Labs
        </span>

        <div className="flex items-center -space-x-2 mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-9 h-9 rounded-full border-2 border-[#FFF9E6] overflow-hidden bg-gray-300">
               <Image src={`/avatars/student${i}.jpg`} alt="student" width={40} height={40} />
            </div>
          ))}
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-[#2F2F2F] tracking-tighter text-center leading-tight mb-6">
          Unleashing <br />
          <span className="font-serif italic font-light text-[#365c47] lowercase">Creative Impact</span>
        </h2>

        <p className="text-sm text-[#2F2F2F]/60 max-w-lg text-center leading-relaxed mb-16 px-6">
          Explore real-world case studies from TAC students who are shaping the future of digital content and strategy.
        </p>

        {/* CAROUSEL CONTAINER - Spread to max width */}
        <div className="relative w-full h-[450px] flex items-center justify-center">
          
          {works.map((work, index) => {
            const isCenter = index === active;
            const isLeft = index === (active - 1 + works.length) % works.length;
            const isRight = index === (active + 1) % works.length;

            return (
              <div
                key={index}
                className={`
                  absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-[32px] overflow-hidden
                  ${isCenter 
                    ? "z-30 w-[320px] md:w-[480px] h-[450px] opacity-100 scale-100 blur-0 shadow-2xl translate-x-0" 
                    : ""}
                  ${isLeft 
                    ? "z-10 w-[280px] md:w-[400px] h-[350px] opacity-40 -translate-x-[45vw] lg:-translate-x-[35vw] scale-90 blur-md" 
                    : ""}
                  ${isRight 
                    ? "z-10 w-[280px] md:w-[400px] h-[350px] opacity-40 translate-x-[45vw] lg:translate-x-[35vw] scale-90 blur-md" 
                    : ""}
                  ${!isCenter && !isLeft && !isRight ? "opacity-0 scale-50" : ""}
                `}
              >
                <Image src={work.image} alt={work.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                
                {/* CARD CONTENT */}
                <div className={`absolute inset-0 p-8 flex flex-col justify-between transition-opacity duration-500 ${isCenter ? "opacity-100" : "opacity-0"}`}>
                  <span className="w-fit px-3 py-1 bg-[#FFC62A] text-[#2F2F2F] rounded-md text-[8px] font-black uppercase tracking-widest">
                    {work.category}
                  </span>
                  
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter mb-1">{work.title}</h3>
                    <p className="text-[10px] text-white/60 mb-6">{work.student}</p>
                    <button className="px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-[#FFC62A] hover:text-[#2F2F2F] transition-all">
                      View Case Study
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* OVERLAY NAVIGATION CONTROLS - Positioned between center and spread cards */}
          <div className="absolute w-full max-w-[400px] md:max-w-[650px] flex justify-between px-2 z-40">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#2F2F2F]/90 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl border border-white/10 backdrop-blur-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#2F2F2F]/90 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xl border border-white/10 backdrop-blur-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}