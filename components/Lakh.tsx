"use client";

import { Bebas_Neue } from "next/font/google";
import { useState } from "react";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

export function ChallengeSection() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          headers: { "Content-Type": "application/json" },
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
      if (!res.ok) throw new Error("Failed to submit");
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", age: "", qualification: "" });
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
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", age: "", qualification: "" });
    }, 300);
  };

  return (
    <>
      {/* INPUT STYLES — always mounted, never inside the conditional */}
      <style>{`
        .modal-input {
          border: 1px solid rgba(0, 0, 0, 0.15);
          padding: 12px;
          font-size: 14px;
          background: white;
          outline: none;
          border-radius: 6px;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          display: block;
        }
        .modal-input:focus {
          border-color: #c9a227;
          box-shadow: 0 0 0 3px rgba(201, 162, 39, 0.15);
        }
        .modal-input::placeholder {
          color: rgba(0, 0, 0, 0.35);
        }
      `}</style>

      <section className="bg-[#FBF8E4] text-black py-28 px-[6%]">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <p className="text-xs tracking-[5px] text-[#C9A227] uppercase mb-6">
              06 / The Challenge
            </p>

            <h2
              className={`${bebas.className} uppercase text-[#111] mb-6`}
              style={{
                fontSize: "110px",
                lineHeight: "100px",
                letterSpacing: "1px",
              }}
            >
              ₹1 LAKH<br />
              CHALLENGE
            </h2>

            <p className="text-black/60 max-w-md leading-relaxed mb-8">
              After month 12, our students hit ₹1 lakh/month. Not a promise — a system.
              Portfolio → Job → Freelance gigs → Repeat clients → Scale.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="bg-black text-white px-8 py-4 rounded-[10px] tracking-[3px] text-sm uppercase hover:opacity-80 transition"
            >
              Join The Challenge
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Build the Portfolio",
                desc: "10 industries. Real shoots. Real design. Certificate earned.",
              },
              {
                num: "02",
                title: "Crack the Job",
                desc: "₹25K–₹30K first job. LinkedIn active. IG content portfolio live.",
              },
              {
                num: "03",
                title: "Get Freelance Gigs",
                desc: "Parallel income from month one. 3–5 clients by month 6.",
              },
              {
                num: "04",
                title: "Hit ₹1L / Month",
                desc: "Salary + freelance = ₹1 lakh. Month 12 is the target.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#FFFDF5] border border-black/10 rounded-[18px] p-6
                hover:shadow-[0_10px_40px_rgba(201,162,39,0.3)] hover:-translate-y-2 hover:border-[#C9A227]
                transition-all duration-300"
              >
                <p className="text-3xl font-bold text-black/20 mb-3">
                  {item.num}
                </p>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-999 flex items-center justify-center">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* MODAL BOX */}
          <div
            className="relative w-full max-w-md mx-4 rounded-2xl p-8 shadow-2xl"
            style={{ background: "linear-gradient(135deg, #FBF8E4, #f3efd9)" }}
          >
            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black/40 hover:text-black text-xl leading-none transition-colors"
            >
              ✕
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-4xl mb-3">🎉</div>
                <h2 className="text-2xl font-bold mb-2">You&apos;re In!</h2>
                <p className="text-black/60 text-sm mb-6">
                  We&apos;ll contact you shortly.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-[#1D1D1D] text-white px-8 py-3 rounded-md text-sm font-bold tracking-[2px] uppercase hover:bg-black transition-all"
                >
                  CLOSE
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-2 tracking-wide text-black">APPLY NOW</h2>
                <p className="text-xs text-black/50 mb-6 uppercase tracking-[2px]">
                  Start your journey
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="modal-input"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="modal-input"
                  />
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="modal-input"
                  />
                  <div className="flex gap-3">
                    <input
                      name="age"
                      type="number"
                      placeholder="Age"
                      min={15}
                      max={60}
                      required
                      value={formData.age}
                      onChange={handleChange}
                      className="modal-input"
                      style={{ width: "33%" }}
                    />
                    <input
                      name="qualification"
                      placeholder="Qualification"
                      required
                      value={formData.qualification}
                      onChange={handleChange}
                      className="modal-input"
                      style={{ width: "67%" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#1D1D1D] text-white py-3 mt-2 rounded-md tracking-[2px] text-sm uppercase font-bold hover:bg-black transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}