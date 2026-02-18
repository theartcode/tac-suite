"use client";

import { ArrowRight, MessageSquare, Briefcase, HeartHandshake } from "lucide-react";

const admissionSteps = [
  {
    number: "01",
    title: "Discovery Call",
    icon: <MessageSquare className="w-4 h-4" />,
    description: "A conversation to assess your background, intent, and career aspirations."
  },
  {
    number: "02",
    title: "Business Case",
    icon: <Briefcase className="w-4 h-4" />,
    description: "Work through a real-world case to showcase strategic problem-solving skills."
  },
  {
    number: "03",
    title: "Culture Fit",
    icon: <HeartHandshake className="w-4 h-4" />,
    description: "Ensuring alignment with our high-standard, execution-heavy environment."
  }
];

export default function AdmissionCriteria() {
  return (
    <section className="relative overflow-hidden bg-[#1D1D1D] py-20 md:py-24">
      
      {/* Background Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FFC62A]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full px-[5%]">
        
        {/* Header Block - Reduced Margin */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#FBF8E4] leading-tight mb-4">
            Admission <span className="italic font-serif text-[#FFC62A]">Criteria</span>
          </h2>
          <p className="text-[#FBF8E4]/40 text-sm md:text-base max-w-xl mx-auto">
            A selective process to identify the next generation of revenue operators.
          </p>
        </div>

        {/* Adjusted Process Flow */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-0">
          
          {admissionSteps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center flex-1 group">
              
              {/* Box - Balanced Width and Height */}
              <div className="w-full bg-white/[0.03] border border-[#FBF8E4]/10 rounded-[2rem] p-7 md:p-9 transition-all duration-500 hover:bg-white/[0.06] hover:border-[#FFC62A]/30 flex-1 flex flex-col justify-between min-h-[240px]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#FFC62A]/10 flex items-center justify-center text-[#FFC62A]">
                      {step.icon}
                    </div>
                    <span className="text-lg font-black text-[#FBF8E4]/10 group-hover:text-[#FFC62A]/20 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-[#FBF8E4] mb-3 group-hover:text-[#FFC62A] transition-colors tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#FBF8E4]/40 text-xs md:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 h-0.5 w-8 bg-[#FFC62A]/20 group-hover:w-full group-hover:bg-[#FFC62A] transition-all duration-700" />
              </div>

              {/* Arrow Connector - Precisely Centered */}
              {index !== admissionSteps.length - 1 && (
                <div className="flex items-center justify-center w-full lg:w-16 h-12 lg:h-auto z-20">
                  <div className="w-9 h-9 rounded-full border border-[#FBF8E4]/10 bg-[#1D1D1D] flex items-center justify-center text-[#FFC62A] rotate-90 lg:rotate-0 shadow-lg">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}