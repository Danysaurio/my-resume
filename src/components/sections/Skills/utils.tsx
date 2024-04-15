import { ProgressBar } from "@/components/Utils";
import { IconType } from "react-icons";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineGithub,
} from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";

interface devProps {
  title: string;
  percentage: number;
  classColor?: string;
  icon?: IconType;
}

const DevSkill = ({
  title,
  percentage,
  classColor,
  icon: Icon = FaHtml5,
}: devProps): JSX.Element => {
  return (
    <div className="grid grid-cols-5 mb-2">
      <div className="col-span-3 flex">
        <div className="flex items-center ">
          <Icon className={classColor} />
          <span className="ml-2">{title}</span>
        </div>
      </div>
      <div className="col-span-2 flex items-center">
        <ProgressBar progress={percentage} />
      </div>
    </div>
  );
};

const ToolItem = ({ title }: { title: string }): JSX.Element => {
  return (
    <li className="flex items-center">
      <BsCheck />
      <span className="ml-1">{title}</span>
    </li>
  );
};

interface DesignSkillProps {
  title: string;
  icon: IconType;
  href: string;
  className?: string;
}

const DesignSkill = ({
  title,
  icon: Icon,
  href,
  className,
}: DesignSkillProps) => {
  return (
    <li>
      <a
        href={href}
        className="hover:opacity-60 transition-opacity opacity-80"
        target="blank"
        title={title}
      >
        <Icon className={className} />
      </a>
    </li>
  );
};

export interface socialMediaItem {
  url: string;
  title: string;
  icon: IconType;
  hoverClass?: string;
}

const socialMedia = [
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

export { DesignSkill, DevSkill, ToolItem, socialMedia };
