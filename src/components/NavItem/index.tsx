import { IconType } from "react-icons";
import Link from "next/link";
import React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

interface NavItemProps {
  name: string;
  path: string;
  icon: IconType;
}

const NavItem = ({ name, path, icon: Icon }: NavItemProps): JSX.Element => {
  const cls = classNames(["transition item", styles.item]);
  const titleClass = classNames([
    "capitalize font-bold title animate__animated animate__fadeInRight text-nowrap",
    styles.title,
  ]);

  return (
    <Link href={path} className={cls}>
      <div className="p-3">
        <Icon size={"1.2rem"} />
        <span className={titleClass}>{name}</span>
      </div>
    </Link>
  );
};

export default NavItem;
