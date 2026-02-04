"use client";

const testimonials = [
  {
    text:
      "Their ability to capture our brand essence in every project is unparalleled — an invaluable creative collaborator.",
    name: "Isabella Rodriguez",
    role: "CEO & Co-founder",
  },
  {
    text:
      "Creative geniuses who listen, understand, and craft captivating visuals — an agency that truly understands our needs.",
    name: "Gabrielle Williams",
    role: "CEO & Co-founder",
  },
  {
    text:
      "Exceeded our expectations with innovative designs that brought our vision to life — truly remarkable.",
    name: "Samantha Johnson",
    role: "CEO & Co-founder",
  },
  {
    text:
      "A refreshing and imaginative agency that consistently delivers exceptional results.",
    name: "Victoria Thompson",
    role: "CEO & Co-founder",
  },
  {
    text:
      "Their team’s artistic flair and strategic approach resulted in remarkable campaigns.",
    name: "John Peter",
    role: "CEO & Co-founder",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-white py-44 overflow-hidden">
      {/* CONTENT WRAPPER */}
      <div className="relative w-full px-[5%]">

        {/* TITLE */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
            Words of praise from others
            <br />
            about our presence.
          </h2>
        </div>

        {/* TOP ROW */}
        <div className="relative overflow-hidden mb-28">
          <div className="flex w-max gap-14 animate-left">
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card key={`top-${i}`} {...t} />
            ))}
          </div>

          {/* BLUR EDGES */}
          <FadeEdges />
        </div>

        {/* SPACE BETWEEN ROWS */}
        <div className="h-20" />

        {/* BOTTOM ROW */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-14 animate-right">
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card key={`bottom-${i}`} {...t} />
            ))}
          </div>

          {/* BLUR EDGES */}
          <FadeEdges />
        </div>
      </div>

      {/* INLINE CSS */}
      <style jsx>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-left {
          animation: marquee-left 48s linear infinite;
        }

        .animate-right {
          animation: marquee-right 52s linear infinite;
        }

        .animate-left:hover,
        .animate-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

/* ---------------- BLUR EDGES ---------------- */

function FadeEdges() {
  return (
    <>
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white to-transparent" />

      {/* RIGHT FADE */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
    </>
  );
}

/* ---------------- CARD ---------------- */

function Card({
  text,
  name,
  role,
}: {
  text: string;
  name: string;
  role: string;
}) {
  return (
    <div className="w-[380px] shrink-0 rounded-3xl bg-[#f1f7f3] p-8 border border-green-200">
      <span className="text-4xl text-green-600 leading-none">“</span>

      <p className="mt-4 text-lg leading-relaxed text-green-900">
        {text}
      </p>

      <div className="mt-6">
        <p className="font-semibold text-green-900">
          {name}
        </p>
        <p className="text-sm text-green-700">
          {role}
        </p>
      </div>
    </div>
  );
}
