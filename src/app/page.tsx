import About from "@/components/sections/About";
import Banner from "@/components/Banner/Banner";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <About id="about" />
      <Services id="services" />
      <Skills id="skills" />
      <Experience id="experience" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}
