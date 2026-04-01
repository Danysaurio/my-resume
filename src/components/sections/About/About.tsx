"use client";

import { HiBriefcase, HiCode, HiTrendingUp, HiClock } from "react-icons/hi";
import { HiLanguage, HiRocketLaunch, HiUserGroup, HiPaintBrush } from "react-icons/hi2";
import { IconType } from "react-icons";
import { useTranslation } from "@/context/LanguageContext";

interface AboutProps {
  id: string;
}

const metricIcons: IconType[] = [HiClock, HiTrendingUp, HiCode, HiBriefcase];
const highlightIcons: IconType[] = [HiPaintBrush, HiRocketLaunch, HiUserGroup, HiLanguage];

const About = ({ id }: AboutProps): JSX.Element => {
  const { t } = useTranslation();
  const metrics: { value: string; label: string }[] = t("about.metrics");
  const highlights: { title: string; desc: string }[] = t("about.highlights");

  return (
    <section id={id} className="flex items-center min-h-screen py-10 sm:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 md:gap-4 gap-0 items-center">
          <div className="md:col-span-3 col-span-5 text-center md:text-left">
            <div className="md:pr-8 sm:p-0 p-5">
              {/* Role badge */}
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase bg-[#FFF170]/10 text-[#FFF170] border border-[#FFF170]/20 mb-5">
                {t("about.badge")}
              </span>

              <h2 className="accent-serif lg:text-5xl md:text-4xl text-3xl mb-4">
                {t("about.heading")}
              </h2>
              <p className="pb-6 pt-1 text-gray-300 leading-relaxed max-w-xl">
                {t("about.paragraph")}
              </p>

              {/* Stats row with vertical dividers */}
              <div className="grid grid-cols-4 mt-2">
                {metrics.map((m, i) => {
                  const Icon = metricIcons[i];
                  return (
                    <div
                      key={m.label}
                      className={`text-center md:text-left px-3 sm:px-5 ${
                        i < metrics.length - 1 ? "border-r border-white/10" : ""
                      } ${i === 0 ? "pl-0" : ""}`}
                    >
                      <div className="flex items-center md:justify-start justify-center gap-2 mb-1">
                        <Icon className="text-sm text-[#FFF170]/50" />
                        <span className="text-2xl sm:text-3xl font-bold text-[#FFF170]">
                          {m.value}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400 block">
                        {m.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((h, i) => {
                  const Icon = highlightIcons[i];
                  return (
                    <div
                      key={h.title}
                      className="flex items-start gap-3 group"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FFF170]/30 group-hover:bg-white/[0.08] transition-all duration-300">
                        <Icon className="text-sm text-gray-400 group-hover:text-[#FFF170] transition-colors duration-300" />
                      </div>
                      <div>
                        <span className="text-sm font-semibold block mb-0.5">
                          {h.title}
                        </span>
                        <span className="text-xs text-gray-400 leading-relaxed block">
                          {h.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 sm:col-span-5 sm:mt-10 relative sm:flex items-center hidden">
            <div className="w-full flex justify-center">
              <object
                aria-label="Robot - sketch"
                type="image/svg+xml"
                data="/r-1s.svg"
                className="md:max-h-[550px] sm:max-h-[350px] h-full w-full"
              >
                Robot sketch
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
