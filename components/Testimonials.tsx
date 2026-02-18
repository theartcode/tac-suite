"use client";

import { useState, useRef } from "react";
import { Star, ArrowUpRight, Play } from "lucide-react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useVelocity, 
  useSpring, 
  useTransform, 
  useAnimationFrame, 
  useMotionValue 
} from "framer-motion";
import { wrap } from "@motionone/utils";

const videoTestimonials = [
  {
    id: "video1",
    name: "Isabella Rodriguez",
    role: "Head of Growth, Nexa SaaS",
    metric: "40% CTR Increase",
    thumbnail: "/testimonials/isabella.jpg",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "video2",
    name: "Gabrielle Williams",
    role: "Creative Director, Flow State",
    metric: "High-End Production",
    thumbnail: "/testimonials/gabrielle.jpg",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "video3",
    name: "Samantha Johnson",
    role: "CEO, Pillar Fintech",
    metric: "Scalable ROI",
    thumbnail: "/testimonials/samantha.jpg",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "video4",
    name: "Victoria Thompson",
    role: "Product Lead, Global Core",
    metric: "Scalable Systems",
    thumbnail: "/testimonials/victoria.jpg",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "video5",
    name: "John Peter",
    role: "Founder, Zenith Agency",
    metric: "3x Lead Quality",
    thumbnail: "/testimonials/john.jpg",
    videoId: "dQw4w9WgXcQ"
  }
];

export default function Testimonials() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Velocity Logic
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // We wrap between -33.3% and -66.6% because we tripled the data
  const x = useTransform(baseX, (v) => `${wrap(-66.66, -33.33, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    // Pause animation if a video is being hovered/played
    if (activeVideoId) return;

    let moveBy = directionFactor.current * 0.5 * (delta / 1000); // Base speed 0.5

    // Reverse direction based on scroll
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="relative w-full bg-[#FFF9E6] py-24 overflow-hidden">
      {/* HEADER */}
      <div className="relative w-full z-10 mb-16 flex flex-col items-end text-right px-[5%]">
        <h2 className="text-4xl md:text-6xl font-black text-[#212121] tracking-tighter leading-[0.9] mb-6">
          Proven <br />
          <span className="font-serif italic font-light text-[#365c47] lowercase">Impact</span>
        </h2>

        <p className="text-base md:text-lg text-[#2F2F2F]/50 max-w-md leading-relaxed font-light tracking-tight border-r-2 border-[#FFC62A] pr-5">
          Visual proof from the practitioners <br />
          shaping digital excellence.
        </p>
      </div>

      {/* INFINITE VELOCITY MARQUEE */}
      <div className="relative overflow-hidden py-4">
        <motion.div className="flex w-max gap-8" style={{ x }}>
          {[...videoTestimonials, ...videoTestimonials, ...videoTestimonials].map((v, i) => (
            <VideoCard
              key={`${v.id}-${i}`}
              {...v}
              isHovered={activeVideoId === `${v.id}-${i}`}
              onMouseEnter={() => setActiveVideoId(`${v.id}-${i}`)}
              onMouseLeave={() => setActiveVideoId(null)}
            />
          ))}
        </motion.div>

        {/* EDGE FADES */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-[10%] bg-gradient-to-r from-[#FFF9E6] to-transparent z-30" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-[#FFF9E6] to-transparent z-30" />
      </div>
    </section>
  );
}

interface VideoCardProps {
  id?: string;
  name: string;
  role: string;
  metric: string;
  thumbnail: string;
  videoId: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function VideoCard({ name, role, metric, thumbnail, videoId, isHovered, onMouseEnter, onMouseLeave }: VideoCardProps) {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial="initial"
      whileHover="hover"
      className="
        group relative w-[300px] h-[400px] shrink-0 overflow-hidden 
        bg-[#212121] rounded-[40px] block
        transition-all duration-700 hover:-translate-y-2 cursor-pointer
      "
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-black"
          >
            <iframe
              className="w-full h-full scale-[1.5]"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}&rel=0`}
              title={name}
              allow="autoplay; encrypted-media"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`absolute inset-0 transition-opacity duration-700 z-20 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent opacity-80" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <motion.div
          variants={{
            initial: { scale: 0.8, opacity: 0 },
            hover: { scale: 1, opacity: isHovered ? 0 : 1 }
          }}
          className="p-6 rounded-full bg-[#FFC62A] text-[#212121] shadow-[0_0_40px_rgba(255,198,42,0.5)]"
        >
          <Play fill="currentColor" size={32} />
        </motion.div>
      </div>

      <div className="absolute top-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#FFC62A] rounded-full text-[9px] font-black uppercase tracking-widest z-30">
        {metric}
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-30">
        <h3 className="text-xl font-black text-white tracking-tighter leading-tight">
          {name}
        </h3>
        <p className="text-[10px] text-[#FFC62A] font-bold uppercase tracking-[0.2em] mt-2 border-l-2 border-[#FFC62A] pl-4">
          {role}
        </p>
      </div>
    </motion.div>
  );
}