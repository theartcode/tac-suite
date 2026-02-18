"use client";

import Image from "next/image";

export default function LaptopShowcase() {
  return (
    <>
      {/* WHITE INTRO SECTION */}
      <section className="relative bg-white min-h-[60vh] pt-24 pb-56 px-[5%] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-[#212121] tracking-tighter mb-8 leading-[0.95]">
            Ready to <br />
            <span className="italic font-serif font-light text-[#365c47] lowercase">
              transform?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
            Join 500+ professionals who have upskilled through our
            industry-vetted curriculum and hands-on case studies.
          </p>
        </div>
      </section>

      {/* LAPTOP OVERLAY SECTION */}
      <section className="relative h-[0px]">
        <div className="absolute left-1/2 -translate-x-1/2 -top-[260px] z-40">
          <div className="relative w-[1100px] max-w-[95vw]">

            {/* LAPTOP IMAGE ONLY */}
            <Image
              src="/laptop.png"
              alt="Laptop Preview"
              width={1500}
              height={1000}
              priority
              className="relative z-10 pointer-events-none"
            />

            {/* GLOW (OPTIONAL – REMOVE IF NOT NEEDED) */}
            <div className="absolute -inset-28 bg-[#FFC62A]/25 blur-3xl -z-10 rounded-full" />
          </div>
        </div>
      </section>

      {/* BLACK CINEMATIC SECTION */}
      <section className="bg-[#212121] min-h-[90vh] w-full" />
    </>
  );
}
