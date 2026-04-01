"use client";

import styles from "./styles.module.scss";

import TimelineItem from "./TimelineItem";
import { getTimeline } from "./Values";
import { useTranslation } from "@/context/LanguageContext";

const Timeline = (): JSX.Element => {
  const { t } = useTranslation();
  const timelineItems = getTimeline(t);

  return (
    <>
      <ul className={styles.timeline}>
        {timelineItems.map((item, i) => (
          <TimelineItem key={`timelineItem-${i}`} {...item} index={i} />
        ))}
      </ul>
      <div className="mt-4 sm:block hidden">
        <span className="text-blue-500">{t("experience.continued")}</span>
      </div>
    </>
  );
};

export default Timeline;
