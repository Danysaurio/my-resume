"use client";

import { useEffect } from "react";
import { useNavData } from ".";
import MobileNavItem from "../NavItem/MobileNavItem";
import { socialMedia, socialMediaItem } from "../sections/Skills/utils";

const RenderItem = ({ url, title, icon: Icon, hoverClass }: socialMediaItem) => (
  <li>
    <a
      href={url}
      className={`p-3 block text-gray-400 ${hoverClass}`}
      title={title}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={22} />
    </a>
  </li>
);

interface ResponsiveNavProps {
  showMenu: boolean;
  onClose: () => void;
}

export const ResponsiveNav = ({ showMenu, onClose }: ResponsiveNavProps) => {
  const navItems = useNavData();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (showMenu) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showMenu, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          showMenu ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-14 right-0 bottom-0 z-40 w-[70vw] max-w-xs bg-[#02091a] border-l border-white/[0.06] transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="pt-4">
          {navItems.map((el, i) => (
            <MobileNavItem key={"nav" + i} onClick={onClose} {...el} />
          ))}
        </ul>
        <ul className="flex justify-center absolute bottom-6 w-full">
          {socialMedia.map((el, i) => (
            <RenderItem {...el} key={"social" + i} />
          ))}
        </ul>
      </div>
    </>
  );
};
