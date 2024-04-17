import { BsPaintBucket } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";

import { designSkills, devSkills, tools } from "./allSkills";
import { DesignSkill, DevSkill, ToolItem } from "./utils";
import classNames from "classnames";

const Skills = ({ id }: { id: string }): JSX.Element => {
  return (
    <section id={id} className="flex items-center bg-[#00000021] py-10 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-5 md:col-span-3 lg:h-screen flex items-center lg:min-h-[700px]">
            <div className="w-full">
              <h2 className="kaushan lg:text-5xl md:text-5xl text-3xl mb-6 text-center md:text-left">
                Skills
              </h2>
              <div className="grid grid-cols-6 gap-10">
                <div className="col-span-6 md:col-span-3">
                  <section className="sm:px-0 px-5">
                    <div className="flex items-center mb-4 justify-center sm:justify-start">
                      <FaCode size={"3rem"} className="pr-3 opacity-40" />
                      <h3 className="text-xl font-bold">Web Development</h3>
                    </div>
                    <div className="">
                      {devSkills.map((skill, i) => (
                        <DevSkill key={"skill" + i} {...skill} />
                      ))}
                    </div>
                  </section>
                </div>
                <div className="md:col-span-3 col-span-6 justify-end sm:flex flex-row-reverse md:block ">
                  <section>
                    <div className="header flex items-center justify-center sm:justify-start mb-4">
                      <BsPaintBucket
                        size={"3rem"}
                        className="pr-1 opacity-40"
                      />
                      <h3 className="text-xl font-bold">Design</h3>
                    </div>
                    <ul className="flex justify-center sm:justify-start text-4xl">
                      {designSkills.map((skill, i) => (
                        <DesignSkill key={"skill" + i} {...skill} />
                      ))}
                    </ul>
                  </section>
                  <section className="sm:px-0 px-5">
                    <div className="flex items-center sm:justify-start justify-center sm:pt-0 pt-10 mb-5 ">
                      <LiaToolsSolid
                        size={"3rem"}
                        className="pr-1 opacity-40"
                      />
                      <h3 className="text-xl font-bold">Tools</h3>
                    </div>
                    <div className="flex justify-center sm:justify-start">
                      <ul>
                        {tools.map((tool, i) => (
                          <ToolItem key={"tool" + i} title={tool} />
                        ))}
                      </ul>
                    </div>
                  </section>
                </div>
                {/* col-span-3 end*/}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-5 relative sm:flex items-center hidden">
            <div className="flex justify-center w-full">
              <object
                type="image/svg+xml"
                data="r-4-A.svg"
                className="md:max-h-[650px] sm:max-h-[350px]"
              >
                Robot animation
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
