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

interface NavItem {
  name: string;
  path: string;
  IconComponent: IconType;
}

// nav data
export const navData: NavItem[] = [
  { name: "home", path: "#home", IconComponent: HiHome },
  { name: "about", path: "/about", IconComponent: HiUser },
  { name: "services", path: "/services", IconComponent: HiRectangleGroup },
  { name: "work", path: "/work", IconComponent: HiViewColumns },
  {
    name: "testimonials",
    path: "/testimonials",
    IconComponent: HiChatBubbleBottomCenterText,
  },
  {
    name: "contact",
    path: "/contact",
    IconComponent: HiEnvelope,
  },
];

const Navbar = (): JSX.Element => {

  const cls = classNames([
    "flex w-full xl:flex-col items-center justify-between xl:justify-center",
    styles.nav,
  ]);
  return (
    <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
      {/* { inner } */}
      <div className={cls}>
        {navData.map(({ name, path, IconComponent }, index) => {
          return (
            <NavItem key={name} name={name} path={path} icon={IconComponent} />
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
