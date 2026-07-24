import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Prompt from "@/components/Prompt";


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
