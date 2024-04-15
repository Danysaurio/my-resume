"use client";

import Image from "next/image";
import { ReactTyped } from "react-typed";
import classNames from "classnames";
import styles from "./styles.module.scss";

const textLines = ["Developer", "Designer", "Front end", "UX/UI"];

const Banner = (): JSX.Element => {
  const cls = classNames([
    "w-full h-screen bg-cover bg-center flex items-center justify-center",
    styles.banner,
  ]);
  const titleCls = classNames([
    "font-bold uppercase text-7xl text-shadow",
    styles.title,
  ]);

  const subTitleCls = classNames(["kaushan text-3xl"]);

  return (
    <section id="home" className={cls}>
      <Image
        className={styles.image}
        src="/pinos.svg"
        alt="pinos"
        layout="fill"
      />
      <div className="text-center pb-20">
        <h1 className={titleCls}>Daniel Zavala</h1>
        <h2 className={subTitleCls}>
          I&apos;m&nbsp;
          <b className={styles.subTitleBold}>
            <ReactTyped
              backSpeed={80}
              loop
              strings={textLines}
              typeSpeed={80}
            />
          </b>
        </h2>
      </div>
    </section>
  );
};

export default Banner;
