"use client";
import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { navData } from ".";
import MobileNavItem from "../NavItem/MobileNavItem";
import { socialMedia, socialMediaItem } from "../sections/Skills/utils";
import { IoClose } from "react-icons/io5";

const RenderItem = ({
  url,
  title,
  icon: Icon,
  hoverClass,
}: socialMediaItem): JSX.Element => {
  const cls = classNames(["p-3 block", hoverClass]);

  return (
    <li>
      <a href={url} className={cls} title={title} aria-label={title} target="_blank" rel="noopener noreferrer">
        <Icon size={25} />
      </a>
    </li>
  );
};

export const ResponsiveNav = ({ className }: { className?: string }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowMenu(false);
    };
    if (showMenu) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showMenu]);

  const showClasses = showMenu ? "left-[30vw]" : "left-full";

  const containerCls = classNames([
    "bg-[#002345] transition-all duration-300 ease-in-out fixed z-10",
    showClasses,
  ]);

  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={className}>
      <div
        onClick={() => setShowMenu(false)}
        className={`bg-black absolute left-0 right-0 bottom-0 top-0 z-10 transition-opacity duration-300 ${
          showMenu ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div className={containerCls}>
        <button
          className="right-full p-3 absolute"
          onClick={handleOnClick}
          aria-label={showMenu ? "Close menu" : "Open menu"}
        >
          {showMenu ? <IoClose size={25} /> : <IoMdMenu size={25} />}
        </button>

        <div className="w-[70vw] h-[100dvh] ">
          <ul className="text-center pt-10">
            {navData.map((el, i) => (
              <MobileNavItem key={"nav" + i} onClick={handleOnClick} {...el} />
            ))}
          </ul>
          <ul className="flex justify-center absolute bottom-0 w-full">
            {socialMedia.map((el, i) => (
              <RenderItem {...el} key={"social" + i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
