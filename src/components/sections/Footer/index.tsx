import classNames from "classnames";
import { socialMedia, socialMediaItem } from "../Skills/utils";

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

const Footer = (): JSX.Element => {
  return (
    <footer className="flex justify-center pr-3 w-full z-50 bg-blue-500 shadow-md">
      <ul className="flex">
        {socialMedia.map((el, i) => (
          <RenderItem key={"item" + i} {...el} />
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
