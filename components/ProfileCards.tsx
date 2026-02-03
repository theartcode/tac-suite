"use client";

import Image from "next/image";

export default function ProfileCards() {
  return (
    <section className="relative w-full py-48 bg-[#f4faf6]">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="text-4xl font-semibold text-green-900 mb-28">
          Our Experts
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-24">
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
        w-[560px] h-[820px]
        bg-white
        rounded-[32px]
        border border-green-200
        shadow-[0_40px_110px_rgba(0,80,40,0.18)]
        overflow-hidden
      "
    >
      {/* IMAGE */}
      <div className="relative h-[62%] w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-green-900/10" />
      </div>

      {/* CONTENT */}
      <div className="h-[38%] px-12 py-12 flex flex-col justify-between">
        <div>
          <span className="inline-block mb-5 px-5 py-2 text-sm font-semibold tracking-wide bg-yellow-300 text-green-900 rounded-full">
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
          <span className="flex items-center gap-2">
            👤 <span>312</span>
          </span>
          <span className="flex items-center gap-2">
            ⭐ <span>48</span>
          </span>
        </div>
      </div>
    </div>
  );
}
