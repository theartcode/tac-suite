"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// --- DATA UNCHANGED ---
const cards = [
  { 
    label: "Module 1", 
    title: "Digital Marketing Foundations", 
    desc: "Understand how modern digital marketing systems work end-to-end.", 
    image: "/module1.jpg", 
    points: ["Channels & attribution", "Customer journeys", "Performance mindset"],
    details: "Master the fundamental architecture of the digital landscape. We dive deep into how data flows between platforms and how to map a user's journey from first touch to final conversion."
  },
  { 
    label: "Module 2", 
    title: "Performance Marketing & Ads", 
    desc: "Run ROI-focused campaigns across paid and organic growth channels.", 
    image: "/module2.jpg", 
    points: ["Google & Meta Ads", "Creative testing", "Scaling with data"],
    details: "Go beyond 'boosting posts.' Learn the science of media buying, bid management, and the technical setup required to scale multi-million dollar budgets."
  },
  { 
    label: "Module 3", 
    title: "Cinematic Editing: Premiere Pro", 
    desc: "Master the art of storytelling through professional video editing.", 
    image: "/module3.jpg", 
    points: ["Narrative pacing", "Color grading", "Sound design"],
    details: "Learn to treat video as a strategic asset. We focus on Premiere Pro workflows that prioritize narrative flow and professional color correction."
  },
  { 
    label: "Module 4", 
    title: "Motion Graphics: After Effects", 
    desc: "Elevate your visual content with advanced motion and VFX.", 
    image: "/module4.jpg", 
    points: ["Keyframe animation", "VFX & Compositing", "Dynamic Link"],
    details: "Bring static designs to life. This module covers the depth of After Effects, from complex keyframe animation to seamless VFX integration."
  },
  { 
    label: "Module 5", 
    title: "Design Systems & Branding", 
    desc: "Create cohesive visual identities that build long-term brand equity.", 
    image: "/module5.jpg", 
    points: ["UI/UX Principles", "Brand Style Guides", "Visual Hierarchy"],
    details: "Design is more than just looking good; it's about solving problems. We build modern design systems that ensure brand consistency."
  },
  { 
    label: "Module 6", 
    title: "Client & Project Management", 
    desc: "Scale your creative output with professional management frameworks.", 
    image: "/module6.jpg", 
    points: ["Workflow automation", "Stakeholder communication", "Quality Control"],
    details: "The bridge between talent and results. Learn how to manage high-ticket clients and utilize professional feedback loops."
  },
];

export default function DigitalMarketingStack() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(cards.length).fill(false));

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative bg-[#212121] -mt-1 pb-32">
        {/* HEADER */}
        <div className="relative pt-24 pb-16 z-10 text-center px-[5%] max-w-4xl mx-auto flex flex-col items-center">
          <span className="mb-4 text-[#FFC62A] font-bold tracking-[0.4em] uppercase text-[10px]">
            The Curriculum
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-[-0.05em]">
            Built for the <br />
            <span className="text-[#FFC62A] italic font-serif font-light lowercase">High-Growth Demands</span>
          </h2>
        </div>

        {/* STACKED CARDS CONTAINER */}
        <div className="relative z-10 px-[5%]">
          <div className="relative flex flex-col items-center">
            {cards.map((card, index) => {
              const isExpanded = expandedIndex === index;
              const isVisible = visibleItems[index];
              const scaleFactor = 1 - (cards.length - index) * 0.01;

              return (
                <div 
                  key={index} 
                  data-index={index}
                  className={`animate-on-scroll sticky top-24 w-full mb-[200px] last:mb-0 transition-all duration-[800ms] ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 scale-90"}
                  `} 
                  style={{ 
                    zIndex: 30 + index,
                    transform: isVisible 
                      ? `scale(${scaleFactor})` 
                      : `translateY(80px) scale(0.9)`
                  }}
                >
                  <div 
                    className={`
                      flex flex-col lg:flex-row
                      rounded-[40px] bg-[#FFF9E6] 
                      shadow-[0_40px_80px_rgba(0,0,0,0.3)] 
                      overflow-hidden relative transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
                      ${isExpanded ? "max-h-[1500px]" : "h-[500px] lg:h-[600px]"}
                    `}
                  >
                    {/* LEFT CONTENT PANEL */}
                    <div className="flex-1 p-10 md:p-16 flex flex-col justify-start relative z-10 bg-[#FFF9E6]">
                      <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <span className="text-[#FFC62A] font-mono text-[10px] tracking-widest font-bold bg-[#212121] px-4 py-1.5 rounded-full">
                          // 0{index + 1}
                        </span>
                      </div>
                      
                      <h3 className={`mt-8 text-4xl md:text-5xl font-black text-[#212121] leading-[1.0] tracking-tighter mb-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {card.title.split(' ')[0]} <br/>
                        <span className="text-[#FFC62A] italic font-serif font-light lowercase">
                          {card.title.split(' ').slice(1).join(' ')}
                        </span>
                      </h3>
                      
                      <p className={`text-lg md:text-xl text-[#2F2F2F]/70 leading-relaxed font-medium max-w-lg transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {card.desc}
                      </p>
                      
                      <div className="mt-10">
                        <button 
                          onClick={() => toggleExpand(index)}
                          className="flex items-center gap-3 text-[#212121] font-bold text-base group w-fit hover:opacity-70 transition-all outline-none"
                        >
                          <span className="border-b-2 border-[#FFC62A] pb-0.5">
                            {isExpanded ? "Collapse Module" : "Explore Curriculum"}
                          </span>
                          <div className={`transition-transform duration-500 bg-[#212121] text-[#FFC62A] p-1.5 rounded-full ${isExpanded ? 'rotate-180' : ''}`}>
                            <ChevronDown size={18} />
                          </div>
                        </button>
                      </div>

                      {/* EXPANDABLE SECTION */}
                      <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-12" : "grid-rows-[0fr] opacity-0 mt-0"}`}>
                        <div className="overflow-hidden">
                          <div className="pt-8 border-t border-[#212121]/10">
                            <p className="text-base md:text-lg text-[#2F2F2F]/80 leading-relaxed font-light mb-8">
                              {card.details}
                            </p>
                            
                            <div className="grid gap-4">
                              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Strategic Outcomes</p>
                              <div className="grid md:grid-cols-2 gap-4">
                                {card.points.map((point, i) => (
                                  <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFC62A]" />
                                    <p className="text-base text-[#212121] font-bold tracking-tight">{point}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT IMAGE PANEL */}
                    <div className="relative h-[250px] lg:h-auto lg:w-[35%] overflow-hidden bg-[#FFF9E6]">
                      <Image 
                        src={card.image} 
                        alt={card.title} 
                        fill 
                        className={`object-cover transition-all duration-1000 ease-in-out ${isExpanded ? "scale-110 saturate-[0.2] blur-[2px] opacity-40" : "scale-100"}`} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9E6] via-transparent to-transparent hidden lg:block" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHITE SECTOR - REPOSITIONED CONTENT */}
      <section className="bg-white min-h-[60vh] pt-24 pb-48 px-[5%] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-[#212121] tracking-tighter mb-8 leading-[0.95]">
                Ready to <br/>
                <span className="italic font-serif font-light text-[#365c47] lowercase">transform?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
                Join 500+ professionals who have upskilled through our industry-vetted curriculum and hands-on case studies.
            </p>
        </div>
      </section>

      {/* LARGE EMPTY BLACK SECTOR */}
      <section className="bg-[#212121] min-h-[90vh] w-full flex items-center justify-center">
        {/* Empty minimalist sector */}
      </section>
    </>
  ); 
}