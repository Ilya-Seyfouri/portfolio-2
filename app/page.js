import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <>
    <Sidebar/>
    <Hero/>
    <Experience/>
    <Projects/>
    <Contact/>

    </>
  );
}
