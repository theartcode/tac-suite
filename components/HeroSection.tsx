"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* ─── SCROLLING STRIPS DATA ──────────────────────────────── */
const topStripItems = [
  { label: "Brand Identity", color: "#FFC62A", icon: "◈" },
  { label: "Logo Design",    color: "#E8D5A0", icon: "⬡" },
  { label: "Social Kit",     color: "#FFC62A", icon: "▣" },
  { label: "Poster Art",     color: "#D4B87A", icon: "◉" },
  { label: "Motion Reel",    color: "#FFC62A", icon: "▷" },
  { label: "Color Grade",    color: "#E8D5A0", icon: "◑" },
  { label: "Brand Book",     color: "#FFC62A", icon: "◈" },
  { label: "Thumbnail Set",  color: "#D4B87A", icon: "▦" },
  { label: "Merch Design",   color: "#FFC62A", icon: "⬡" },
  { label: "IG Template",    color: "#E8D5A0", icon: "◉" },
];

const bottomStripItems = [
  { label: "Product Shoot",   color: "#FFC62A", icon: "◎" },
  { label: "Reel Edit",       color: "#E8D5A0", icon: "▷" },
  { label: "Ad Campaign",     color: "#FFC62A", icon: "◈" },
  { label: "Brand Film",      color: "#D4B87A", icon: "◉" },
  { label: "Typography Kit",  color: "#FFC62A", icon: "▣" },
  { label: "Event Coverage",  color: "#E8D5A0", icon: "◑" },
  { label: "Pitch Deck",      color: "#FFC62A", icon: "▦" },
  { label: "Photo Edit",      color: "#D4B87A", icon: "⬡" },
  { label: "YT Thumbnail",    color: "#FFC62A", icon: "◈" },
  { label: "Brand Mockup",    color: "#E8D5A0", icon: "◉" },
];

/* ─── INFINITE STRIP ─────────────────────────────────────── */
function InfiniteStrip({
  items,
  direction = "left",
  speed = 35,
}: {
  items: typeof topStripItems;
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className="overflow-hidden w-full"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "max-content",
          animation: `strip-${direction} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(26,26,26,0.06)",
              border: "1px solid rgba(26,26,26,0.08)",
              borderRadius: "2px",
              padding: "11px 22px",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span style={{ color: item.color }}>{item.icon}</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "rgba(26,26,26,0.55)",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── TV / MONITOR COMPONENT ─────────────────────────────── */
function TelevisionPlayer() {
  const [isHovered, setIsHovered] = useState(false);
  const [flicker, setFlicker] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlicker(true);
      setTimeout(() => setFlicker(false), 80);
    }, 4000 + Math.random() * 3000);
    return () => clearInterval(interval);
  }, []);

  return (
   <div
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  onClick={() =>
    window.open("https://youtu.be/Sj5ty8jFp48?si=-toioADM788nzUiY", "_blank")
  }
  style={{
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
    cursor: "pointer",
    filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.22)) drop-shadow(0 8px 24px rgba(255,198,42,0.08))",
  }}
>
      {/* ── TV OUTER BODY ── */}
      <div
        style={{
          background: "linear-gradient(145deg, #2a2820 0%, #1a1812 40%, #222018 100%)",
          borderRadius: "16px 16px 12px 12px",
          padding: "18px 18px 0 18px",
          boxShadow:
            "inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)",
          position: "relative",
        }}
      >
        {/* Brand badge top-left */}
        <div
          style={{
            position: "absolute",
            top: "8px",
            left: "18px",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "8px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#FFC62A",
            opacity: 0.7,
          }}
        >
          TAC · STUDIO
        </div>

        {/* Status LED */}
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "18px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 6px rgba(74,222,128,0.8)",
              animation: "led-pulse 2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "7px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            LIVE
          </span>
        </div>

        {/* ── SCREEN BEZEL ── */}
        <div
          style={{
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
            background: "#000",
            aspectRatio: "16/10",
            boxShadow:
              "inset 0 0 0 2px rgba(0,0,0,0.8), inset 0 0 20px rgba(0,0,0,0.6)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/Sj5ty8jFp48?autoplay=1&mute=1&controls=0&loop=1&playlist=Sj5ty8jFp48"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              pointerEvents: "none",
            }}
            allow="autoplay; encrypted-media"
          />

          {isHovered && (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "flex-end",
      padding: "12px",
      zIndex: 10,
    }}
  >
    <div
      style={{
        background: "#FFC62A",
        color: "#000",
        padding: "12px 20px",
        fontSize: "12px",
        fontWeight: "bold",
        letterSpacing: "2px",
        textTransform: "uppercase",
      }}
    >
      ▶ Watch Full Video
    </div>
  </div>
)}

          {/* Scanlines overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* CRT vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.55) 100%)",
              pointerEvents: "none",
              zIndex: 3,
            }}
          />

          {/* Flicker flash */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.03)",
              opacity: flicker ? 1 : 0,
              transition: flicker ? "none" : "opacity 0.08s",
              pointerEvents: "none",
              zIndex: 4,
            }}
          />

          {/* Corner reflections */}
          <div
            style={{
              position: "absolute",
              top: 0, left: 0,
              width: "40%", height: "30%",
              background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
              pointerEvents: "none",
              zIndex: 5,
            }}
          />

          {/* Bottom HUD bar */}
          <div
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              padding: "8px 12px",
              background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              zIndex: 6,
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "8px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#FFC62A",
              }}
            >
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "8px",
                letterSpacing: "1px",
                color: "rgba(255,255,255,0.35)",
              }}
            >
            </span>
          </div>
        </div>

        {/* ── TV CHIN / BOTTOM PANEL ── */}
        <div
          style={{
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            paddingBottom: "4px",
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
              }}
            />
          ))}
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #3a3828, #1a1812)",
              border: "1px solid rgba(255,255,255,0.1)",
              margin: "0 6px",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          />
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "3px",
                height: "3px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── TV NECK + BASE ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: "60px",
            height: "22px",
            background: "linear-gradient(to bottom, #1a1812, #222018)",
            clipPath: "polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)",
          }}
        />
        <div
          style={{
            width: "200px",
            height: "12px",
            background: "linear-gradient(145deg, #2a2820, #1a1812)",
            borderRadius: "6px 6px 4px 4px",
            boxShadow:
              "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        />
      </div>

      <style>{`
        @keyframes led-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(74,222,128,0.8); }
          50%       { opacity: 0.5; box-shadow: 0 0 3px rgba(74,222,128,0.4); }
        }
        @keyframes strip-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes strip-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

/* ─── HERO SECTION ───────────────────────────────────────── */
export function HeroSection() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    qualification: "",
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (loading) return;
  setLoading(true);

  try {
    const res = await fetch(
      "https://n8n.srv993899.hstgr.cloud/webhook/website-lead-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          qualification: formData.qualification,
          source: "TAC_Website",
          page_url: window.location.href,
        }),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to submit");
    }

    setSubmitted(true);

    // ✅ move here
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      qualification: "",
    });

  } catch (err) {
    console.error("Submission error:", err);
    alert("Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};
const closeModal = () => {
  setOpen(false);

  setTimeout(() => {
    setSubmitted(false); // ✅ correct
    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      qualification: "",
    });
  }, 300);
};

  return (
    <>
      <section
        className="min-h-screen bg-[#FBF8E4] text-[#1A1A1A] flex pt-[70px] overflow-x-hidden"
        style={{ marginLeft: "-1px" }}
      >
        {/* ══ LEFT CONTENT ══ */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-[6%]">

          <p className="font-mono text-[10px] tracking-[3px] uppercase text-[#1A1A1A]/40 mb-6 flex items-center gap-4">
            <span className="w-10 h-[1px] bg-[#FFC62A] block" />
            THE ART CODE — MADHAPUR, HYDERABAD
          </p>

          <h1 className="leading-[1.0] font-black tracking-tight uppercase">
            <span className="block text-[50px] md:text-[75px]">LEARN</span>
            <span className="block text-[50px] md:text-[75px] text-[#FFC62A]">8 SKILLS.</span>
            <span className="block text-[50px] md:text-[75px] text-transparent" style={{ WebkitTextStroke: "1.5px rgba(26,26,26,0.2)" }}>
              ONE COURSE.
            </span>
          </h1>

          <p className="mt-6 text-[#1A1A1A]/60 max-w-md text-[15px] leading-[1.8] font-medium">
            India's first 8-in-1 creative suite program. Shoot content. Design brands.
            Edit reels. Land jobs. Crack freelance gigs. Build your ₹1L/month career.
          </p>

          <div className="flex flex-col gap-10 mt-10">
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => setOpen(true)}
                className="bg-[#1D1D1D] text-[#FBF8E4] px-10 py-4 text-[12px] font-bold tracking-[2px] uppercase hover:scale-105 transition cursor-pointer"
              >
                ENROLL IN NEXT BATCH
              </button>
            </div>

            {/* STATS */}
            <div className="flex items-center gap-6 md:gap-8 border-t border-[#1D1D1D]/10 pt-8 max-w-xl">
              {[
                { val: "5",    label: "Cohorts Done" },
                { val: "₹30K", label: "Avg Package" },
                { val: "10",   label: "Portfolio" },
                { val: "8",    label: "Skills" },
              ].map((s, i) => (
                <li key={s.label} className="flex items-center gap-6 md:gap-8">
                  <div className="flex flex-col">
                    <span className="text-[32px] md:text-[40px] font-black leading-none text-[#FFC62A]">
                      {s.val}
                    </span>
                    <span className="text-[8px] md:text-[9px] tracking-[2px] uppercase font-bold text-[#1A1A1A]/40 mt-1">
                      {s.label}
                    </span>
                  </div>

                  {i < 3 && <div className="w-[1px] h-10 bg-[#1D1D1D]/10" />}
                </li>
              ))}
            </div>
          </div>
        </div>

        {/* ══ RIGHT: TV + STRIPS ══ */}
        <div className="hidden lg:flex flex-col justify-center items-center w-full lg:w-1/2 shrink-0 gap-8">

          {/* TOP STRIP — right to left */}
          <InfiniteStrip items={topStripItems} direction="left" speed={30} />

          {/* TELEVISION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="px-2 w-[88%]"
          >
            <TelevisionPlayer />
          </motion.div>

          {/* BOTTOM STRIP — left to right */}
          <InfiniteStrip items={bottomStripItems} direction="right" speed={28} />

        </div>
      </section>

      {/* ───────── APPLY MODAL ───────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 backdrop-blur-md p-4"
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            <motion.div
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 24, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[#FBF8E4] text-[#1A1A1A] w-full max-w-md p-8 rounded-lg shadow-2xl relative"
            >
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-black/40 hover:text-black text-xl leading-none transition-colors"
              >
                ✕
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10"
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <h2 className="text-3xl font-black mb-3 tracking-wide">
                      You&apos;re In!
                    </h2>
                    <p className="text-sm text-black/60 leading-relaxed">
                      Application received! We&apos;ll reach out shortly.
                      <br />
                      Please check your email.
                    </p>
                    <button
                      onClick={closeModal}
                      className="mt-8 bg-[#1D1D1D] text-white px-10 py-3 text-[11px] font-bold tracking-[2px] uppercase hover:bg-black transition-all active:scale-95"
                    >
                      CLOSE
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-2xl font-black mb-1 tracking-wide">
                      APPLY NOW
                    </h2>
                    <p className="text-xs text-black/50 mb-6 tracking-wide uppercase">
                      Fill in your details to get started
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="modal-input"
                      />
                      <input
                        required
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="modal-input"
                      />
                      <input
                        required
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        pattern="[0-9+\-\s]{7,15}"
                        title="Enter a valid phone number"
                        className="modal-input"
                      />
                      <div className="flex gap-4">
                        <input
                          required
                          name="age"
                          type="number"
                          min={15}
                          max={60}
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="Age"
                          className="modal-input w-1/3"
                        />
                        <input
                          required
                          name="qualification"
                          value={formData.qualification}
                          onChange={handleChange}
                          placeholder="Qualification"
                          className="modal-input w-2/3"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="relative bg-[#1D1D1D] text-white py-4 text-sm font-bold tracking-[2px] uppercase mt-2 hover:bg-black transition-all active:scale-95 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                      >
                        <AnimatePresence mode="wait">
                          {loading ? (
                            <motion.span
                              key="loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center justify-center gap-2"
                            >
                              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Submitting...
                            </motion.span>
                          ) : (
                            <motion.span
                              key="idle"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              Submit Application
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .modal-input {
          border: 1px solid rgba(0, 0, 0, 0.12);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          background: white;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          border-radius: 2px;
          width: 100%;
        }
        .modal-input:focus {
          border-color: #ffc62a;
          box-shadow: 0 0 0 3px rgba(255, 198, 42, 0.15);
        }
        .modal-input::placeholder {
          color: rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </>
  );
}