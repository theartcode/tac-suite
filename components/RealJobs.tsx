"use client";

import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";

// Font
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export function PlacementSection() {
  return (
    <section className="bg-[#FBF8E4] text-black px-[6%] py-12">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 mb-8">

        {/* LEFT SMALL TEXT */}
        <div className="flex items-start">
          <p className="text-xs tracking-[4px] text-[#C9A227] uppercase">
            ★ First Real Placement Certificate
          </p>
        </div>

        {/* RIGHT TITLE */}
        <div className="text-right">
          <h2
            className={`${bebas.className} uppercase text-[#111]`}
            style={{
              fontSize: "76px",
              lineHeight: "72px",
              letterSpacing: "0.5px",
            }}
          >
            REAL JOBS.<br />
            REAL MONEY.
          </h2>

          <p className="text-black/50 text-sm mt-3 max-w-md ml-auto">
            Numbers from Cohort 1 and 2. Both cohorts placed successfully within 60 days of completion.
          </p>
        </div>

      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-black/10 rounded-[24px] overflow-hidden">

        {[
          { value: "6", label: "BATCHES COMPLETED" },
          { value: "₹30K", label: "AVERAGE PACKAGE — FRESHERS", highlight: true },
          { value: "100%", label: "PLACEMENT ASSISTANCE" },
          { value: "8", label: "SKILLS PER STUDENT" },
          { value: "₹1L", label: "MONTH-12 FREELANCE TARGET", highlight: true },
          { value: "10", label: "INDUSTRY PORTFOLIO" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07 }}
            className={`p-10 text-center transition duration-300
            ${item.highlight 
              ? "bg-[#F4D03F]" 
              : "bg-[#FFFDF5]"}`}
          >

            {/* VALUE */}
            <h3 className="font-extrabold text-5xl tracking-tight mb-2">
              {item.value}
            </h3>

            {/* LABEL */}
            <p className="text-xs tracking-[3px] text-black/60 font-semibold">
              {item.label}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default PlacementSection;