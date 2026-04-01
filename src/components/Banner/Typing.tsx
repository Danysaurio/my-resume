"use client";

import { ReactTyped } from "react-typed";
import { useTranslation } from "@/context/LanguageContext";

const Typing = () => {
  const { t } = useTranslation();
  const textLines: string[] = t("banner.typing");
  return <ReactTyped backSpeed={80} loop strings={textLines} typeSpeed={80} />;
};

export default Typing;
