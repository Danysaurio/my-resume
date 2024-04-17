"use client";

import { ReactTyped } from "react-typed";
const textLines = ["Developer", "Designer", "Front end", "UX/UI"];

const Typing = () => {
  return <ReactTyped backSpeed={80} loop strings={textLines} typeSpeed={80} />;
};

export default Typing;
