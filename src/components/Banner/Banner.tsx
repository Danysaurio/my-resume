"use client";

import Image from "next/image";
import classNames from "classnames";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./styles.module.scss";
import Typing from "./Typing";

const Banner = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: sky slow, pinos medium, text fast — max ~30-50px
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const pinosY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const cls = classNames([
    "w-full h-screen flex items-center justify-center",
    styles.banner,
  ]);
  const titleCls =
    "font-bold uppercase xl:text-7xl md:text-5xl sm:text-4xl text-3xl";
  const subTitleCls = "kaushan text-xl sm:text-2xl md:text-3xl";

  return (
    <section id="home" className={cls} ref={sectionRef}>
      <motion.div className={styles.bgLayer} style={{ y: bgY }} />

      <motion.div className={styles.pinosLayer} style={{ y: pinosY }}>
        <Image
          className={styles.image}
          src="/pinos.svg"
          alt="pinos"
          fill
          priority
        />
      </motion.div>

      <motion.div
        className="text-center pb-20 relative z-10"
        style={{ y: textY, opacity: textOpacity }}
      >
        <h1 className={titleCls}>Daniel Zavala</h1>
        <h2 className={subTitleCls}>
          I&apos;m&nbsp;
          <b className={styles.subTitleBold}>
            <Typing />
          </b>
        </h2>
      </motion.div>
    </section>
  );
};

export default Banner;
