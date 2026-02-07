"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

// --- DATA UNCHANGED ---
const faqData = {
  "Creative Tools": [
    { q: "What is your workflow for Premiere Pro and After Effects?", a: "We leverage Premiere Pro for high-speed storytelling and rough cuts, then dynamic link to After Effects for advanced motion graphics, VFX, and custom transitions." },
    { q: "Do you provide source files for design projects?", a: "Yes, we provide fully organized source files across the Adobe Creative Suite, ensuring your team has everything needed for future iterations." },
    { q: "Can you handle 3D motion graphics?", a: "Absolutely. We integrate After Effects with Cinema 4D to create depth-rich 3D elements that elevate standard marketing videos into immersive experiences." }
  ],
  "Marketing & Growth": [
    { q: "How do you align Digital Marketing with Brand Design?", a: "We believe data and aesthetics should work together. Our strategies use high-quality design assets to lower CAC and improve CTR across all major ad platforms." },
    { q: "What channels do you specialize in?", a: "We focus on Full-Funnel Marketing: SEO-optimized content engines, ROI-driven Paid Media (PPC), and Lifecycle Email Marketing." },
    { q: "Do you handle content distribution?", a: "Both. We don't just create high-end video and design; we build the distribution frameworks to ensure your content reaches the right audience." }
  ],
  "Client Management": [
    { q: "How do you handle project communication?", a: "We use a dedicated client portal for real-time tracking. Feedback loops are integrated directly into our process using tools like Frame.io and Figma." },
    { q: "What is the typical turnaround time?", a: "While it varies by scale, a standard integrated campaign typically takes 2–3 weeks from kickoff to launch." },
    { q: "How do you ensure brand consistency?", a: "We develop comprehensive Brand Style Guides and Asset Libraries. Every piece of content undergoes a strict quality control check against these standards." }
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("Creative Tools");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#1A1A1A] py-24 px-[5%] font-sans text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <h2 className="text-4xl md:text-6xl mb-20 tracking-tight">
          <span className="font-serif italic text-white/90">Frequently</span>{" "}
          <span className="font-bold uppercase italic text-[#FFC62A]">Asked</span>{" "}
          <span className="font-sans font-light text-white/50">Questions</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start"> {/* items-start prevents vertical stretching */}
          
          {/* LEFT SIDEBAR */}
          <div className="w-full lg:w-[280px] shrink-0 lg:sticky lg:top-10">
            <div className="relative z-10 flex flex-col gap-2 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              {Object.keys(faqData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setOpenIndex(null); 
                  }}
                  className={`text-left px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeTab === tab 
                      ? "text-[#1A1A1A] bg-[#FFC62A] shadow-[0_0_20px_rgba(255,198,42,0.3)] translate-x-1" 
                      : "text-white/40 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT ACCORDION LIST */}
          {/* We set a min-height here to prevent the section from collapsing/expanding when content changes */}
          <div className="flex-1 flex flex-col gap-4 min-h-[500px]">
            {faqData[activeTab as keyof typeof faqData].map((item, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl border transition-all duration-500 ease-in-out ${
                  openIndex === idx 
                  ? "border-[#FFC62A]/50 bg-white/5 shadow-2xl" 
                  : "border-white/10 bg-transparent hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-7 text-left group"
                >
                  <span className={`font-bold text-lg md:text-xl leading-tight pr-4 transition-colors ${
                    openIndex === idx ? "text-[#FFC62A]" : "text-white/90 group-hover:text-white"
                  }`}>
                    {item.q}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === idx ? "bg-[#FFC62A] text-[#1A1A1A]" : "bg-white/10 text-white/50"
                  }`}>
                    {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                {/* CSS Grid trick for smoother, non-jumping height transitions */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-7 pb-10 text-white/60 text-base md:text-lg leading-relaxed">
                      <div className="pt-6 border-t border-white/10">
                        {item.a}
                      </div>
                    </div>
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