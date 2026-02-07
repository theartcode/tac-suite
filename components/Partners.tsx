"use client";

import Image from "next/image";

const topLogos = [
  { name: "Facebook", src: "/partners/amazon.png" },
  { name: "Gartner", src: "/partners/amazon.png" },
  { name: "Leadsquared", src: "/partners/amazon.png" },
  { name: "Druva", src: "/partners/amazon.png" },
  { name: "Amazon", src: "/partners/amazon.png" },
  { name: "SPRY", src: "/partners/amazon.png" },
  { name: "LambdaTest", src: "/partners/amazon.png" },
];

const bottomLogos = [
  { name: "Shiprocket", src: "/partners/amazon.png" },
  { name: "VWO", src: "/partners/amazon.png" },
  { name: "Zuddl", src: "/partners/amazon.png" },
  { name: "Pee Safe", src: "/partners/amazon.png" },
  { name: "Bummer", src: "/partners/amazon.png" },
  { name: "Ridash", src: "/partners/amazon.png" },
  { name: "B3T", src: "/partners/amazon.png" },
];

export default function PartneredCompanies() {
  return (
    <section className="relative w-full py-24 bg-[#FFF9E6] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FFC62A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 px-[5%] mb-12 text-center flex flex-col items-center">
        <span className="mb-4 text-[#FFC62A] font-bold tracking-[0.4em] uppercase text-[10px]">
          Industrial Footprint
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-[#2F2F2F] tracking-tighter leading-[0.9] mb-8">
          Partnered <br />
          <span className="font-serif italic font-light text-[#365c47] lowercase">Companies</span>
        </h2>
        <p className="text-lg md:text-xl text-[#2F2F2F]/60 max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
          Our mentors bring real-world experience from the most respected global brands.
        </p>
      </div>

      {/* INCREASED space-y FROM 0 TO 12 TO SEPARATE THE ROWS */}
      <div className="relative w-full px-[5%] space-y-12 md:space-y-16"> 
        {/* TOP ROW */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-4 md:gap-6 animate-marquee-right whitespace-nowrap py-4">
            {[...topLogos, ...topLogos, ...topLogos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-[140px] md:w-[220px] h-16 md:h-20 relative opacity-100 transition-transform duration-300 hover:scale-105">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="220px"
                  className="object-contain px-2"
                />
              </div>
            ))}
          </div>
          <BlurEdges />
        </div>

        {/* BOTTOM ROW */}
        <div className="relative flex overflow-hidden">
          <div className="flex gap-4 md:gap-6 animate-marquee-left whitespace-nowrap py-4">
            {[...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-[140px] md:w-[220px] h-16 md:h-20 relative opacity-100 transition-transform duration-300 hover:scale-105">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="220px"
                  className="object-contain px-2"
                />
              </div>
            ))}
          </div>
          <BlurEdges />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-right { animation: marquee-right 18s linear infinite; }
        .animate-marquee-left { animation: marquee-left 22s linear infinite; }
        .animate-marquee-right:hover, .animate-marquee-left:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}

function BlurEdges() {
  return (
    <>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-[#FFF9E6] via-[#FFF9E6]/80 to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-[#FFF9E6] via-[#FFF9E6]/80 to-transparent z-20" />
    </>
  );
}