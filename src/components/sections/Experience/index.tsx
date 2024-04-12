import styles from "./styles.module.scss";

import Image from "next/image";
import Timeline from "./Timeline";
import classNames from "classnames";

const Experience = ({ id }: { id: string }): JSX.Element => {
  const robotClasses = classNames(["!sticky", styles.robotImage]);
  return (
    <section id={id} className="flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <div>
              <section className="mb-16">
                <h2 className="kaushan text-5xl mb-9">Experience</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus molestias maxime distinctio eligendi qui sunt,
                  doloremque repellat pariatur et quibusdam minima ipsa
                  dignissimos deleniti ratione non nesciunt at impedit quis.
                </p>
              </section>
              <section className="timeline ml-20">
                <Timeline />
              </section>
            </div>
          </div>
          <div className="col-span-2 relative">
            <Image
              src="/r-2s.svg"
              alt="pinos"
              layout="fill"
              className={robotClasses}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
