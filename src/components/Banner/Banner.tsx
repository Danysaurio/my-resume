import Image from "next/image";
import classNames from "classnames";
import styles from "./styles.module.scss";
import Typing from "./Typing";

const Banner = (): JSX.Element => {
  const cls = classNames([
    "w-full h-screen bg-cover bg-center flex items-center justify-center",
    styles.banner,
  ]);
  const titleCls = classNames([
    "font-bold uppercase xl:text-7xl md:text-5xl sm:text-4xl text-3xl text-shadow",
    styles.title,
  ]);

  const subTitleCls = classNames(["kaushan text-3xl text-xl sm:text-2xl"]);

  return (
    <section id="home" className={cls}>
      <Image className={styles.image} src="/pinos.svg" alt="pinos" fill />
      <div className="text-center pb-20">
        <h1 className={titleCls}>Daniel Zavala</h1>
        <h2 className={subTitleCls}>
          I&apos;m&nbsp;
          <b className={styles.subTitleBold}>
            <Typing />
          </b>
        </h2>
      </div>
    </section>
  );
};

export default Banner;
