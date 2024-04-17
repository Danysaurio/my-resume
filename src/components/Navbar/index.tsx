// icons
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";

import { IconType } from "react-icons";
import NavItem from "../NavItem";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { IoMdMenu } from "react-icons/io";
import { ResponsiveNav } from "./ResponsiveNav";

interface NavItem {
  name: string;
  path: string;
  icon: IconType;
}

// nav data
export const navData: NavItem[] = [
  { name: "home", path: "#home", icon: HiHome },
  { name: "about", path: "#about", icon: HiUser },
  { name: "What I do", path: "#services", icon: HiRectangleGroup },
  { name: "Skills", path: "#skills", icon: HiViewColumns },
  {
    name: "Experience",
    path: "#experience",
    icon: HiChatBubbleBottomCenterText,
  },
  {
    name: "Contact",
    path: "#contact",
    icon: HiEnvelope,
  },
];

const Navbar = ({ className }: { className?: string }): JSX.Element => {
  const cls = classNames([
    "md:flex hidden w-full flex-col items-center justify-between xl:justify-center",
    styles.nav,
  ]);

  const containerCls = classNames([
    "fixed z-10 right-0 md:top-1/2 transform md:-translate-y-1/2",
    className,
  ]);

  return (
    <nav className={containerCls}>
      <div className={cls}>
        {navData.map(({ name, path, icon }, index) => {
          return (
            <NavItem key={name + index} name={name} path={path} icon={icon} />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
