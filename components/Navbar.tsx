"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navItems = [
  "Home",
  "About",
  "Team",
  "Services",
  "Portfolio",
  "Testimonials",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      setHidden(current > lastScrollY.current && current > 140);
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500 ease-in-out
          ${hidden ? "-translate-y-full" : "translate-y-0"}
        `}
      >
        <div
          className={`
            mx-auto flex items-center
            transition-all duration-500 ease-in-out
            ${
              scrolled
                ? `
                  max-w-[85%]        /* Matches your other section widths */
                  px-8 py-2         
                  bg-white/90
                  backdrop-blur-xl
                  rounded-full
                  border border-[#365c47]/20
                  shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                  justify-between
                  mt-3              
                `
                : `
                  max-w-full
                  px-[5%]           /* Applied 5% padding */
                  py-6              
                  bg-transparent
                  justify-between
                `
            }
          `}
        >
          {/* LOGO */}
          <div className="flex items-center gap-6">
            <Image
              src="/logo.png"
              alt="TAC"
              width={scrolled ? 110 : 130} /* Slightly smaller base logo */
              height={40}
              priority
              className="transition-all duration-500"
            />
          </div>

          {/* DESKTOP NAV */}
          <ul
            className={`
              hidden md:flex items-center
              ${scrolled ? "gap-6" : "gap-8"} /* Tighter gap for better fit */
            `}
          >
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className="relative group cursor-pointer"
              >
                <span
                  className={`
                    uppercase tracking-[0.12em] font-extrabold 
                    transition-all duration-300
                    ${scrolled ? "text-[11px]" : "text-[13px]"} /* Scaled down text */
                    ${
                      active === item
                        ? "text-[#FFC62A]"
                        : scrolled
                        ? "text-[#2F2F2F] group-hover:text-[#365c47]"
                        : "text-white group-hover:text-[#FFC62A]"
                    }
                  `}
                >
                  <span className={active === item ? "font-serif italic capitalize tracking-normal text-base" : ""}>
                    {item}
                  </span>
                </span>

                {/* UNDERLINE */}
                <span
                  className={`
                    absolute -bottom-1 left-1/2 h-[2px]
                    bg-[#FFC62A]
                    transition-all duration-300
                    ${
                      active === item
                        ? "w-full -translate-x-1/2"
                        : "w-0 group-hover:w-full group-hover:-translate-x-1/2"
                    }
                  `}
                />
              </li>
            ))}
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden text-2xl transition-colors ${scrolled ? "text-[#2F2F2F]" : "text-white"}`}
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-[60]
          bg-[#365c47]
          transition-transform duration-700 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center px-[5%] py-6">
          <Image src="/logo.png" alt="TAC" width={110} height={35} className="brightness-0 invert" />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-3xl text-[#FFC62A]"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col items-center gap-6 mt-12">
          {navItems.map((item) => (
            <li
              key={item}
              className={`text-xl font-extrabold tracking-tighter transition-all ${
                active === item ? "text-[#FFC62A] font-serif italic capitalize" : "text-white"
              }`}
              onClick={() => {
                setActive(item);
                setMobileOpen(false);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}