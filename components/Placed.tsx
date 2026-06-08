"use client";

import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});

interface Student {
  photo: string;
  name: string;
  company: string;
  role: string;
  skills: string[];
  lpa?: string;
}

function StudentCard({ student }: { student: Student }) {
  return (
    <div className="placed-card">
      <div className="placed-panel">
        <div className="placed-name">{student.name}</div>
        <div className="placed-divider" />
        <div className="placed-company">{student.company}</div>
        <div className="placed-role">{student.role}</div>
        <div className="placed-skills-label">Additional Skills :</div>
        <div className="placed-skills">{student.skills.join(" || ")}</div>
        {student.lpa && <div className="placed-lpa">{student.lpa} LPA</div>}
      </div>

      <div className="placed-photo">
        <img
          src={student.photo}
          alt={student.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
        />
      </div>
    </div>
  );
}

// ── Row 1 students ────────────────────────────────────────────
const topStudents: Student[] = [
  {
    photo: "/students/anandd.png",
    name: "Ravi Teja",
    company: "Pixel Studio",
    role: "Graphic Designer",
    skills: ["Video Editing", "Motion Graphics", "Illustration"],
    lpa: "3.2",
  },
  {
    photo: "/students/1.png",
    name: "Vijay Kumar",
    company: "Nikhila Constructions",
    role: "Video Editor",
    skills: ["Content Shooting", "Video Editing", "Content Writing"],
    lpa: "3.0",
  },
  {
    photo: "/students/2.png",
    name: "Upendra",
    company: "Alokha Media",
    role: "Video Editor, Graphic Designer",
    skills: ["Content Shooting", "Writing"],
    lpa: "3.0",
  },

  {
    photo: "/students/3.png",
    name: "Supriya",
    company: "Free Lancer",
    role: "Video Editor",
    skills: ["Graphic Design", "Content Shooting", "Content"],
  },

  {
    photo: "/students/4.png",
    name: "Shanukh",
    company: "Freelancer",
    role: "Content Shooting",
    skills: ["Video Editing", "Content Shooting", "Graphic Designing"],
  },

  {
    photo: "/students/5.png",
    name: "Sandeep",
    company: "Nikhila Constructions",
    role: "Graphic Designer",
    skills: ["Video Editing", "Content Shooting", "Content Writing"],
    lpa: "3.0",
  },
  {
    photo: "/students/6.png",
    name: "Sahil",
    company: "The Art Code",
    role: "Video Editor, Graphic Designer",
    skills: ["Content Shooting", "Content Writing"],
    lpa: "3.2",
  },
  {
    photo: "/students/7.png",
    name: "Sagar",
    company: "Freelancer",
    role: "Graphic Designer, Video Editor",
    skills: ["Content Shooting", "Video Editing", "Content Writing"],
    
  },
  {
    photo: "/students/8.png",
    name: "Manish",
    company: "Bristle Tech",
    role: "Creative Director",
    skills: ["Video Editing", "Graphic Design", "Content Writing"],
    lpa: "4.0",
  },
  {
    photo: "/students/9.png",
    name: "Kiran",
    company: "Freelancer",
    role: "Graphic Designer",
    skills: ["Video Editing", "Content Writing", "Content Shooting"],
    
  },
  {
    photo: "/students/10.png",
    name: "Karthik",
    company: "Freelancer",
    role: "Video Editing, Content Shooting",
    skills: ["Graphic Designer", "Content Writing", "Video Editor"],
  
  },
  {
    photo: "/students/11.png",
    name: "Jeevan",
    company: "Alokha Media",
    role: "Graphic Designer",
    skills: ["Video Editing", "Content Shooting", "Writing"],
    lpa: "3.0",
  },
];

// ── Row 2 students ────────────────────────────────────────────
const bottomStudents: Student[] = [
  {
    photo: "/students/12.png",
    name: "Vijay Daniel",
    company: "Jivejar",
    role: "Video Editor",
    skills: ["Graphic Designing", "Content Shoting", "Content Writing"],
    lpa: "4.0",
  },
  {
    photo: "/students/13.png",
    name: "Balu",
    company: "Geela Creatve Space",
    role: "Video Editor",
    skills: ["Graphic Designing", "Content Shoting"],
    lpa: "3.0",
  },
  {
    photo: "/students/14.png",
    name: "Anirudh",
    company: "Freelancer",
    role: "Video Editor",
    skills: ["Graphic Designing", "Content Shoting", "Content Writing"],
  
  },
  {
    photo: "/students/15.png",
    name: "Anand",
    company: "Freelancer",
    role: "Video Editor",
    skills: ["Graphic Designing", "Content Shoting", "Content Writing"],
    
  },
  {
    photo: "/students/16.png",
    name: "Arjun",
    company: "Freelancer",
    role: "Video Editor",
    skills: ["Graphic Designing", "Content Shooting", "Content Writing"],
    
  },
  {
    photo: "/students/17.png",
    name: "Karthik",
    company: "Ass. Director",
    role: "Video Editor",
    skills: ["Graphic Designing", "Content Writing", "Content Shooting"],
  },
  {
    photo: "/students/18.png",
    name: " Rohit",
    company: "Freelancer",
    role: "Video Editor",
    skills: ["Graphic designing","Content Writing", "Content Shooting"],
  
  },
  {
    photo: "/students/19.png",
    name: "Shiva",
    company: "Freelancer",
    role: "Video Editor",
    skills: ["Graphic Designing", "Content Writing", "Content Shooting"],
  },
  {
    photo: "/students/20.png",
    name: "Durgesh",
    company: "Property Edge",
    role: "Video Editor",
    skills: ["Graphic Designing", "Content Shooting", "Content Writing"],
    lpa: "4.2",
  },
  {
    photo: "/students/21.png",
    name: "Emmanuel",
    company: "Property Edge",
    role: "Video Editor",
    skills: ["Graphic Designing", "Motion Graphic", "Content Shooting"],
    lpa: "4.2",
  },
  {
    photo: "/students/22.png",
    name: "Hemanth",
    company: "Property Edge",
    role: "Video Editor & Graphic Designer",
    skills: ["Content Shooting", "Content Writing"],
    lpa: "4.2",
  },
  {
    photo: "/students/23.png",
    name: "Lokesh",
    company: "Citta Ai",
    role: "Graphic Designer",
    skills: ["Graphic Design", "Content Shooting", "Content Writing"],
    lpa: "4.2",
  },
  {
    photo: "/students/24.png",
    name: "Siri",
    company: "Property Edge",
    role: "Graphic Designer",
    skills: ["Video Editing", "Content Shooting", "Content Writing"],
    lpa: "4.2",
  },
];

function TopCarousel() {
  return (
    <div className="relative overflow-hidden mb-6">
      <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-[#FBF8E4] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-[#FBF8E4] to-transparent z-10 pointer-events-none" />
      <div className="placed-track-left">
        {[...topStudents, ...topStudents].map((student, i) => (
          <StudentCard key={`top-${i}`} student={student} />
        ))}
      </div>
    </div>
  );
}

function BottomCarousel() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-[#FBF8E4] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-[#FBF8E4] to-transparent z-10 pointer-events-none" />
      <div className="placed-track-right">
        {[...bottomStudents, ...bottomStudents].map((student, i) => (
          <StudentCard key={`bottom-${i}`} student={student} />
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

        <h2 className={`${bebas.className} uppercase text-[#111] placed-heading`}>
          PLACED &<br />
          THRIVING.
        </h2>
      </div>

      <style>{`
        /* ── Animations ─────────────────────────────────── */
        @keyframes placed-scroll-left {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes placed-scroll-right {
          0%   { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        /* ── Tracks ─────────────────────────────────────── */
        .placed-track-left,
        .placed-track-right {
          display: flex;
          gap: 16px;
          align-items: center;
          width: max-content;
          padding: 10px 0;
        }
        .placed-track-left  { animation: placed-scroll-left  40s linear infinite; }
        .placed-track-right { animation: placed-scroll-right 40s linear infinite; }

        /* ── Card CSS variables (mobile-first) ──────────── */
        .placed-card {
          --circle:  130px;
          --overlap:  38px;
          --panel-w: 190px;
          position: relative;
          width: calc(var(--circle) - var(--overlap) + var(--panel-w));
          height: calc(var(--circle) + 12px);
          flex-shrink: 0;
        }

        @media (min-width: 640px) {
          .placed-card {
            --circle:  165px;
            --overlap:  50px;
            --panel-w: 250px;
          }
          .placed-track-left,
          .placed-track-right { gap: 20px; }
        }

        @media (min-width: 1024px) {
          .placed-card {
            --circle:  210px;
            --overlap:  64px;
            --panel-w: 310px;
          }
          .placed-track-left,
          .placed-track-right { gap: 24px; }
        }

        /* ── Panel ───────────────────────────────────────── */
        .placed-panel {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: var(--panel-w);
          height: var(--circle);
          border: 3px solid #222;
          border-radius: 16px;
          background: transparent;
          padding-left: calc(var(--overlap) + 10px);
          padding-right: 14px;
          padding-top: 14px;
          padding-bottom: 14px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
        }

        /* ── Photo circle ────────────────────────────────── */
        .placed-photo {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: var(--circle);
          height: var(--circle);
          border-radius: 50%;
          background: #F5C518;
          overflow: hidden;
          z-index: 2;
          flex-shrink: 0;
        }

        /* ── Text inside card ────────────────────────────── */
        .placed-name {
          font-weight: 800;
          font-size: 13px;
          color: #111;
          font-family: Figtree, sans-serif;
        }
        .placed-divider {
          height: 2px;
          background: #222;
          width: 36px;
        }
        .placed-company {
          color: #C41E3A;
          font-size: 10px;
          font-weight: 600;
          font-family: Figtree, sans-serif;
        }
        .placed-role {
          font-style: italic;
          font-weight: 700;
          font-size: 11px;
          color: #111;
          font-family: Figtree, sans-serif;
        }
        .placed-skills-label {
          font-size: 8px;
          font-weight: 800;
          color: #111;
          font-family: Figtree, sans-serif;
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }
        .placed-skills {
          font-size: 9px;
          color: #444;
          font-family: Figtree, sans-serif;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .placed-lpa {
          color: #C41E3A;
          font-weight: 800;
          font-size: 15px;
          font-family: Figtree, sans-serif;
        }

        @media (min-width: 640px) {
          .placed-name         { font-size: 16px; }
          .placed-divider      { width: 40px; }
          .placed-company      { font-size: 12px; }
          .placed-role         { font-size: 13px; }
          .placed-skills-label { font-size: 9.5px; }
          .placed-skills       { font-size: 10px; }
          .placed-lpa          { font-size: 18px; }
        }

        @media (min-width: 1024px) {
          .placed-name         { font-size: 19px; }
          .placed-divider      { width: 44px; }
          .placed-company      { font-size: 14px; }
          .placed-role         { font-size: 16px; }
          .placed-skills-label { font-size: 11px; }
          .placed-skills       { font-size: 12px; }
          .placed-lpa          { font-size: 22px; }
        }

        /* ── Heading ─────────────────────────────────────── */
        .placed-heading {
          font-size: 42px;
          line-height: 40px;
          letter-spacing: 0.5px;
        }
        @media (min-width: 640px) {
          .placed-heading { font-size: 58px; line-height: 56px; }
        }
        @media (min-width: 1024px) {
          .placed-heading { font-size: 76px; line-height: 72px; }
        }
      `}</style>

      <TopCarousel />
      <BottomCarousel />

    </section>
  );
}

export default SimpleInfiniteCarousel;
