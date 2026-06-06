"use client";

import { motion } from "framer-motion";

const industries = [
  { id: "01", title: "Food & Beverage", image: "/industries/01.png" },
  { id: "02", title: "Fashion & Beauty", image: "/industries/02.png" },
  { id: "03", title: "Apparel & Lifestyle", image: "/industries/03.png" },
  { id: "04", title: "Construction & Real Estate", image: "/industries/04.png" },
  { id: "05", title: "Education & Training", image: "/industries/05.png" },
  { id: "06", title: "Entertainment & Media", image: "/industries/06.png" },
  { id: "07", title: "Health & Wellness", image: "/industries/07.png" },
  { id: "08", title: "Automobiles & Transport", image: "/industries/08.png" },
  { id: "09", title: "Jewellery & Boutiques", image: "/industries/09.png" },
  { id: "10", title: "Miscellaneous & Emerging", image: "/industries/10.png" },
];

export function IndustriesSection() {
  return (
    <section className="bg-[#1A1A1A] text-[#f7f1e4] px-[6%] py-28">

      {/* TOP */}
      <div className="grid md:grid-cols-2 gap-10 items-start mb-16 md:mb-30">
        {/* TITLE */}
        <div className="text-left md:text-right md:order-2">
          <h2
            className="uppercase font-bebas text-[48px] sm:text-[62px] md:text-[76px] leading-[44px] sm:leading-[58px] md:leading-[72.2px]"
            style={{
              fontWeight: 700,
              letterSpacing: "0.5px",
              fontFamily: "'Bebas Neue', sans-serif",
              color: "#f7f1e4",
            }}
          >
            10 INDUSTRIES.<br />
            ONE STUDENT.
          </h2>
        </div>

        {/* DESC */}
        <div className="flex items-center md:order-1">
          <p className="text-[#f7f1e4]/90 text-lg md:text-xl max-w-sm leading-relaxed">
            One project per industry. No repeats. That portfolio is what gets you the job or the client.
          </p>
        </div>
      </div>

      {/* BADGE */}
      <div className="mb-10 flex flex-wrap">
        <span className="border border-[#FFC62A]/40 text-[#FFC62A] px-3 py-2 md:px-4 md:py-2 text-[9px] sm:text-xs tracking-[2px] md:tracking-[3px] uppercase inline-block">
          ★ FIRST IN INDIA – 10-INDUSTRY PORTFOLIO CERTIFICATION
        </span>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {industries.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="overflow-hidden rounded-xl  bg-[#111] flex items-center justify-center"
          >
            <img
              src={item.image}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}
      </div>

    </section>
  );
}