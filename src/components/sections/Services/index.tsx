import ServiceElement, { ServiceItem } from "./ServiceElement";

import Image from "next/image";

interface ServicesProps {
  id: string;
}

const servicesElements: ServiceItem[] = [
  {
    imgUrl: "/icons/icon-1.svg",
    imgAlt: "Web dev icon",
    title: "What I do",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem ad officia eos veniam. Quam ipsa quas iste autem dolorum itaque! Assumenda illum non enim placeatrepellat incidunt quas ex.",
  },
  {
    imgUrl: "/icons/icon-1.svg",
    imgAlt: "Web dev icon",
    title: "What I do",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem ad officia eos veniam. Quam ipsa quas iste autem dolorum itaque! Assumenda illum non enim placeatrepellat incidunt quas ex.",
  },
  {
    imgUrl: "/icons/icon-1.svg",
    imgAlt: "Web dev icon",
    title: "What I do",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem ad officia eos veniam. Quam ipsa quas iste autem dolorum itaque! Assumenda illum non enim placeatrepellat incidunt quas ex.",
  },
  {
    imgUrl: "/icons/icon-1.svg",
    imgAlt: "Web dev icon",
    title: "What I do",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem ad officia eos veniam. Quam ipsa quas iste autem dolorum itaque! Assumenda illum non enim placeatrepellat incidunt quas ex.",
  },
];

const Services = ({ id }: ServicesProps): JSX.Element => {
  return (
    <section id={id} className="flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-screen flex items-center">
            <div>
              <h2 className="kaushan text-5xl mb-9">What I do</h2>
              <div className="grid grid-cols-2 gap-8">
                {servicesElements.map((el, i) => (
                  <ServiceElement key={'sItem-' + i} {...el} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-2 relative">
            <Image src="/r-2s.svg" alt="pinos" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
