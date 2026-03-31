"use client";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { IconType } from "react-icons";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { MdSchool } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { motion } from "framer-motion";

interface TimelineItemProps {
  icon: IconType;
  title: string;
  date: string;
  text: string;
  position: string;
  index?: number;
}

interface TypeStyle {
  label: string;
  badgeCls: string;
  iconCls: string;
  lineCls: string;
}

function getTypeStyle(icon: IconType): TypeStyle {
  if (icon === MdSchool) return {
    label: "Education",
    badgeCls: "bg-purple-500/15 text-purple-400 border-purple-500/20",
    iconCls: "bg-purple-500/15 border-purple-500/40 text-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.25)]",
    lineCls: "bg-purple-500/30",
  };
  if (icon === GrWorkshop) return {
    label: "Teaching",
    badgeCls: "bg-green-500/15 text-green-400 border-green-500/20",
    iconCls: "bg-green-500/15 border-green-500/40 text-green-400 shadow-[0_0_12px_rgba(34,197,94,0.25)]",
    lineCls: "bg-green-500/30",
  };
  return {
    label: "Work",
    badgeCls: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    iconCls: "bg-blue-500/15 border-blue-500/40 text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.25)]",
    lineCls: "bg-blue-500/30",
  };
}

const TimelineItem = ({
  date,
  icon: Icon,
  position,
  text,
  title,
  index = 0,
}: TimelineItemProps): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const typeStyle = getTypeStyle(Icon);

  const cls = classNames([
    `rounded-xl border h-[40px] w-[40px] flex items-center justify-center icontimeline transition-all duration-300 ${typeStyle.iconCls}`,
    styles.circleItem,
  ]);

  return (
    <motion.li
      className="flex timelineItem"
      initial={{ opacity: 0, y: -14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
    >
      <div className="relative hidden sm:block">
        <div className={cls}>
          <Icon size={20} />
        </div>
      </div>
      <section className="flex-1">
        <div className="pb-6 sm:pl-5 lg:pr-6 lg:pl-8">
          <div
            role="button"
            tabIndex={0}
            aria-expanded={expanded}
            className="group rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FFF170]/25 hover:bg-white/[0.06] transition-all duration-300 cursor-pointer overflow-hidden"
            onClick={() => setExpanded(!expanded)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpanded(!expanded); } }}
          >
            {/* Header always visible */}
            <div className="p-4 flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${typeStyle.badgeCls}`}>
                    {typeStyle.label}
                  </span>
                  <span className="text-[11px] text-gray-500">{date}</span>
                </div>
                <h3 className="text-base font-semibold text-white leading-snug">{title}</h3>
                <span className="text-xs text-[#FFF170]/70 font-medium">{position}</span>
              </div>
              <HiChevronDown
                size={16}
                className={`text-gray-500 flex-shrink-0 mt-1 transition-transform duration-300 ${
                  expanded ? "rotate-180 text-[#FFF170]/60" : ""
                }`}
              />
            </div>

            {/* Expandable content */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/5">
                <p className="text-sm text-gray-400 leading-relaxed pt-3">{text}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.li>
  );
};

export default TimelineItem;
