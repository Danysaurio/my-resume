import classNames from "classnames";
import { socialMedia, socialMediaItem } from "@/components/sections/Skills/utils";

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
        <Icon size={20} />
      </a>
    </li>
  );
};

const Header = (): JSX.Element => {
  return (
    <header
      className="md:flex hidden justify-end pr-3 w-full z-50 bg-[#002345] shadow-md"
    >
      <ul className="flex">
        {socialMedia.map((el, i) => (
          <RenderItem key={"item" + i} {...el} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
