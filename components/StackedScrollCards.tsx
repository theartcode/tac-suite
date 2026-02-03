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
      {/* ================= TITLE SECTION ================= */}
      <section className="relative bg-white pt-40 pb-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 leading-tight">
            Built for the Demands of{" "}
            <span className="text-yellow-400 italic">
              B2B, SaaS, and Tech Sales
            </span>
          </h1>

          <p className="mt-8 text-xl text-green-800 max-w-3xl mx-auto">
            Structured modules combined with hands-on execution — taking you
            from fundamentals to{" "}
            <span className="font-semibold text-green-900">
              real-world digital growth
            </span>.
          </p>
        </div>
      </section>

      {/* ================= STACKED SCROLL SECTION ================= */}
      <section className="relative bg-white pb-56">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="relative space-y-[180px]">
            {cards.map((card, index) => (
              <div
                key={index}
                className="sticky top-32"
                style={{ zIndex: 20 + index }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px] bg-white border border-green-300 shadow-[0_40px_110px_-30px_rgba(34,197,94,0.35)]">

                  {/* LEFT */}
                  <div className="p-16 flex flex-col justify-center">
                    <span className="inline-block mb-6 px-6 py-2 rounded-full bg-green-600 text-white text-sm font-semibold w-fit">
                      {card.label}
                    </span>

                    <h2 className="text-4xl font-bold text-green-900">
                      {card.title}
                    </h2>

                    <p className="mt-6 text-lg text-green-800 max-w-xl">
                      {card.desc}
                    </p>

                    <ul className="mt-8 space-y-4">
                      {card.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <span className="mt-2 h-3 w-3 rounded-full bg-yellow-400" />
                          <span className="text-lg text-green-900">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center justify-center bg-green-600">
                    <div className="text-center">
                      <h3 className="text-6xl font-extrabold text-yellow-300">
                        {index + 1}
                      </h3>
                      <p className="mt-4 text-xl text-white">
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

      {/* ================= NEXT SECTION ================= */}
      <section className="bg-green-600 py-40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-yellow-300">
            Ready to scale your digital presence?
          </h2>
          <p className="mt-6 text-xl text-white">
            Let’s turn strategy into measurable growth.
          </p>
        </div>
      </section>
    </>
  );
}
