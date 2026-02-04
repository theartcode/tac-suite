"use client";

import { useState } from "react";

const items = [
  {
    title: "Digital Marketing",
    desc:
      "Performance-driven digital marketing built around growth, analytics, and conversion-focused execution.",
  },
  {
    title: "Creative Design",
    desc:
      "Clean, modern design systems that balance aesthetics with usability and brand clarity.",
  },
  {
    title: "Content & Editing",
    desc:
      "High-impact content creation and editing designed to educate, engage, and convert audiences.",
  },
  {
    title: "Growth Strategy",
    desc:
      "We align marketing, design, and execution into a single scalable growth system.",
  },
];

export default function WhyTACSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full py-40 bg-white">
      {/* soft transition from previous section */}
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-b from-[#f1f7f3] via-white to-white pointer-events-none" />

      {/* CONTENT */}
      <div className="relative w-full px-[5%]">

        {/* ================= TITLE ================= */}
        <div className="max-w-[1000px]">
          <h2 className="text-6xl font-bold text-green-900 leading-tight">
            Why <span className="text-yellow-400">TAC</span>
          </h2>

          <p className="mt-8 text-xl text-green-800 leading-relaxed">
            TAC is built for brands that demand clarity, consistency, and
            measurable digital growth — not vanity metrics or guesswork.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-28">

          {/* LEFT LIST */}
          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`
                  group relative text-left p-8 rounded-3xl transition-all duration-500
                  ${
                    active === index
                      ? "bg-green-50 shadow-[0_24px_70px_rgba(34,197,94,0.15)]"
                      : "hover:bg-green-50"
                  }
                `}
              >
                {/* Accent bar */}
                <span
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2
                    h-[75%] w-1.5 rounded-full transition-all duration-500
                    ${
                      active === index
                        ? "bg-green-600"
                        : "bg-transparent group-hover:bg-green-400"
                    }
                  `}
                />

                <h3 className="text-2xl font-semibold text-green-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-lg text-green-700 leading-relaxed">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>

          {/* RIGHT FEATURE */}
          <div className="relative flex items-center">
            <div className="relative w-full h-[560px] rounded-[52px] bg-gradient-to-br from-green-500 to-green-600 shadow-[0_50px_140px_rgba(34,197,94,0.35)] flex items-center justify-center overflow-hidden">

              <div className="absolute inset-0 bg-white/10" />

              {/* INNER CARD */}
              <div
                key={active}
                className="
                  relative bg-white w-[88%] h-[78%]
                  rounded-[40px] p-16
                  flex flex-col justify-center
                  shadow-[0_30px_90px_rgba(34,197,94,0.2)]
                  transition-all duration-500
                "
              >
                <span className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-yellow-300 text-green-900 font-semibold rounded-full w-fit">
                  <span className="text-base tracking-wide">
                    {active + 1} / {items.length}
                  </span>
                </span>

                <h3 className="text-4xl font-bold text-green-900 leading-tight">
                  {items[active].title}
                </h3>

                <p className="mt-6 text-xl text-green-800 leading-relaxed max-w-[92%]">
                  {items[active].desc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
