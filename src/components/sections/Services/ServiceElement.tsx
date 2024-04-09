import Image from "next/image";

export interface ServiceItem {
  imgUrl: string;
  imgAlt: string;
  title: string;
  text: string;
}

const ServiceElement = ({
  imgUrl,
  imgAlt,
  title,
  text,
}: ServiceItem): JSX.Element => {
  return (
    <div className="col-span-1">
      <div className="flex items-center mb-3">
        <Image
          className="mr-2"
          src="/icons/icon-1.svg"
          alt="Web dev icon"
          width={30}
          height={30}
        />
        <h3 className="text-xl font-bold">Web Development</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores autem
        ad officia eos veniam. Quam ipsa quas iste autem dolorum itaque!
        Assumenda illum non enim placeat repellat incidunt quas ex.
      </p>
    </div>
  );
};

export default ServiceElement;
