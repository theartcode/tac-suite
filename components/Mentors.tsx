"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, Linkedin } from "lucide-react";

const mentors = [
  { 
    name: "Gaurav Hasija", 
    role: "Director Strategy & Growth", 
    image: "/mentors/gaurav.jpg",
    bio: "A seasoned growth leader specializing in scaling B2B SaaS frameworks and market penetration strategies.",
    expertise: ["Market Strategy", "Revenue Growth", "B2B SaaS"]
  },
  { 
    name: "Hurrsh Kaoul", 
    role: "VP Global Sales, SPRY", 
    image: "/mentors/hurrsh.jpg",
    bio: "Expert in building global sales engines and managing high-performance cross-border teams.",
    expertise: ["Global Sales", "Team Leadership", "Market Expansion"]
  },
  { 
    name: "Srivardha Vanamamalai", 
    role: "Founder & CEO, Sales Tantra", 
    image: "/mentors/srivardha.jpg",
    bio: "Visionary entrepreneur focused on sales psychology and execution.",
    expertise: ["Sales Psychology", "Entrepreneurship", "Partnerships"]
  },
  { 
    name: "Prabhu Guliani", 
    role: "VP Marketing & Growth", 
    image: "/mentors/prabhu.jpg",
    bio: "Driving brand growth through performance marketing and experiments.",
    expertise: ["Performance Marketing", "Brand Growth", "Experiments"]
  }
];

export default function MentorShowcase() {
  const [active, setActive] = useState<number | null>(null);
  const [scrollSpeed, setScrollSpeed] = useState(40); // Increased base to 40s (Slower)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      /**
       * 40s is the base calm speed.
       * We increased the divisor to 400 so the speed-up is much more gentle.
       * Capped at 20s so it stays professional even when scrolled deep.
       */
      const newSpeed = Math.max(20, 40 - scrollY / 400); 
      setScrollSpeed(newSpeed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full py-20 overflow-hidden px-[5%] bg-[#212121]">
      <div className="max-w-4xl mx-auto text-center mb-16 relative z-30">
        <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-[-0.05em]">
          Learn from the <br />
          <span className="text-[#FFC62A] italic font-serif font-light lowercase">Market Practitioners</span>
        </h2>
        
        <p className="mt-6 text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed font-light tracking-tight">
          Move beyond theory with direct mentorship from industry veterans who have 
          <span className="text-white"> engineered growth engines </span> 
          and mastered high-stakes execution.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div 
          className={`flex gap-6 w-max ${active === null ? 'animate-marquee-right' : ''}`}
          style={{ 
            animationDuration: `${scrollSpeed}s` 
          }}
        >
          {[...mentors, ...mentors, ...mentors, ...mentors].map((mentor, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className={`flex transition-all duration-700 ease-in-out ${
                  isOpen ? "w-[540px]" : "w-[220px]" 
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="relative h-[320px] w-[220px] shrink-0"
                >
                  <div className={`relative h-full w-full bg-[#2A2A2A] overflow-hidden rounded-xl shadow-xl group border ${isOpen ? 'border-[#FFC62A]' : 'border-white/5'}`}>
                    <Image
                      src={mentor.image}
                      alt={mentor.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/90 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-left">
                      <h3 className="text-lg font-black text-white tracking-tighter leading-tight">
                        {mentor.name}
                      </h3>
                      <p className="text-[#FFC62A] text-[9px] font-bold uppercase tracking-[0.1em] mt-1.5 border-l border-[#FFC62A] pl-2">
                        {mentor.role}
                      </p>
                    </div>
                  </div>
                </button>

                <div
                  className={`
                    h-[320px] overflow-hidden
                    transition-all duration-700 ease-in-out
                    ${isOpen ? "w-[320px] opacity-100 rounded-r-xl" : "w-0 opacity-0"}
                  `}
                  style={{ background: "#FFF9E6" }}
                >
                  <div className="h-full p-6 flex flex-col justify-center min-w-[320px]">
                    <p className="text-sm text-[#2F2F2F] leading-relaxed font-medium">
                      {mentor.bio}
                    </p>
                    <div className="mt-6 space-y-2">
                      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Core Capabilities</p>
                      {mentor.expertise.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="text-[#212121]" size={14} />
                          <span className="text-sm font-bold text-[#2F2F2F] tracking-tight">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                    <button className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#212121] text-white text-[10px] font-bold rounded-lg transition-all hover:bg-[#FFC62A] hover:text-[#212121] shadow-md">
                      <Linkedin size={12} />
                      LinkedIn
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-[#212121] to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-[#212121] to-transparent z-20" />
      </div>

      <style jsx>{`
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
      `}</style>
    </section>
  );
}