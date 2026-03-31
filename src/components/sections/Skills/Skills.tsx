import { BsPaintBucket } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { LiaToolsSolid } from "react-icons/lia";

import { designSkills, devSkills, tools } from "./allSkills";
import { DesignSkill, DevSkill, ToolItem } from "./utils";

const Skills = ({ id }: { id: string }): JSX.Element => {
  return (
    <section id={id} className="flex items-center bg-[#00000021] lg:h-screen min-h-screen py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4 items-center">
          <div className="col-span-5 md:col-span-3">
            <div className="w-full px-5 sm:px-0">
              <h2 className="accent-serif lg:text-5xl md:text-5xl text-3xl mb-2 text-center md:text-left">
                Skills
              </h2>
              <p className="text-gray-400 mb-10 text-sm md:text-base text-center md:text-left">
                Technologies and tools I work with daily.
              </p>

              {/* Web Development */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <FaCode className="text-[#FFF170]/50" />
                  <h3 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                    Development
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {devSkills.map((skill, i) => (
                    <DevSkill key={"skill" + i} {...skill} />
                  ))}
                </div>
              </div>

              {/* Design */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <BsPaintBucket className="text-[#FFF170]/50" />
                  <h3 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                    Design
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {designSkills.map((skill, i) => (
                    <DesignSkill key={"skill" + i} {...skill} />
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <LiaToolsSolid className="text-[#FFF170]/50" />
                  <h3 className="text-base font-semibold uppercase tracking-wider text-gray-300">
                    Tools & Workflow
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {tools.map((tool, i) => (
                    <ToolItem key={"tool" + i} title={tool} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-5 relative sm:flex items-center hidden">
            <div className="flex justify-center w-full">
              <object
                aria-label="Robot - animation"
                type="image/svg+xml"
                data="/r-4-A.svg"
                className="md:max-h-[550px] sm:max-h-[350px] h-full w-full"
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
