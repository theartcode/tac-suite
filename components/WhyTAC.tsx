"use client";

import Image from "next/image";
import { Download, Layers, BarChart3, Presentation } from "lucide-react";

const placements = [
  { name: "Aman Gupta", company: "Meta", img: "/partners/facebook.png" },
  { name: "Sanya Iyer", company: "Google", img: "/partners/gartner.png" },
  { name: "Rohan Shah", company: "Microsoft", img: "/partners/amazon.png" },
  { name: "Vikram R.", company: "Amazon", img: "/partners/spry.png" },
  { name: "Priya K.", company: "Netflix", img: "/partners/druva.png" },
  { name: "Karan J.", company: "Apple", img: "/partners/apple.png" },
];

export default function PortfolioProof() {
  return (
    <section className="w-full bg-[#FFF9E6] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[5%]">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.85]">
            Your Portfolio,
            <span className="block font-serif italic font-light text-[#365c47] lowercase mt-1">
              Built on Real Proof of Work
            </span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-[#111111]/70 text-base md:text-lg font-medium leading-relaxed">
            Capstone projects equip you with industry-ready skills and a portfolio 
            that demonstrates your ability to perform from day one.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6 items-start">

          {/* LEFT – GLASS BLOCKS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* BLOCK 1 */}
            <div className="bg-white/60 backdrop-blur-xl rounded-[24px] p-6 flex flex-col justify-between min-h-[240px] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-black/5 hover:bg-white transition-all duration-500">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#FFC62A]/10 flex items-center justify-center mb-4 text-[#FFC62A]">
                  <Layers size={18} />
                </div>
                <h3 className="font-black text-lg mb-3 text-black uppercase tracking-tight">Outbound GTM</h3>
                <ul className="space-y-1.5 text-[13px] font-semibold text-[#111111]/60">
                  <li>• 7-step outbound cadences.</li>
                  <li>• Multi-channel ICP strategy.</li>
                  <li>• AI response optimization.</li>
                </ul>
              </div>
              <div className="mt-4">
                <div className="px-3 py-1 bg-black/5 rounded-md text-[9px] font-black inline-flex items-center gap-2 border border-black/5 text-black/40">
                  GTM_STRATEGY.PDF <Download size={10} />
                </div>
              </div>
            </div>

            {/* BLOCK 2 */}
            <div className="bg-white/60 backdrop-blur-xl rounded-[24px] p-6 flex flex-col justify-between min-h-[240px] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-black/5 hover:bg-white transition-all duration-500">
              <div>
                <div className="w-9 h-9 rounded-lg bg-[#365c47]/10 flex items-center justify-center mb-4 text-[#365c47]">
                  <BarChart3 size={18} />
                </div>
                <h3 className="font-black text-lg mb-3 text-black uppercase tracking-tight">GTM Capstone</h3>
                <ul className="space-y-1.5 text-[13px] font-semibold text-[#111111]/60">
                  <li>• Full SaaS GTM strategy.</li>
                  <li>• Journey & Funnel design.</li>
                  <li>• Revenue-focused KPIs.</li>
                </ul>
              </div>
              <div className="mt-4">
                <div className="px-3 py-1 bg-black/5 rounded-md text-[9px] font-black inline-flex items-center gap-2 border border-black/5 text-black/40">
                  KPI_FRAMEWORK.XLS <Download size={10} />
                </div>
              </div>
            </div>

            {/* BLOCK 3 */}
            <div className="bg-white/60 backdrop-blur-xl rounded-[24px] p-6 flex flex-col justify-between min-h-[240px] border border-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] ring-1 ring-black/5 hover:bg-white transition-all duration-500">
              <div>
                <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center mb-4 text-black">
                  <Presentation size={18} />
                </div>
                <h3 className="font-black text-lg mb-3 text-black uppercase tracking-tight">Salespreneur</h3>
                <ul className="space-y-1.5 text-[13px] font-semibold text-[#111111]/60">
                  <li>• Offline pitch bootcamp.</li>
                  <li>• Leadership refinement.</li>
                  <li>• Live boardroom pitching.</li>
                </ul>
              </div>
              <div className="mt-4">
                <div className="px-3 py-1 bg-black/5 rounded-md text-[9px] font-black inline-flex items-center gap-2 border border-black/5 text-black/40">
                  PITCH_DECK.PPTX <Download size={10} />
                </div>
              </div>
            </div>

            {/* BIG GLASS BLOCK */}
            <div className="md:col-span-3 bg-white/40 backdrop-blur-2xl rounded-[28px] p-8 flex flex-col md:flex-row items-center justify-between border border-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] ring-1 ring-black/5 transition-all duration-700 hover:bg-white/80">
              <div className="flex-1">
                <h3 className="font-black text-xl mb-3 text-black uppercase tracking-tighter italic">GTM Challenge</h3>
                <p className="text-[#111111]/60 text-base md:text-lg font-semibold leading-snug max-w-xl">
                  Defend funnel design and channel choices in a boardroom-style setting under real industry pressure.
                </p>
              </div>
              <div className="mt-5 md:mt-0">
                <div className="px-5 py-2.5 bg-black rounded-full shadow-lg">
                  <span className="text-[#FFC62A] text-[9px] uppercase font-black tracking-[0.2em]">
                    Boardroom Simulation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT – PLACEMENTS */}
          <div className="relative h-[560px] bg-[#111111] rounded-[28px] overflow-hidden shadow-2xl flex flex-col border border-white/5">
            <div className="p-6 border-b border-white/5 bg-[#111111]/50 backdrop-blur-md sticky top-0 z-20">
              <span className="text-[#FFC62A] text-[9px] tracking-[0.3em] uppercase font-bold block mb-2 opacity-80">
                Immersions
              </span>
              <h3 className="text-lg font-black text-white leading-tight">
                Global <br />
                <span className="italic font-serif text-[#FFC62A] lowercase">
                  Placements
                </span>
              </h3>
            </div>

            <div className="flex-1 relative overflow-hidden px-4">
              <div className="flex flex-col gap-3 py-4 animate-vertical-scroll">
                {[...placements, ...placements, ...placements].map((p, i) => (
                  <div
                    key={i}
                    className="flex gap-3 bg-white/[0.03] p-3.5 rounded-[18px] items-center border border-white/[0.05] transition-colors hover:bg-white/[0.08]"
                  >
                    <div className="relative w-8 h-8 rounded-lg bg-white/10 p-1.5 flex shrink-0">
                      <Image
                        src={p.img}
                        alt={p.name}
                        fill
                        className="object-contain invert opacity-80"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-white text-[13px] font-black truncate">
                        {p.name}
                      </h4>
                      <p className="text-[#FFC62A] text-[8px] uppercase font-bold tracking-widest mt-0.5">
                        {p.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#111111] to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#111111] to-transparent z-10" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes vertical-scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .animate-vertical-scroll {
          animation: vertical-scroll 40s linear infinite;
        }
        .animate-vertical-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}