"use client";

import { useState } from "react";

type Side = "left" | "right" | null;

export default function Hero() {
  const [active, setActive] = useState<Side>(null);

  const isDesktop = () => typeof window !== "undefined" && window.innerWidth >= 768;

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

  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden">

      {/* DESIGN */}
      <div
        onMouseEnter={() => handleEnter("left")}
        onMouseLeave={handleLeave}
        onClick={() => handleTap("left")}
        className={`
          flex items-center justify-center
          bg-white text-green-800
          transition-all duration-700 ease-in-out
          cursor-pointer
          w-full h-1/2 md:h-full
          ${
            active === "left"
              ? "md:w-[75%]"
              : active === "right"
              ? "md:w-[25%]"
              : "md:w-1/2"
          }
        `}
      >
        <h1
          className={`
            text-4xl md:text-7xl font-bold tracking-wide
            transition-all duration-500
            ${active === "left" ? "scale-110 text-yellow-500" : ""}
          `}
        >
          Design
        </h1>
      </div>

      {/* DEVELOPMENT */}
      <div
        onMouseEnter={() => handleEnter("right")}
        onMouseLeave={handleLeave}
        onClick={() => handleTap("right")}
        className={`
          flex items-center justify-center
          bg-green-600 text-yellow-200
          transition-all duration-700 ease-in-out
          cursor-pointer
          w-full h-1/2 md:h-full
          ${
            active === "right"
              ? "md:w-[75%]"
              : active === "left"
              ? "md:w-[25%]"
              : "md:w-1/2"
          }
        `}
      >
        <h1
          className={`
            text-4xl md:text-7xl font-bold tracking-wide
            transition-all duration-500
            ${active === "right" ? "scale-110 text-yellow-300" : ""}
          `}
        >
          Development
        </h1>
      </div>

    </section>
  );
}
