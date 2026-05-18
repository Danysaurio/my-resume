import { GrWorkshop } from "react-icons/gr";
import { MdOutlineWork, MdSchool } from "react-icons/md";
import { IconType } from "react-icons";

const typeToIcon: Record<string, IconType> = {
  Education: MdSchool,
  Teaching: GrWorkshop,
  Work: MdOutlineWork,
};

export interface TimelineItemData {
  icon: IconType;
  date: string;
  position: string;
  title: string;
  text: string;
  type: string;
}

export function getTimeline(t: (key: string) => any): TimelineItemData[] {
  const items: { date: string; type: string; position: string; title: string; text: string }[] = t("experience.items");
  return items.map((item) => ({
    icon: typeToIcon[item.type] ?? MdOutlineWork,
    date: item.date,
    position: item.position,
    title: item.title,
    text: item.text,
    type: item.type,
  }));
}
