"use client";

import Image from "next/image";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#2F2F2F] pt-24 pb-12 overflow-hidden">
      
      {/* TOP ACCENT LINE - Brand Yellow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#FFC62A]" />

      <div className="relative w-full px-[5%] z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 lg:gap-24">

          {/* BRAND BLOCK */}
          <div className="flex flex-col items-start">
            <Image
              src="/logo-tac.png" 
              alt="The Art Code Logo"
              width={140}
              height={45}
              className="object-contain brightness-0 invert"
              priority
            />

            <p className="mt-8 text-base font-medium text-white/50 leading-relaxed max-w-sm">
              <span className="text-white font-serif italic">The Art Code</span> is a practitioner-led ecosystem built to master digital marketing, cinematic editing, and strategic design.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <SocialIcon icon={<Twitter size={16} />} />
              <SocialIcon icon={<Instagram size={16} />} />
              <SocialIcon icon={<Linkedin size={16} />} />
              <SocialIcon icon={<Facebook size={16} />} />
            </div>
          </div>

          {/* NAVIGATION COLUMNS */}
          <FooterColumn
            title="The Academy"
            links={["About TAC", "Our Experts", "Success Stories", "Contact Support"]}
          />

          <FooterColumn
            title="Knowledge Hub"
            links={[
              "Digital Marketing",
              "Client Management",
              "Editing",
              "Designing",
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              "Curriculum",
              "Case Studies",
              "Insights",
              "Privacy Policy",
            ]}
          />
        </div>

        {/* --- INTERACTIVE CTA BOX --- */}
        <div className="mt-24 relative group">
          <div className="
            flex flex-col lg:flex-row items-center justify-between gap-8 
            bg-[#365c47] px-10 py-12 border border-white/10
            rounded-tl-none rounded-br-none rounded-tr-[40px] rounded-bl-[40px]
            transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.3)]
          ">
            <div className="max-w-xl text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                Ready to crack <br /> 
                <span className="font-serif italic text-[#FFC62A]">The Art Code?</span>
              </h3>
              <p className="mt-4 text-base text-white/60 font-medium">
                Master the intersection of technical precision and creative mastery.
              </p>
            </div>

            <button className="
              group flex items-center gap-3 px-10 py-5 
              bg-[#FFC62A] text-[#2F2F2F] text-sm font-black uppercase tracking-widest 
              rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl
              transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95
            ">
              Apply Now
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="text-sm font-bold text-white tracking-tight">
              © {new Date().getFullYear()} The Art Code
            </span>
            <span className="text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]">
              Architecting Digital Excellence
            </span>
          </div>

          <div className="flex items-center gap-8">
            <button className="text-[10px] font-bold text-white/30 hover:text-[#FFC62A] transition-colors uppercase tracking-widest">Legal</button>
            <button className="text-[10px] font-bold text-white/30 hover:text-[#FFC62A] transition-colors uppercase tracking-widest">Syllabus</button>
            <div className="h-6 w-[1px] bg-white/10 hidden md:block" />
            <span className="text-[10px] font-black text-white px-3 py-1 border border-white/20 rounded-md">TAC™</span>
          </div>
        </div>
      </div>

      {/* BACKGROUND WATERMARK */}
      <div className="absolute -bottom-6 -right-6 text-[10rem] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        TAC
      </div>
    </footer>
  );
}

/* ---------------- HELPERS ---------------- */

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="flex flex-col">
      <h4 className="text-[10px] font-black text-[#FFC62A] uppercase tracking-[0.3em] mb-8">
        {title}
      </h4>
      <ul className="space-y-4">
        {links.map((link, i) => (
          <li
            key={i}
            className="group flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-all cursor-pointer"
          >
            <span className="w-0 h-0.5 bg-[#FFC62A] transition-all group-hover:w-3" />
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="
      w-10 h-10 rounded-full border border-white/10 flex items-center justify-center 
      text-white/30 transition-all cursor-pointer
      hover:bg-[#FFC62A] hover:text-[#2F2F2F] hover:border-[#FFC62A] hover:scale-110
    ">
      {icon}
    </div>
  );
}