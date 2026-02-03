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
    <section className="w-full bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <div className="max-w-3xl">
          <h2 className="text-5xl font-bold text-green-900">
            Why <span className="text-yellow-400">TAC</span>
          </h2>

          <p className="mt-6 text-lg text-green-800">
            TAC is built for brands that want clarity, consistency, and
            measurable digital growth — not vanity metrics.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20">

          {/* LEFT LIST */}
          <div className="flex flex-col gap-6">
            {items.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`text-left p-6 border-l-4 transition-all duration-300
                  ${
                    active === index
                      ? "border-green-600 bg-green-50"
                      : "border-transparent hover:bg-green-50"
                  }
                `}
              >
                <h3 className="text-xl font-semibold text-green-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-green-700">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>

          {/* RIGHT FEATURE BOX */}
          <div className="relative">

            <div className="w-full h-[420px] bg-green-600 rounded-3xl shadow-[0_40px_120px_rgba(34,197,94,0.45)] flex items-center justify-center">

              <div className="bg-white w-[85%] h-[75%] rounded-2xl p-10 flex flex-col justify-center">
                <span className="inline-block mb-4 px-4 py-1 bg-yellow-300 text-green-900 font-semibold w-fit">
                  {active + 1} / {items.length}
                </span>

                <h3 className="text-3xl font-bold text-green-900">
                  {items[active].title}
                </h3>

                <p className="mt-4 text-lg text-green-800">
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
