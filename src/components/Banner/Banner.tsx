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

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const cls = classNames([
    "w-full h-screen flex items-center justify-center",
    styles.banner,
  ]);
  const titleCls =
    "font-bold uppercase xl:text-7xl md:text-5xl sm:text-4xl text-3xl block";
  const subTitleCls = "accent-serif text-xl sm:text-2xl md:text-3xl";

  return (
    <section id="home" className={cls} ref={sectionRef}>
      <motion.div className={styles.bgLayer} style={{ y: bgY }} />

      <div className={styles.pinosLayer}>
        <Image
          className={styles.image}
          src="/pinos.svg"
          alt="pinos"
          fill
          priority
        />
      </div>

      <motion.div
        className="text-center pb-20 z-10"
        style={{ y: textY, opacity: textOpacity }}
      >
        <h1 className={titleCls}>Daniel Zavala</h1>
        {/* <p className="text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase text-gray-300 mt-2 mb-4">
          Senior Software Engineer
        </p> */}
        <h2 className={subTitleCls}>
          I&apos;m&nbsp;
          <b className={styles.subTitleBold}>
            <Typing />
          </b>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#about"
            className={styles.ctaPrimary}
          >
            About Me
          </a>
          <a
            href="#contact"
            className={styles.ctaSecondary}
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
