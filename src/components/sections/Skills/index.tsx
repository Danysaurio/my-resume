import { BsPaintBucket } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";

import { designSkills, devSkills, tools } from "./allSkills";
import { DesignSkill, DevSkill, ToolItem } from "./utils";
import classNames from "classnames";

const Skills = ({ id }: { id: string }): JSX.Element => {
  return (
    <section id={id} className="flex items-center bg-[#00000021]">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-screen flex items-center lg:min-h-[700px]">
            <div className="w-full">
              <h2 className="kaushan text-5xl mb-6">Skills</h2>
              <div className="grid grid-cols-6 gap-10">
                <div className="col-span-3">
                  <section>
                    <div className="flex items-center mb-4">
                      <FaCode size={"3rem"} className="pr-3 opacity-40" />
                      <h3 className="text-xl font-bold">Web Development</h3>
                    </div>
                    <div className="pl-[51px]">
                      {devSkills.map((skill, i) => (
                        <DevSkill key={"skill" + i} {...skill} />
                      ))}
                    </div>
                  </section>
                </div>
                <div className="col-span-3">
                  <section>
                    <div className="header flex items-center mb-4">
                      <BsPaintBucket
                        size={"3rem"}
                        className="pr-1 opacity-40"
                      />
                      <h3 className="text-xl font-bold">Design</h3>
                    </div>
                    <ul className="flex text-4xl pl-[50px]">
                      {designSkills.map((skill, i) => (
                        <DesignSkill key={"skill" + i} {...skill} />
                      ))}
                    </ul>
                  </section>
                  <section>
                    <div className="flex items-center pt-5">
                      <LiaToolsSolid
                        size={"3rem"}
                        className="pr-1 opacity-40"
                      />
                      <h3 className="text-xl font-bold">Tools</h3>
                    </div>
                    <ul className="pl-[50px]">
                      {tools.map((tool, i) => (
                        <ToolItem key={"tool" + i} title={tool} />
                      ))}
                    </ul>
                  </section>
                </div>
                {/* col-span-3 end*/}
              </div>
            </div>
          </div>
          <div className="col-span-2 relative flex items-center">
            <div className="flex justify-center w-full">
              <object
                type="image/svg+xml"
                data="r-4-A.svg"
                className="max-h-[900px]"
              >
                svg-animation
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
