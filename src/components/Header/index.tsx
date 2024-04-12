import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineGithub,
} from "react-icons/ai";

import { IconType } from "react-icons";
import classNames from "classnames";

interface Item {
  url: string;
  title: string;
  hoverClass: string;
  icon: IconType;
}

const elements = [
  {
    url: "https://www.youtube.com/channel/UC4CPgJp5YB3g0HdQdG8MnDQ",
    title: "Youtube",
    icon: AiFillYoutube,
    hoverClass: "hover:text-[#FF0000]",
  },
  {
    url: "https://www.instagram.com/eldanysaurio/",
    title: "Instagram",
    icon: AiFillInstagram,
    hoverClass: "hover:text-[#D43089]",
  },
  {
    url: "https://github.com/Danysaurio",
    title: "Github",
    icon: AiOutlineGithub,
    hoverClass: "hover:text-[#8264ff]",
  },
  {
    url: "https://www.linkedin.com/in/danizavala",
    title: "Linkedin",
    icon: AiFillLinkedin,
    hoverClass: "hover:text-[#0073b1]",
  },
];

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

const Header = (): JSX.Element => {
  return (
    <div className="flex justify-end pr-3 w-full  z-50 bg-[#002345] shadow-md">
      <ul className="flex">
        {elements.map((el, i) => (
          <RenderItem key={"item" + i} {...el} />
        ))}
      </ul>
    </div>
  );
};

export default Header;
