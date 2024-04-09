import { DiIllustrator, DiPhotoshop, DiTerminal } from "react-icons/di";
import { FaFigma, FaInvision, FaSketch } from "react-icons/fa";
import { SiAdobelightroom, SiAdobepremierepro } from "react-icons/si";

import { BsPaintBucket } from "react-icons/bs";
import Image from "next/image";
import { ProgressBar } from "@/components/Utils";

const RenderSkill = (): JSX.Element => {
  return (
    <div className="grid grid-cols-5 mb-2">
      <div className="col-span-3 flex">Typescript</div>
      <div className="col-span-2 flex items-center">
        <ProgressBar progress={50} />
      </div>
    </div>
  );
};

const Skills = ({ id }: { id: string }): JSX.Element => {
  return (
    <section id={id} className="flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-screen flex items-center">
            <div className="w-full">
              <h2 className="kaushan text-5xl mb-4">Skills</h2>
              <div className="grid grid-cols-6 gap-10">
                <div className="col-span-3">
                  <div className="flex items-center">
                    <DiTerminal size={"3rem"} />
                    <h3 className="text-xl font-bold">Web Development</h3>
                  </div>
                  <div className="pl-[51px]">
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                    <RenderSkill />
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex items-center">
                    <BsPaintBucket size={"3rem"} />
                    <h3 className="text-xl font-bold">Design</h3>
                  </div>
                  <div className="flex text-5xl pl-[50px]">
                    <DiPhotoshop />
                    <DiIllustrator />
                    <FaFigma className="p-1" title="Hola "/>
                    <FaInvision className="p-1" />
                    <SiAdobelightroom className="p-1" />
                    <SiAdobepremierepro className="p-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 relative">
            <Image src="/r-3s.svg" alt="Robot-1" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
