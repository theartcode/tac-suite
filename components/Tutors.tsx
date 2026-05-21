"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const tutors = [
  "/tutors/tutor1.jpg",
  "/tutors/tutor2.jpg",
  "/tutors/tutor3.jpg",
  "/tutors/tutor4.jpg",
  "/tutors/tutor5.jpg",
  "/tutors/tutor6.jpg",
  "/tutors/tutor7.jpg",
  "/tutors/tutor8.jpg",
];

export default function TutorsSection() {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % tutors.length);
  const prev = () => setIndex((prev) => (prev - 1 + tutors.length) % tutors.length);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(next, 3800);
    return () => clearInterval(interval);
  }, [index, isHovering]);

  const getStyles = (i: number) => {
    const total = tutors.length;
    const diff = (i - index + total) % total;

    if (diff === 0) {
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        zIndex: 10,
        rotateY: 0,
      };
    }

    if (diff === 1) {
      return {
        x: 460,
        scale: 0.82,
        opacity: 0.5,
        filter: "blur(4px)",
        zIndex: 5,
        rotateY: -12,
      };
    }

    if (diff === total - 1) {
      return {
        x: -460,
        scale: 0.82,
        opacity: 0.5,
        filter: "blur(4px)",
        zIndex: 5,
        rotateY: 12,
      };
    }

    return {
      x: diff > 1 ? 600 : -600,
      scale: 0.6,
      opacity: 0,
      zIndex: 0,
      filter: "blur(12px)",
      rotateY: 0,
    };
  };

  return (
    <section className="w-full pt-8 pb-12 bg-[#FBF8E4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADER */}
        <div className="mb-10">
          <h2
            className={`${bebas.className} text-[110px] leading-[0.8] tracking-tighter uppercase text-[#1d1d1d]`}
          >
            TAC <span className="text-[#FFC62A]">Tutors</span>
          </h2>

          <p className="mt-5 text-gray-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Master the art of cinematic storytelling with mentorship from
            industry professionals shaping the future of content.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          className="relative h-[450px] flex items-center justify-center [perspective:1200px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 z-50 pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto bg-white/40 backdrop-blur-md hover:bg-white text-black p-5 rounded-full shadow-xl transition-all duration-300 active:scale-90 border border-black/5"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={next}
              className="pointer-events-auto bg-white/40 backdrop-blur-md hover:bg-white text-black p-5 rounded-full shadow-xl transition-all duration-300 active:scale-90 border border-black/5"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* IMAGES */}
          <div className="relative w-full h-full flex items-center justify-center">
            {tutors.map((img, i) => {
              const style = getStyles(i);
              const isActive = (i - index + tutors.length) % tutors.length === 0;

              return (
                <motion.div
                  key={i}
                  animate={style}
                  transition={{
                    duration: 0.7,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="absolute cursor-pointer"
                  style={{ zIndex: style.zIndex, transformStyle: "preserve-3d" }}
                  onClick={() => setIndex(i)}
                >
                  <motion.div
                    whileHover={isActive ? { y: -10 } : {}}
                    className="relative group"
                  >
                    <img
                      src={img}
                      alt=""
                      className={`w-[680px] h-[380px] object-cover rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 ${
                        isActive ? "ring-8 ring-white/50" : "grayscale-[20%]"
                      }`}
                      draggable={false}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* INDICATORS */}
        <div className="flex justify-center mt-10 gap-3">
          {tutors.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === index
                  ? "bg-black w-14"
                  : "bg-black/10 w-3 hover:bg-black/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}