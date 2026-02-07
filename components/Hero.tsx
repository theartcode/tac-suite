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

        <div className={`absolute inset-0 transition-colors duration-700 ${
          active === "left" ? "bg-[#FFF9E6]/20" : "bg-[#FFF9E6]/40"
        }`} />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-md"> {/* Reduced max-w */}
          <h1
            className={`
              text-4xl md:text-6xl font-extrabold tracking-tighter /* Reduced: 8xl -> 6xl */
              text-white drop-shadow-2xl
              transition-all duration-500
              ${active === "left" ? "scale-105" : ""}
            `}
          >
            Design
          </h1>

          <p className="mt-4 text-base md:text-lg text-white leading-relaxed font-medium drop-shadow-md"> {/* Reduced: 2xl -> lg */}
            Visual systems that make <br />
            <span className="font-serif italic text-[#FFC62A]">ideas feel alive.</span>
          </p>

          <div
            className={`
              mt-10 transition-all duration-700 delay-150 /* Reduced margin: 16 -> 10 */
              ${active === "left" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
            `}
          >
            <button
              className="
                px-8 py-3 /* Reduced padding */
                text-sm font-bold uppercase tracking-widest /* Reduced text size */
                rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl
                bg-[#365c47] text-white
                transition-all duration-300 ease-out
                hover:shadow-[0_15px_40px_rgba(54,92,71,0.4)]
                hover:scale-105
              "
            >
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

        <div className={`absolute inset-0 transition-colors duration-700 ${
          active === "right" ? "bg-[#365c47]/30" : "bg-[#365c47]/50"
        }`} />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-md"> {/* Reduced max-w */}
          <h1
            className={`
              text-4xl md:text-6xl font-extrabold tracking-tighter /* Reduced: 8xl -> 6xl */
              text-[#FFC62A] drop-shadow-2xl
              transition-all duration-500
              ${active === "right" ? "scale-105" : ""}
            `}
          >
            Strategy
          </h1>

          <p className="mt-4 text-base md:text-lg text-white leading-relaxed font-medium drop-shadow-md"> {/* Reduced: 2xl -> lg */}
            Scalable frameworks <br />
            <span className="font-serif italic text-white">engineered for growth.</span>
          </p>

          <div
            className={`
              mt-10 transition-all duration-700 delay-150 /* Reduced margin: 16 -> 10 */
              ${active === "right" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
            `}
          >
            <button
              className="
                px-8 py-3 /* Reduced padding */
                text-sm font-bold uppercase tracking-widest /* Reduced text size */
                rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl
                bg-[#FFC62A] text-[#2F2F2F]
                transition-all duration-300 ease-out
                hover:shadow-[0_15px_40px_rgba(255,198,42,0.5)]
                hover:scale-105
              "
            >
              Explore Strategy →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}