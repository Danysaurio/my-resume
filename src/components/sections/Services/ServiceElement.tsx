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
          className="mr-2 opacity-50"
          src={imgUrl}
          alt={imgAlt}
          width={30}
          height={30}
        />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default ServiceElement;
