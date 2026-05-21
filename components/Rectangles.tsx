"use client";

import { useEffect, useState } from "react";

export const PartnersSection = () => {
const partners = [
  "BRANDLABS",
  "CREATIVE CO.",
  "STUDIO 91",
  "ADGENCE HYD",
  "SOCIAL PULSE",
  "REELCRAFT",
  "VIJAYIISAM",
  "PIXEL WORKS",
  "THINKMEDIA",
  "REDANTZ",
  "TAMMADA MEDIA",
  "PROPERTY EDGE",
  "ALOK MEDIA",
  "CITTA AI",
  "INFINITUM",
  "HYD TALKIES",
  "WE MEDIA",
  "STUDENT TRIBE",
  "RECORD INNOVATION",
  "DOLLY STUDIOS",
];

  const [active, setActive] = useState(0);

  // 🔁 Moving glow
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % partners.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#0D0D0D] py-20 text-center">
      {/* TITLE */}
      <p className="text-xs tracking-[6px] text-[#C9A227]/70 mb-12 uppercase">
        Associated Studios, Agencies & Hiring Partners
      </p>

      {/* BOXES */}
      <div className="flex flex-wrap justify-center gap-6 px-[5%]">
        {partners.map((item, i) => (
          <div
            key={i}
            className={`relative px-8 py-4 border rounded-[12px] text-sm tracking-[3px] uppercase
            transition-all duration-500 overflow-hidden ${
              active === i
                ? "text-black scale-105 border-[#F4D03F]"
                : "text-white/60 border-white/10 bg-[#111]"
            }`}
          >
            {/* 🔥 GLOW BACKGROUND */}
            {active === i && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#F4D03F] via-[#FFD700] to-[#F4D03F] opacity-90 blur-[6px]" />
            )}

            {/* CONTENT */}
            <span className="relative z-10 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
