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
    <section id={id} className="flex items-center bg-[#001d55]">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-screen flex items-center">
            <div>
              <h2 className="kaushan text-5xl mb-9">Contact</h2>
              <p className="pr-5 ">
                For now, I&apos;m still working on adding more features to this
                page. One of those is incorporating a contact form. However, you
                can reach me through my social media profiles:
              </p>
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
          <div className="col-span-2 relative">
            <Image src="/r-6.svg" alt="Robot-1" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
