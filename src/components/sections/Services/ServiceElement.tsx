import Image from "next/image";

export interface ServiceItem {
  imgUrl: string;
  imgAlt: string;
  title: string;
  text: string;
  index?: number;
}

const ServiceElement = ({
  imgUrl,
  imgAlt,
  title,
  text,
  index = 0,
}: ServiceItem): JSX.Element => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="col-span-1 group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 transition-all duration-300 hover:border-[#FFF170]/30 hover:bg-white/[0.08] hover:translate-y-[-4px] hover:shadow-lg hover:shadow-[#FFF170]/5 overflow-hidden flex flex-col">
      {/* Background number */}
      <span className="absolute -right-2 -top-4 text-[80px] font-bold text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-[#FFF170]/[0.06] transition-colors duration-300">
        {num}
      </span>

      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-[#FFF170]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20 mb-4 group-hover:bg-[#FFF170]/15 group-hover:border-[#FFF170]/30 transition-all duration-300">
        <Image
          className="w-[24px] h-auto brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          src={imgUrl}
          alt={imgAlt}
          width={24}
          height={24}
        />
      </div>
      <h3 className="text-lg font-semibold mb-3 group-hover:text-[#FFF170] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed flex-grow">{text}</p>
    </div>
  );
};

export default ServiceElement;
