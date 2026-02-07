"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2, Mail, Zap, X } from "lucide-react";

export default function ProfileCards() {
  return (
    <section className="relative w-full py-24 bg-[#FFF9E6] overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(255,198,42,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative w-full px-[5%] z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-[1000px] mx-auto text-center flex flex-col items-center mb-24">
          <span className="mb-4 text-[#FFC62A] font-bold tracking-[0.4em] uppercase text-[10px]">
            Core Leadership
          </span>
          
          <h2 className="text-5xl md:text-7xl font-black text-[#2F2F2F] tracking-tighter leading-[0.9] mb-8">
            The <br />
            <span className="font-serif italic font-light text-[#365c47] lowercase">
              Practitioners
            </span>
          </h2>
          
          <div className="space-y-6 max-w-2xl">
            <p className="text-xl md:text-2xl text-[#2F2F2F] leading-tight font-semibold tracking-tight">
              We operate at the intersection of aesthetics and execution.
            </p>
            
            <p className="text-base md:text-lg text-[#2F2F2F]/50 leading-relaxed font-light">
              Moving beyond traditional agency models, we embed ourselves into your growth engine. 
              Our team combines data-backed strategy with world-class design to dominate digital landscapes.
            </p>

            <div className="pt-6 flex items-center justify-center gap-8 text-[#365c47]/40 font-bold uppercase tracking-widest text-[9px]">
              <span className="flex items-center gap-2"><Zap size={12} className="fill-current"/> Built for Impact</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={12}/> Expert Driven</span>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ProfileCard
            image="/profile1.jpg"
            avatar="/avatar1.jpg"
            tag="Creative Direction"
            name="Sophie Bennett"
            description="Architecting visual identities that harmonize aesthetic beauty with performance."
            fullBio="Sophie is a master of visual systems, ensuring every pixel contributes to measurable growth outcomes."
            expertise={[
              "Advanced Motion",
              "UX Architecture",
              "Visual Storytelling",
              "Design Systems",
              "Brand Strategy",
              "Prototyping",
            ]}
          />

          <ProfileCard
            image="/profile2.jpg"
            avatar="/avatar2.jpg"
            tag="Growth Strategy"
            name="Marcus Thorne"
            description="Engineering data-backed digital frameworks designed to scale aggressively."
            fullBio="Marcus builds automated growth engines using analytics, psychology, and performance engineering."
            expertise={[
              "B2B Frameworks",
              "CRO Strategy",
              "Paid Media",
              "Market Psychology",
              "Data Attribution",
              "Performance Ops",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ProfileCard({
  image,
  avatar,
  tag,
  name,
  description,
  fullBio,
  expertise,
}: {
  image: string;
  avatar: string;
  tag: string;
  name: string;
  description: string;
  fullBio: string;
  expertise: string[];
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group perspective-2000 h-[700px] w-full cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-1000 preserve-3d shadow-xl rounded-[48px] ${
          isFlipped ? "rotate-y-180" : "hover:rotate-x-1 hover:rotate-y-1"
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[48px] overflow-hidden border border-[#D9D9D9]">
          <div className="relative h-[55%] w-full bg-[#FFF3CC] overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 px-4 py-2 bg-white text-[#365c47] rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-md">
              {tag}
            </div>
          </div>

          <div className="p-10 h-[45%] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FFC62A]">
                  <Image src={avatar} alt={name} fill className="object-cover" />
                </div>
                <h3 className="text-3xl font-bold text-[#2F2F2F] tracking-tighter">
                  {name}
                </h3>
              </div>
              <p className="text-lg text-[#2F2F2F]/60 leading-tight">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-3 text-[#365c47] font-black uppercase tracking-[0.2em] text-[10px] group-hover:text-[#FFC62A] transition-colors">
              <Zap size={14} />
              Tap to reveal profile
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#365c47] rounded-[48px] p-10 text-white flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="px-4 py-1.5 bg-[#FFC62A] text-[#2F2F2F] rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                Specialist Dossier
              </span>
              <X size={20} />
            </div>

            <h3 className="text-4xl font-bold mb-6">{name}</h3>

            <p className="text-lg text-white/90 leading-snug font-medium mb-8 border-l-4 border-[#FFC62A] pl-6">
              {fullBio}
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              {expertise.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#FFC62A]" />
                  <span className="text-sm font-bold">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-[2] py-4 bg-[#FFC62A] text-[#2F2F2F] font-black uppercase tracking-[0.1em] text-sm rounded-2xl hover:bg-white transition-all">
              Initiate Collaboration
            </button>
            <button className="flex-1 border-2 border-white/20 rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#365c47] transition-all">
              <Mail size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-2000 { perspective: 2500px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
}