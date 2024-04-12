import styles from "./styles.module.scss";

import TimelineItem from "./TimelineItem";
import { timelineItems } from "./Values";

const Timeline = (): JSX.Element => {
  return (
    <ul className={styles.timeline}>
      {timelineItems.map((item, i) => (
        <TimelineItem key={`timelineItem-${i}`} {...item} />
      ))}
    </ul>
  );
};

export default Timeline;
