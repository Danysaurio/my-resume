// icons

import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";

import Link from "next/link";
import { ReactElement } from "react";

interface NavItem {
  name: string;
  path: string;
  icon: ReactElement;
}

// nav data
export const navData: NavItem[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];


const Navbar = (): JSX.Element => {
  return (
    <nav className="">
      {/* { inner } */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10">
        {navData.map((link, index) => {
          return <Link href={link.path}>{link.icon}</Link>;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
