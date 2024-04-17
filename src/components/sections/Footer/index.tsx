import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineGithub,
} from "react-icons/ai";

import { IconType } from "react-icons";
import classNames from "classnames";
import { socialMedia } from "../Skills/utils";

interface Item {
  url: string;
  title: string;
  hoverClass: string;
  icon: IconType;
}

const RenderItem = ({
  url,
  title,
  icon: Icon,
  hoverClass,
}: Item): JSX.Element => {
  const cls = classNames(["p-1 block", hoverClass]);

  return (
    <li>
      <a href={url} className={cls} title={title} target="blank">
        <Icon size={20} />
      </a>
    </li>
  );
};

const Footer = (): JSX.Element => {
  return (
    <div className="flex justify-center pr-3 w-full z-50 bg-blue-500 shadow-md">
      <ul className="flex">
        {socialMedia.map((el, i) => (
          <RenderItem key={"item" + i} {...el} />
        ))}
      </ul>
    </div>
  );
};

export default Footer;
