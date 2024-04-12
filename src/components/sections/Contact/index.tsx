import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = ({ id }: { id: string }) => {
  return (
    <section id={id} className="flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-screen flex items-center">
            <div>
              <h2 className="kaushan text-5xl mb-9">Contact</h2>
              <p className="pr-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                rerum distinctio sequi exercitationem, repudiandae nobis dolore,
              </p>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="col-span-2 relative">
            <Image src="/r-1s.svg" alt="Robot-1" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
