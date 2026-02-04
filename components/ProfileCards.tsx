"use client";

import Image from "next/image";

export default function ProfileCards() {
  return (
    <section className="relative w-full py-44 bg-[#f1f7f3]">
      {/* subtle vertical blend for smooth section transition */}
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-b from-white/70 via-transparent to-white/70 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative w-full px-[8%]">
        <h2 className="text-4xl font-semibold text-green-900 mb-32">
          Our Experts
        </h2>

        <div className="flex flex-col lg:flex-row gap-16">
          <ProfileCard
            image="/profile1.jpg"
            tag="DESIGN"
            name="Sophie Bennett"
            description="Product Designer focused on simplicity, usability, and scalable digital systems."
          />

          <ProfileCard
            image="/profile2.jpg"
            tag="STRATEGY"
            name="Sophie Bennett"
            description="Building intuitive user experiences aligned with business growth and clarity."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD ---------------- */

function ProfileCard({
  image,
  tag,
  name,
  description,
}: {
  image: string;
  tag: string;
  name: string;
  description: string;
}) {
  return (
    <div
      className="
        flex-1
        min-w-[420px]
        bg-white
        rounded-[40px]
        border border-green-200/70
        shadow-[0_50px_140px_rgba(0,80,40,0.2)]
        overflow-hidden
      "
    >
      {/* IMAGE — HEIGHT REDUCED */}
      <div className="relative h-[55vh] w-full bg-green-100">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
      </div>

      {/* CONTENT — TIGHTER VERTICAL SPACE */}
      <div className="px-14 py-14 flex flex-col justify-between gap-10 bg-gradient-to-b from-white to-[#f7fbf9]">
        <div>
          <span className="inline-block mb-5 px-6 py-2 text-sm font-semibold bg-green-100 text-green-900 rounded-full">
            {tag}
          </span>

          <h3 className="text-2xl font-semibold text-green-900">
            {name}
          </h3>

          <p className="mt-5 text-base leading-relaxed text-green-800">
            {description}
          </p>
        </div>

        {/* META */}
        <div className="flex items-center gap-12 text-sm text-green-700">
          <span className="flex items-center gap-2">👤 312</span>
          <span className="flex items-center gap-2">⭐ 48</span>
        </div>
      </div>
    </div>
  );
}
