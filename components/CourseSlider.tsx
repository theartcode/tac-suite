"use client";

export function CourseSlider() {
  const courses = [
    "Client Management",
    "Digital Marketing",
    "Video Editing",
    "Graphic Design",
    "After Effects",
    "DaVinci Resolve",
    "Content Writing",
    "Content Strategy",
  ];

  return (
    <div className="w-full bg-[#1A1A1A] border-y border-[#FFC62A]/10 overflow-hidden">

      <div className="relative flex">

        {/* TRACK */}
        <div className="flex whitespace-nowrap animate-marquee">

          {[...courses, ...courses].map((course, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-4 text-[11px] uppercase tracking-[3px] text-[#FFF9E6]/60 font-mono"
            >
              {/* DOT */}
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC62A]" />

              {/* TEXT */}
              {course}
            </div>
          ))}

        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}