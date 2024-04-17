import Image from "next/image";
// import ContactForm from "./ContactForm";
import { socialMedia, socialMediaItem } from "../Skills/utils";

const MediaItem = ({ title, url, icon: Icon }: socialMediaItem) => {
  return (
    <li className="pb-2">
      <a className="flex items-center" href={url} target="blank" title={title}>
        <Icon className="mr-3 opacity-70" size={25} />
        <span className="text-lg font-bold hover:text-blue-500">{title}</span>
      </a>
    </li>
  );
};

const Contact = ({ id }: { id: string }) => {
  return (
    <section
      id={id}
      className="flex items-center bg-[#01102d33] py-10 bg-amber-300 sm:bg-red-500 md:bg-blue-800 lg:bg-green-400"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4 px-5 sm:px-0">
          <div className="col-span-5 md:col-span-3 lg:h-screen flex items-center">
            <div>
              <div className="text-center md:text-left">
                <h2 className="kaushan text-5xl mb-9">Contact</h2>
                <p className="pr-0 md:pr-5 ">
                  For now, I&apos;m still working on adding more features to
                  this page. One of those is incorporating a contact form.
                  However, you can reach me through my social media profiles:
                </p>
              </div>
              <div>
                <ul className="pt-6 pl-10">
                  {socialMedia.map((item, i) => (
                    <MediaItem key={`socialItem-${i}`} {...item} />
                  ))}
                </ul>
                {/* <ContactForm /> */}
              </div>
            </div>
          </div>
          <div className="col-span-2 relative sm:flex items-center hidden">
            <div className="min-w-full flex justify-center">
              <object
                type="image/svg+xml"
                data="/r-6.svg"
                className="max-h-[550px]"
              >
                Robot - Contact me now
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
