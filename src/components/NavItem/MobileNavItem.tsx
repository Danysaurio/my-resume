import React from "react";
import { NavItemProps } from ".";
import Link from "next/link";

interface MobileNavItemProps extends NavItemProps {
  onClick: () => void;
}

const MobileNavItem = ({
  name,
  path,
  icon: Icon,
  onClick,
}: MobileNavItemProps) => {
  return (
    <li>
      <Link
        href={path}
        className="py-5 capitalize font-bold flex items-center justify-center hover:bg-blue-500"
        onClick={onClick}
      >
        <Icon className="mr-1" />
        {name}
      </Link>
    </li>
  );
};

export default MobileNavItem;
