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
  "Contact",
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
                  max-w-[92%]
                  px-14 py-4
                  bg-white/75
                  backdrop-blur-lg
                  rounded-full
                  border border-green-200/70
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  justify-between
                `
                : `
                  max-w-full
                  px-8 md:px-20
                  py-7
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
              width={scrolled ? 140 : 170}
              height={50}
              priority
              className="transition-all duration-500"
            />
          </div>

          {/* DESKTOP NAV */}
          <ul
            className={`
              hidden md:flex items-center
              ${scrolled ? "gap-10" : "gap-16"}
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
                    uppercase tracking-widest font-semibold
                    transition-all duration-300
                    ${scrolled ? "text-[16px]" : "text-[18px]"}
                    ${
                      active === item
                        ? "text-yellow-500"
                        : "text-green-800 group-hover:text-yellow-500"
                    }
                  `}
                >
                  {item}
                </span>

                {/* UNDERLINE */}
                <span
                  className={`
                    absolute -bottom-2 left-1/2 h-[2px]
                    bg-yellow-500
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
            className="md:hidden text-green-800 text-3xl"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-40
          bg-white
          transition-transform duration-500 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center px-8 py-6">
          <Image src="/logo.png" alt="TAC" width={130} height={40} />
          <button
            onClick={() => setMobileOpen(false)}
            className="text-3xl text-green-800"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col items-center gap-10 mt-24">
          {navItems.map((item) => (
            <li
              key={item}
              className="text-2xl font-semibold tracking-widest text-green-800 hover:text-yellow-500 transition"
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
