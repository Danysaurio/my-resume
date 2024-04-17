import styles from "./styles.module.scss";

import TimelineItem from "./TimelineItem";
import { timelineItems } from "./Values";

const Timeline = (): JSX.Element => {
  return (
    <>
      <ul className={styles.timeline}>
        {timelineItems.map((item, i) => (
          <TimelineItem key={`timelineItem-${i}`} {...item} />
        ))}
      </ul>
      <div className="mt-4 sm:block hidden">
        <span className="text-blue-500">...To be continued</span>
      </div>
    </>
  );
};

export default Timeline;
