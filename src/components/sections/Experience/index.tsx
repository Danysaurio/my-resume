import Timeline from "./Timeline";

const Experience = ({ id }: { id: string }): JSX.Element => {
  return (
    <section id={id} className="flex items-center py-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3">
            <div>
              <section className="mb-16">
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
              <section className="timeline ml-20">
                <Timeline />
              </section>
            </div>
          </div>
          <div className="col-span-2 relative">
            <object
              type="image/svg+xml"
              data="/r-5a.svg"
              className="sticky top-10 max-h-[700px]"
            >
              svg-animation
            </object>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
