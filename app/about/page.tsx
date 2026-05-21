"use client";

import { useState } from "react";

const stats = [
  { num: "2000+", label: "CREATORS BUILT" },
  { num: "95%", label: "CAREER SUCCESS RATE" },
  { num: "50+", label: "INDUSTRY CONNECTIONS" },
  { num: "6+", label: "YEARS OF EXPERIENCE" },
];

const pillars = [
  {
    title: "SKILL TO INCOME",
    desc: "We focus on turning skills into income with real-world deliverables.",
  },
  {
    title: "REAL PROJECTS",
    desc: "Work on actual projects that build your portfolio.",
  },
  {
    title: "CREATOR MINDSET",
    desc: "Learn how to create content that performs and grows.",
  },
  {
    title: "INDUSTRY SYSTEM",
    desc: "Learn workflows used by agencies and creators.",
  },
];

export default function AboutPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    qualification: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1500));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main
      style={{
        background: "#0D0D0D",
        color: "#EDEDED",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        padding: "80px 8%",
      }}
    >
      {/* HERO */}
      <section style={{ maxWidth: 900, marginBottom: 100 }}>
        <h1 style={{ fontFamily: "Bebas Neue", fontSize: "88px" }}>
          WE BUILD <br /> <span style={{ color: "#C9A227" }}>CREATORS</span>
        </h1>
      </section>

      {/* STATS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 30,
          marginBottom: 120,
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              padding: 30,
              borderRadius: 16,
              background: "#111",
              border: "1px solid rgba(255,255,255,0.08)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: 40, color: "#C9A227" }}>{s.num}</h3>
            <p style={{ fontSize: 12, color: "#777" }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* PILLARS */}
      <section style={{ marginBottom: 120 }}>
        <h2 style={{ fontFamily: "Bebas Neue", fontSize: "48px" }}>
          WHAT MAKES US DIFFERENT
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 30,
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.title}
              style={{
                background: "#111",
                padding: 30,
                borderRadius: 16,
              }}
            >
              <h3 style={{ color: "#C9A227" }}>{p.title}</h3>
              <p style={{ color: "#aaa" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM SECTION */}
      <section
        style={{
          background: "#111",
          padding: "60px",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.08)",
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {submitted ? (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: 36, marginBottom: 10 }}>🎉 You're In!</h2>
            <p style={{ color: "#aaa" }}>We’ll contact you soon.</p>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "Bebas Neue", fontSize: 42 }}>
              GET STARTED
            </h2>

            <p style={{ color: "#aaa", marginBottom: 30 }}>
              Fill your details and begin your journey.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}
            >
              <input name="name" placeholder="Full Name" onChange={handleChange} required className="input" />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="input" />
              <input name="phone" placeholder="Phone" onChange={handleChange} required className="input" />

              <div style={{ display: "flex", gap: 10 }}>
                <input name="age" type="number" placeholder="Age" onChange={handleChange} required className="input" />
                <input name="qualification" placeholder="Qualification" onChange={handleChange} required className="input" />
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "#C9A227",
                  color: "#000",
                  padding: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginTop: 10,
                }}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </>
        )}
      </section>

      <style jsx>{`
        .input {
          padding: 12px;
          background: #0d0d0d;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          outline: none;
        }

        .input:focus {
          border-color: #c9a227;
        }
      `}</style>
    </main>
  );
}