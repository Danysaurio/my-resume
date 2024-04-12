import Image from "next/image";
import React from "react";

interface AboutProps {
  id: string;
}

const About = ({ id }: AboutProps): JSX.Element => {
  return (
    <section id={id} className="flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 h-screen flex items-center">
            <div>
              <h2 className="kaushan text-5xl mb-9">
                Hey, I&apos;m Daniel Zavala
              </h2>
              <p className="pr-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                rerum distinctio sequi exercitationem, repudiandae nobis dolore,
                non et deleniti laudantium perferendis debitis? Beatae,
                aspernatur ducimus repellat iusto natus debitis nobis. Aliquam,
                repudiandae ipsam beatae nam animi consectetur sit debitis
                repellat obcaecati accusantium perferendis, assumenda voluptatum
                architecto similique quis praesentium officiis tempore alias
                vero delectus, vitae aut? Repellendus odit voluptatem dolorem!
                Error ullam iusto, voluptas quae nam corrupti. Nostrum culpa
                saepe facere totam assumenda quia earum. Quasi autem totam sunt
                voluptates explicabo, neque voluptatum numquam sapiente
                dignissimos eius. Veniam, natus omnis. Eum cumque tempora nobis
                nam placeat suscipit itaque pariatur dolore. Expedita modi ipsam
                reiciendis veniam explicabo doloribus tempore cumque tenetur
                aliquam voluptatibus! Minus harum molestias, ut eveniet nisi
                quibusdam deleniti! Temporibus, aperiam. Facilis at rerum amet
                saepe sapiente laborum eius consectetur, asperiores fugit!
                Eligendi explicabo voluptate voluptates neque. Tenetur
                perspiciatis similique deserunt? Ut, laudantium autem deleniti
                ea exercitationem esse nesciunt.
              </p>
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

export default About;
