import Image from "next/image";
import React from "react";

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps): JSX.Element => {
  return (
    <section id={id} className="flex items-center py-20 sm:py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 md:gap-4 gap-0">
          <div className="md:col-span-3 col-span-5 text-center lg:h-screen md:h-auto flex sm:items-center md:text-left">
            <div className="md:pr-8 sm:p-0 p-5">
              <h2 className="kaushan lg:text-5xl md:text-4xl text-3xl mb-3">
                Hey, I&apos;m Daniel Zavala
              </h2>
              <p className="pb-8 pt-2">
                <b>Graphic Designer and Software Developer</b> Adept at
                seamlessly merging technical and artistic elements in interface
                design and development.
              </p>
              <p className="pb-2">
                <b>Notable projects</b> include improving user experience,
                resulting in a 30% increase in engagement. Proficient in Adobe
                Creative Suite and skilled in <b>HTML5</b>, <b>CSS3</b>, and
                <b> JavaScript</b> for creating visually appealing and
                functional interfaces.
              </p>
              <p className="pb-2">
                <b>Passionate</b> about creatively challenging projects, with a
                proven record of delivering exceptional results. Effective
                communicator, facilitating successful collaboration with
                interdisciplinary teams for increased efficiency and project
                success.
              </p>
              <p>
                <b>Proactive and responsible</b> professional, eager to tackle
                new challenges and find innovative solutions. Excited to
                contribute skills to achieve outstanding results in software
                design and development within a dynamic team.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 sm:col-span-5 sm:mt-10 relative sm:flex items-center hidden">
            <div className="w-full flex justify-center">
              <object
                type="image/svg+xml"
                data="/r-1s.svg"
                className="md:max-h-[550px] sm:max-h-[350px]"
              >
                Robot sketch
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
