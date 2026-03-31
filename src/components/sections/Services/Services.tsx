import ServiceElement from "./ServiceElement";

import { servicesElements } from "./Values";

interface ServicesProps {
  id: string;
}

const Services = ({ id }: ServicesProps): JSX.Element => {
  return (
    <section id={id} className="flex items-center bg-[#001c39] py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="md:col-span-3 col-span-5 lg:h-screen md:h-auto flex items-center">
            <div className="text-center md:text-left px-5 sm:py-0">
              <h2 className="accent-serif lg:text-5xl md:text-5xl text-3xl mb-2">
                What I do
              </h2>
              <p className="text-gray-400 mb-10 text-sm md:text-base">
                Crafting digital experiences from concept to code.
              </p>
              <div className="grid md:grid-cols-2 gap-5 grid-cols-1">
                {servicesElements.map((el, i) => (
                  <ServiceElement key={"sItem-" + i} {...el} index={i} />
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-2 col-span-5 relative sm:flex items-center hidden">
            <div className="min-w-full flex justify-center ">
              <object
                aria-label="Robot - parts"
                type="image/svg+xml"
                data="/r-2as.svg"
                className="md:max-h-[500px] sm:max-h-[350px] h-full w-full"
              >
                Robot parts
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
