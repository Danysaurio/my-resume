import About from "@/components/sections/About";
import Banner from "@/components/Banner/Banner";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <About id="about"/>
      <Services id="services"/>
      <Skills id="skills" />
    </div>
  );
}
