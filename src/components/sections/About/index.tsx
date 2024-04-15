import Image from "next/image";
import React from "react";

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps): JSX.Element => {
  return (
    <section id={id} className="flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-screen flex items-center">
            <div className="pr-8">
              <h2 className="kaushan text-5xl mb-3">
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
          <div className="col-span-2 relative">
            <Image src="/r-1s.svg" alt="Robot-1" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
