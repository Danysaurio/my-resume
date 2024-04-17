import Timeline from "./Timeline";

const Experience = ({ id }: { id: string }): JSX.Element => {
  return (
    <section id={id} className="flex items-center py-10 sm:py-20 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4 px-5 sm:px-0">
          <div className="md:col-span-3 col-span-5">
            <div>
              <section className="mb-16 text-center md:text-left">
                <h2 className="kaushan text-5xl mb-9">Experience</h2>
                <p>
                  In my journey through various roles and educational endeavors,
                  I blend technical prowess with creative vision to drive
                  innovative projects forward. With a focus on excellence, each
                  experience has shaped my approach to surpassing boundaries and
                  creating impactful solutions. This timeline reflects my path
                  toward professional success and personal growth.
                </p>
              </section>
              <section className="timeline lg:ml-20">
                <Timeline />
              </section>
            </div>
          </div>
          <div className="md:col-span-2 col-span-5 relative hidden sm:flex md:block justify-center">
            <object
              type="image/svg+xml"
              data="/r-5A.svg"
              className="sticky top-10 md:max-h-[550px] sm:max-h-[350px]"
            >
              Robot waving
            </object>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
