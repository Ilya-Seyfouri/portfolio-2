import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
    <Sidebar/>
    <Hero/>
    <Projects/>
    <Contact/>
   
    </>
  );
}
