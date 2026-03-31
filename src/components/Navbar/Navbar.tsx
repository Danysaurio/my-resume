"use client";

import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";
import { IconType } from "react-icons";
import Link from "next/link";
import { ResponsiveNav } from "./ResponsiveNav";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

interface NavItem {
  name: string;
  path: string;
  icon: IconType;
}

export const navData: NavItem[] = [
  { name: "Home", path: "#home", icon: HiHome },
  { name: "About", path: "#about", icon: HiUser },
  { name: "Services", path: "#services", icon: HiRectangleGroup },
  { name: "Skills", path: "#skills", icon: HiViewColumns },
  { name: "Experience", path: "#experience", icon: HiChatBubbleBottomCenterText },
  { name: "Contact", path: "#contact", icon: HiEnvelope },
];

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Scroll-depth listener: increase bg opacity past 50px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = navData.map(({ path }) => path.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Trigger when section occupies at least 30% of the viewport
        threshold: 0.3,
        // Negative top offset accounts for the fixed navbar height (56px)
        rootMargin: "-56px 0px 0px 0px",
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navBg = scrolled
    ? "bg-[rgba(4,12,28,0.95)] border-white/10 opacity-100"
    : "bg-transparent border-transparent opacity-0 pointer-events-none";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 border-b backdrop-blur-md transition-all duration-500 ${navBg}`}
      >
        {/* Logo */}
        <Link
          href="#home"
          aria-label="Home"
          className="flex items-center gap-2 group"
        >
          {/* "DZ" badge — visible on all sizes, complements the full name on md+ */}
          <span className="flex items-center justify-center w-7 h-7 rounded-md bg-[#FFF170] text-[#020c1f] text-xs font-extrabold tracking-tight select-none shrink-0">
            DZ
          </span>
          <span className="accent-serif text-xl text-white/80 group-hover:text-white transition-colors duration-200 hidden sm:block">
            Daniel Zavala
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navData.map(({ name, path }) => {
            const sectionId = path.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={name}>
                <Link
                  href={path}
                  className={`relative flex flex-col items-center px-4 py-2 rounded-lg text-sm transition-all duration-200 capitalize ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {name}
                  {/* Active indicator dot */}
                  <span
                    className={`mt-0.5 w-1 h-1 rounded-full bg-[#FFF170] transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right-side actions */}
        <div className="flex items-center gap-2">
          {/* Hire Me CTA — visible on all sizes */}
          <Link
            href="#contact"
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#FFF170] text-[#020c1f] hover:bg-[#FFF170]/90 transition-all duration-200 whitespace-nowrap"
          >
            Hire Me
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
            onClick={() => setShowMenu(!showMenu)}
            aria-label={showMenu ? "Close menu" : "Open menu"}
          >
            {showMenu ? <IoClose size={22} /> : <IoMdMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <ResponsiveNav showMenu={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
};

export default Navbar;
