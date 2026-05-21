"use client";

import { useState } from "react";

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
    <main
      style={{
        background: "#FBF8E4",
        minHeight: "100vh",
        color: "#1D1D1D",
        fontFamily: "'DM Sans', sans-serif",
        padding: "60px 8%",
      }}
    >
      {/* HERO */}
      <section style={{ marginBottom: 80 }}>
        <h1
          style={{
            fontFamily: "Bebas Neue",
            fontSize: "76px",
            letterSpacing: "0.5px",
            lineHeight: "72px",
            marginBottom: 20,
          }}
        >
          COURSES
        </h1>

        <p
          style={{
            fontSize: "16px",
            maxWidth: 600,
            lineHeight: "28px",
            color: "rgba(29,29,29,0.7)",
          }}
        >
          Not just skills — we build creators. Learn, create, and monetize with
          real-world content strategies.
        </p>
      </section>

      {/* PREMIUM GRID */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
        }}
      >
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
            <h2
              style={{
                fontFamily: "Bebas Neue",
                fontSize: "30px",
                letterSpacing: "1px",
                marginBottom: 12,
                position: "relative",
              }}
            >
              {course.title}
            </h2>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                color: "rgba(29,29,29,0.65)",
                position: "relative",
              }}
            >
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
  );
}