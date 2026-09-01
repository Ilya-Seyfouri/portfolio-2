"use client";
import Image from "next/image";
import arc26 from "@/images/appiconn.png";
import cvlab from "@/images/logo.jpg";
import slimmer from "@/images/SLIMMER65_ICON.png";
import careview from "@/images/lifelinelogo.png";
import hairsalon from "@/images/hairbynalan.png";
import garden from "@/images/gardenlogo.png";
import { useRouter } from "next/navigation";


export default function Projects() {
  const router = useRouter();
  return (
    <>
      <section id="projects">
        <div className="container mx-auto">
          <div className="pt-35 flex justify-center items-center">
            <h2 className="text-6xl font-bold">Projects.</h2>
          </div>
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-25 gap-20 max-w-6xl mx-auto">
            <div className="group relative h-80 w-80 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0">
              <Image
                src={arc26}
                alt="logo"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button className="mt-7 mb-2 px-6 h-10 leading-[34px] cursor-pointer border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black">
                  View Project
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 w-[28rem]">
              <h2 className="text-4xl font-bold">Arc26</h2>
              <p className="text-lg">a line about what you built and why it mattered.</p>
              <p className="text-lg">a line about the result.</p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-30 gap-20 max-w-6xl mx-auto">
            <div
              className="group relative h-80 w-80 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0"
              onClick={() => window.open("https://cvlab.ltd/", "_blank")}
            >
              <Image
                src={cvlab}
                alt="logo"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button
                  className="mt-7 mb-2 px-6 h-10 leading-[34px] cursor-pointer border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
                  onClick={() => window.open("https://cvlab.ltd/", "_blank")}
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 w-[28rem]">
              <h2 className="text-4xl font-bold">CV Lab</h2>
              <p className="text-lg">after noticing the state of the tech job market, i created a solution.</p>
              <p className="text-lg">100+ users in the first week of launch.</p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-30 gap-20 max-w-6xl mx-auto">
            <div
              className="group relative h-80 w-80 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0"
              onClick={() => window.open("https://apps.apple.com/gb/app/slimmer-65/id6761863273", "_blank")}
            >
              <Image
                src={slimmer}
                alt="logo"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button
                  className="mt-7 mb-2 px-6 h-10 leading-[34px] cursor-pointer border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
                  onClick={() => window.open("https://apps.apple.com/gb/app/slimmer-65/id6761863273", "_blank")}
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 w-[28rem]">
              <h2 className="text-4xl font-bold">Slimmer iOS App</h2>
              <p className="text-lg">a line about what you built and why it mattered.</p>
              <p className="text-lg">a line about the result.</p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-30 gap-20 max-w-6xl mx-auto">
            <div
              className="group relative h-80 w-80 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0"
              onClick={() => window.open("https://careview2-847694957064.europe-west2.run.app/", "_blank")}
            >
              <Image
                src={careview}
                alt="logo"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button
                  className="mt-7 mb-2 px-6 h-10 leading-[34px] cursor-pointer border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
                  onClick={() => window.open("https://careview2-847694957064.europe-west2.run.app/", "_blank")}
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 w-[28rem]">
              <h2 className="text-4xl font-bold">CareView</h2>
              <p className="text-lg">identified inefficiencies in the company’s legacy system and built a more efficient solution.</p>
              <p className="text-lg">presented to managment team and got it approved.</p>
            </div>
          </div>

          {/* Project 5 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-30 gap-20 max-w-6xl mx-auto">
            <div
              className="group relative h-80 w-80 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0"
              onClick={() => window.open("https://hairbynalaninciogu.up.railway.app/", "_blank")}
            >
              <Image
                src={hairsalon}
                alt="logo"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button
                  className="mt-7 mb-2 px-6 h-10 leading-[34px] cursor-pointer border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
                  onClick={() => window.open("https://hairbynalaninciogu.up.railway.app/", "_blank")}
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 w-[28rem]">
              <h2 className="text-4xl font-bold">Hair Salon Website</h2>
              <p className="text-lg">a line about what you built and why it mattered.</p>
              <p className="text-lg">a line about the result.</p>
            </div>
          </div>

          {/* Project 6 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-30 gap-20 max-w-6xl mx-auto">
            <div
              className="group relative h-80 w-80 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0"
              onClick={() => window.open("https://highgardendemo.up.railway.app/", "_blank")}
            >
              <Image
                src={garden}
                alt="logo"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button
                  className="mt-7 mb-2 px-6 h-10 leading-[34px] cursor-pointer border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
                  onClick={() => window.open("https://highgardendemo.up.railway.app/", "_blank")}
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 w-[28rem]">
              <h2 className="text-4xl font-bold">Garden Website</h2>
              <p className="text-lg">a line about what you built and why it mattered.</p>
              <p className="text-lg">a line about the result.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
