"use client";

const cards = [
  {
    label: "Module 1",
    title: "Digital Marketing Foundations",
    desc: "Understand how modern digital marketing systems work end-to-end.",
    points: ["Channels & attribution", "Customer journeys", "Performance mindset"],
  },
  {
    label: "Module 2",
    title: "Performance Marketing",
    desc: "Run ROI-focused campaigns across paid and organic growth channels.",
    points: ["Google & Meta Ads", "Creative testing", "Scaling with data"],
  },
  {
    label: "Module 3",
    title: "Content & Brand Growth",
    desc: "Build brand authority while driving inbound demand consistently.",
    points: ["SEO & content engines", "Distribution strategy", "Brand storytelling"],
  },
  {
    label: "Module 4",
    title: "Growth Funnels",
    desc: "Convert traffic into revenue using optimized funnels.",
    points: ["Landing pages", "CRO frameworks", "Lifecycle marketing"],
  },
  {
    label: "Module 5",
    title: "Marketing Leadership",
    desc: "Scale teams, budgets, and outcomes as a marketing leader.",
    points: ["Strategy & execution", "Team building", "Marketing dashboards"],
  },
];

export default function DigitalMarketingStack() {
  return (
    <>
      {/* ================= TITLE ================= */}
      <section className="relative bg-white pt-40 pb-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 leading-tight">
            Built for the Demands of{" "}
            <span className="text-yellow-400 italic">
              B2B, SaaS, and Tech Sales
            </span>
          </h1>

          <p className="mt-8 text-xl text-green-800 max-w-3xl mx-auto leading-relaxed">
            Structured modules combined with hands-on execution — taking you
            from fundamentals to{" "}
            <span className="font-semibold text-green-900">
              real-world digital growth
            </span>.
          </p>
        </div>
      </section>

      {/* ================= STACKED INTERACTIVE SECTION ================= */}
      <section className="relative bg-white pb-64">
        {/* 🔥 10% SIDE SPACING */}
        <div className="w-full px-[10%]">
          <div className="relative space-y-[200px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className="sticky top-28"
                style={{ zIndex: 30 + index }}
              >
                <div
                  className="
                    group grid grid-cols-1 md:grid-cols-2
                    min-h-[680px]
                    rounded-[48px]
                    bg-white
                    border border-green-200
                    shadow-[0_60px_160px_-40px_rgba(34,197,94,0.45)]
                    overflow-hidden
                    transition-all duration-700
                  "
                >
                  {/* LEFT */}
                  <div className="relative p-20 flex flex-col justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-transparent pointer-events-none" />

                    <span className="relative inline-flex mb-6 px-6 py-2 rounded-full bg-green-600 text-white text-sm font-semibold w-fit shadow-md">
                      {card.label}
                    </span>

                    <h2 className="relative text-4xl font-bold text-green-900 leading-tight">
                      {card.title}
                    </h2>

                    <p className="relative mt-6 text-lg text-green-800 max-w-xl leading-relaxed">
                      {card.desc}
                    </p>

                    <ul className="relative mt-10 space-y-5">
                      {card.points.map((p, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 transition-all duration-300 group-hover:translate-x-1"
                        >
                          <span className="mt-2 h-3 w-3 rounded-full bg-yellow-400 shadow-sm" />
                          <span className="text-lg text-green-900">
                            {p}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT */}
                  <div className="relative flex items-center justify-center bg-gradient-to-br from-green-500 to-green-700">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

                    <div className="relative text-center">
                      <h3 className="text-[7rem] font-extrabold text-yellow-300 drop-shadow-lg transition-transform duration-700 group-hover:scale-105">
                        {index + 1}
                      </h3>
                      <p className="mt-4 text-xl text-white tracking-wide">
                        Digital Growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 py-44">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-yellow-300">
            Ready to scale your digital presence?
          </h2>
          <p className="mt-6 text-xl text-white leading-relaxed">
            Let’s turn strategy into measurable growth.
          </p>
        </div>
      </section>
    </>
  );
}
