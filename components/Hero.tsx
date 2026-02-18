"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Side = "left" | "right" | null;

export default function Hero() {
  const [active, setActive] = useState<Side>(null);
  const router = useRouter();

  const isDesktop = () =>
    typeof window !== "undefined" && window.innerWidth >= 768;

  const handleEnter = (side: Side) => {
    if (isDesktop()) setActive(side);
  };

  const handleLeave = () => {
    if (isDesktop()) setActive(null);
  };

  const handleTap = (side: Side) => {
    if (!isDesktop()) {
      setActive(active === side ? null : side);
    }
  };

  const handleNavigate = (side: Side) => {
    if (side === "left") router.push("/design");
    if (side === "right") router.push("/development");
  };

  // 👉 NEW: scroll to next section
  const handleScrollDown = () => {
    const heroSection = document.querySelector("section");
    heroSection?.nextElementSibling?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black">

      {/* ================= LEFT SIDE: DESIGN ================= */}
      <div
        onMouseEnter={() => handleEnter("left")}
        onMouseLeave={handleLeave}
        onClick={() => {
          handleTap("left");
          if (active === "left" || isDesktop()) handleNavigate("left");
        }}
        className={`
          relative flex items-center justify-center
          transition-all duration-700 ease-in-out
          cursor-pointer overflow-hidden
          w-full h-1/2 md:h-full
          ${
            active === "left"
              ? "md:w-[70%]"
              : active === "right"
              ? "md:w-[30%]"
              : "md:w-1/2"
          }
        `}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700
            ${active === "left" ? "opacity-90 scale-105" : "opacity-60"}
          `}
        >
          <source src="/design.mp4" type="video/mp4" />
        </video>

        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            active === "left" ? "bg-[#FFF9E6]/20" : "bg-[#FFF9E6]/40"
          }`}
        />

        <div className="relative z-10 text-center px-6 max-w-md">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white drop-shadow-2xl">
            Design
          </h1>

          <p className="mt-4 text-base md:text-lg text-white font-medium">
            Visual systems that make <br />
            <span className="font-serif italic text-[#FFC62A]">
              ideas feel alive.
            </span>
          </p>

          <div
            className={`mt-10 transition-all duration-700 ${
              active === "left"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <button className="px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-tr-2xl rounded-bl-2xl bg-[#365c47] text-white hover:scale-105 transition">
              Explore Design →
            </button>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE: STRATEGY ================= */}
      <div
        onMouseEnter={() => handleEnter("right")}
        onMouseLeave={handleLeave}
        onClick={() => {
          handleTap("right");
          if (active === "right" || isDesktop()) handleNavigate("right");
        }}
        className={`
          relative flex items-center justify-center
          transition-all duration-700 ease-in-out
          cursor-pointer overflow-hidden
          w-full h-1/2 md:h-full
          ${
            active === "right"
              ? "md:w-[70%]"
              : active === "left"
              ? "md:w-[30%]"
              : "md:w-1/2"
          }
        `}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-700
            ${active === "right" ? "opacity-90 scale-105" : "opacity-60"}
          `}
        >
          <source src="/development.mp4" type="video/mp4" />
        </video>

        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            active === "right" ? "bg-[#365c47]/30" : "bg-[#365c47]/50"
          }`}
        />

        <div className="relative z-10 text-center px-6 max-w-md">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-[#FFC62A] drop-shadow-2xl">
            Strategy
          </h1>

          <p className="mt-4 text-base md:text-lg text-white font-medium">
            Scalable frameworks <br />
            <span className="font-serif italic text-white">
              engineered for growth.
            </span>
          </p>

          <div
            className={`mt-10 transition-all duration-700 ${
              active === "right"
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6 pointer-events-none"
            }`}
          >
            <button className="px-8 py-3 text-sm font-bold uppercase tracking-widest rounded-tr-2xl rounded-bl-2xl bg-[#FFC62A] text-[#2F2F2F] hover:scale-105 transition">
              Explore Strategy →
            </button>
          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR (CLICKABLE) ================= */}
      <button
        onClick={handleScrollDown}
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 animate-bounce-slow"
      >
        <div className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center shadow-lg">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <span className="text-[10px] tracking-widest uppercase text-white/70">
          Scroll
        </span>
      </button>
    </section>
  );
}
