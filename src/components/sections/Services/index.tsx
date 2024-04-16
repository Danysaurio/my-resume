import ServiceElement from "./ServiceElement";

import { servicesElements } from "./Values";

interface ServicesProps {
  id: string;
}

const Services = ({ id }: ServicesProps): JSX.Element => {
  return (
    <section id={id} className="flex items-center bg-[#001c39]">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-screen flex items-center">
            <div>
              <h2 className="kaushan text-5xl mb-9">What I do</h2>
              <div className="grid grid-cols-2 gap-8">
                {servicesElements.map((el, i) => (
                  <ServiceElement key={"sItem-" + i} {...el} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 relative flex items-center">
            <div className="min-w-full">
              <object type="image/svg+xml" data="/r-2as.svg">
                svg-animation
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
