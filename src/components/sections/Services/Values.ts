import { ServiceItem } from "./ServiceElement";

const imgUrls = [
  "/icons/icon-1.svg",
  "/icons/icon-2.svg",
  "/icons/icon-3.svg",
  "/icons/icon-4.svg",
];

const imgAlts = [
  "Web dev icon",
  "Web dev icon",
  "Web dev icon",
  "Experience Design",
];

export function getServices(t: (key: string) => any): ServiceItem[] {
  const items: { title: string; text: string }[] = t("services.items");
  return items.map((item, i) => ({
    imgUrl: imgUrls[i],
    imgAlt: imgAlts[i],
    title: item.title,
    text: item.text,
  }));
}
