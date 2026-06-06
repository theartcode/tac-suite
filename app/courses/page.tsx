"use client";

import { useState } from "react";
import { Bebas_Neue } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/footer";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

const courses = [
  {
    id: 1,
    title: "VIDEO EDITING",
    desc: "Master cinematic storytelling using Premiere Pro. Learn transitions, reels, and viral editing techniques used by top creators.",
  },
  {
    id: 2,
    title: "GRAPHIC DESIGN",
    desc: "Create stunning visuals using Photoshop & Illustrator. Build branding, logos, and social media creatives.",
  },
  {
    id: 3,
    title: "AFTER EFFECTS",
    desc: "Bring visuals to life with motion graphics, animations, and high-end VFX used in professional content.",
  },
  {
    id: 4,
    title: "DAVINCI RESOLVE",
    desc: "Learn cinematic color grading techniques used in films and professional video production.",
  },
  {
    id: 5,
    title: "CONTENT WRITING",
    desc: "Write powerful scripts, captions, and SEO content that hooks and converts audience attention.",
  },
  {
    id: 6,
    title: "CONTENT SHOOT",
    desc: "Learn camera angles, lighting, and shooting techniques to create high-quality visual content.",
  },
  {
    id: 7,
    title: "CLIENT MANAGEMENT",
    desc: "Handle clients professionally with communication, pricing strategies, and retention techniques.",
  },
  {
    id: 8,
    title: "DIGITAL MARKETING",
    desc: "Master ads, analytics, SEO, and growth strategies to scale content and generate revenue.",
  },
];

export default function CoursesPage() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FBF8E4] text-[#1D1D1D] pt-[120px] pb-24 px-[6%] md:px-[8%] font-sans">
        {/* HERO */}
        <section className="mb-16 md:mb-20">
          <h1 className={`${bebas.className} text-[56px] sm:text-[68px] md:text-[76px] leading-[0.95] mb-5`}>
            COURSES
          </h1>

          <p className="text-sm md:text-base max-w-[600px] leading-relaxed text-[#1D1D1D]/70">
            Not just skills — we build creators. Learn, create, and monetize with
            real-world content strategies.
          </p>
        </section>

        {/* PREMIUM GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              onMouseEnter={() => setHovered(course.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "28px",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                background:
                  hovered === course.id
                    ? "linear-gradient(135deg, #ffffff, #f3f0d7)"
                    : "rgba(255,255,255,0.6)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow:
                  hovered === course.id
                    ? "0 20px 50px rgba(0,0,0,0.15)"
                    : "0 8px 20px rgba(0,0,0,0.05)",
                transform:
                  hovered === course.id
                    ? "translateY(-8px) scale(1.02)"
                    : "none",
                transition: "all 0.35s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* GLOW EFFECT */}
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  background:
                    "radial-gradient(circle, rgba(201,162,39,0.15), transparent 60%)",
                  opacity: hovered === course.id ? 1 : 0,
                  transition: "0.4s",
                }}
              />

              {/* CONTENT */}
              <h2 className={`${bebas.className} text-[28px] md:text-[30px] tracking-wide mb-3 relative`}>
                {course.title}
              </h2>

              <p className="text-sm leading-relaxed text-[#1D1D1D]/65 relative">
                {course.desc}
              </p>

              {/* BOTTOM LINE */}
              <div
                style={{
                  marginTop: 20,
                  height: "2px",
                  width: hovered === course.id ? "60%" : "30%",
                  background: "#C9A227",
                  transition: "0.3s",
                }}
              />
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}