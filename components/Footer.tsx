"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0f3d2e] pt-36 pb-16 overflow-hidden">

      {/* TOP ACCENT STRIP */}
      <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400" />

      {/* MAIN CONTENT */}
      <div className="relative w-full px-[8%]">

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-28">

          {/* BRAND */}
          <div>
            {/* LOGO */}
            <Image
              src="/logo-tac.png"
              alt="TAC Logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />

            <p className="mt-10 text-2xl font-medium text-green-100 leading-relaxed max-w-lg">
              TAC empowers brands through design, technology, and growth
              systems — building clarity, consistency, and real impact.
            </p>

            <div className="mt-12 flex items-center gap-8">
              <SocialIcon type="x" />
              <SocialIcon type="instagram" />
              <SocialIcon type="linkedin" />
              <SocialIcon type="facebook" />
            </div>
          </div>

          {/* SITEMAP */}
          <FooterColumn
            title="Company"
            links={["About TAC", "Our Experts", "Careers", "Contact"]}
          />

          <FooterColumn
            title="Services"
            links={[
              "Digital Marketing",
              "Creative Design",
              "Content Strategy",
              "Growth Consulting",
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              "Programs",
              "Case Studies",
              "Insights",
              "Privacy Policy",
            ]}
          />
        </div>

        {/* CTA STRIP */}
        <div className="mt-32 flex flex-col md:flex-row items-center justify-between gap-12 rounded-3xl bg-[#14532d] px-16 py-14 border border-green-700">

          <p className="text-3xl font-extrabold text-white leading-tight">
            Ready to build something impactful with TAC?
          </p>

          <button className="px-12 py-5 rounded-full bg-yellow-400 text-green-900 text-xl font-extrabold hover:bg-yellow-300 transition">
            Get Started
          </button>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-28 border-t border-green-700 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-lg font-semibold text-green-200">
          <span>© {new Date().getFullYear()} TAC. All rights reserved.</span>
          <span>Designed with clarity & purpose.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- HELPERS ---------------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="text-2xl font-extrabold text-white mb-10">
        {title}
      </h4>

      <ul className="space-y-6">
        {links.map((link, i) => (
          <li
            key={i}
            className="text-xl font-semibold text-green-100 hover:text-yellow-400 transition cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- SOCIAL ICONS ---------------- */

function SocialIcon({ type }: { type: "x" | "instagram" | "linkedin" | "facebook" }) {
  return (
    <div className="w-14 h-14 rounded-full border-2 border-green-600 flex items-center justify-center text-green-200 hover:bg-yellow-400 hover:text-green-900 hover:border-yellow-400 transition cursor-pointer">
      {type === "x" && (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M18.3 2H21l-6.6 7.6L22 22h-6.6l-5.1-6.7L4.6 22H2l7.1-8.1L2 2h6.7l4.6 6L18.3 2z" />
        </svg>
      )}

      {type === "instagram" && (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      )}

      {type === "linkedin" && (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M4 3a2 2 0 110 4 2 2 0 010-4zm-1 6h2v12H3V9zm6 0h2v2h.1a2.2 2.2 0 012-1c2.1 0 3 1.4 3 3.3V21h-2v-6.5c0-1.6-.6-2.3-1.6-2.3s-1.9.8-1.9 2.3V21H9V9z" />
        </svg>
      )}

      {type === "facebook" && (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
          <path d="M14 9h3V6h-3c-2 0-3 1-3 3v2H8v3h3v8h3v-8h3l1-3h-4V9c0-.6.4-1 1-1z" />
        </svg>
      )}
    </div>
  );
}
