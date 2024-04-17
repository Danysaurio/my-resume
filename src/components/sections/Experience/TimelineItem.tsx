import styles from "./styles.module.scss";

import classNames from "classnames";
import { IconType } from "react-icons";

interface TimelineItemProps {
  icon: IconType;
  title: string;
  date: string;
  text: string;
  position: string;
}

const TimelineItem = ({
  date,
  icon: Icon,
  position,
  text,
  title,
}: TimelineItemProps): JSX.Element => {
  const cls = classNames([
    "rounded-full border border-blue-500 text-blue-500 h-[44px] w-[36px] flex items-center justify-center icontimeline",
    styles.circleItem,
  ]);

  const clsTextContainer = classNames([
    "rounded-lg p-4 shadow-md relative",
    styles.textContainer,
  ]);

  return (
    <div className="flex timelineItem">
      <div className="relative hidden sm:block">
        <div className={cls}>
          <Icon size={20} />
        </div>
      </div>
      <section>
        <div className="pb-16  sm:pl-5 lg:pr-10 lg:pl-10">
          <div className={clsTextContainer}>
            <span className={styles.timelineItemDate}>{date}</span>
            <h3 className="text-2xl kaushan text-blue-500 ">{title}</h3>
            <span className="font-semibold">{position}</span>
            <p className="mt-2">{text}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TimelineItem;
