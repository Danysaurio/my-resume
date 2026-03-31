import { IconType } from "react-icons";
import Link from "next/link";
import styles from "./styles.module.scss";

export interface NavItemProps {
  name: string;
  path: string;
  icon: IconType;
}

const NavItem = ({ name, path, icon: Icon }: NavItemProps): JSX.Element => {
  return (
    <Link
      href={path}
      aria-label={name}
      className={`${styles.item} w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200`}
    >
      <Icon size={18} />
      <span className={styles.tooltip} aria-hidden="true">{name}</span>
    </Link>
  );
};

export default NavItem;
