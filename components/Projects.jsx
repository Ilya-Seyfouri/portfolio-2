"use client";
import Image from "next/image";
import cvlab from "@/images/logo.jpg";
import careview from "@/images/jugu.png";
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
          <div className="flex flex-col md:flex-row justify-center items-center pt-25 gap-20 max-w-6xl mx-auto">
            {/* Project 1 */}
            <div className="group relative h-80 w-80 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0">
              <Image
                src={cvlab}
                alt="logo"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button
                  className="mt-7 mb-2 px-6 h-10 leading-[34px] cursor-pointer border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
                  onClick={() =>
                    window.open("https://cvlab.up.railway.app/", "_blank")
                  }
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 max-w-md">
              <h2 className="text-4xl font-bold">CV Lab</h2>
              <p className="text-lg">
                after noticing the state of the tech job market, i created a
                solution.
              </p>
              <p className="text-lg">100+ users in the first week of launch.</p>
            </div>
          </div>
          {/* Project 2 */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-30 gap-20 max-w-6xl mx-auto">
            <div className="group relative h-80 w-80 overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex-shrink-0">
              <Image
                src={careview}
                alt="logo"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 to-black opacity-0 group-hover:opacity-85 transition-opacity duration-300 z-20" />

              <div className="absolute bottom-[-70px] group-hover:bottom-0 w-full z-30 p-5 transition-all duration-300 bg-gradient-to-b from-transparent to-black group-hover:bg-transparent">
                <button
                  className="mt-7 mb-2 cursor-pointer px-6 h-10 leading-[34px] border-2 border-yellow-400 rounded text-sm text-white bg-transparent uppercase font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-black"
                  onClick={() =>
                    window.open("https://careview.up.railway.app/login", "_blank")
                  }
                >
                  View Project
                </button>
              </div>
            </div>

            <div className="hidden md:flex flex-col gap-6 max-w-md">
              <h2 className="text-4xl font-bold">CareView</h2>

              <p className="text-lg">
                identified inefficiencies in the company’s legacy system and
                built a more efficient solution.
              </p>
              <p className="text-lg">
                {" "}
                presented to managment team and got it approved.
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center py-20 pb-50">
            <iframe
              src="https://www.youtube.com/embed/gxm6m2cMNlE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-0 rounded-3xl lg:h-100 lg:w-215 md:h-100 md:w-170"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
