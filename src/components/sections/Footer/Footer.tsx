"use client";

import { socialMedia, socialMediaItem } from "../Skills/utils";
import { useTranslation } from "@/context/LanguageContext";

const iconColorMap: Record<string, string> = {
  Youtube: "hover:text-[#FF0000]",
  Instagram: "hover:text-[#D43089]",
  Github: "hover:text-[#8264ff]",
  Linkedin: "hover:text-[#0073b1]",
};

const SocialIcon = ({ url, title, icon: Icon }: socialMediaItem): JSX.Element => {
  const colorCls = iconColorMap[title] ?? "hover:text-[#FFF170]";
  return (
    <li>
      <a
        href={url}
        title={title}
        aria-label={title}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-2.5 flex items-center justify-center rounded-xl text-gray-500 border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300 ${colorCls}`}
      >
        <Icon size={18} />
      </a>
    </li>
  );
};

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
  const copyright = t("footer.copyright").replace("{year}", new Date().getFullYear().toString());

  return (
    <footer className="border-t border-white/5 bg-[#020c1f]/80 backdrop-blur-sm">
      <div className="container mx-auto px-5 sm:px-0 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: brand */}
        <span className="accent-serif text-lg text-white/40">
          Daniel Zavala
        </span>

        {/* Center: copyright */}
        <p className="text-xs text-gray-600 order-last sm:order-none">
          {copyright}
        </p>

        {/* Right: social icons */}
        <ul className="flex items-center gap-1">
          {socialMedia.map((el, i) => (
            <SocialIcon key={"footer-icon-" + i} {...el} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
