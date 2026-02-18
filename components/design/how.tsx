"use client";

import { Search, Hammer, Presentation, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Learn",
    icon: <Search className="w-5 h-5" />,
    description: "Break down functional frameworks in sales, marketing, finance, and revenue operations through rigorous industry context.",
    points: [
      "Study industry contexts across SaaS, consumer tech, and FMCG.",
      "Take on structured business challenges rooted in real revenue problems."
    ]
  },
  {
    number: "02",
    title: "Build",
    icon: <Hammer className="w-5 h-5" />,
    description: "Collaborate in squads to research markets and craft data-backed strategies that move beyond theoretical models.",
    points: [
      "Experiment with tools, tech stacks, and outreach methods used by top companies.",
      "Convert theory into proof-of-work projects that strengthen your portfolio."
    ]
  },
  {
    number: "03",
    title: "Pitch",
    icon: <Presentation className="w-5 h-5" />,
    description: "Present your engineered solutions to founders, CXOs, and industry mentors for real-world validation.",
    points: [
      "Defend your thinking under scrutiny, learning from direct executive feedback.",
      "Leave with work that recruiters and investors recognize as credible execution."
    ]
  }
];

export default function MethodologySection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF8E4] py-32">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFC62A]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-[5%]">
        
        {/* Centered Header & Subtitle */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-[#1D1D1D] leading-tight mb-8">
            How We Achieve <br />
            <span className="italic font-serif text-[#FFC62A]">These Outcomes</span>
          </h2>
          <p className="text-[#1D1D1D]/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Rigorous training, real-world challenges, and continuous mentorship 
            shape our students into revenue-ready professionals.
          </p>
        </div>

        {/* Spacious Execution Flow */}
        <div className="max-w-5xl mx-auto space-y-20">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              
              {/* Connecting Line (Only between items) */}
              {index !== steps.length - 1 && (
                <div className="absolute left-1/2 top-full h-20 w-px bg-gradient-to-b from-[#1D1D1D]/20 to-transparent hidden md:block" />
              )}

              <div className="bg-white/30 backdrop-blur-md border border-[#1D1D1D]/5 rounded-[2.5rem] p-8 md:p-16 transition-all duration-500 hover:bg-white/50 shadow-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                  
                  {/* Step Number Badge */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-3xl bg-[#1D1D1D] flex items-center justify-center text-[#FFC62A] text-2xl font-black shadow-lg">
                    {step.number}
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#FFC62A]">{step.icon}</span>
                      <h3 className="text-3xl font-bold text-[#1D1D1D] tracking-tight">{step.title}</h3>
                    </div>
                    
                    <p className="text-[#1D1D1D]/70 text-lg mb-8 max-w-2xl leading-relaxed">
                      {step.description}
                    </p>

                    {/* Point Grid for Decent Spacing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {step.points.map((point, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-3 p-4 rounded-2xl bg-[#1D1D1D]/5 border border-transparent group-hover:border-[#1D1D1D]/10 transition-all">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#FFC62A]" />
                          <span className="text-sm font-medium text-[#1D1D1D]/60 leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}