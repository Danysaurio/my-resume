import Timeline from "./Timeline";
import { timelineItems } from "./Values";
import { MdSchool, MdOutlineWork } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";

const workCount = timelineItems.filter(i => i.icon === MdOutlineWork).length;
const eduCount = timelineItems.filter(i => i.icon === MdSchool).length;
const teachCount = timelineItems.filter(i => i.icon === GrWorkshop).length;

const Experience = ({ id }: { id: string }): JSX.Element => {
  return (
    <section id={id} className="flex items-center min-h-screen py-16 sm:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4 px-5 sm:px-0 items-start">
          <div className="md:col-span-3 col-span-5">
            {/* Heading */}
            <section className="mb-8 text-center md:text-left">
              <h2 className="accent-serif text-3xl md:text-5xl mb-2">
                Experience
              </h2>
              <p className="text-gray-400 text-sm md:text-base mb-5">
                My path from design student to senior engineer.
              </p>

              {/* Stats row */}
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-gray-400">{workCount} roles</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-gray-400">{eduCount} education</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-gray-400">{teachCount} teaching</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-[#FFF170]/60">~10 years</span>
                </div>
              </div>
            </section>

            {/* Timeline */}
            <section className="timeline lg:ml-16">
              <Timeline />
            </section>
          </div>
          <div className="md:col-span-2 col-span-5 relative hidden sm:flex md:block justify-center h-full">
            <div className="sticky top-20">
              <object
                aria-label="Robot - waving"
                type="image/svg+xml"
                data="/r-5A.svg"
                className="md:max-h-[550px] sm:max-h-[350px]"
              >
                Robot waving
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
