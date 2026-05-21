"use client";

import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

function TopCarousel() {
  const images = [
    "/students/1.png",
    "/students/2.png",
    "/students/3.png",
    "/students/4.png",
    "/students/5.png",
    "/students/6.png",
    "/students/7.png",
    "/students/9.png",
    "/students/19.png",
    "/students/20.png",
    "/students/21.png",
    "/students/22.png"
  ];

  return (
    <div className="relative overflow-hidden mb-6">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FBF8E4] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FBF8E4] to-transparent z-10 pointer-events-none" />
      <div className="carousel-track-left">
        {[...images, ...images].map((image, i) => (
          <img
            key={`top-${i}`}
            src={image}
            alt={`Student ${(i % images.length) + 1}`}
            className="carousel-img"
          />
        ))}
      </div>
    </div>
  );
}

function BottomCarousel() {
  const images = [
    "/students/8.png",
    "/students/10.png",
    "/students/11.png",
    "/students/12.png",
    "/students/13.png",
    "/students/14.png",
    "/students/15.png",
    "/students/16.png",
    "/students/17.png",
    "/students/18.png",
    "/students/20.png",
    "/students/23.png",
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#FBF8E4] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#FBF8E4] to-transparent z-10 pointer-events-none" />
      <div className="carousel-track-right">
        {[...images, ...images].map((image, i) => (
          <img
            key={`bottom-${i}`}
            src={image}
            alt={`Student ${(i % images.length) + 1}`}
            className="carousel-img"
          />
        ))}
      </div>
    </div>
  );
}

export function SimpleInfiniteCarousel() {
  return (
    <section className="bg-[#FBF8E4] text-black py-12 overflow-hidden">

      {/* HEADER */}
      <div className="px-[5%] mb-16">
        <p className="text-xs tracking-[4px] text-[#C9A227] uppercase mb-4">
          05 / Our People
        </p>

        <h2
          className={`${bebas.className} uppercase text-[#111]`}
          style={{
            fontSize: "76px",
            lineHeight: "72px",
            letterSpacing: "0.5px",
          }}
        >
          PLACED &<br />
          THRIVING.
        </h2>
      </div>

      <style>{`
        @keyframes scroll-left {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes scroll-right {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        .carousel-track-left {
          display: flex;
          gap: 40px;
          animation: scroll-left 40s linear infinite;
          align-items: center;
          width: max-content;
        }

        .carousel-track-right {
          display: flex;
          gap: 40px;
          animation: scroll-right 40s linear infinite;
          align-items: center;
          width: max-content;
        }

        .carousel-img {
          flex-shrink: 0;
          max-height: 240px;
          width: auto;
          height: auto;
          object-fit: contain;
        }
      `}</style>

      <TopCarousel />
      <BottomCarousel />

    </section>
  );
}

export default SimpleInfiniteCarousel;